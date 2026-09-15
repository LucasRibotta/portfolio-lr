"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform vec3 u_bg;
uniform vec3 u_deep;
uniform vec3 u_accent;
uniform float u_time;

const float AA_GAIN = 0.111;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p *= 2.03;
    amplitude *= 0.5;
  }
  return value;
}

float falloff(vec2 uv) {
  return (0.08 + 0.62 * pow(uv.y, 2.1)) *
    (1.0 - 0.45 * pow(abs(uv.x - 0.5) * 2.0, 2.4));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 drift = (u_pointer - 0.5) * 0.12;

  float bands = 0.0;
  float tint = 0.0;

  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float y = 0.52 + 0.17 * fi
      + 0.085 * sin(u_time * 0.28 + fi * 2.1 + p.x * 1.25 + drift.x)
      + 0.075 * fbm(vec2(p.x * 1.15 + u_time * 0.09 + fi * 4.0, fi * 3.0));
    float band = exp(-pow(p.y - y + drift.y, 2.0) * (120.0 - fi * 30.0));
    bands += band * (1.0 - 0.22 * fi);
    tint += band * (0.35 + 0.3 * fi);
  }

  vec3 color = mix(u_deep, u_accent, clamp(tint * 0.9, 0.0, 1.0));
  float mask = clamp(bands * falloff(uv) * 3.4, 0.0, 1.0);

  color = mix(u_bg, color, mask * AA_GAIN);
  color += (hash(gl_FragCoord.xy * 0.71 + fract(u_time)) - 0.5) * 0.006;

  gl_FragColor = vec4(color, 1.0);
}
`;

const RENDER_SCALE = 0.5;
const FRAME_INTERVAL = 1000 / 32;

function readColor(name: string, fallback: [number, number, number]) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const match = /^#([0-9a-f]{6})$/i.exec(raw);
  if (!match?.[1]) return fallback;
  const value = Number.parseInt(match[1], 16);
  return [
    ((value >> 16) & 255) / 255,
    ((value >> 8) & 255) / 255,
    (value & 255) / 255,
  ] as [number, number, number];
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ShaderField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return;

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      pointer: gl.getUniformLocation(program, "u_pointer"),
      time: gl.getUniformLocation(program, "u_time"),
    };

    gl.uniform3fv(
      gl.getUniformLocation(program, "u_bg"),
      readColor("--color-bg", [0.031, 0.035, 0.039]),
    );
    gl.uniform3fv(
      gl.getUniformLocation(program, "u_deep"),
      readColor("--color-accent-soft", [0.113, 0.247, 0.227]),
    );
    gl.uniform3fv(
      gl.getUniformLocation(program, "u_accent"),
      readColor("--color-accent", [0.368, 0.901, 0.815]),
    );

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0.5, y: 0.72 };
    const target = { x: 0.5, y: 0.72 };

    const resize = () => {
      const width = Math.max(1, Math.round(canvas.clientWidth * RENDER_SCALE));
      const height = Math.max(1, Math.round(canvas.clientHeight * RENDER_SCALE));
      if (canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uniforms.resolution, width, height);
    };

    const draw = (time: number) => {
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;
      gl.uniform2f(uniforms.pointer, pointer.x, pointer.y);
      gl.uniform1f(uniforms.time, time / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      canvas.dataset.ready = "true";
    };

    const onPointerMove = (event: PointerEvent) => {
      target.x = event.clientX / window.innerWidth;
      target.y = 1 - event.clientY / window.innerHeight;
    };

    let frame = 0;
    let previous = 0;

    const loop = (time: number) => {
      frame = window.requestAnimationFrame(loop);
      if (time - previous < FRAME_INTERVAL) return;
      previous = time;
      resize();
      draw(time);
    };

    const start = () => {
      if (frame || reducedMotion.matches || document.hidden) return;
      previous = 0;
      frame = window.requestAnimationFrame(loop);
    };

    const stop = () => {
      if (!frame) return;
      window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    const onMotionChange = () => {
      stop();
      if (reducedMotion.matches) {
        resize();
        draw(0);
        return;
      }
      start();
    };

    resize();
    draw(0);
    onMotionChange();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", onMotionChange);
      // getContext() returns the same context when the effect re-runs on this
      // canvas (Strict Mode), so losing it here would leave a dead white canvas.
      delete canvas.dataset.ready;
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
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
