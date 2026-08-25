import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { getDictionary } from "@/content";
import { isLocale, locales, SITE_URL } from "@/lib/site";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans-var",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-var",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

type LocaleParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: "Lucas Ribotta",
    authors: [{ name: "Lucas Ribotta", url: SITE_URL }],
    creator: "Lucas Ribotta",
    keywords: [
      "Mobile Product Engineer",
      "React Native",
      "Expo",
      "TypeScript",
      "Flutter",
      "Mobile Developer",
      "Lucas Ribotta",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Lucas Ribotta",
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      locale: locale === "es" ? "es_AR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleParams & { children: ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#052220]"
        >
          {locale === "es" ? "Ir al contenido" : "Skip to content"}
        </a>
        {children}
      </body>
    </html>
  );
}
