import type { ExperienceId } from "./experience";
import type { StackGroupId } from "./stack";
import type { SideId, WorkId, WorkStatus } from "./work";
import type { SectionId } from "@/lib/site";

export const capabilityIds = [
  "mobile",
  "architecture",
  "product",
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
    emailLabel: string;
    emailCopied: string;
    cvLabel: string;
    stats: readonly { value: string; label: string }[];
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
    gallery: {
      open: string;
      close: string;
      previous: string;
      next: string;
      position: string;
    };
    status: Record<WorkStatus, string>;
    projects: Record<
      WorkId,
      {
        name?: string;
        kind: string;
        role: string;
        tagline: string;
        context: string;
        contribution: string;
        highlights: readonly string[];
        visualLabel?: string;
        visualCaption?: string;
        flow?: readonly { title: string; detail: string }[];
        shots?: readonly string[];
        deepDive?: {
          label: string;
          body: string;
          points: readonly string[];
        };
      }
    >;
    also: {
      label: string;
      intro: string;
      cta: string;
      items: Record<SideId, { kind: string; blurb: string }>;
    };
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
    cvDownload: string;
    socialLabel: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
};
