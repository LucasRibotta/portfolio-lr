"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  brightness: number;
  radius: number;
  palette: number;
  speed: number;
  phase: number;
};

type Meteor = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  speed: number;
  length: number;
  width: number;
  start: number;
  duration: number;
  rgb: readonly [number, number, number];
  fireball: boolean;
};

const STAR_PALETTE = [
  { weight: 0.1, rgb: [169, 193, 255] },
  { weight: 0.45, rgb: [241, 244, 255] },
  { weight: 0.25, rgb: [255, 241, 220] },
  { weight: 0.13, rgb: [255, 214, 168] },
  { weight: 0.07, rgb: [255, 184, 153] },
] as const;

const DPR_CAP = 2;
const STAR_DENSITY = 4200;
const DUST_DENSITY = 700;
const REACH = 260;
const LINK = 150;
const MAX_DEGREE = 3;
const LINKABLE_BRIGHTNESS = 0.06;
const GLOW_BRIGHTNESS = 0.45;
const SPIKE_BRIGHTNESS = 0.9;
const IDLE_AFTER = 2500;
const EDGE_KEY_BASE = 100_000;

const rgba = ([r, g, b]: readonly number[], alpha: number) =>
  `rgba(${r}, ${g}, ${b}, ${alpha})`;

const wrap = (value: number, size: number) => ((value % size) + size) % size;

function pickPalette() {
  let roll = Math.random();
  for (let index = 0; index < STAR_PALETTE.length; index++) {
    roll -= STAR_PALETTE[index]?.weight ?? 0;
    if (roll <= 0) return index;
  }
  return 1;
}

function makeGlow(rgb: readonly number[]) {
  const size = 64;
  const sprite = document.createElement("canvas");
  sprite.width = size;
  sprite.height = size;
  const ctx = sprite.getContext("2d");
  if (!ctx) return sprite;
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.08, rgba(rgb, 1));
  gradient.addColorStop(0.25, rgba(rgb, 0.3));
  gradient.addColorStop(1, rgba(rgb, 0));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return sprite;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const glows = STAR_PALETTE.map((entry) => makeGlow(entry.rgb));
    const meteorGlow = makeGlow([223, 249, 244]);
    const dust = document.createElement("canvas");
    const focus = { x: 0, y: 0 };
    const pointer = { x: 0, y: 0 };
    const edgeOpacity = new Map<number, number>();
    const meteors: Meteor[] = [];
    let stars: Star[] = [];
    let positions = new Float32Array(0);
    let weights = new Float32Array(0);
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastMove = -Infinity;
    let nextMeteor = performance.now() + 1500;

    const seed = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      focus.x = width * 0.7;
      focus.y = height * 0.3;

      stars = Array.from({ length: Math.round((width * height) / STAR_DENSITY) }, () => {
        const brightness = Math.random() ** 6;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          brightness,
          radius: 0.35 + brightness * 1.5,
          palette: pickPalette(),
          speed: 0.6 + Math.random() * 2.2,
          phase: Math.random() * Math.PI * 2,
        };
      });
      positions = new Float32Array(stars.length * 2);
      weights = new Float32Array(stars.length);
      edgeOpacity.clear();

      dust.width = canvas.width;
      dust.height = canvas.height;
      const dustCtx = dust.getContext("2d");
      if (!dustCtx) return;
      dustCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dustCtx.fillStyle = "#dfe6f2";
      for (let i = 0; i < (width * height) / DUST_DENSITY; i++) {
        dustCtx.globalAlpha = 0.04 + Math.random() ** 2 * 0.16;
        dustCtx.fillRect(Math.random() * width, Math.random() * height, 0.7, 0.7);
      }
    };

    const linkStars = (near: number[]) => {
      const pairs: { i: number; j: number; distance: number }[] = [];
      for (let i = 0; i < near.length; i++) {
        for (let j = i + 1; j < near.length; j++) {
          const a = near[i] ?? 0;
          const b = near[j] ?? 0;
          const distance = Math.hypot(
            (positions[a * 2] ?? 0) - (positions[b * 2] ?? 0),
            (positions[a * 2 + 1] ?? 0) - (positions[b * 2 + 1] ?? 0),
          );
          if (distance < LINK) pairs.push({ i, j, distance });
        }
      }
      pairs.sort((p, q) => p.distance - q.distance);

      const parent = near.map((_, index) => index);
      const degree = near.map(() => 0);
      const find = (node: number) => {
        let root = node;
        while (parent[root] !== root) root = parent[root] ?? root;
        return root;
      };

      const edges = new Set<number>();
      for (const { i, j } of pairs) {
        if ((degree[i] ?? 0) >= MAX_DEGREE || (degree[j] ?? 0) >= MAX_DEGREE) continue;
        const rootI = find(i);
        const rootJ = find(j);
        if (rootI === rootJ) continue;
        parent[rootI] = rootJ;
        degree[i] = (degree[i] ?? 0) + 1;
        degree[j] = (degree[j] ?? 0) + 1;
        const a = near[i] ?? 0;
        const b = near[j] ?? 0;
        edges.add(Math.min(a, b) * EDGE_KEY_BASE + Math.max(a, b));
      }
      return edges;
    };

    const spawnMeteor = (now: number) => {
      const fireball = Math.random() < 0.12;
      let angle = Math.PI * (0.7 + Math.random() * 0.12);
      if (Math.random() < 0.35) angle = Math.PI - angle;
      meteors.push({
        x: width * (Math.random() * 1.1 - 0.05),
        y: height * (Math.random() * 0.45 - 0.05),
        dx: Math.cos(angle),
        dy: Math.sin(angle),
        speed: fireball ? 700 + Math.random() * 300 : 1000 + Math.random() * 700,
        length: fireball ? 320 + Math.random() * 120 : 120 + Math.random() * 150,
        width: fireball ? 2.4 : 1 + Math.random() * 0.8,
        start: now,
        duration: fireball ? 1300 + Math.random() * 400 : 550 + Math.random() * 550,
        rgb: fireball ? [159, 245, 230] : [236, 241, 255],
        fireball,
      });
      nextMeteor = now + 3500 + Math.random() * 8500;
    };

    const drawMeteors = (now: number) => {
      ctx.lineCap = "round";
      for (let index = meteors.length - 1; index >= 0; index--) {
        const meteor = meteors[index];
        if (!meteor) continue;
        const progress = (now - meteor.start) / meteor.duration;
        if (progress >= 1) {
          meteors.splice(index, 1);
          continue;
        }

        const envelope = Math.sin(progress * Math.PI);
        const travelled = (meteor.speed * (now - meteor.start)) / 1000;
        const headX = meteor.x + meteor.dx * travelled;
        const headY = meteor.y + meteor.dy * travelled;
        const tail = meteor.length * Math.min(1, progress * 2.5);
        const tailX = headX - meteor.dx * tail;
        const tailY = headY - meteor.dy * tail;

        const gradient = ctx.createLinearGradient(headX, headY, tailX, tailY);
        gradient.addColorStop(0, rgba(meteor.rgb, 0.95 * envelope));
        gradient.addColorStop(0.3, rgba(meteor.rgb, 0.35 * envelope));
        gradient.addColorStop(1, rgba(meteor.rgb, 0));
        ctx.globalAlpha = 1;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.width;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        const glow = meteor.width * (meteor.fireball ? 14 : 7);
        ctx.globalAlpha = envelope * (meteor.fireball ? 0.9 : 0.6);
        ctx.drawImage(meteorGlow, headX - glow / 2, headY - glow / 2, glow, glow);
      }
    };

    const draw = (now: number, animate: boolean) => {
      const idle = now - lastMove > IDLE_AFTER;
      const goalX = idle ? width * (0.5 + 0.32 * Math.sin(now * 0.00011)) : pointer.x;
      const goalY = idle ? height * (0.4 + 0.25 * Math.sin(now * 0.00017 + 1.3)) : pointer.y;
      const ease = animate ? (idle ? 0.02 : 0.12) : 1;
      focus.x += (goalX - focus.x) * ease;
      focus.y += (goalY - focus.y) * ease;

      const scroll = window.scrollY;
      const tiltX = focus.x / width - 0.5;
      const tiltY = focus.y / height - 0.5;
      const near: number[] = [];

      ctx.clearRect(0, 0, width, height);

      const dustShift = wrap(scroll * 0.015, height);
      ctx.globalAlpha = 1;
      ctx.drawImage(dust, 0, -dustShift, width, height);
      ctx.drawImage(dust, 0, height - dustShift, width, height);

      for (let index = 0; index < stars.length; index++) {
        const star = stars[index];
        if (!star) continue;
        const shift = 8 + star.brightness * 34;
        const x = wrap(star.x + tiltX * shift, width);
        const y = wrap(star.y + tiltY * shift - scroll * (0.02 + star.brightness * 0.14), height);
        positions[index * 2] = x;
        positions[index * 2 + 1] = y;

        const distance = Math.hypot(x - focus.x, y - focus.y);
        const weight = distance < REACH ? 1 - distance / REACH : 0;
        weights[index] = weight;
        if (weight > 0 && star.brightness > LINKABLE_BRIGHTNESS) near.push(index);

        const twinkle = animate
          ? 0.78 +
            0.14 * Math.sin(now * 0.001 * star.speed + star.phase) +
            0.08 * Math.sin(now * 0.0023 * star.speed + star.phase * 1.7)
          : 1;
        const alpha = Math.min(1, (0.25 + star.brightness * 0.75) * twinkle + weight * 0.35);
        const rgb = STAR_PALETTE[star.palette]?.rgb ?? STAR_PALETTE[1].rgb;

        if (star.brightness > GLOW_BRIGHTNESS) {
          const size = star.radius * (7 + weight * 3);
          const glow = glows[star.palette] ?? glows[1];
          ctx.globalAlpha = alpha;
          if (glow) ctx.drawImage(glow, x - size / 2, y - size / 2, size, size);

          if (star.brightness > SPIKE_BRIGHTNESS) {
            const spike = star.radius * 9;
            ctx.globalAlpha = alpha * 0.18;
            ctx.strokeStyle = rgba(rgb, 1);
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(x - spike, y);
            ctx.lineTo(x + spike, y);
            ctx.moveTo(x, y - spike);
            ctx.lineTo(x, y + spike);
            ctx.stroke();
          }
        } else {
          ctx.globalAlpha = alpha;
          ctx.fillStyle = rgba(rgb, 1);
          ctx.beginPath();
          ctx.arc(x, y, star.radius + weight * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const targets = linkStars(near);
      for (const key of targets) {
        if (!edgeOpacity.has(key)) edgeOpacity.set(key, 0);
      }

      ctx.strokeStyle = "#5ee6d0";
      ctx.lineWidth = 0.7;
      ctx.lineCap = "round";
      for (const [key, value] of edgeOpacity) {
        const linked = targets.has(key);
        const opacity = value + ((linked ? 1 : 0) - value) * (animate ? 0.06 : 1);
        if (!linked && opacity < 0.01) {
          edgeOpacity.delete(key);
          continue;
        }
        edgeOpacity.set(key, opacity);

        const a = Math.floor(key / EDGE_KEY_BASE);
        const b = key % EDGE_KEY_BASE;
        const ax = positions[a * 2] ?? 0;
        const ay = positions[a * 2 + 1] ?? 0;
        const bx = positions[b * 2] ?? 0;
        const by = positions[b * 2 + 1] ?? 0;
        const distance = Math.hypot(bx - ax, by - ay);
        const gapA = (stars[a]?.radius ?? 1) * 2 + 3;
        const gapB = (stars[b]?.radius ?? 1) * 2 + 3;
        if (distance > LINK * 1.3 || distance <= gapA + gapB) continue;

        const ux = (bx - ax) / distance;
        const uy = (by - ay) / distance;
        ctx.globalAlpha =
          opacity * Math.sqrt(Math.min(weights[a] ?? 0, weights[b] ?? 0)) * 0.55;
        ctx.beginPath();
        ctx.moveTo(ax + ux * gapA, ay + uy * gapA);
        ctx.lineTo(bx - ux * gapB, by - uy * gapB);
        ctx.stroke();
      }

      if (animate) {
        if (now >= nextMeteor) spawnMeteor(now);
        drawMeteors(now);
      }

      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      draw(now, true);
      frame = window.requestAnimationFrame(loop);
    };

    const start = () => {
      if (frame || reducedMotion.matches) return;
      frame = window.requestAnimationFrame(loop);
    };

    const stop = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const renderStill = () => draw(performance.now(), false);

    const onMotionChange = () => {
      stop();
      if (reducedMotion.matches) renderStill();
      else start();
    };

    const onResize = () => {
      seed();
      if (reducedMotion.matches) renderStill();
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      lastMove = performance.now();
    };

    seed();
    renderStill();
    canvas.dataset.ready = "true";
    onMotionChange();

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      reducedMotion.removeEventListener("change", onMotionChange);
      delete canvas.dataset.ready;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 size-full opacity-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] data-[ready=true]:opacity-100"
    />
  );
}
