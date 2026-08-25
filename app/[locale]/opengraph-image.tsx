import { ImageResponse } from "next/og";
import { getDictionary } from "@/content";
import { defaultLocale, isLocale, locales, SITE_URL } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Lucas Ribotta — Mobile Product Engineer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(150deg, #0d1413 0%, #08090a 45%, #08090a 100%)",
          padding: "80px",
          color: "#edeef0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              background: "#5ee6d0",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#9096a0",
            }}
          >
            Lucas Ribotta
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "96px",
              lineHeight: 1.02,
              letterSpacing: "-3px",
              maxWidth: "820px",
            }}
          >
            {dict.hero.role}
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "30px",
              color: "#5ee6d0",
            }}
          >
            {dict.hero.techLine}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1c1f22",
            paddingTop: "32px",
            fontSize: "24px",
            color: "#61666f",
          }}
        >
          <div style={{ display: "flex" }}>{dict.hero.location}</div>
          <div style={{ display: "flex" }}>
            {SITE_URL.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
