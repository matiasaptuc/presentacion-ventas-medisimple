// Contenido propio de la presentación ACR (lo común está en src/shared/contenido.tsx).
// Fuente: Playbook – MediSimple (sección 5) y Playbook – Fulfillment (cronograma ACR de 8 semanas). Precios + IVA.
import { casoCruzNacional, casoDermaklinic, casoPorcia, casoTerre, casoUrbamed, compartido, type Contenido } from "../shared/contenido";

export const contenido: Contenido = {
  ...compartido,

  // En ACR se implementa todo dentro de las 8 semanas: sin referencias a servicios mensuales posteriores.
  solucion: compartido.solucion.map((s) =>
    s.titulo === "Recurrencia" ? { ...s, desc: "Recordatorios de controles, reactivación y campaña de recurrencia por WhatsApp a tu base." } : s,
  ),
  bonuses: compartido.bonuses.map((b) =>
    b.t === "CRM sin mensualidad"
      ? { t: "CRM sin costo de licencia", d: "Mientras trabajemos juntos, el CRM no tiene costo fijo: solo pagas el consumo de mensajes que uses." }
      : b,
  ),
  servicios: compartido.servicios.map((s) =>
    s.t === "Meta Ads con trazabilidad"
      ? { ...s, d: "Campañas configuradas y medidas en pacientes y facturación, no en clics. Google Ads a pedido." }
      : s.t === "Recurrencia y reseñas"
        ? { ...s, d: "Recordatorios de controles, reactivación, campaña de recurrencia por WhatsApp y reseñas automáticas en Google." }
        : s,
  ),

  portada: { anio: "2026", plan: "Metodología ACR", para: "Para clínicas y centros de salud" },

  casos: [casoTerre, casoUrbamed, casoDermaklinic, casoCruzNacional, casoPorcia],

  preguntas: [
    {
      area: "Adquisición",
      preguntas: [
        "¿Cómo llegan hoy los pacientes nuevos a tu clínica?",
        "¿Cuánto invierten al mes en anuncios y quién los gestiona?",
        "¿Qué áreas o procedimientos quieren potenciar?",
        "¿Qué diferencia a tu clínica de la competencia?",
      ],
    },
    {
      area: "Conversión",
      preguntas: [
        "¿Quién responde los mensajes y en cuánto tiempo?",
        "¿Cuántas personas en recepción agendan y hacen seguimiento?",
        "Si alguien consulta y no agenda, ¿se le vuelve a contactar?",
      ],
    },
    {
      area: "Recurrencia",
      preguntas: [
        "¿Tus pacientes vuelven a sus controles?",
        "¿Contactan a pacientes antiguos para que vuelvan?",
        "¿Piden una reseña en Google después de cada atención?",
      ],
    },
    {
      area: "Datos",
      preguntas: [
        "¿Qué software de ficha clínica usan? (AgendaPro, Dentalink, Medilink, Reservo…)",
        "¿Cuántos profesionales high-ticket atienden en la clínica?",
        "¿Saben cuántos pacientes y cuánta facturación trae cada canal?",
      ],
    },
  ],

  porQue: [
    {
      t: "Números reales",
      d: "Medimos pacientes y facturación, no likes. Tú y nosotros vemos el mismo dashboard, y si algo no funciona, te lo decimos primero.",
    },
    {
      t: "Primero ordenar, después escalar",
      d: "Antes de invertir más en anuncios, corregimos dónde se pierden pacientes. Escalar con fugas es llenar un balde con hoyos.",
    },
    {
      t: "Lo construimos para que sea tuyo",
      d: "Las cuentas quedan a nombre de tu clínica y capacitamos a tu equipo para operarlas. No dependes de nosotros.",
    },
    {
      t: "Cumplimos los plazos",
      d: "Implementación en 8 semanas. Si no logramos el entregable en ese plazo, seguimos trabajando sin costo adicional.",
    },
  ],

  // Cronograma ACR del Playbook – Fulfillment: onboarding, diagnóstico (S1), propuesta (S2), implementación (S3–4),
  // capacitación (S5), go live (S6), optimización (S7) y cierre con revisión de resultados (S8).
  procesoIntro:
    "8 semanas desde el onboarding, con el go live en la semana 6. Si no logramos el entregable, seguimos sin costo adicional. Así se ve el camino:",
  proceso: [
    {
      fase: "Onboarding y diagnóstico",
      tiempo: "Día 1 – Semana 1",
      resumen: "Alineamos objetivos, conectamos tus plataformas y analizamos cómo opera hoy tu clínica.",
      detalle: ["Sesión de onboarding", "Plataformas conectadas", "Diagnóstico ACR"],
    },
    {
      fase: "Propuesta estratégica",
      tiempo: "Semana 2",
      resumen: "Te mostramos dónde se pierden pacientes y el plan para corregirlo, con la estrategia de contenido y de recurrencia.",
      detalle: ["Fugas de pacientes", "Plan de implementación", "Estrategia de contenido y recurrencia"],
    },
    {
      fase: "Implementación",
      tiempo: "Semanas 3–5",
      resumen: "Montamos todo sobre tu operación real y capacitamos a tu equipo en los nuevos procesos.",
      detalle: ["CRM, agente IA e integraciones", "Recordatorios, reactivación y recurrencia", "Guiones, grabación y campañas", "Capacitación a equipos"],
    },
    {
      fase: "Go live y optimización",
      tiempo: "Semanas 6–8",
      resumen: "Lanzamos con acompañamiento cercano, optimizamos con los primeros resultados y cerramos revisándolos contigo.",
      detalle: ["Go live en la semana 6", "Optimización y mejoras", "Cierre con revisión de resultados"],
    },
  ],

  incluye: {
    eyebrow: "Nuestra propuesta",
    nombre: "Implementación ACR",
    sub: "Qué incluye",
    inicio: {
      titulo: "Sistema y tecnología",
      items: [
        "Diagnóstico ACR y propuesta estratégica",
        "CRM con WhatsApp, Instagram y web centralizados",
        "Integración con tu ficha clínica, cuando es posible",
        "Agente IA entrenado con la información de tu clínica",
        "Recordatorios y confirmaciones de citas",
        "Reseñas automáticas y landing de reseñas de Google",
        "Trazabilidad: anuncios, CRM y ficha clínica conectados",
      ],
    },
    mes: {
      titulo: "Contenido, campañas y equipo",
      items: [
        "Estrategia de contenido y primera producción: 5 guiones, grabación y edición",
        "Configuración de campañas en Meta Ads",
        "Campaña de recurrencia, reactivación y recordatorios de controles",
        "Capacitación a recepción y equipos",
        "Go live en la semana 6, con acompañamiento cercano",
        "Optimización con los primeros resultados",
      ],
    },
    destacadoPre: "Implementación en",
    destacado: "8 semanas",
    modalidad: "Pago único · hasta 3 cuotas sin interés",
    nota: "no incluye inversión en anuncios",
    ideal: "Para clínicas pequeñas, medianas y grandes",
  },

  medicion: {
    eyebrow: "Transparencia total",
    titulo: { antes: "¿Cómo medimos ", destacado: "los resultados", despues: "?" },
    pasos: compartido.medicionPasos,
    caja: {
      t: "Es un piso, no un techo",
      d: "No todo el efecto del marketing se puede medir, así que solo mostramos lo que se puede trazar. Tú y nosotros vemos los mismos números, en el mismo dashboard.",
    },
  },

  faq: {
    eyebrow: "Las preguntas que siempre llegan",
    propiedad: compartido.propiedad,
    preguntas: [
      { t: "¿Tengo que dejar mi agencia?", d: "No. Podemos coordinarnos con ella. Muchos clientes terminan prefiriendo un solo proveedor." },
      { t: "¿Garantizan resultados?", d: "No prometemos cifras: cada caso es distinto. Mostramos casos reales y medimos con transparencia." },
      { t: "¿Y si no se logra en 8 semanas?", d: "Seguimos trabajando sin costo adicional hasta lograr el entregable." },
      { t: "¿Cuándo veo resultados?", d: "El sistema queda funcionando en la semana 6. Desde ahí, los resultados se miden con datos reales." },
      { t: "¿Qué necesitan de mi equipo?", d: "Los accesos a sus plataformas, participar en la capacitación y compartir los datos de citas." },
      { t: "¿Qué pago aparte?", d: "Tu inversión en anuncios, el consumo de mensajes del CRM, el hosting de landings y el acceso API de tu ficha clínica." },
      { t: "¿El CRM tiene costo mensual?", d: "No, mientras trabajemos juntos. Solo pagas el consumo de mensajes (WhatsApp, SMS, correo) que uses." },
      { t: "¿Cómo se paga?", d: "En un pago o hasta 3 cuotas sin interés por Flow. También por transferencia." },
    ],
  },
};

// Precio del Playbook (sección 5): ACR $2.800.000 + IVA, pago único (hasta 3 cuotas sin interés por Flow).
export const inversion = {
  eyebrow: "Inversión",
  nombre: "Implementación ACR",
  sub: "8 semanas",
  resumen: [
    "Diagnóstico ACR y propuesta estratégica",
    "Sistema completo: CRM, agente IA e integraciones",
    "Recordatorios, reactivación y campaña de recurrencia",
    "Primera producción de contenido y campañas en Meta Ads",
    "Capacitación a recepción y equipos",
    "Go live en la semana 6 y optimización",
    "Trazabilidad y dashboard de resultados",
    "Bonuses: Google Ads, landing y reseñas automáticas",
  ],
  noIncluye: ["Inversión en anuncios", "Consumo de mensajes del CRM"],
  precio: "$2.800.000",
  detalle: "+ IVA · pago único",
  cuotas: "Hasta 3 cuotas sin interés",
  garantia: "Si no logramos el entregable en 8 semanas, seguimos sin costo adicional.",
  ideal: "Primero ordenar, después escalar",
};
