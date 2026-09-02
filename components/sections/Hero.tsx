import { EmailLink } from "@/components/ui/EmailLink";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/Icons";
import { Rise } from "@/components/ui/Rise";
import type { Dictionary } from "@/content/types";
import { EMAIL, social } from "@/lib/site";

type HeroProps = {
  content: Dictionary["hero"];
  cvHref: string;
};

export function Hero({ content, cvHref }: HeroProps) {
  const links = [
    {
      href: social.linkedin,
      label: "LinkedIn",
      Icon: LinkedInIcon,
      external: true,
    },
    { href: social.github, label: "GitHub", Icon: GitHubIcon, external: true },
  ];

  const linkClass =
    "group inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg";
  const iconClass =
    "size-4 text-faint transition-colors duration-200 group-hover:text-accent";

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-14 sm:pt-32"
    >
      <div className="container-page">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Rise>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-4 pl-3 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase">
                <span aria-hidden="true" className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                {content.availability}
              </p>
            </Rise>

            <Rise delay={60}>
              <h1 id="home-title" className="mt-8">
                <span className="block font-mono text-sm tracking-[0.28em] text-muted uppercase">
                  Lucas Ribotta
                </span>
                <span className="mt-4 block max-w-[16ch] text-[clamp(2.5rem,8.5vw,5.25rem)] leading-[0.95] font-medium tracking-[-0.03em] text-fg">
                  {content.role}
                </span>
              </h1>
            </Rise>

            <Rise delay={120}>
              <p className="mt-6 font-mono text-sm text-faint sm:text-base">
                {content.techLine}
              </p>
            </Rise>

            <Rise delay={180}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {content.lead}
              </p>
            </Rise>

            <Rise delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#work"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[#052220] transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-accent)_88%,white)]"
                >
                  {content.primaryCta}
                  <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-control px-6 text-sm font-medium text-fg transition-colors duration-200 hover:border-muted hover:bg-surface"
                >
                  {content.secondaryCta}
                </a>
              </div>
            </Rise>

            <Rise delay={300}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                {links.map(({ href, label, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className={linkClass}
                    >
                      <Icon className={iconClass} />
                      {label}
                    </a>
                  </li>
                ))}

                <li>
                  <EmailLink
                    email={EMAIL}
                    label={content.emailLabel}
                    copiedLabel={content.emailCopied}
                    className={linkClass}
                    iconClassName={iconClass}
                  />
                </li>

                <li>
                  <a
                    href={cvHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={linkClass}
                  >
                    <ExternalLinkIcon className={iconClass} />
                    {content.cvLabel}
                  </a>
                </li>
              </ul>
            </Rise>
          </div>

          <Rise delay={360} className="hidden lg:col-span-4 lg:block">
            <div className="border-t border-line pt-6">
              <p
                id="hero-now"
                className="font-mono text-xs tracking-[0.16em] text-faint uppercase"
              >
                {content.nowLabel}
              </p>
              <ul aria-labelledby="hero-now" className="mt-4 space-y-3">
                {content.now.map((item) => (
                  <li key={item.company}>
                    <p className="text-sm text-fg">{item.role}</p>
                    <p className="font-mono text-xs text-faint">
                      {item.company}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-line pt-6 font-mono text-xs tracking-[0.16em] text-faint uppercase">
                {content.focusLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {content.focus}
              </p>
            </div>
          </Rise>
        </div>

        <Rise delay={420}>
          <dl className="mt-12 grid grid-cols-3 gap-x-4 border-t border-line pt-6 sm:gap-x-8">
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="m-0">
                  <span className="block text-sm font-medium text-fg sm:text-base">
                    {stat.value}
                  </span>
                  <span className="mt-1 block font-mono text-[0.65rem] leading-tight tracking-[0.1em] text-faint uppercase sm:text-[0.7rem]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6 font-mono text-xs tracking-wide text-faint">
            <span>{content.location}</span>
            <span aria-hidden="true">·</span>
            <span>{content.remote}</span>
          </div>
        </Rise>
      </div>
    </section>
  );
}
