import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-line py-20 sm:py-28 lg:py-36${className ? ` ${className}` : ""}`}
    >
      <div className="container-page">
        <Reveal as="header" className="max-w-3xl">
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-faint uppercase">
            <span aria-hidden="true" className="text-accent">
              {index}
            </span>
            <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-5 text-3xl leading-[1.1] font-medium tracking-tight text-fg sm:text-4xl lg:text-[2.75rem]"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-14 sm:mt-16 lg:mt-20">{children}</div>
      </div>
    </section>
  );
}
