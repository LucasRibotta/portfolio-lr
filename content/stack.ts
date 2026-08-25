export const stackGroupIds = [
  "mobile",
  "languages",
  "frontend",
  "stateData",
  "backend",
  "architecture",
  "delivery",
  "ai",
] as const;

export type StackGroupId = (typeof stackGroupIds)[number];

export type StackGroup = {
  id: StackGroupId;
  items: readonly string[];
};

export const stack: readonly StackGroup[] = [
  {
    id: "mobile",
    items: ["React Native", "Expo", "Flutter", "iOS", "Android"],
  },
  {
    id: "languages",
    items: ["TypeScript", "JavaScript", "Dart"],
  },
  {
    id: "frontend",
    items: ["React", "Next.js"],
  },
  {
    id: "stateData",
    items: ["TanStack Query", "Zustand", "Redux", "SQLite"],
  },
  {
    id: "backend",
    items: ["Node.js", "REST APIs", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "architecture",
    items: ["Clean Architecture", "Modular Architecture", "Offline-first"],
  },
  {
    id: "delivery",
    items: ["EAS", "App Store Connect", "TestFlight", "Google Play Console"],
  },
  {
    id: "ai",
    items: ["Claude Code", "Codex", "AI-assisted workflows"],
  },
];
