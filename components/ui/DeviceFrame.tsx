import Image from "next/image";

type DeviceFrameProps = {
  screenshots: readonly string[];
  alt: string;
  activeIndex?: number;
  variant?: "card" | "modal";
  priority?: boolean;
};

export function DeviceFrame({
  screenshots,
  alt,
  activeIndex = 0,
  variant = "card",
  priority,
}: DeviceFrameProps) {
  const modal = variant === "modal";

  return (
    <div
      className={
        modal
          ? "relative h-full"
          : "relative mx-auto w-full max-w-[15rem] sm:max-w-[16.5rem]"
      }
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-2 -inset-y-8 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-accent)_11%,transparent),transparent_70%)] blur-2xl"
      />

      <div
        className={`relative aspect-[9/19.5] rounded-[2.4rem] border border-line-strong bg-gradient-to-b from-raised to-surface p-[0.4rem] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] ${
          modal ? "h-full" : "w-full"
        }`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-bg">
          {screenshots.map((screenshot, position) => (
            <Image
              key={screenshot}
              src={screenshot}
              alt={position === activeIndex ? alt : ""}
              aria-hidden={position === activeIndex ? undefined : "true"}
              fill
              priority={priority && position === activeIndex}
              loading={
                modal && position !== activeIndex ? "eager" : undefined
              }
              sizes={modal ? "22rem" : "(max-width: 640px) 15rem, 16.5rem"}
              className={`object-cover transition-opacity duration-300 ease-[var(--ease-out-soft)] ${
                position === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

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
