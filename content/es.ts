import type { Dictionary } from "./types";

const es: Dictionary = {
  meta: {
    title: "Lucas Ribotta | Mobile Product Engineer",
    description:
      "Mobile Product Engineer especializado en React Native, Expo, TypeScript y Flutter. Construyo productos móviles escalables, desde la arquitectura hasta producción.",
  },
  nav: {
    items: {
      home: "Inicio",
      work: "Trabajo",
      experience: "Experiencia",
      about: "Sobre mí",
      stack: "Stack",
      contact: "Contacto",
    },
    menu: { open: "Abrir menú", close: "Cerrar menú" },
    languageLabel: "Idioma",
  },
  hero: {
    availability: "Disponible para oportunidades remotas",
    role: "Mobile Product Engineer",
    techLine: "React Native · Expo · TypeScript · Flutter",
    lead: "Construyo y hago evolucionar productos móviles multiplataforma, a cargo de la arquitectura, las decisiones técnicas, la performance y la entrega en App Store y Google Play.",
    primaryCta: "Ver mi trabajo",
    secondaryCta: "Contactar",
    location: "Córdoba, Argentina",
    remote: "Trabajo remoto",
    scrollHint: "Scroll",
    nowLabel: "Actualmente",
    now: [
      { role: "Mobile Developer", company: "OdaClick" },
      { role: "Co-Founder & Tech Lead", company: "Orisen" },
    ],
    focusLabel: "Foco",
    focus: "Arquitectura · Performance · Entrega en iOS y Android",
  },
  capabilities: {
    eyebrow: "Capacidades",
    title: "Ingeniería que va más allá del ticket.",
    intro:
      "La capa móvil es donde más profundizo, pero el trabajo rara vez termina en la implementación.",
    items: {
      mobile: {
        title: "Ingeniería móvil",
        body: "Aplicaciones multiplataforma para iOS y Android con React Native, Expo, Flutter y TypeScript.",
      },
      architecture: {
        title: "Arquitectura",
        body: "Sistemas modulares y mantenibles, sobre principios de Clean Architecture, patrones offline-first y estructuras que escalan con el producto.",
      },
      product: {
        title: "Ingeniería de producto",
        body: "Leer los requerimientos del negocio y convertirlos en soluciones técnicas, en lugar de implementar tickets de forma aislada.",
      },
      ownership: {
        title: "Responsabilidad técnica",
        body: "Features y productos llevados desde la definición técnica hasta la implementación, la integración, el release y el mantenimiento en producción.",
      },
      performance: {
        title: "Performance",
        body: "Mejorar la performance, la confiabilidad y la mantenibilidad de aplicaciones que ya están corriendo en producción.",
      },
      ai: {
        title: "Ingeniería asistida por IA",
        body: "Claude Code, Codex y flujos asistidos por IA para implementar, explorar arquitecturas, debuggear y revisar código. Las decisiones técnicas siguen siendo mías.",
      },
    },
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    title: "Productos donde soy responsable del lado técnico.",
    intro:
      "Desde la arquitectura y la definición técnica hasta lo que el usuario termina instalando en su teléfono.",
    roleLabel: "Rol",
    contextLabel: "Contexto",
    contributionLabel: "En qué trabajo",
    highlightsLabel: "Highlights técnicos",
    stackLabel: "Stack",
    status: {
      inDevelopment: "En desarrollo",
      production: "En producción",
    },
    projects: {
      orisen: {
        kind: "Producto · Co-fundado",
        role: "Co-Founder & Tech Lead",
        tagline: "Tecnología asistiva para la movilidad y la independencia.",
        context:
          "Moverse de forma independiente por un espacio depende de información que el entorno simplemente no le entrega a una persona con discapacidad visual. Orisen es un producto de tecnología asistiva construido para cerrar esa brecha, combinando una aplicación móvil con hardware dedicado.",
        contribution:
          "Lidero el lado técnico del producto: la arquitectura móvil, la aplicación en React Native y Expo, la comunicación con el hardware vía Bluetooth, la experimentación con IA y el roadmap técnico que define qué se construye después.",
        highlights: [
          "Arquitectura móvil diseñada desde cero",
          "Comunicación Bluetooth con hardware dedicado",
          "Experimentación con IA dentro del producto",
          "Accesibilidad como requisito duro, no como capa",
          "Entrega en iOS y Android",
          "Liderazgo técnico y roadmap de producto",
        ],
      },
      wyrdvow: {
        kind: "Producto personal",
        role: "Producto e ingeniería",
        tagline:
          "Un RPG narrativo donde el juramento que haces cambia cómo responde el mundo.",
        context:
          "Wyrdvow es un RPG narrativo donde cada jugador forja un juramento que cambia el destino de su historia. La IA no crea el mundo: personaliza cómo ese mundo responde a quien el jugador decidió ser.",
        contribution:
          "Diseño y construyo el sistema completo: un monorepo Nx con una aplicación Expo, una API NestJS y librerías compartidas puras. Las reglas viven en un motor determinista aislado de todo framework, los contratos se comparten entre cliente y servidor, y la IA está detrás de ports para poder cambiar de proveedor sin que el juego se entere.",
        highlights: [
          "Monorepo Nx: app Expo, API NestJS y librerías de dominio puras",
          "Motor determinista de tiradas, predicados y progresión",
          "Contratos Zod compartidos entre mobile y API",
          "IA detrás de ports, con proveedores de texto e imagen intercambiables",
          "PostgreSQL y Prisma, con dashboard de administración",
          "Estado narrativo coherente a lo largo de toda una partida",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Dónde trabajé.",
    present: "Presente",
    entries: {
      odaclick: {
        role: "Mobile Developer",
        summary:
          "Aplicaciones móviles con usuarios reales, desde productos nuevos hasta bases de código que ya estaban en producción y tenían que seguir funcionando mientras evolucionaban. Soy responsable de las features que tomo de punta a punta: definición técnica, arquitectura, implementación, release y lo que pasa después.",
        focus: [
          "Desarrollo móvil con React Native, Expo y Flutter",
          "Arquitectura de aplicaciones",
          "Flujos offline-first y persistencia local",
          "Integraciones con APIs REST",
          "Procesos en segundo plano y notificaciones push",
          "Performance sobre código en producción",
          "Releases con EAS, TestFlight, App Store y Google Play",
          "Planificación técnica con producto, diseño y backend",
        ],
      },
      globalview: {
        role: "Mobile & Front-End Developer — Freelance",
        summary:
          "Aplicaciones móviles en producción y sistemas de backoffice: nuevas features, mantenimiento, optimización de performance y evolución de código legacy.",
      },
      udd: {
        role: "Facilitador técnico",
        summary:
          "Facilitación y soporte técnico a estudiantes de bootcamps de desarrollo.",
      },
      dascalendar: {
        role: "Front-End Developer",
        summary: "Integración con Google Calendar y Microsoft Outlook.",
      },
      henry: {
        role: "Teaching Assistant Full Stack",
        summary:
          "Soporte técnico y revisión de código a estudiantes de full stack.",
      },
      sos: {
        role: "Full Stack Developer",
      },
    },
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Trabajo los productos como sistemas completos.",
    paragraphs: [
      "Soy Mobile Product Engineer y vivo en Córdoba, Argentina. Me interesa entender un producto de punta a punta: el problema del usuario, la arquitectura que lo sostiene, la implementación y todo lo que pasa después del release.",
      "Mi trabajo se centra en la ingeniería móvil, pero también trabajé en frontend y backend. Ese contexto me permite evaluar una decisión técnica contra todo el ciclo de vida del producto y no contra una sola capa.",
      "Me importan la mantenibilidad, las decisiones que siguen teniendo sentido meses después y construir sistemas que un equipo pueda seguir evolucionando cuando ya no sea el único que los toca.",
    ],
    portraitAlt: "Retrato de Lucas Ribotta",
    facts: [
      { label: "Ubicación", value: "Córdoba, Argentina" },
      { label: "Disponibilidad", value: "Remoto, full-time" },
      { label: "Foco", value: "Ingeniería de producto móvil" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tecnologías con las que trabajo.",
    groups: {
      mobile: "Mobile",
      languages: "Lenguajes",
      frontend: "Frontend",
      stateData: "Estado y datos",
      backend: "Backend y datos",
      architecture: "Arquitectura",
      delivery: "Entrega móvil",
      ai: "Ingeniería con IA",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Construyamos algo que valga la pena.",
    lead: "Estoy abierto a conversar sobre ingeniería móvil, desarrollo de producto, experiencias potenciadas por IA y proyectos técnicos ambiciosos.",
    emailLabel: "Email",
    copy: "Copiar dirección de email",
    copied: "Copiado",
    cvLabel: "CV",
    cvEn: "Descargar CV — EN",
    cvEs: "Descargar CV — ES",
    socialLabel: "En otros lados",
  },
  footer: {
    credit: "Diseñado y construido por Lucas Ribotta",
    backToTop: "Volver arriba",
  },
};

export default es;
