export const workIds = ["orisen", "wyrdvow"] as const;

export type WorkId = (typeof workIds)[number];

export type WorkStatus = "inDevelopment" | "production";

export type WorkProject = {
  id: WorkId;
  name: string;
  status: WorkStatus;
  stack?: readonly string[];
  screenshot?: string;
  url?: string;
};

export const work: readonly WorkProject[] = [
  {
    id: "orisen",
    name: "Orisen",
    status: "inDevelopment",
    stack: ["React Native", "Expo", "TypeScript", "Bluetooth LE", "AI"],
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
    screenshot: "/work/wyrdvow-welcome.webp",
  },
];
