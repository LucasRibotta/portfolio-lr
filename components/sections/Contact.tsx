import { CopyEmail } from "@/components/ui/CopyEmail";
import {
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/content/types";
import { cvHref, EMAIL, social } from "@/lib/site";

type ContactProps = {
  content: Dictionary["contact"];
};

export function Contact({ content }: ContactProps) {
  const profiles = [
    { href: social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: social.github, label: "GitHub", Icon: GitHubIcon },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.lead}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h3 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
            {content.emailLabel}
          </h3>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 inline-block bg-gradient-to-r from-accent to-accent bg-[length:0%_1px] bg-bottom bg-no-repeat text-xl font-medium tracking-tight break-all text-fg transition-[background-size] duration-300 hover:bg-[length:100%_1px] sm:text-2xl"
          >
            {EMAIL}
          </a>
          <div className="mt-6">
            <CopyEmail
              email={EMAIL}
              copyLabel={content.copy}
              copiedLabel={content.copied}
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <h3 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
            {content.cvLabel}
          </h3>
          <a
            href={cvHref}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-4 inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-control px-5 text-sm text-fg transition-colors duration-200 hover:border-muted hover:bg-surface sm:w-auto sm:min-w-[16rem]"
          >
            {content.cvOpen}
            <ExternalLinkIcon className="size-4 text-faint transition-colors duration-200 group-hover:text-accent" />
          </a>

          <h3 className="mt-10 font-mono text-xs tracking-[0.16em] text-faint uppercase">
            {content.socialLabel}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {profiles.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
                >
                  <Icon className="size-4 text-faint transition-colors duration-200 group-hover:text-accent" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
