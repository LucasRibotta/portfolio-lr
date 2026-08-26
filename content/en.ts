import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Lucas Ribotta | Mobile Product Engineer",
    description:
      "Mobile Product Engineer specializing in React Native, Expo, TypeScript and Flutter. Building scalable mobile products from architecture to production.",
  },
  nav: {
    items: {
      home: "Home",
      work: "Work",
      experience: "Experience",
      about: "About",
      stack: "Stack",
      contact: "Contact",
    },
    menu: { open: "Open menu", close: "Close menu" },
    languageLabel: "Language",
  },
  hero: {
    availability: "Available for remote opportunities",
    role: "Mobile Product Engineer",
    techLine: "React Native · Expo · TypeScript · Flutter",
    lead: "I build and evolve cross-platform mobile products — owning architecture, technical decisions, performance and delivery to the App Store and Google Play.",
    primaryCta: "View my work",
    secondaryCta: "Contact me",
    location: "Córdoba, Argentina",
    remote: "Working remotely",
    scrollHint: "Scroll",
    nowLabel: "Currently",
    now: [
      { role: "Mobile Developer", company: "OdaClick" },
      { role: "Co-Founder & Tech Lead", company: "Orisen" },
    ],
    focusLabel: "Focus",
    focus: "Architecture · Performance · iOS and Android delivery",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Engineering that goes past the ticket.",
    intro:
      "The mobile layer is where I go deepest, but the work rarely stops at implementation.",
    items: {
      mobile: {
        title: "Mobile Engineering",
        body: "Cross-platform applications for iOS and Android with React Native, Expo, Flutter and TypeScript.",
      },
      architecture: {
        title: "Architecture",
        body: "Modular, maintainable systems built on Clean Architecture principles, offline-first patterns and structures that scale with the product.",
      },
      product: {
        title: "Product Engineering",
        body: "Reading business requirements and turning them into technical solutions, instead of implementing tickets in isolation.",
      },
      ownership: {
        title: "Technical Ownership",
        body: "Features and products carried from technical definition through implementation, integration, release and production maintenance.",
      },
      performance: {
        title: "Performance",
        body: "Improving the performance, reliability and maintainability of applications already running in production.",
      },
      ai: {
        title: "AI-assisted Engineering",
        body: "Claude Code, Codex and AI-assisted workflows for implementation, architecture exploration, debugging and reviews — the technical decisions stay mine.",
      },
    },
  },
  work: {
    eyebrow: "Selected work",
    title: "Products where I own the technical side.",
    intro:
      "From architecture and technical definition through to what a user installs on their phone.",
    roleLabel: "Role",
    contextLabel: "Context",
    contributionLabel: "What I work on",
    highlightsLabel: "Technical highlights",
    stackLabel: "Stack",
    status: {
      inDevelopment: "In development",
      production: "In production",
    },
    projects: {
      orisen: {
        kind: "Product · Co-founded",
        role: "Co-Founder & Tech Lead",
        tagline: "Assistive technology for mobility and independence.",
        context:
          "Moving through a space independently depends on information the environment simply does not hand to a visually impaired person. Orisen is an assistive technology product built to close that gap, pairing a mobile application with dedicated hardware.",
        contribution:
          "I lead the technical side of the product: mobile architecture, the React Native and Expo application, communication with the hardware over Bluetooth, AI experimentation, and the technical roadmap that decides what gets built next.",
        highlights: [
          "Mobile architecture designed from scratch",
          "Bluetooth communication with dedicated hardware",
          "AI experimentation inside the product loop",
          "Accessibility as a hard requirement, not a layer",
          "iOS and Android delivery",
          "Technical leadership and product roadmap",
        ],
      },
      wyrdvow: {
        kind: "Personal product",
        role: "Product & Engineering",
        tagline:
          "A narrative RPG where the oath you swear changes how the world answers.",
        context:
          "Wyrdvow is a narrative RPG where each player forges an oath that changes the fate of their story. AI does not create the world: it personalizes how that world responds to who the player decided to become.",
        contribution:
          "I design and build the whole system: an Nx monorepo holding an Expo application, a NestJS API and pure shared libraries. The rules live in a deterministic engine isolated from any framework, contracts are shared between client and server, and AI sits behind ports so a provider can be swapped without the game knowing.",
        highlights: [
          "Nx monorepo: Expo app, NestJS API and pure domain libraries",
          "Deterministic engine for rolls, predicates and progression",
          "Zod contracts shared between mobile and API",
          "AI behind ports, with interchangeable text and image providers",
          "PostgreSQL and Prisma, with an admin dashboard",
          "Narrative state that stays coherent across a full run",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've worked.",
    present: "Present",
    entries: {
      odaclick: {
        role: "Mobile Developer",
        summary:
          "Mobile applications with real users, from new products to codebases that were already live and had to keep running while they evolved. I own the features I take on end to end — technical definition, architecture, implementation, release and what happens after it.",
        focus: [
          "Mobile development with React Native, Expo and Flutter",
          "Application architecture",
          "Offline-first flows and local persistence",
          "REST API integrations",
          "Background processes and push notifications",
          "Performance on production codebases",
          "Releases with EAS, TestFlight, App Store and Google Play",
          "Technical planning with product, design and backend",
        ],
      },
      globalview: {
        role: "Mobile & Front-End Developer — Freelance",
        summary:
          "Production mobile applications and backoffice systems: new features, maintenance, performance optimization and evolving legacy code.",
      },
      udd: {
        role: "Technical Facilitator",
        summary:
          "Technical facilitation and support for students in development bootcamps.",
      },
      dascalendar: {
        role: "Front-End Developer",
        summary: "Google Calendar and Microsoft Outlook integration.",
      },
      henry: {
        role: "Full Stack Teaching Assistant",
        summary: "Technical support and code review for full stack students.",
      },
      sos: {
        role: "Full Stack Developer",
      },
    },
  },
  about: {
    eyebrow: "About",
    title: "I work on products as complete systems.",
    paragraphs: [
      "I'm a Mobile Product Engineer based in Córdoba, Argentina. I like understanding a product end to end — the user problem, the architecture that holds it up, the implementation, and everything that happens after the release.",
      "My work is centered on mobile engineering, but I've also worked across frontend and backend. That context lets me weigh a technical decision against the whole product lifecycle instead of a single layer of it.",
      "I care about maintainability, decisions that still hold up months later, and building systems a team can keep evolving once I'm not the only one touching them.",
    ],
    portraitAlt: "Portrait of Lucas Ribotta",
    facts: [
      { label: "Based in", value: "Córdoba, Argentina" },
      { label: "Availability", value: "Remote, full-time" },
      { label: "Focus", value: "Mobile product engineering" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Technologies I work with.",
    groups: {
      mobile: "Mobile",
      languages: "Languages",
      frontend: "Frontend",
      stateData: "State & Data",
      backend: "Backend & Data",
      architecture: "Architecture",
      delivery: "Mobile Delivery",
      ai: "AI Engineering",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something meaningful.",
    lead: "I'm open to conversations about mobile engineering, product development, AI-powered experiences and ambitious technical projects.",
    emailLabel: "Email",
    copy: "Copy email address",
    copied: "Copied",
    cvLabel: "Résumé",
    cvEn: "Download CV — EN",
    cvEs: "Download CV — ES",
    socialLabel: "Elsewhere",
  },
  footer: {
    rights: "Lucas Ribotta. All rights reserved.",
    backToTop: "Back to top",
  },
};

export default en;
