import type { Dictionary } from "./types";

const es: Dictionary = {
  meta: {
    title: "Lucas Ribotta | Senior Mobile Engineer",
    description:
      "Senior Mobile Engineer especializado en React Native y Expo, con experiencia en liderazgo técnico, background full stack e IA aplicada. 8 apps publicadas en App Store y Google Play.",
  },
  nav: {
    items: {
      home: "Inicio",
      work: "Trabajo",
      experience: "Experiencia",
      about: "Sobre mí",
      stack: "Tecnologías",
      contact: "Contacto",
    },
    menu: { open: "Abrir menú", close: "Cerrar menú" },
    languageLabel: "Idioma",
  },
  hero: {
    availability: "Disponible para oportunidades remotas",
    role: "Senior Mobile Engineer",
    techLine: "React Native · Expo · Liderazgo técnico · IA",
    lead: "Lidero equipos y proyectos mobile desde la definición técnica hasta producción: arquitectura, releases, integraciones nativas y coordinación entre mobile, frontend y backend.",
    primaryCta: "Ver mi trabajo",
    secondaryCta: "Contactar",
    emailLabel: "Email",
    emailCopied: "Dirección copiada",
    cvLabel: "CV",
    stats: [
      { value: "4+ años", label: "Software en producción" },
      { value: "8 apps", label: "Publicadas en las tiendas" },
      { value: "Equipo de 5", label: "Liderado en mobile" },
    ],
    location: "Córdoba, Argentina",
    remote: "Trabajo remoto",
    scrollHint: "Scroll",
    nowLabel: "Actualmente",
    now: [
      { role: "Senior Full Stack Engineer", company: "Exomindset" },
    ],
    focusLabel: "Foco",
    focus: "Liderazgo técnico · Arquitectura mobile · IA aplicada",
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
      leadership: {
        title: "Liderazgo técnico",
        body: "Arquitectura, estimaciones, code review, organización del trabajo y decisiones de release — convirtiendo necesidades de negocio en soluciones concretas y acompañándolas hasta producción.",
      },
      ai: {
        title: "Ingeniería asistida por IA",
        body: "Automatizaciones con Claude dentro de procesos reales de la organización, integraciones con LLMs, IA on-device en mobile, y Claude Code y Codex en el día a día — acelerando la entrega sin tercerizar el criterio técnico.",
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
    stackLabel: "Tecnologías",
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
        "Apps de clientes en producción que construí o cuyo lado mobile lideré en OdaClick.",
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
      exomindset: {
        kind: "Trabajo actual",
        role: "Senior Full Stack Engineer",
        tagline:
          "Sistemas internos e IA aplicada: de la certificación ISO/IEC 42001 a los pagos masivos.",
        context:
          "Una organización que necesitaba gobernar cómo usa la IA, cumplir estándares y dejar de resolver a mano procesos críticos como el pago a empleados. El trabajo es traducir esas necesidades de negocio en sistemas concretos y sostenerlos en producción.",
        contribution:
          "Lidero técnicamente los proyectos de punta a punta: definición, arquitectura, estrategia de implementación y evolución en producción. Lideré el sistema con el que la organización obtuvo la certificación ISO/IEC 42001, estoy automatizando los pagos integrando el sistema interno con Mercury, y diseño automatizaciones con Claude para procesos como la gestión ESG.",
        highlights: [
          "Certificación ISO/IEC 42001 (AI Governance) obtenida",
          "Inventario de sistemas de IA, riesgos y evaluaciones de impacto",
          "Aprobaciones por rol y trazabilidad completa",
          "Base preparada para ISO 9001 e ISO/IEC 27001",
          "Pagos masivos a empleados vía Mercury desde un único flujo",
          "Automatizaciones ESG con Claude",
        ],
        visualLabel: "Gobernanza de IA",
        visualCaption:
          "El flujo que sostiene la certificación ISO/IEC 42001: cada sistema de IA queda inventariado, evaluado y aprobado, con trazabilidad.",
        flow: [
          { title: "Inventario", detail: "Sistemas de IA" },
          { title: "Evaluación", detail: "Riesgo e impacto" },
          { title: "Aprobación", detail: "Por rol, trazable" },
        ],
      },
      odaclick: {
        kind: "Trabajo anterior",
        role: "Frontend Lead",
        tagline:
          "Lideré el equipo mobile y el ciclo de publicación de apps de clientes en App Store y Google Play.",
        context:
          "Productos reales con usuarios reales: algunos arrancaron de cero, otros eran bases de código ya en producción que tenían que seguir funcionando mientras evolucionaban. Entré como Full Stack Developer y me ascendieron a Frontend Lead. Tres de esas apps son públicas y se pueden instalar desde las tiendas, más abajo.",
        contribution:
          "Lideré un equipo de 5 personas en React Native: arquitectura, estimaciones, code reviews, organización del trabajo y decisiones de release. Me hice cargo del ciclo completo de publicación — builds, configuración, App Store, Google Play, upgrades de Expo y compatibilidades — y formé parte del equipo técnico de referencia, coordinando mobile, frontend y backend.",
        highlights: [
          "Liderazgo de un equipo mobile de 5 personas",
          "Reconstrucción de DocuPaint: nueva arquitectura y UX",
          "Bluetooth LE con instrumentos de medición",
          "Operación offline con sincronización posterior",
          "Upgrades de Expo y compatibilidad iOS/Android",
          "Releases con EAS, TestFlight, App Store y Google Play",
        ],
        visualLabel: "Camino de release",
        visualCaption:
          "El pipeline de entrega del que me hice cargo, desde el build hasta la ficha en la tienda.",
        flow: [
          { title: "Build", detail: "EAS, iOS y Android" },
          { title: "Prueba", detail: "TestFlight, testing interno" },
          { title: "Release", detail: "App Store, Google Play" },
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
      exomindset: {
        role: "Senior Full Stack Engineer",
        summary:
          "Remoto · Full stack, React Native, integraciones e IA aplicada. Lidero técnicamente proyectos de punta a punta, transformando necesidades de negocio en soluciones concretas, definiendo arquitectura y estrategia de implementación, y acompañando su entrega y evolución en producción.",
        focus: [
          "Automatización de pagos masivos integrando el sistema interno con Mercury",
          "Sistema con el que la organización obtuvo la certificación ISO/IEC 42001",
          "Inventario de IA, riesgos, evaluaciones de impacto y trazabilidad",
          "Automatizaciones ESG con Claude",
          "Pruebas e integraciones de IA en React Native",
          "Liderazgo técnico de punta a punta",
        ],
      },
      odaclick: {
        role: "Frontend Lead",
        summary:
          "Entré como Full Stack Developer y me ascendieron a Frontend Lead. Lideré un equipo de 5 personas en React Native, definiendo arquitectura, estimaciones, code reviews, organización del trabajo y decisiones de release, y gestioné el ciclo completo de publicación de varias apps iOS/Android.",
        focus: [
          "Liderazgo de un equipo de 5 personas",
          "Arquitectura, estimaciones y code review",
          "Reconstrucción de una app de QA/QC para inspección industrial",
          "Bluetooth LE con instrumentos de medición",
          "Operación offline con sincronización posterior",
          "Formularios según normas, fotos geolocalizadas y reportes PDF",
          "Builds, App Store, Google Play y upgrades de Expo",
          "Coordinación entre mobile, frontend y backend",
        ],
      },
      globalview: {
        role: "Full Stack Developer — Freelance",
        summary:
          "Extendí un producto en producción sobre la app React Native/Expo, el backoffice Next.js y el backend NestJS, manteniendo la compatibilidad entre las tres capas. Me hice cargo de App Store, Google Play y los upgrades de Expo, e implementé background location sin interrumpir la operación.",
      },
      udd: {
        role: "Facilitador técnico",
        summary:
          "Facilitación y soporte técnico a estudiantes de bootcamps de desarrollo.",
      },
      dascalendar: {
        role: "Front-End Developer",
        summary:
          "Construí gran parte del frontend y los flujos de creación y configuración de eventos. Integré Stripe, Google Calendar y Microsoft Outlook para pagos, autenticación y sincronización de eventos.",
      },
      henry: {
        role: "Teaching Assistant Full Stack",
        summary:
          "Soporte técnico y revisión de código a estudiantes de full stack.",
      },
      sos: {
        role: "Full Stack Developer",
        summary:
          "Digitalicé procesos operativos internos con una plataforma de gestión construida desde el modelado de datos y los servicios backend hasta las pantallas que usaba el equipo.",
      },
    },
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Trabajo los productos como sistemas completos.",
    paragraphs: [
      "Soy Senior Mobile Engineer y vivo en Córdoba, Argentina. Me interesa entender un producto de punta a punta: el problema del usuario, la arquitectura que lo sostiene, la implementación y todo lo que pasa después del release.",
      "Mi trabajo se centra en la ingeniería móvil, pero también trabajé en frontend y backend. Ese contexto me permite evaluar una decisión técnica contra todo el ciclo de vida del producto y no contra una sola capa — y lo uso al liderar equipos, donde la coordinación entre capas importa tanto como el código.",
      "Me importan la mantenibilidad, las decisiones que siguen teniendo sentido meses después y construir sistemas que un equipo pueda seguir evolucionando cuando ya no sea el único que los toca.",
    ],
    portraitAlt: "Retrato de Lucas Ribotta",
    facts: [
      { label: "Ubicación", value: "Córdoba, Argentina" },
      { label: "Disponibilidad", value: "Remoto, full-time" },
      { label: "Foco", value: "Mobile, liderazgo técnico e IA" },
    ],
  },
  stack: {
    eyebrow: "Tecnologías",
    title: "Las herramientas con las que trabajo.",
    groups: {
      leadership: "Liderazgo técnico",
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
