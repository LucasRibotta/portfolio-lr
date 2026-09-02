import { notFound } from "next/navigation";
import { Backdrop } from "@/components/layout/Backdrop";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { getDictionary } from "@/content";
import { cvHref, EMAIL, isLocale, SITE_URL, social } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lucas Ribotta",
    jobTitle: dict.hero.role,
    description: dict.meta.description,
    url: `${SITE_URL}/${locale}`,
    email: `mailto:${EMAIL}`,
    sameAs: [social.linkedin, social.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressCountry: "AR",
    },
    knowsAbout: [
      "React Native",
      "Expo",
      "TypeScript",
      "Flutter",
      "Mobile Architecture",
      "Offline-first",
    ],
  };

  return (
    <>
      <Backdrop />
      <Nav
        locale={locale}
        labels={dict.nav.items}
        menu={dict.nav.menu}
        languageLabel={dict.nav.languageLabel}
      />

      <main id="main">
        <Hero content={dict.hero} cvHref={cvHref} />
        <Work content={dict.work} />
        <Experience content={dict.experience} locale={locale} />
        <Capabilities content={dict.capabilities} />
        <About content={dict.about} />
        <Stack content={dict.stack} />
        <Contact content={dict.contact} />
      </main>

      <Footer content={dict.footer} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
