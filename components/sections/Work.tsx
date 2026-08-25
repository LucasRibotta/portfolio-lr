import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/content/types";
import { work } from "@/content/work";

type WorkProps = {
  content: Dictionary["work"];
};

export function Work({ content }: WorkProps) {
  return (
    <Section
      id="work"
      index="02"
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.intro}
    >
      <div className="flex flex-col">
        {work.map((project, index) => {
          const copy = content.projects[project.id];
          const screenshot = project.screenshot;
          const reversed = index % 2 === 1;

          return (
            <article
              key={project.id}
              aria-labelledby={`work-${project.id}`}
              className={
                index === 0
                  ? ""
                  : "mt-20 border-t border-line pt-20 sm:mt-28 sm:pt-28"
              }
            >
              <Reveal as="header" className="max-w-3xl">
                <p className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.16em] uppercase">
                  <span aria-hidden="true" className="text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-faint">{copy.kind}</span>
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                  <h3
                    id={`work-${project.id}`}
                    className="text-3xl font-medium tracking-tight text-fg sm:text-4xl"
                  >
                    {project.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] tracking-wide text-muted uppercase">
                    <span
                      aria-hidden="true"
                      className={`size-1.5 rounded-full ${
                        project.status === "production"
                          ? "bg-accent"
                          : "bg-faint"
                      }`}
                    />
                    {content.status[project.status]}
                  </span>
                </div>

                <p className="mt-4 text-lg leading-snug text-fg/80">
                  {copy.tagline}
                </p>

                <p className="mt-5 font-mono text-xs tracking-[0.16em] text-faint uppercase">
                  {content.roleLabel}
                  <span aria-hidden="true" className="mx-2 text-line-strong">
                    /
                  </span>
                  <span className="text-muted">{copy.role}</span>
                </p>
              </Reveal>

              <div
                className={
                  screenshot
                    ? "mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16"
                    : "mt-12"
                }
              >
                <Reveal
                  className={
                    screenshot
                      ? `order-2 lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`
                      : undefined
                  }
                >
                  <div
                    className={`space-y-8 border-t border-line pt-8 ${
                      screenshot ? "lg:border-t-0 lg:pt-0" : ""
                    }`}
                  >
                    <div>
                      <h4 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
                        {content.contextLabel}
                      </h4>
                      <p className="mt-3 max-w-xl leading-relaxed text-muted">
                        {copy.context}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
                        {content.contributionLabel}
                      </h4>
                      <p className="mt-3 max-w-xl leading-relaxed text-muted">
                        {copy.contribution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
                        {content.highlightsLabel}
                      </h4>
                      <ul
                        className={`mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2 ${
                          screenshot ? "" : "lg:grid-cols-3"
                        }`}
                      >
                        {copy.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-px w-3 shrink-0 bg-accent/70"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.stack ? (
                      <div>
                        <h4 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
                          {content.stackLabel}
                        </h4>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <li
                              key={item}
                              className="rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-muted"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </Reveal>

                {screenshot ? (
                  <Reveal
                    delay={120}
                    className={`order-1 lg:col-span-5 ${
                      reversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="lg:sticky lg:top-28">
                      <DeviceFrame
                        screenshot={screenshot}
                        alt={`${project.name} — ${copy.tagline}`}
                      />
                    </div>
                  </Reveal>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
