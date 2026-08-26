import type { ExperienceId } from "./experience";
import type { StackGroupId } from "./stack";
import type { WorkId, WorkStatus } from "./work";
import type { SectionId } from "@/lib/site";

export const capabilityIds = [
  "mobile",
  "architecture",
  "product",
  "ownership",
  "performance",
  "ai",
] as const;

export type CapabilityId = (typeof capabilityIds)[number];

export type SectionHeading = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    items: Record<SectionId, string>;
    menu: { open: string; close: string };
    languageLabel: string;
  };
  hero: {
    availability: string;
    role: string;
    techLine: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    location: string;
    remote: string;
    scrollHint: string;
    nowLabel: string;
    now: readonly { role: string; company: string }[];
    focusLabel: string;
    focus: string;
  };
  capabilities: SectionHeading & {
    items: Record<CapabilityId, { title: string; body: string }>;
  };
  work: SectionHeading & {
    roleLabel: string;
    contextLabel: string;
    contributionLabel: string;
    highlightsLabel: string;
    stackLabel: string;
    status: Record<WorkStatus, string>;
    projects: Record<
      WorkId,
      {
        kind: string;
        role: string;
        tagline: string;
        context: string;
        contribution: string;
        highlights: readonly string[];
      }
    >;
  };
  experience: SectionHeading & {
    present: string;
    entries: Record<
      ExperienceId,
      { role: string; summary?: string; focus?: readonly string[] }
    >;
  };
  about: SectionHeading & {
    paragraphs: readonly string[];
    portraitAlt: string;
    facts: readonly { label: string; value: string }[];
  };
  stack: SectionHeading & {
    groups: Record<StackGroupId, string>;
  };
  contact: SectionHeading & {
    lead: string;
    emailLabel: string;
    copy: string;
    copied: string;
    cvLabel: string;
    cvEn: string;
    cvEs: string;
    socialLabel: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
};
