import { GitHubIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { experience } from "@/content/experience";
import type { Dictionary } from "@/content/types";
import { formatPeriod } from "@/lib/format";
import type { Locale } from "@/lib/site";

type ExperienceProps = {
  content: Dictionary["experience"];
  locale: Locale;
};

export function Experience({ content, locale }: ExperienceProps) {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow={content.eyebrow}
      title={content.title}
    >
      <ol className="flex flex-col">
        {experience.map((entry, index) => {
          const copy = content.entries[entry.id];
          const period = formatPeriod(
            locale,
            entry.start,
            entry.end,
            content.present,
          );

          if (entry.featured) {
            return (
              <li key={entry.id}>
                <Reveal>
                  <article className="rounded-2xl border border-line bg-surface/50 p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                      <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.12em] text-accent uppercase">
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-accent"
                        />
                        {period}
                      </p>
                      {entry.github ? (
                        <a
                          href={entry.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`GitHub — ${entry.company}`}
                          className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
                        >
                          <GitHubIcon className="size-4 text-faint transition-colors duration-200 group-hover:text-accent" />
                          GitHub
                        </a>
                      ) : null}
                    </div>

                    <h3 className="mt-3 text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                      {entry.company}
                    </h3>
                    <p className="mt-1.5 text-base text-muted">{copy.role}</p>

                    {copy.summary ? (
                      <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                        {copy.summary}
                      </p>
                    ) : null}

                    {copy.focus ? (
                      <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                        {copy.focus.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-px w-3 shrink-0 bg-accent/70"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {entry.tech ? (
                      <ul className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                        {entry.tech.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </Reveal>
              </li>
            );
          }

          return (
            <li key={entry.id} className={index === 1 ? "mt-10" : ""}>
              <Reveal>
                <article className="grid gap-2 border-t border-line py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <p className="font-mono text-xs tracking-wide text-faint">
                    {period}
                  </p>
                  <div>
                    <h3 className="text-lg font-medium text-fg">
                      {entry.company}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{copy.role}</p>
                    {copy.summary ? (
                      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-faint">
                        {copy.summary}
                      </p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
