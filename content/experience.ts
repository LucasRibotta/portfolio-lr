export const experienceIds = [
  "odaclick",
  "globalview",
  "udd",
  "dascalendar",
  "henry",
  "sos",
] as const;

export type ExperienceId = (typeof experienceIds)[number];

export type ExperienceEntry = {
  id: ExperienceId;
  company: string;
  start: string;
  end: string | null;
  featured?: boolean;
  tech?: readonly string[];
  github?: string;
};

export const experience: readonly ExperienceEntry[] = [
  {
    id: "odaclick",
    company: "OdaClick",
    start: "2024-06",
    end: null,
    featured: true,
    tech: ["React Native", "Expo", "Flutter", "TypeScript", "EAS"],
    github: "https://github.com/LucasRibotta7",
  },
  {
    id: "globalview",
    company: "Global View",
    start: "2026-01",
    end: "2026-06",
  },
  {
    id: "udd",
    company: "Universidad del Desarrollo — BootcampsUDD",
    start: "2024-06",
    end: "2025-01",
  },
  {
    id: "dascalendar",
    company: "DasCalendar",
    start: "2023-10",
    end: "2024-03",
  },
  {
    id: "henry",
    company: "Henry Bootcamp",
    start: "2023-06",
    end: "2023-10",
  },
  {
    id: "sos",
    company: "SOS Red de Asistencia",
    start: "2022-01",
    end: "2023-12",
  },
];
