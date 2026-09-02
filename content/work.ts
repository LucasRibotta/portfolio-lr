export const workIds = ["odaclick", "orisen", "cielo", "wyrdvow"] as const;

export type WorkId = (typeof workIds)[number];

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
};

export const work: readonly WorkProject[] = [
  {
    id: "odaclick",
    name: "Production Mobile Engineering",
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
