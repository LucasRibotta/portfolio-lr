import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Lucas Ribotta | Senior Mobile Engineer",
    description:
      "Senior Mobile Engineer specializing in React Native and Expo, with technical leadership experience, a full stack background and applied AI. 8 apps shipped to the App Store and Google Play.",
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
    role: "Senior Mobile Engineer",
    techLine: "React Native · Expo · Technical Leadership · AI",
    lead: "I lead mobile teams and projects from technical definition to production: architecture, releases, native integrations and coordination across mobile, frontend and backend.",
    primaryCta: "View my work",
    secondaryCta: "Contact me",
    emailLabel: "Email",
    emailCopied: "Address copied",
    cvLabel: "CV",
    stats: [
      { value: "4+ years", label: "Shipping to production" },
      { value: "8 apps", label: "Published to the stores" },
      { value: "Team of 5", label: "Led on mobile" },
    ],
    location: "Córdoba, Argentina",
    remote: "Working remotely",
    scrollHint: "Scroll",
    nowLabel: "Currently",
    now: [
      { role: "Senior Full Stack Engineer", company: "Exomindset" },
    ],
    focusLabel: "Focus",
    focus: "Technical leadership · Mobile architecture · Applied AI",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Engineering beyond the ticket.",
    intro:
      "The mobile layer is where I go deepest, but the work rarely stops at implementation.",
    items: {
      mobile: {
        title: "Mobile Engineering",
        body: "Cross-platform applications for iOS and Android with React Native, Expo, Flutter and TypeScript.",
      },
      architecture: {
        title: "Architecture & Performance",
        body: "Modular, maintainable systems built on Clean Architecture principles and offline-first patterns — and the work of keeping applications already in production fast, reliable and cheap to change.",
      },
      leadership: {
        title: "Technical Leadership",
        body: "Architecture, estimation, code review, work planning and release decisions — turning business needs into concrete solutions and seeing them through to production.",
      },
      ai: {
        title: "AI-assisted Engineering",
        body: "Claude automations inside real organizational processes, LLM integrations, on-device AI on mobile, and Claude Code and Codex day to day — accelerating delivery without outsourcing technical judgment.",
      },
    },
  },
  work: {
    eyebrow: "Selected work",
    title: "Work where I own the technical side.",
    intro:
      "Products and production codebases, from architecture and technical definition through to what a user installs on their phone.",
    roleLabel: "Role",
    contextLabel: "Context",
    contributionLabel: "What I work on",
    highlightsLabel: "Technical highlights",
    stackLabel: "Stack",
    gallery: {
      open: "View screens",
      close: "Close",
      previous: "Previous screen",
      next: "Next screen",
      position: "Screen",
    },
    apps: {
      label: "Shipped apps",
      intro:
        "Client apps in production that I built or led the mobile side of at OdaClick.",
      items: {
        docupaint: {
          role: "Frontend tech lead",
          summary:
            "QA/QC app for industrial coating inspectors: standards-based forms, geotagged photos and PDF reports. I led the redesign and the new architecture, including the Bluetooth LE link to measurement gauges and offline/online data handling.",
        },
        ridTurnos: {
          role: "Main developer",
          summary:
            "Patient app to book medical appointments, manage family members and request health insurance authorizations. Push notifications, biometric login, real-time chat with Socket.IO, OTA updates with EAS Update and per-environment CI/CD.",
        },
        mbaFceUnc: {
          role: "End-to-end development",
          summary:
            "University e-learning platform: iOS and Android app, Next.js backoffice and NestJS API, with Google sign-in, push notifications and PDF generation.",
        },
      },
    },
    also: {
      label: "Also built",
      intro:
        "Outside the mobile track, and finished enough to open.",
      cta: "Play it",
      items: {
        nightmareJordi: {
          kind: "Game · Unity",
          blurb:
            "A 2D platformer where the dog cannot fight, only run and bark. Barking scares small animals and attracts big ones, so the same button is both the tool and the risk. Built and published as a WebGL build.",
        },
      },
    },
    status: {
      inDevelopment: "In development",
      production: "In production",
      playable: "Playable",
    },
    projects: {
      exomindset: {
        kind: "Current role",
        role: "Senior Full Stack Engineer",
        tagline:
          "Internal systems and applied AI: from ISO/IEC 42001 certification to bulk payments.",
        context:
          "An organization that needed to govern how it uses AI, meet standards, and stop running critical processes like employee payments by hand. The work is turning those business needs into concrete systems and keeping them running in production.",
        contribution:
          "I lead projects technically end to end: definition, architecture, implementation strategy and evolution in production. I led the system the organization used to earn ISO/IEC 42001 certification, I'm automating payments by integrating the internal system with Mercury, and I design Claude automations for processes like ESG management.",
        highlights: [
          "ISO/IEC 42001 (AI Governance) certification achieved",
          "AI system inventory, risks and impact assessments",
          "Role-based approvals and full traceability",
          "Groundwork ready for ISO 9001 and ISO/IEC 27001",
          "Bulk employee payments via Mercury from a single flow",
          "ESG automations built with Claude",
        ],
        visualLabel: "AI governance",
        visualCaption:
          "The flow behind the ISO/IEC 42001 certification: every AI system is inventoried, assessed and approved, with traceability.",
        flow: [
          { title: "Inventory", detail: "AI systems" },
          { title: "Assessment", detail: "Risk and impact" },
          { title: "Approval", detail: "Role-based, traceable" },
        ],
      },
      odaclick: {
        kind: "Previous role",
        role: "Frontend Lead",
        tagline:
          "I led the mobile team and the release cycle of client apps on the App Store and Google Play.",
        context:
          "Real products with real users: some started from nothing, others were codebases already live that had to keep running while they evolved. I joined as a Full Stack Developer and was promoted to Frontend Lead. Three of those apps are public, and you can install them from the stores below.",
        contribution:
          "I led a team of 5 on React Native: architecture, estimation, code reviews, work planning and release decisions. I owned the full publishing cycle — builds, configuration, App Store, Google Play, Expo upgrades and compatibility issues — and was part of the core technical team coordinating mobile, frontend and backend.",
        highlights: [
          "Led a mobile team of 5",
          "Rebuilt DocuPaint: new architecture and UX",
          "Bluetooth LE with measurement instruments",
          "Offline operation with later sync",
          "Expo upgrades and iOS/Android compatibility",
          "Releases with EAS, TestFlight, App Store and Google Play",
        ],
        visualLabel: "Release path",
        visualCaption:
          "The delivery pipeline I owned, from build to store listing.",
        flow: [
          { title: "Build", detail: "EAS, iOS and Android" },
          { title: "Test", detail: "TestFlight, internal testing" },
          { title: "Release", detail: "App Store, Google Play" },
        ],
      },
      cielo: {
        kind: "Personal product",
        role: "Product & Engineering",
        tagline:
          "Point your phone at the night sky and a voice tells you what you are looking at. No signal needed.",
        context:
          "Outside, at night, a screen is the wrong interface: it ruins your night vision and there is often no connection. Cielo keeps the screen black. You raise the phone, hold still, and it says the name of what is in front of you.",
        contribution:
          "An Expo application where the language model runs on the phone itself, with no network call. A small model left to talk on its own invents things, so it never gets to: it is handed the facts, from a star catalogue and a hand-curated body of mythology, and its only job is to retell them. A myth that is not in the corpus cannot be told — that is a guarantee of the architecture, not a hope pinned on the prompt.",
        highlights: [
          "Language model running on the device, fully offline",
          "Sensor fusion to resolve what the phone is pointed at",
          "Voice-first interaction — usable without looking at the screen",
          "Clean Architecture: a pure domain with no framework in it",
          "Domain tests that run in Node, with no emulator",
          "Built with Expo Router and shipped through EAS",
        ],
        visualLabel: "Screens",
        shots: [
          "Tonight's sky, the moment you open it",
          "The welcome — no signal, no account, no server",
          "Location, so it knows what is visible from here",
          "Eclipse and meteor shower alerts, scheduled on the phone",
          "Camera, to draw the sky over the live image",
          "The astral section, before any birth data is loaded",
          "Today's transits against your own chart",
          "The natal chart, computed on the device",
          "Your life — the slow transits, newest first",
          "About: what leaves the phone and what never does",
          "Sky mode, with the screen kept dark",
        ],
      },
      wyrdvow: {
        kind: "Personal product",
        role: "Product & Engineering",
        tagline:
          "A narrative RPG where the oath you swear changes how the world answers.",
        context:
          "A mobile game where you swear an oath at the start and the story bends around it. Every player ends up with a different run, and the world stays consistent with the character they decided to become.",
        contribution:
          "I do all of it: design, mobile application, server and the rules the game runs on. AI does not invent the world — it personalizes how an already-written world responds to each player, which keeps the story coherent instead of random.",
        highlights: [
          "Designed, built and maintained solo",
          "Mobile application for iOS and Android",
          "A rules engine that always resolves the same way",
          "AI used for personalization, not for improvisation",
          "Narrative state that holds together across a full run",
        ],
        deepDive: {
          label: "Technical deep dive",
          body: "An Nx monorepo holds an Expo application, a NestJS API and pure shared libraries. The rules live in a deterministic engine isolated from any framework, contracts are shared between client and server, and AI sits behind ports so a provider can be swapped without the game knowing.",
          points: [
            "Nx monorepo: Expo app, NestJS API and pure domain libraries",
            "Deterministic engine for rolls, predicates and progression",
            "Zod contracts shared between mobile and API",
            "AI behind ports, with interchangeable text and image providers",
            "PostgreSQL and Prisma, with an admin dashboard",
          ],
        },
        visualLabel: "Screens",
        shots: [
          "Welcome screen",
          "The oath",
          "Start of a run",
          "Lobby, with the forged portrait",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've worked.",
    present: "Present",
    entries: {
      exomindset: {
        role: "Senior Full Stack Engineer",
        summary:
          "Remote · Full stack, React Native, integrations and applied AI. I lead projects technically end to end, turning business needs into concrete solutions, defining architecture and implementation strategy, and seeing them through delivery and evolution in production.",
        focus: [
          "Bulk payment automation integrating the internal system with Mercury",
          "The system behind the organization's ISO/IEC 42001 certification",
          "AI inventory, risks, impact assessments and traceability",
          "ESG automations with Claude",
          "AI prototypes and integrations in React Native",
          "End-to-end technical leadership",
        ],
      },
      odaclick: {
        role: "Frontend Lead",
        summary:
          "Joined as a Full Stack Developer and was promoted to Frontend Lead. I led a team of 5 on React Native — architecture, estimation, code reviews, work planning and release decisions — and managed the full publishing cycle of several iOS/Android apps.",
        focus: [
          "Led a team of 5",
          "Architecture, estimation and code review",
          "Rebuilt a QA/QC app for industrial field inspection",
          "Bluetooth LE with measurement instruments",
          "Offline operation with later sync",
          "Standards-based forms, geotagged photos and PDF reports",
          "Builds, App Store, Google Play and Expo upgrades",
          "Coordination across mobile, frontend and backend",
        ],
      },
      globalview: {
        role: "Full Stack Developer — Freelance",
        summary:
          "Extended a production product across the React Native/Expo app, the Next.js backoffice and the NestJS backend, keeping all three layers compatible. Owned the App Store, Google Play and Expo upgrades, and shipped background location without disrupting operations.",
      },
      udd: {
        role: "Technical Facilitator",
        summary:
          "Technical facilitation and support for students in development bootcamps.",
      },
      dascalendar: {
        role: "Front-End Developer",
        summary:
          "Built much of the frontend and the event creation and configuration flows. Integrated Stripe, Google Calendar and Microsoft Outlook for payments, authentication and event sync.",
      },
      henry: {
        role: "Full Stack Teaching Assistant",
        summary: "Technical support and code review for full stack students.",
      },
      sos: {
        role: "Full Stack Developer",
        summary:
          "Digitized internal operations with a management platform built from the data model and backend services through to the screens the team used every day.",
      },
    },
  },
  about: {
    eyebrow: "About",
    title: "I work on products as complete systems.",
    paragraphs: [
      "I'm a Senior Mobile Engineer based in Córdoba, Argentina. I like understanding a product end to end — the user problem, the architecture that holds it up, the implementation, and everything that happens after the release.",
      "My work is centered on mobile engineering, but I've also worked across frontend and backend. That context lets me weigh a technical decision against the whole product lifecycle instead of a single layer of it — and I bring that to leading teams, where coordination across layers matters as much as the code.",
      "I care about maintainability, decisions that still hold up months later, and building systems a team can keep evolving once I'm not the only one touching them.",
    ],
    portraitAlt: "Portrait of Lucas Ribotta",
    facts: [
      { label: "Based in", value: "Córdoba, Argentina" },
      { label: "Availability", value: "Remote, full-time" },
      { label: "Focus", value: "Mobile, technical leadership & AI" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Technologies I work with.",
    groups: {
      leadership: "Technical Leadership",
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
    cvOpen: "Open CV (PDF)",
    socialLabel: "Elsewhere",
  },
  footer: {
    rights: "Lucas Ribotta. All rights reserved.",
    backToTop: "Back to top",
  },
};

export default en;
