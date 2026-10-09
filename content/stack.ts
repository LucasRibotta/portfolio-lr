export const stackGroupIds = [
  "leadership",
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
    id: "leadership",
    items: [
      "Architecture",
      "Technical Decisions",
      "Estimation",
      "Code Review",
      "Team Coordination",
      "Release Planning",
    ],
  },
  {
    id: "mobile",
    items: [
      "React Native",
      "Expo",
      "Flutter",
      "iOS",
      "Android",
      "Bluetooth LE",
      "Background Tasks",
    ],
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
    items: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
    ],
  },
  {
    id: "architecture",
    items: ["Clean Architecture", "Modular Architecture", "Offline-first"],
  },
  {
    id: "delivery",
    items: [
      "EAS",
      "App Store Connect",
      "TestFlight",
      "Google Play Console",
      "AWS",
      "GitHub Actions",
    ],
  },
  {
    id: "ai",
    items: [
      "Claude",
      "Claude Code",
      "Claude Skills",
      "Codex",
      "LLM integrations",
      "On-device AI",
    ],
  },
];
