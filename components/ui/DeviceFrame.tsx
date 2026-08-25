import Image from "next/image";

type DeviceFrameProps = {
  screenshot: string;
  alt: string;
};

export function DeviceFrame({ screenshot, alt }: DeviceFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[16.5rem]">
      <div
        aria-hidden="true"
        className="absolute inset-x-2 -inset-y-8 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-accent)_11%,transparent),transparent_70%)] blur-2xl"
      />

      <div className="relative aspect-[9/19.5] rounded-[2.4rem] border border-line-strong bg-gradient-to-b from-raised to-surface p-[0.4rem] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-bg">
          <Image
            src={screenshot}
            alt={alt}
            fill
            sizes="(max-width: 640px) 15rem, 16.5rem"
            className="object-cover"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_35%)]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute top-[0.9rem] left-1/2 h-[1.1rem] w-[5.2rem] -translate-x-1/2 rounded-full bg-bg"
        />
      </div>
    </div>
  );
}
