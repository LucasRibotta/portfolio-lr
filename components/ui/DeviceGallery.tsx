"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DeviceFrame } from "./DeviceFrame";
import { ArrowRightIcon, CloseIcon, ExpandIcon } from "./Icons";

type DeviceGalleryProps = {
  images: readonly string[];
  captions: readonly string[];
  projectName: string;
  labels: {
    open: string;
    close: string;
    previous: string;
    next: string;
    position: string;
  };
};

export function DeviceGallery({
  images,
  captions,
  projectName,
  labels,
}: DeviceGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const first = images[0];
  const caption = (position: number) => captions[position] ?? projectName;

  const move = useCallback(
    (step: number) => {
      setIndex((value) => (value + step + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    if (!open && dialog.open) dialog.close();
    return;
  }, [open]);

  if (!first) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        aria-haspopup="dialog"
        className="group relative block w-full cursor-pointer rounded-[2.4rem] transition-transform duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1"
      >
        <DeviceFrame
          screenshots={[first]}
          alt={`${projectName} — ${caption(0)}`}
        />
        <span className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto flex w-fit items-center gap-2 rounded-full border border-line bg-surface/90 px-3.5 py-1.5 font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase backdrop-blur-sm transition-colors duration-300 group-hover:border-control group-hover:text-fg">
          <ExpandIcon className="size-3.5 text-accent" />
          {labels.open}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
        aria-label={`${projectName} — ${labels.open}`}
        className="m-auto max-h-[100dvh] w-full max-w-3xl overflow-visible bg-transparent p-0 text-fg backdrop:bg-[color-mix(in_srgb,var(--color-bg)_86%,transparent)] backdrop:backdrop-blur-sm"
      >
        <div className="flex max-h-[100dvh] flex-col items-center gap-5 px-4 py-5 sm:px-6">
          <div className="flex w-full items-center justify-between gap-4">
            <p className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
              {projectName}
              <span aria-hidden="true" className="mx-2 text-line-strong">
                /
              </span>
              <span className="text-muted">
                {labels.position} {index + 1} — {images.length}
              </span>
            </p>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={labels.close}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-control text-fg transition-colors duration-200 hover:border-muted hover:bg-surface"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <div className="flex w-full items-center justify-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={labels.previous}
              className="inline-flex size-11 shrink-0 rotate-180 items-center justify-center rounded-full border border-control text-fg transition-colors duration-200 hover:border-muted hover:bg-surface"
            >
              <ArrowRightIcon className="size-4" />
            </button>

            <div className="h-[min(58dvh,32rem)]">
              <DeviceFrame
                screenshots={images}
                activeIndex={index}
                alt={`${projectName} — ${caption(index)}`}
                variant="modal"
                priority
              />
            </div>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label={labels.next}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-control text-fg transition-colors duration-200 hover:border-muted hover:bg-surface"
            >
              <ArrowRightIcon className="size-4" />
            </button>
          </div>

          <p aria-live="polite" className="text-center text-sm text-muted">
            {caption(index)}
          </p>

          <ul className="flex flex-wrap justify-center gap-2">
            {images.map((image, position) => (
              <li key={image}>
                <button
                  type="button"
                  onClick={() => setIndex(position)}
                  aria-label={caption(position)}
                  aria-current={position === index ? "true" : undefined}
                  className={`relative block h-14 w-7 overflow-hidden rounded-md border transition-colors duration-200 ${
                    position === index
                      ? "border-accent"
                      : "border-line hover:border-control"
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    loading="eager"
                    sizes="1.75rem"
                    className="object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
