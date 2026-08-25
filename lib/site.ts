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

export const cv: Record<Locale, string> = {
  en: "https://drive.google.com/file/d/10-EBi0By6Wpudwpzyisn5X3exU_wJj61/view?usp=drive_link",
  es: "https://drive.google.com/file/d/1POK6szdbm7ACVJZCBhIgJNPVOq5RL0tH/view?usp=drive_link",
};

export const sections = [
  "home",
  "work",
  "experience",
  "about",
  "stack",
  "contact",
] as const;

export type SectionId = (typeof sections)[number];
