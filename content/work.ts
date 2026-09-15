import type { StoreLinks } from "./stores";

export const workIds = ["odaclick", "orisen", "cielo", "wyrdvow"] as const;

export type WorkId = (typeof workIds)[number];

export const workAppIds = ["docupaint", "ridTurnos", "mbaFceUnc"] as const;

export type WorkAppId = (typeof workAppIds)[number];

export type WorkApp = {
  id: WorkAppId;
  name: string;
  stack: readonly string[];
  stores: StoreLinks;
};

export type WorkStatus = "inDevelopment" | "production" | "playable";

export type WorkVisual =
  | { kind: "gallery"; images: readonly string[] }
  | { kind: "flow"; bidirectional?: boolean };

export type WorkProject = {
  id: WorkId;
  name: string;
  status: WorkStatus;
  stack?: readonly string[];
  visual?: WorkVisual;
  url?: string;
  apps?: readonly WorkApp[];
};

export const work: readonly WorkProject[] = [
  {
    id: "odaclick",
    name: "OdaClick",
    status: "production",
    stack: [
      "React Native",
      "Expo",
      "Flutter",
      "TypeScript",
      "SQLite",
      "REST APIs",
      "EAS",
    ],
    visual: { kind: "flow" },
    apps: [
      {
        id: "docupaint",
        name: "DocuPaint",
        stack: ["Expo", "React Native", "NestJS", "Bluetooth LE"],
        stores: {
          appStore: "https://apps.apple.com/ar/app/docupaint/id6738437184",
          googlePlay:
            "https://play.google.com/store/apps/details?id=com.docupaint.app",
        },
      },
      {
        id: "ridTurnos",
        name: "RID Turnos",
        stack: ["Expo", "React Native", "TanStack Query", "Firebase"],
        stores: {
          googlePlay:
            "https://play.google.com/store/apps/details?id=com.trs24.ridturnos",
        },
      },
      {
        id: "mbaFceUnc",
        name: "MBA FCE UNC",
        stack: ["Expo", "React Native", "Next.js", "NestJS"],
        stores: {
          appStore:
            "https://apps.apple.com/ar/app/app-graduados-fce-unc/id6749386727",
          googlePlay:
            "https://play.google.com/store/apps/details?id=com.mba.mba_app",
        },
      },
    ],
  },
  {
    id: "orisen",
    name: "Orisen",
    status: "inDevelopment",
    stack: ["React Native", "Expo", "TypeScript", "Bluetooth LE", "AI"],
    visual: { kind: "flow", bidirectional: true },
  },
  {
    id: "cielo",
    name: "Cielo",
    status: "inDevelopment",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "On-device LLM",
      "Sensors",
      "Clean Architecture",
    ],
    visual: {
      kind: "gallery",
      images: [
        "/work/cielo/tonight.webp",
        "/work/cielo/welcome.webp",
        "/work/cielo/onboarding-location.webp",
        "/work/cielo/onboarding-alerts.webp",
        "/work/cielo/onboarding-camera.webp",
        "/work/cielo/astral-empty.webp",
        "/work/cielo/transits.webp",
        "/work/cielo/natal-chart.webp",
        "/work/cielo/life-timeline.webp",
        "/work/cielo/about.webp",
        "/work/cielo/sky-mode.webp",
      ],
    },
  },
  {
    id: "wyrdvow",
    name: "Wyrdvow",
    status: "inDevelopment",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "Nx",
    ],
    visual: {
      kind: "gallery",
      images: [
        "/work/wyrdvow/welcome.webp",
        "/work/wyrdvow/oath.webp",
        "/work/wyrdvow/run-start.webp",
        "/work/wyrdvow/lobby-portrait.webp",
      ],
    },
  },
];

export const sideIds = ["nightmareJordi"] as const;

export type SideId = (typeof sideIds)[number];

export type SideProject = {
  id: SideId;
  name: string;
  href: string;
  tech: readonly string[];
};

export const sideProjects: readonly SideProject[] = [
  {
    id: "nightmareJordi",
    name: "Nightmare Jordi",
    href: "https://nightmare-jordi.surge.sh/",
    tech: ["Unity 6", "C#", "WebGL"],
  },
];
