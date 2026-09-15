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
    emailLabel: "Email",
    emailCopied: "Dirección copiada",
    cvLabel: "CV",
    stats: [
      { value: "4+ años", label: "Desarrollo de software" },
      { value: "2+ años", label: "Desarrollo mobile" },
      { value: "iOS y Android", label: "Entrega en producción" },
    ],
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
    title: "Ingeniería más allá del ticket.",
    intro:
      "La capa móvil es donde más profundizo, pero el trabajo rara vez termina en la implementación.",
    items: {
      mobile: {
        title: "Ingeniería móvil",
        body: "Aplicaciones multiplataforma para iOS y Android con React Native, Expo, Flutter y TypeScript.",
      },
      architecture: {
        title: "Arquitectura y performance",
        body: "Sistemas modulares y mantenibles, sobre principios de Clean Architecture y patrones offline-first — y el trabajo de mantener rápidas, confiables y baratas de cambiar las aplicaciones que ya están en producción.",
      },
      product: {
        title: "Ingeniería de producto",
        body: "Leer los requerimientos del negocio y convertirlos en soluciones técnicas, en lugar de implementar tickets de forma aislada.",
      },
      ai: {
        title: "Ingeniería asistida por IA",
        body: "Claude Code, Codex y flujos asistidos por IA para implementar, explorar arquitecturas, debuggear y revisar código — acelerando la entrega sin tercerizar el criterio técnico.",
      },
    },
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    title: "Trabajo donde soy responsable del lado técnico.",
    intro:
      "Productos y bases de código en producción, desde la arquitectura y la definición técnica hasta lo que el usuario termina instalando en su teléfono.",
    roleLabel: "Rol",
    contextLabel: "Contexto",
    contributionLabel: "En qué trabajo",
    highlightsLabel: "Highlights técnicos",
    stackLabel: "Stack",
    gallery: {
      open: "Ver pantallas",
      close: "Cerrar",
      previous: "Pantalla anterior",
      next: "Pantalla siguiente",
      position: "Pantalla",
    },
    apps: {
      label: "Apps publicadas",
      intro:
        "Apps de clientes en producción que construí o cuyo lado mobile lideré.",
      items: {
        docupaint: {
          role: "Líder técnico de frontend",
          summary:
            "App de QA/QC para inspectores de recubrimientos industriales: formularios según normas, fotos georreferenciadas y reportes PDF. Lideré el rediseño y la nueva arquitectura, incluida la conexión Bluetooth LE con medidores y el manejo de datos offline/online.",
        },
        ridTurnos: {
          role: "Desarrollador principal",
          summary:
            "App de pacientes para reservar turnos médicos, gestionar el grupo familiar y pedir autorizaciones a la obra social. Notificaciones push, login biométrico, chat en tiempo real con Socket.IO, OTA con EAS Update y CI/CD por entorno.",
        },
        mbaFceUnc: {
          role: "Desarrollo end-to-end",
          summary:
            "Plataforma e-learning universitaria: app iOS y Android, backoffice Next.js y API NestJS, con login de Google, notificaciones push y generación de PDF.",
        },
      },
    },
    also: {
      label: "También construí",
      intro: "Fuera de la línea mobile, y terminado lo suficiente como para abrirlo.",
      cta: "Jugar",
      items: {
        nightmareJordi: {
          kind: "Juego · Unity",
          blurb:
            "Un plataformero 2D donde el perro no puede pelear, sólo correr y ladrar. El ladrido asusta a los animales chicos y atrae a los grandes, así que el mismo botón es la herramienta y el riesgo. Construido y publicado como build WebGL.",
        },
      },
    },
    status: {
      inDevelopment: "En desarrollo",
      production: "En producción",
      playable: "Jugable",
    },
    projects: {
      odaclick: {
        kind: "Trabajo actual",
        role: "Mobile Developer",
        tagline:
          "Apps multiplataforma que construyo para clientes, publicadas en App Store y Google Play.",
        context:
          "Trabajo mobile sobre productos reales con usuarios reales: algunos arrancaron de cero, otros eran bases de código ya en producción que tenían que seguir funcionando mientras evolucionaban. Tres de esas apps son públicas y se pueden instalar desde las tiendas, más abajo.",
        contribution:
          "Tomo features de punta a punta: definición técnica, arquitectura, implementación, release y lo que pasa después. Eso implica flujos offline-first para que la aplicación siga funcionando sin conexión, integración de APIs REST, procesos en segundo plano y notificaciones, y hacerme cargo del tren de releases en las dos tiendas.",
        highlights: [
          "React Native, Expo y Flutter en la misma semana de trabajo",
          "Arquitectura offline-first con persistencia local",
          "Integración de APIs REST con manejo de errores y reintentos",
          "Procesos en segundo plano y notificaciones push",
          "Trabajo de performance sobre código ya en producción",
          "Releases con EAS, TestFlight, App Store y Google Play",
        ],
        visualLabel: "Camino de release",
        visualCaption:
          "El pipeline de entrega del que me hago cargo, desde el build hasta la ficha en la tienda.",
        flow: [
          { title: "Build", detail: "EAS, iOS y Android" },
          { title: "Prueba", detail: "TestFlight, testing interno" },
          { title: "Release", detail: "App Store, Google Play" },
        ],
      },
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
        visualLabel: "Vista del sistema",
        visualCaption:
          "Un esquema del producto, no una captura: la aplicación se comunica con hardware dedicado por Bluetooth LE y convierte lo que ese hardware detecta en guía para la persona.",
        flow: [
          { title: "App móvil", detail: "React Native, Expo" },
          { title: "Bluetooth LE", detail: "Enlace bidireccional" },
          { title: "Hardware", detail: "Dispositivo dedicado" },
        ],
      },
      cielo: {
        kind: "Producto personal",
        role: "Producto e ingeniería",
        tagline:
          "Apuntás el teléfono al cielo y una voz te dice qué estás mirando. Sin señal.",
        context:
          "Afuera, de noche, la pantalla es la interfaz equivocada: te arruina la visión nocturna y muchas veces no hay conexión. Cielo deja la pantalla negra. Levantás el teléfono, te quedás quieto, y dice el nombre de lo que tenés enfrente.",
        contribution:
          "Una aplicación Expo donde el modelo de lenguaje corre en el propio teléfono, sin una sola llamada de red. Un modelo chico, si lo dejás hablar solo, inventa: así que nunca lo hace. Recibe los hechos servidos, de un catálogo astronómico y de un corpus mitológico curado a mano, y su único trabajo es contarlos. Un mito que no está en el corpus no se puede contar — es una garantía de la arquitectura, no una esperanza puesta en el prompt.",
        highlights: [
          "Modelo de lenguaje corriendo en el dispositivo, sin internet",
          "Fusión de sensores para resolver hacia dónde apunta el teléfono",
          "Interacción por voz — usable sin mirar la pantalla",
          "Clean Architecture: un dominio puro, sin framework adentro",
          "Tests de dominio que corren en Node, sin emulador",
          "Construida con Expo Router y publicada con EAS",
        ],
        visualLabel: "Pantallas",
        shots: [
          "El cielo de esta noche, apenas la abrís",
          "La bienvenida — sin señal, sin cuenta y sin servidor",
          "Ubicación, para saber qué se ve desde acá",
          "Avisos de eclipses y lluvias de meteoros, programados en el teléfono",
          "Cámara, para dibujar el cielo sobre la imagen real",
          "La sección astral, antes de cargar los datos de nacimiento",
          "Los tránsitos de hoy contra tu propia carta",
          "La carta natal, calculada en el dispositivo",
          "Tu vida — los tránsitos lentos, del más nuevo al más viejo",
          "Acerca: qué sale del teléfono y qué no sale nunca",
          "Modo cielo, con la pantalla en negro",
        ],
      },
      wyrdvow: {
        kind: "Producto personal",
        role: "Producto e ingeniería",
        tagline:
          "Un RPG narrativo donde el juramento que haces cambia cómo responde el mundo.",
        context:
          "Un juego para celular donde hacés un juramento al principio y la historia se acomoda alrededor de esa decisión. Cada jugador termina con una partida distinta, y el mundo se mantiene coherente con el personaje que eligió ser.",
        contribution:
          "Hago todo: diseño, aplicación móvil, servidor y las reglas sobre las que corre el juego. La IA no inventa el mundo — personaliza cómo un mundo ya escrito le responde a cada jugador, y eso mantiene la historia coherente en vez de azarosa.",
        highlights: [
          "Diseñado, construido y mantenido en solitario",
          "Aplicación móvil para iOS y Android",
          "Un motor de reglas que siempre resuelve igual",
          "IA usada para personalizar, no para improvisar",
          "Estado narrativo que se sostiene a lo largo de toda una partida",
        ],
        deepDive: {
          label: "Detalle técnico",
          body: "Un monorepo Nx contiene una aplicación Expo, una API NestJS y librerías compartidas puras. Las reglas viven en un motor determinista aislado de todo framework, los contratos se comparten entre cliente y servidor, y la IA está detrás de ports para poder cambiar de proveedor sin que el juego se entere.",
          points: [
            "Monorepo Nx: app Expo, API NestJS y librerías de dominio puras",
            "Motor determinista de tiradas, predicados y progresión",
            "Contratos Zod compartidos entre mobile y API",
            "IA detrás de ports, con proveedores de texto e imagen intercambiables",
            "PostgreSQL y Prisma, con dashboard de administración",
          ],
        },
        visualLabel: "Pantallas",
        shots: [
          "Pantalla de bienvenida",
          "El juramento",
          "Arranque de la partida",
          "Lobby, con el retrato forjado",
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
          "Aplicaciones móviles con usuarios reales, desde productos nuevos hasta bases de código que ya estaban en producción y tenían que seguir funcionando mientras evolucionaban. Soy responsable de las features que tomo de punta a punta: definición técnica, arquitectura, implementación, release y lo que pasa después. Del lado web, soy el desarrollador principal de ISOSPECS, una plataforma de gobernanza de IA alineada con ISO/IEC 42001.",
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
        role: "Full Stack Developer — Freelance",
        summary:
          "Desarrollo full stack de una plataforma en producción: app mobile con Expo, backoffice Next.js y API NestJS. DevOps en AWS, nuevas features y evolución de código legacy sin interrumpir la operación.",
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
    cvOpen: "Abrir CV (PDF)",
    socialLabel: "En otros lados",
  },
  footer: {
    rights: "Lucas Ribotta. Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },
};

export default es;
