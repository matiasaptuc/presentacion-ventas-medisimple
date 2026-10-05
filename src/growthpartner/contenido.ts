// Contenido propio de la presentación Growth Partner (lo común está en src/shared/contenido.tsx).
// Fuente: Playbook – MediSimple y Playbook – Fulfillment (Notion). Precios + IVA.
import { casoDermaklinic, casoDonoso, casoPorcia, casoRios, casoTerre, compartido, type Contenido } from "../shared/contenido";

export const contenido: Contenido = {
  ...compartido,

  portada: { anio: "2026", plan: "Growth Partner", para: "Para profesionales de la salud" },

  casos: [casoDonoso, casoPorcia, casoRios, casoTerre, casoDermaklinic],

  preguntas: [
    {
      area: "Adquisición",
      preguntas: [
        "¿Cómo llegan hoy tus pacientes nuevos? (referidos, redes, anuncios)",
        "¿Inviertes en anuncios? ¿Cuánto al mes?",
        "¿Qué procedimientos te gustaría potenciar?",
        "¿Qué te diferencia de otros profesionales?",
      ],
    },
    {
      area: "Conversión",
      preguntas: [
        "¿Quién responde los mensajes y en cuánto tiempo?",
        "Si alguien pregunta y no agenda, ¿se le hace seguimiento?",
        "¿Cuántas evaluaciones concretas logras al mes?",
      ],
    },
    {
      area: "Recurrencia",
      preguntas: [
        "¿Tus pacientes vuelven a sus controles?",
        "¿Contactas a pacientes antiguos para que vuelvan?",
        "¿Le pides una reseña en Google a cada paciente?",
      ],
    },
    {
      area: "Datos",
      preguntas: [
        "¿Qué software de ficha clínica usas? (AgendaPro, Dentalink, Medilink, Reservo…)",
        "¿Sabes cuántos pacientes y cuánta facturación te trae cada canal?",
        "¿Cuál es tu ticket promedio por procedimiento?",
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
      d: "Las cuentas quedan a tu nombre y capacitamos a tu equipo para operarlas. No dependes de nosotros.",
    },
    {
      t: "Alineados a tu resultado",
      d: "En Growth Partner, parte de lo que cobramos depende de la venta que generamos contigo. Si tú no creces, nosotros tampoco.",
    },
  ],

  // Cronograma del Playbook – Fulfillment: dos frentes en paralelo que llegan juntos al go live (fin de la semana 4).
  procesoIntro:
    "Sin pago de implementación: la mensualidad parte desde el día uno y en 4 semanas el sistema está funcionando. Así se ve el camino:",
  proceso: [
    {
      fase: "Onboarding",
      tiempo: "Día 1",
      resumen: "Una sola reunión para conectar tus plataformas y dejar los accesos listos, todo a tu nombre.",
      detalle: ["Plataformas conectadas", "Cuentas a tu nombre", "Fechas fijas de reunión y grabación"],
    },
    {
      fase: "Diagnóstico y propuesta",
      tiempo: "Semana 1",
      resumen: "2 o 3 días después: diagnóstico ACR de tu negocio, plan de acción y estrategia de contenido.",
      detalle: ["Diagnóstico por pilar ACR", "Plan de acción", "Qué y cómo comunicar"],
    },
    {
      fase: "Implementación",
      tiempo: "Semanas 2–4",
      resumen: "Dos frentes en paralelo: contenido y campañas por un lado, tecnología por el otro.",
      detalle: ["Guiones, grabación y edición", "CRM, agente IA e integraciones", "Estrategia de campañas en Meta", "Capacitación a tu equipo"],
    },
    {
      fase: "Go live",
      tiempo: "Fin de la semana 4",
      resumen: "Campañas activas, tecnología funcionando y tu equipo listo. Desde ahí, el ciclo mensual:",
      detalle: ["Reunión de resultados", "4 guiones, grabación y edición", "Recurrencia desde el mes 2"],
    },
  ],

  incluye: {
    eyebrow: "Nuestra propuesta",
    nombre: "Growth Partner",
    sub: "Qué incluye",
    inicio: {
      titulo: "Al inicio",
      items: [
        "Diagnóstico ACR y propuesta de implementación",
        "CRM con WhatsApp, Instagram y web centralizados",
        "Integración con tu ficha clínica, cuando es posible",
        "Agente IA entrenado con tu información",
        "Capacitación a tu recepción y equipo",
        "Recordatorios y confirmaciones de citas",
        "Flujos de reactivación y recordatorios de controles",
        "Reseñas automáticas y landing de reseñas de Google",
        "Trazabilidad: anuncios, CRM y ficha clínica conectados",
      ],
    },
    mes: {
      titulo: "Cada mes",
      items: [
        "Reunión de resultados y estrategia",
        "Guiones: 5 el primer mes y 4 desde el segundo",
        "Grabación presencial, o con un freelance de tu zona",
        "Edición y entrega de los videos",
        "Manejo de campañas en Meta Ads",
        "Campaña de recurrencia por WhatsApp, desde el mes 2",
        "Revisión de campañas los lunes y jueves",
        "Soporte completo del CRM",
      ],
    },
    destacadoPre: "Go live en",
    destacado: "4 semanas",
    modalidad: "Mensual · sin pago de implementación",
    nota: "no incluye inversión en anuncios",
    ideal: "Para profesionales y clínicas de 1 a 2 profesionales high-ticket",
  },

  medicion: {
    eyebrow: "Transparencia total",
    titulo: { antes: "¿Cómo se calcula ", destacado: "el %", despues: "?" },
    pasos: compartido.medicionPasos,
    caja: {
      t: "Es un piso, no un techo",
      d: "No todo el efecto del marketing se puede medir, así que solo cuenta lo que se puede trazar. Tú y nosotros vemos los mismos números, y los revisamos juntos cada mes.",
    },
  },

  faq: {
    eyebrow: "Las preguntas que siempre llegan",
    propiedad: compartido.propiedad,
    preguntas: [
      { t: "¿Tengo que dejar mi agencia?", d: "No. Podemos coordinarnos con ella. Muchos clientes terminan prefiriendo un solo proveedor." },
      { t: "¿Garantizan resultados?", d: "No prometemos cifras: cada caso es distinto. Mostramos casos reales y medimos con transparencia." },
      { t: "¿Cuándo veo resultados?", d: "El sistema queda funcionando en 4 semanas. Los resultados se construyen mes a mes, con datos." },
      { t: "¿Qué necesitan de mí?", d: "Que participes en la reunión mensual y en las grabaciones, y que compartas tus datos de citas." },
      { t: "¿Qué pago aparte?", d: "Tu inversión en anuncios, el consumo de mensajes del CRM, el hosting de landings y el acceso API de tu ficha clínica." },
      { t: "¿El CRM tiene costo mensual?", d: "No, mientras trabajemos juntos. Solo pagas el consumo de mensajes (WhatsApp, SMS, correo) que uses." },
      { t: "¿Y si uso otra ficha clínica?", d: "Integramos AgendaPro, Dentalink, Medilink y Reservo. Si usas otra, trabajamos con tu registro de citas." },
      { t: "¿Cómo se paga?", d: "Mensualidad por Flow o transferencia. El % se calcula cada mes con la venta atribuible." },
    ],
  },
};

export const inversion = {
  eyebrow: "Inversión",
  nombre: "Growth Partner",
  intro: "Mismo servicio en las tres: cambia cuánto va fijo y cuánto va alineado a tu venta.",
  opciones: [
    { nombre: "Variable", fijo: "$640.000", variable: "8%", honorario: "10%", desc: "Menor fijo mensual, mayor alineación al resultado." },
    {
      nombre: "Equilibrado",
      fijo: "$840.000",
      variable: "5%",
      honorario: "6%",
      desc: "El punto medio: fijo moderado y variable acotado.",
      destacado: true,
    },
    { nombre: "Fijo", fijo: "$1.040.000", variable: "2%", honorario: "2%", desc: "Mayor fijo, variable mínimo: máxima previsibilidad." },
  ],
  // Se muestra solo al hacer clic en el logo (no se ofrece de entrada).
  sinVariable: { nombre: "Sin variable", fijo: "$1.240.000", desc: "Solo fijo mensual, sin porcentaje sobre la venta." },
  neto: "de la venta atribuible",
  nota: "al mes + IVA · no incluye inversión en anuncios",
  honorarioNota:
    "El % se calcula sobre el precio que paga el paciente. Si lo acordamos, puede calcularse sobre tu honorario médico (sin pabellón ni insumos).",
  incluyeTitulo: "Incluido en las tres opciones",
  incluye: [
    "Guiones, grabación y edición de videos",
    "Manejo de campañas en Meta Ads",
    "CRM con todos tus canales + agente IA",
    "Capacitación y protocolos de seguimiento",
    "Recordatorios, reactivación y campañas de recurrencia",
    "Reseñas automáticas en Google",
    "Trazabilidad y reunión mensual de resultados",
    "Sin pago de implementación · go live en 4 semanas",
  ],
  ideal: "Crecemos juntos: alineados al resultado",
};
