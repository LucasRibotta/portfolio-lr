"use client";

import { useEffect, useState } from "react";
import {
  CloseIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
} from "@/components/ui/Icons";
import {
  cvHref,
  EMAIL,
  sections,
  social,
  type Locale,
  type SectionId,
} from "@/lib/site";
import { LocaleSwitch } from "./LocaleSwitch";

type NavProps = {
  locale: Locale;
  labels: Record<SectionId, string>;
  menu: { open: string; close: string };
  languageLabel: string;
};

export function Nav({ locale, labels, menu, languageLabel }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of sections) {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label={labels.home}
          className="container-page flex h-16 items-center justify-between gap-6"
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="font-mono text-base font-medium tracking-tight text-fg transition-opacity duration-200 hover:opacity-80"
          >
            LR<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative inline-flex h-9 items-center rounded-full px-3 text-sm transition-colors duration-200 ${
                    active === id ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {labels[id]}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-opacity duration-200 ${
                      active === id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LocaleSwitch
              locale={locale}
              label={languageLabel}
              hash={active === "home" ? undefined : active}
            />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? menu.close : menu.open}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-control text-fg transition-colors duration-200 hover:border-muted md:hidden"
            >
              {open ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 border-t border-line bg-bg/95 backdrop-blur-xl transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-page flex h-full flex-col py-4">
          <ul className="flex flex-col">
            {sections.map((id, index) => (
              <li
                key={id}
                className={index === 0 ? "" : "border-t border-line"}
              >
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? "true" : undefined}
                  className="flex min-h-14 items-center justify-between gap-4 text-lg text-fg"
                >
                  {labels[id]}
                  <span
                    aria-hidden="true"
                    className={`font-mono text-xs ${active === id ? "text-accent" : "text-faint"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-line pt-6 pb-8">
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm break-all text-muted"
            >
              {EMAIL}
            </a>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {[
                {
                  href: social.linkedin,
                  label: "LinkedIn",
                  Icon: LinkedInIcon,
                },
                { href: social.github, label: "GitHub", Icon: GitHubIcon },
                { href: cvHref, label: "CV", Icon: ExternalLinkIcon },
              ].map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 items-center gap-2 text-sm text-muted"
                  >
                    <Icon className="size-4 text-faint" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
