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
    emailLabel: "Email",
    emailCopied: "Address copied",
    cvLabel: "CV",
    stats: [
      { value: "4+ years", label: "Software development" },
      { value: "2+ years", label: "Mobile development" },
      { value: "iOS & Android", label: "Production delivery" },
    ],
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
      product: {
        title: "Product Engineering",
        body: "Reading business requirements and turning them into technical solutions, instead of implementing tickets in isolation.",
      },
      ai: {
        title: "AI-assisted Engineering",
        body: "Claude Code, Codex and AI-assisted workflows for implementation, architecture exploration, debugging and reviews — accelerating delivery without outsourcing technical judgment.",
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
        "Client apps in production that I built or led the mobile side of.",
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
      odaclick: {
        kind: "Current role",
        role: "Mobile Developer",
        tagline:
          "Cross-platform apps I build for clients, shipped to the App Store and Google Play.",
        context:
          "Mobile work on real products with real users: some started from nothing, others were codebases already live that had to keep running while they evolved. Three of those apps are public, and you can install them from the stores below.",
        contribution:
          "I take features end to end — technical definition, architecture, implementation, release and what happens after it. That means offline-first flows so the application keeps working without a connection, REST API integration, background processes and notifications, and owning the release train across both stores.",
        highlights: [
          "React Native, Expo and Flutter in the same working week",
          "Offline-first architecture with local persistence",
          "REST API integration with error and retry handling",
          "Background processes and push notifications",
          "Performance work on codebases already in production",
          "Releases with EAS, TestFlight, App Store and Google Play",
        ],
        visualLabel: "Release path",
        visualCaption:
          "The delivery pipeline I own, from build to store listing.",
        flow: [
          { title: "Build", detail: "EAS, iOS and Android" },
          { title: "Test", detail: "TestFlight, internal testing" },
          { title: "Release", detail: "App Store, Google Play" },
        ],
      },
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
        visualLabel: "System overview",
        visualCaption:
          "A schematic of the product, not a screenshot: the application talks to dedicated hardware over Bluetooth LE and turns what it senses into guidance.",
        flow: [
          { title: "Mobile app", detail: "React Native, Expo" },
          { title: "Bluetooth LE", detail: "Two-way link" },
          { title: "Hardware", detail: "Dedicated device" },
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
      odaclick: {
        role: "Mobile Developer",
        summary:
          "Mobile applications with real users, from new products to codebases that were already live and had to keep running while they evolved. I own the features I take on end to end — technical definition, architecture, implementation, release and what happens after it. On the web side, I'm the main developer of ISOSPECS, an AI governance platform aligned with ISO/IEC 42001.",
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
        role: "Full Stack Developer — Freelance",
        summary:
          "Full stack development of a production platform: Expo mobile app, Next.js backoffice and NestJS API. DevOps on AWS, new features and evolving legacy code without disrupting operations.",
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
    cvOpen: "Open CV (PDF)",
    socialLabel: "Elsewhere",
  },
  footer: {
    rights: "Lucas Ribotta. All rights reserved.",
    backToTop: "Back to top",
  },
};

export default en;
