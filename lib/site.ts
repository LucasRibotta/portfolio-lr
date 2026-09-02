export const SITE_URL = "https://lucasr-dev.vercel.app";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const EMAIL = "lucasribotta15@gmail.com";

export const social = {
  linkedin: "https://www.linkedin.com/in/lucas-ribotta/",
  github: "https://github.com/LucasRibotta",
  email: `mailto:${EMAIL}`,
} as const;

export const cvHref =
  "https://drive.google.com/file/d/1xnNZjiKkSgkDPd3iSfleUrpoptRY7d-t/view";

export const sections = [
  "home",
  "work",
  "experience",
  "about",
  "stack",
  "contact",
] as const;

export type SectionId = (typeof sections)[number];
