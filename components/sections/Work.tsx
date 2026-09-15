import { DeviceGallery } from "@/components/ui/DeviceGallery";
import { Flow } from "@/components/ui/Flow";
import { ExternalLinkIcon, PlusIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { StoreLinks } from "@/components/ui/StoreLinks";
import type { Dictionary } from "@/content/types";
import { sideProjects, work } from "@/content/work";

type WorkProps = {
  content: Dictionary["work"];
};

export function Work({ content }: WorkProps) {
  return (
    <Section
      id="work"
      index="01"
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.intro}
    >
      <div className="flex flex-col">
        {work.map((project, index) => {
          const copy = content.projects[project.id];
          const visual = project.visual;
          const reversed = index % 2 === 1;
          const gallery = visual?.kind === "gallery" ? visual : null;
          const flow = visual?.kind === "flow" && copy.flow ? visual : null;
          const aside = gallery ?? flow;

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
                    {copy.name ?? project.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] tracking-wide text-muted uppercase">
                    <span
                      aria-hidden="true"
                      className={`size-1.5 rounded-full ${
                        project.status === "inDevelopment"
                          ? "bg-faint"
                          : "bg-accent"
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
                  aside ? "mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16" : "mt-12"
                }
              >
                <Reveal
                  className={
                    aside
                      ? `order-2 lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`
                      : undefined
                  }
                >
                  <div
                    className={`space-y-8 border-t border-line pt-8 ${
                      aside ? "lg:border-t-0 lg:pt-0" : ""
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
                          aside ? "" : "lg:grid-cols-3"
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

                    {copy.deepDive ? (
                      <details className="group border-t border-line pt-6">
                        <summary className="flex cursor-pointer list-none items-center gap-3 font-mono text-xs tracking-[0.16em] text-faint uppercase transition-colors duration-200 hover:text-muted">
                          <span
                            aria-hidden="true"
                            className="grid size-5 shrink-0 place-items-center rounded-full border border-line-strong text-accent transition-transform duration-300 group-open:rotate-45"
                          >
                            <PlusIcon className="size-2.5" />
                          </span>
                          {copy.deepDive.label}
                        </summary>
                        <div className="pt-5 pl-8">
                          <p className="max-w-xl leading-relaxed text-muted">
                            {copy.deepDive.body}
                          </p>
                          <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                            {copy.deepDive.points.map((point) => (
                              <li
                                key={point}
                                className="flex gap-3 text-sm leading-relaxed text-muted"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2.5 h-px w-3 shrink-0 bg-line-strong"
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    ) : null}

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

                {aside ? (
                  <Reveal
                    delay={120}
                    className={`order-1 lg:col-span-5 ${
                      reversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="lg:sticky lg:top-28">
                      {gallery ? (
                        <DeviceGallery
                          images={gallery.images}
                          captions={copy.shots ?? []}
                          projectName={project.name}
                          labels={content.gallery}
                        />
                      ) : copy.flow && copy.visualLabel ? (
                        <Flow
                          label={copy.visualLabel}
                          caption={copy.visualCaption}
                          nodes={copy.flow}
                          bidirectional={flow?.bidirectional}
                        />
                      ) : null}
                    </div>
                  </Reveal>
                ) : null}
              </div>

              {project.apps ? (
                <Reveal className="mt-14 border-t border-line pt-10">
                  <h4 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
                    {content.apps.label}
                  </h4>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">
                    {content.apps.intro}
                  </p>

                  <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {project.apps.map((app) => {
                      const appCopy = content.apps.items[app.id];
                      return (
                        <li
                          key={app.id}
                          className="flex h-full flex-col rounded-xl border border-line bg-surface/40 p-6"
                        >
                          <p className="text-lg font-medium text-fg">
                            {app.name}
                          </p>
                          <p className="mt-1 font-mono text-[0.7rem] tracking-[0.14em] text-accent uppercase">
                            {appCopy.role}
                          </p>
                          <p className="mt-4 text-sm leading-relaxed text-muted">
                            {appCopy.summary}
                          </p>
                          <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-faint">
                            {app.stack.map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </p>
                          <StoreLinks
                            appName={app.name}
                            stores={app.stores}
                            className="mt-auto pt-6"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
              ) : null}
            </article>
          );
        })}
      </div>

      <Reveal className="mt-20 border-t border-line pt-10 sm:mt-28">
        <h3 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
          {content.also.label}
        </h3>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          {content.also.intro}
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {sideProjects.map((project) => {
            const copy = content.also.items[project.id];
            return (
              <li key={project.id}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full flex-col rounded-xl border border-line bg-surface/40 p-6 transition-colors duration-300 hover:border-control hover:bg-surface"
                >
                  <p className="font-mono text-[0.7rem] tracking-[0.14em] text-faint uppercase">
                    {copy.kind}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-lg font-medium text-fg">
                    {project.name}
                    <ExternalLinkIcon className="size-4 text-faint transition-colors duration-200 group-hover:text-accent" />
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {copy.blurb}
                  </p>
                  <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-faint">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.14em] text-accent uppercase">
                    {content.also.cta}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
