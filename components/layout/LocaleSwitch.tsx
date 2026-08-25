"use client";

import Link from "next/link";
import { locales, type Locale } from "@/lib/site";

type LocaleSwitchProps = {
  locale: Locale;
  label: string;
  hash?: string;
  className?: string;
};

export function LocaleSwitch({
  locale,
  label,
  hash,
  className,
}: LocaleSwitchProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex items-center rounded-full border border-line p-0.5${className ? ` ${className}` : ""}`}
    >
      {locales.map((value) => {
        const active = value === locale;
        return (
          <Link
            key={value}
            href={`/${value}${hash ? `#${hash}` : ""}`}
            hrefLang={value}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 font-mono text-[0.7rem] tracking-[0.12em] uppercase transition-colors duration-200 ${
              active
                ? "bg-raised text-fg"
                : "text-faint hover:text-muted"
            }`}
          >
            {value}
          </Link>
        );
      })}
    </div>
  );
}
