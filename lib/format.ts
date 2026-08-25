import type { Locale } from "./site";

function formatMonth(locale: Locale, value: string): string {
  const [year = "1970", month = "01"] = value.split("-");
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, 1));
  const formatted = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(date)
    .replace(".", "");

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatPeriod(
  locale: Locale,
  start: string,
  end: string | null,
  presentLabel: string,
): string {
  return `${formatMonth(locale, start)} — ${end ? formatMonth(locale, end) : presentLabel}`;
}
