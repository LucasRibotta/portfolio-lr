import Image from "next/image";
import portrait from "@/assets/portrait.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/content/types";

type AboutProps = {
  content: Dictionary["about"];
};

export function About({ content }: AboutProps) {
  return (
    <Section
      id="about"
      index="04"
      eyebrow={content.eyebrow}
      title={content.title}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="space-y-6">
            {content.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-xl leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <figure className="group relative max-w-xs overflow-hidden rounded-2xl border border-line">
            <Image
              src={portrait}
              alt={content.portraitAlt}
              placeholder="blur"
              sizes="(max-width: 1024px) 20rem, 20rem"
              className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
            />
          </figure>

          <dl className="mt-8 max-w-xs">
            {content.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 border-t border-line py-3"
              >
                <dt className="font-mono text-xs tracking-[0.12em] text-faint uppercase">
                  {fact.label}
                </dt>
                <dd className="text-right text-sm text-muted">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
