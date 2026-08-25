import type { Locale } from "@/lib/site";
import en from "./en";
import es from "./es";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
