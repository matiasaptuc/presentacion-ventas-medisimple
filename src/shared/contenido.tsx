// Contenido común a todas las presentaciones (ACR y Growth Partner) y biblioteca de casos.
// Fuente: Playbook – MediSimple y Playbook – Fulfillment (Notion, sept.–oct. 2026). Precios + IVA.
// Lo propio de cada plan (casos elegidos, proceso, qué incluye, inversión, FAQ) vive en src/<plan>/contenido.ts.
import { createContext, useContext, type ReactNode } from "react";

const CLIENTES = "/presentacion/clientes";

export type Caso = {
  titulo: string;
  etiqueta: string;
  problema: string;
  resultado: string;
  medicion: string;
  imagenes: { src: string; alt: string; clase?: string }[];
  /** Gráfico de barras a la derecha; las barras de cada métrica se escalan con `n`. */
  metricas: { titulo: string; barras: { etiqueta: string; valor: string; n: number; destacado?: boolean }[] }[];
};

const FOTO = "h-40 w-40 rounded-full object-cover object-top";
const LOGO_CLIENTE = "h-28 rounded-2xl bg-white object-contain p-3";
const antesDespues = (titulo: string, antes: [string, number], despues: [string, number]) => ({
  titulo,
  barras: [
    { etiqueta: "Antes", valor: antes[0], n: antes[1] },
    { etiqueta: "Con MediSimple", valor: despues[0], n: despues[1], destacado: true },
  ],
});

// ─── Biblioteca de casos ────────────────────────────────────────────────────────────────
// Cifras según el Playbook (sección 8) y Wins. Ojo: en Wins ninguna fila está marcada como "publicable"
// y hay versiones distintas de algunas cifras de Porcia y Donoso; confirmar antes de mostrar.

export const casoDonoso: Caso = {
  titulo: "Dr. José Miguel Donoso",
  etiqueta: "Growth Partner · Ficha clínica: Reservo",
  problema:
    "Sumamos un agente IA que conversa con cada interesado de los anuncios y agenda directo en Reservo — incluso cobra el abono y valida el comprobante antes de confirmar la hora. Con contenido mensual y campañas en Meta, todo conectado a su ficha clínica.",
  // OJO: los +$50M vienen del Playbook; el reporte de resultados (sept. 2026) no mide caja ni cirugías. Confirmar.
  resultado:
    "+$50.000.000 en honorarios médicos en 3 meses, atribuibles a nuestras estrategias. Pacientes nuevos x2 (de 14 a 28 al mes; 33 en julio y 32 en agosto) con la misma cantidad de leads: la conversión a paciente pasó de 1,9% a 4,5%.",
  medicion: "Pacientes y conversión medidos en su agenda Reservo y el CRM (ene–ago 2026).",
  imagenes: [{ src: `${CLIENTES}/jose-miguel-donoso.jpg`, alt: "Dr. José Miguel Donoso", clase: FOTO }],
  metricas: [
    antesDespues("Pacientes nuevos al mes", ["14", 14], ["28", 28]),
    antesDespues("Leads que llegan a consulta", ["1,9%", 1.9], ["4,5%", 4.5]),
  ],
};

export const casoPorcia: Caso = {
  titulo: "Dr. Mauro Porcia",
  etiqueta: "Growth Partner · Ficha clínica: Medilink",
  problema:
    "Conectamos el CRM y un agente IA a Medilink: agenda solo, 24/7, ofreciendo únicamente horas realmente disponibles. En su primera semana generó 33 citas sin agendamiento manual del equipo — algunas a la 1 y a las 4 de la madrugada.",
  resultado:
    "Caja +87% (de $17,8M a $33,2M al mes) y el doble de pagos (de 42 a 84) frente a los 3 meses previos. Citas válidas +57%, pacientes nuevos x2,4 y costo por lead −60%.",
  medicion: "Medido con los pagos registrados en Medilink, frente a los 3 meses previos.",
  imagenes: [{ src: `${CLIENTES}/dr-mauro-porcia.jpeg`, alt: "Dr. Mauro Porcia", clase: FOTO }],
  metricas: [antesDespues("Caja al mes", ["$17,8M", 17.8], ["$33,2M", 33.2]), antesDespues("Pagos al mes", ["42", 42], ["84", 84])],
};

export const casoRios: Caso = {
  titulo: "Dr. Marco Ríos",
  etiqueta: "Cirugía plástica · Calama",
  problema:
    "Tenía buena presencia digital, pero se le escapaban interesados: anuncios de baja conversión y ninguna herramienta para responder y hacer seguimiento. Capacitamos a su equipo de venta, relanzamos anuncios de alto impacto y centralizamos el flujo de pacientes.",
  resultado: "En el primer mes: $10.000.000 adicionales en ventas con solo $194.060 de inversión en Meta — más de 50 veces lo invertido.",
  medicion: "Resultados del primer mes de trabajo con MediSimple.",
  imagenes: [{ src: "/presentacion/caso-rios-foto.jpg", alt: "Dr. Marco Ríos", clase: FOTO }],
  metricas: [
    {
      titulo: "Primer mes",
      barras: [
        { etiqueta: "Inversión Meta", valor: "$194 mil", n: 0.194 },
        { etiqueta: "Ventas nuevas", valor: "$10M", n: 10, destacado: true },
      ],
    },
  ],
};

export const casoTerre: Caso = {
  titulo: "Clínica Terré",
  etiqueta: "Cirugía estética y capilar · Ficha clínica: Medilink",
  problema:
    "El retorno de las campañas era una estimación. Construimos un dashboard que cruza Meta y Google, el CRM y los pagos reales de Medilink usando el RUT del paciente: retorno real por área y por anuncio, en una URL.",
  resultado: "En julio, cada $1 invertido en Meta volvió como $16,4 en pagos registrados. Retorno por área: Cirugía 36x, Ginecomastia 28x, Capilar 18x.",
  medicion: "Pagos de la ficha clínica cruzados con el CRM: es un piso, no un techo.",
  imagenes: [{ src: `${CLIENTES}/clinica-terre.jpg`, alt: "Clínica Terré", clase: LOGO_CLIENTE }],
  metricas: [
    {
      titulo: "Retorno por cada $1 en Meta · julio",
      barras: [
        { etiqueta: "Cirugía", valor: "36x", n: 36, destacado: true },
        { etiqueta: "Ginecomastia", valor: "28x", n: 28, destacado: true },
        { etiqueta: "Capilar", valor: "18x", n: 18, destacado: true },
        { etiqueta: "Total", valor: "16,4x", n: 16.4 },
      ],
    },
  ],
};

export const casoDermaklinic: Caso = {
  titulo: "DermaKlinic",
  etiqueta: "Dermatología · Ficha clínica: Medilink",
  problema:
    "El foco fue la recurrencia: recordatorios, reactivación y campañas a su base de pacientes, sobre un sistema de agenda y seguimiento ordenado. La base fidelizada se convirtió en el motor de la clínica.",
  resultado: "Pacientes que vuelven x2,5 (de 134 a 339 al mes), citas +54% (de 503 a 774 al mes) y caja +64%, con asistencia entre 93% y 95%.",
  medicion: "Datos de su ficha clínica (Medilink), en 21 meses de trabajo.",
  imagenes: [{ src: `${CLIENTES}/dermaklinic.webp`, alt: "DermaKlinic", clase: LOGO_CLIENTE }],
  metricas: [
    antesDespues("Pacientes que vuelven al mes", ["134", 134], ["339", 339]),
    antesDespues("Citas al mes", ["503", 503], ["774", 774]),
  ],
};

// Fuente: One Pager "MediSimple" (cifras de Urbamed, 17 meses) y capturas del flujo de precalificación del bot.
export const casoUrbamed: Caso = {
  titulo: "Urbamed",
  etiqueta: "Urología · CRM: Pipedrive",
  problema:
    "Implementamos un agente IA que precalifica por WhatsApp según diagnóstico, edad y tratamiento, y deriva a cada paciente al urólogo indicado, con seguimiento de cada trato en el CRM.",
  resultado: "Pacientes nuevos x3 (de 30 a 94 al mes) y valor cerrado mensual triplicado, hasta $105M, en 17 meses.",
  medicion: "Tratos ganados y valor cerrado registrados en su CRM (Pipedrive).",
  imagenes: [{ src: `${CLIENTES}/urbamed.webp`, alt: "Urbamed", clase: LOGO_CLIENTE }],
  metricas: [antesDespues("Pacientes nuevos al mes", ["30", 30], ["94", 94])],
};

// Fuente: Wins ("Conversión aumentó de 5% a 18%") y deck anterior. Clínica de urgencias con 4 sucursales.
export const casoCruzNacional: Caso = {
  titulo: "Clínica Cruz Nacional",
  etiqueta: "Urgencia ambulatoria · 4 sucursales",
  problema:
    "Sus plataformas estaban mal configuradas y limitaban a marketing y ventas. Construimos un flujo de venta automatizado, capacitamos a cada ejecutivo y dejamos gráficos automáticos de rendimiento por estrategia, con fidelización por correo y base de datos.",
  resultado:
    "La conversión de interesados a pacientes pasó de 5% a 18%, con un equipo de ventas capacitado y trazabilidad completa del flujo de pacientes.",
  medicion: "Conversión medida en su CRM.",
  imagenes: [{ src: `${CLIENTES}/cruz-nacional.png`, alt: "Clínica Cruz Nacional", clase: LOGO_CLIENTE }],
  metricas: [antesDespues("Conversión a paciente", ["5%", 5], ["18%", 18])],
};

// ─── Contenido común ────────────────────────────────────────────────────────────────────

export const compartido = {
  quienesSomos: [
    "Partimos como agencia de marketing y vimos el mismo problema en todos los profesionales de la salud: se medía en likes, clics y mensajes, y nadie sabía cuántos pacientes traía cada peso invertido.",
    "Por eso construimos sistemas que conectan tus anuncios, tu CRM y tu ficha clínica, para seguir a cada paciente desde el anuncio hasta el pago.",
    "Hoy somos el socio de crecimiento de profesionales de la salud y clínicas: conectamos marketing, ventas y tecnología, y lo medimos en pacientes y facturación.",
    "Así nace MediSimple.",
  ],

  mision: {
    destacado: "Que crezcas en pacientes y facturación",
    resto: ", combinando:",
    puntos: [
      "Marketing digital que atrae pacientes, no curiosos",
      "Asesoría comercial para que cada interesado se convierta en paciente",
      "Tecnología que conecta tus canales y mide cada resultado",
      "Una relación de largo plazo, alineada a tus resultados",
    ],
    cierre: "Sin que tengas que preocuparte por el marketing y la tecnología.",
  },

  pilares: [
    { letra: "A", color: "#02b9cd", nombre: "Adquisición", desc: "Que lleguen los pacientes correctos" },
    { letra: "C", color: "#3b75c0", nombre: "Conversión", desc: "Que el interesado se convierta en paciente" },
    { letra: "R", color: "#64b2ff", nombre: "Recurrencia", desc: "Que el paciente vuelva" },
  ],

  problematicas: [
    "Contenido genérico que atrae curiosos, no pacientes, y no muestra lo que te diferencia.",
    "Llegan interesados, pero nadie responde a tiempo ni hace seguimiento hasta agendar.",
    "Después de la atención, el paciente no vuelve, no recomienda ni deja una reseña.",
    "Se mide en likes y clics: no sabes cuántos pacientes te trae cada $100.000 invertido.",
    "Anuncios, WhatsApp, Instagram, CRM y ficha clínica que no conversan entre sí.",
  ],

  // Fuente: One Pager "Resultados con MediSimple" (corte agosto 2026).
  promedio: {
    eyebrow: "Resultados promedio · 4 clientes",
    kpis: [
      { valor: "+30%", label: "Citas válidas al mes" },
      { valor: "+69%", label: "Pacientes al mes" },
      { valor: "+106%", label: "Pacientes nuevos al mes" },
      { valor: "+39%", label: "Citas asistidas al mes" },
      { valor: "+54%", label: "Caja mensual*" },
    ],
    nota: "Urbamed, DermaKlinic, Dr. Mauro Porcia y Dr. José Miguel Donoso, con 4 a 21 meses de servicio. Primeros 3 meses con MediSimple vs. últimos 3 meses cerrados (agosto 2026), leídos desde su agenda y CRM. *Caja: los 2 clientes cuya ficha clínica expone pagos.",
  },

  logosClientes: [
    "belanova-estetica.png",
    "carolina-contreras.jpg",
    "cediq.jpeg",
    "centro-medico-diagnocal.png",
    "clinica-aeon.png",
    "clinica-belloto.png",
    "clinica-bendov.png",
    "clinica-cipo.jpeg",
    "clinica-dental-cumbre.png",
    "clinica-dental-group.jpeg",
    "clinica-heva.png",
    "clinica-levrini.png",
    "clinica-self.png",
    "clinica-sindol.png",
    "clinica-terre.jpg",
    "cruz-nacional.png",
    "dermaklinic.webp",
    "dr-eugenio-castro.jpeg",
    "dr-felipe-patino.jpeg",
    "dr-guillermo-martinez.jpeg",
    "dr-hugo-miranda.jpg",
    "dr-lionel-urrutia.jpeg",
    "dr-marco-alban.jpeg",
    "dr-marco-rios.png",
    "dr-marcos-berry.jpeg",
    "dr-mauro-porcia.jpeg",
    "dr-ricardo-cuellar.png",
    "dra-emilia-barros.jpeg",
    "dra-florencia-terc.jpg",
    "estetica-y-laser-arica.png",
    "imex.png",
    "jose-miguel-donoso.jpg",
    "keila-figuera.jpeg",
    "levita-magnetics.png",
    "liga-salud.webp",
    "mt-odontologia.png",
    "nuself.jpeg",
    "red-laser.png",
    "resolaud.png",
    "senza-clinic.png",
    "simon-gutmann.jpeg",
    "singular.png",
    "the-wonder.png",
    "urbamed.webp",
    "vitali-medical-center.jpeg",
    "wild-mov.jpeg",
  ].map((a) => `${CLIENTES}/${a}`),

  solucion: [
    { titulo: "Adquisición", desc: "Contenido con tus factores diferenciales y campañas en Meta Ads que atraen pacientes, no curiosos." },
    { titulo: "Conversión", desc: "CRM con todos tus canales, agente IA que responde y agenda, y protocolos de seguimiento con tu equipo." },
    { titulo: "Recurrencia", desc: "Recordatorios de controles, reactivación y campañas mensuales por WhatsApp a tu base." },
    { titulo: "Trazabilidad", desc: "Cruzamos anuncios, CRM y ficha clínica: cada pago, hasta el anuncio que lo originó." },
  ],

  software: {
    sub: "Cada interesado queda registrado: de dónde vino, en qué etapa está y quién le hace seguimiento.",
  },

  servicios: [
    {
      t: "Contenido que atrae pacientes",
      d: "Estrategia de contenido, guiones, grabación y edición de videos que muestran tus factores diferenciales.",
    },
    { t: "Meta Ads con trazabilidad", d: "Campañas gestionadas y medidas en pacientes y facturación, no en clics. Google Ads a pedido." },
    { t: "CRM con todos tus canales", d: "WhatsApp, Instagram y tu sitio web en una sola bandeja, integrada con tu ficha clínica." },
    {
      t: "Agente IA",
      d: "Responde al instante, califica a los interesados y agenda directo en tu ficha clínica. Siempre con supervisión humana.",
    },
    {
      t: "Asesoría comercial",
      d: "Protocolos de seguimiento y capacitación a tu recepción y equipo, para que cada interesado se convierta en paciente.",
    },
    {
      t: "Recurrencia y reseñas",
      d: "Recordatorios de controles, reactivación, campañas mensuales por WhatsApp y reseñas automáticas en Google.",
    },
  ],

  dashboard: {
    img: "/growthpartner/reporte-resultados.jpg",
    alt: "Reporte de resultados de un cliente",
    pie: "Reporte real de un cliente (ene–ago 2026), sin datos de pacientes.",
    puntos: [
      "Leídos directo de tu agenda, el CRM y Meta Ads.",
      "Pacientes nuevos, citas, conversión y retorno, mes a mes.",
      "Tú y nosotros vemos los mismos números.",
      "Integrado con tu ficha clínica: AgendaPro, Dentalink, Medilink o Reservo.",
    ],
  },

  bandeja: {
    sub: "WhatsApp, Instagram y tu sitio web en una sola bandeja — con recordatorios y confirmaciones automáticas.",
  },

  agentesIA: {
    items: [
      { t: "Responde al instante, 24/7", d: "Contesta en WhatsApp, Instagram y tu sitio web, también de noche y los fines de semana." },
      { t: "Entrenado para tu perfil", d: "Aprende tus procedimientos, precios referenciales y tu forma de comunicar." },
      { t: "Califica a los interesados", d: "Hace las preguntas clave para separar a los curiosos de los potenciales pacientes." },
      { t: "Agenda directo en tu ficha", d: "Ofrece solo horas realmente disponibles y agenda en tu ficha clínica, sin digitación doble." },
      { t: "Cobra el abono", d: "Puede cobrar un abono y validar el comprobante antes de confirmar la hora." },
      { t: "Humano primero", d: "Deriva a tu equipo cuando hace falta. Nunca diagnostica, receta ni inventa precios o disponibilidad." },
    ],
    dato: {
      antes: "De 286 reservas que hicieron nuestros agentes en 6 clínicas, ",
      destacado: "el 55% fue fuera del horario laboral",
      despues: ": horas que, sin el agente, se perdían.",
    },
  },

  bonuses: [
    { t: "Google Ads", d: "Campañas en Google cuando tu especialidad lo justifica, sin costo extra de gestión." },
    { t: "Landing page", d: "Una landing page para tus campañas, sin costo extra." },
    { t: "Reseñas automáticas", d: "Pedimos una reseña a cada paciente atendido y te dejamos una landing de reseñas de Google." },
    { t: "CRM sin mensualidad", d: "Mientras trabajemos juntos, el CRM no tiene costo mensual: solo pagas el consumo de mensajes que uses." },
  ],

  medicionPasos: [
    { t: "Cruzamos tres fuentes", d: "Tu inversión en anuncios, los leads y agendas del CRM, y los pagos reales registrados en tu ficha clínica." },
    { t: "Identificamos a cada paciente", d: "Por teléfono, correo, nombre y RUT, seguimos cada pago hasta el anuncio que lo originó." },
    { t: "Usamos el método más objetivo", d: "La integración del CRM con tu ficha clínica. Si no es posible, el registro de citas que nos compartes." },
  ],

  cierre: {
    texto: "Conectamos marketing, ventas y tecnología, y lo medimos en pacientes y facturación — para que tú te enfoques en atender.",
    contacto: "getmedisimple.com · alan@getmedisimple.com",
  },

  propiedad: {
    t: "Todo queda a tu nombre",
    d: "Las cuentas y los sistemas que construimos quedan a tu nombre, y capacitamos a tu equipo para operarlos. Si dejamos de trabajar juntos, te quedas con todo, costeando solo las herramientas (CRM, integraciones).",
  },
};

// ─── Lo que cada plan define por su cuenta ──────────────────────────────────────────────

type Texto = { t: string; d: string };

export type ContenidoPlan = {
  portada: { anio: string; plan: string; para: string };
  casos: Caso[];
  preguntas: { area: string; preguntas: string[] }[];
  porQue: Texto[];
  procesoIntro: string;
  proceso: { fase: string; tiempo: string; resumen: string; detalle: string[] }[];
  incluye: {
    eyebrow: string;
    nombre: string;
    sub: string;
    inicio: { titulo: string; items: string[] };
    mes: { titulo: string; items: string[] };
    destacadoPre: string;
    destacado: string;
    modalidad: string;
    nota: string;
    ideal: string;
  };
  medicion: {
    eyebrow: string;
    titulo: { antes: string; destacado: string; despues: string };
    pasos: Texto[];
    caja: Texto;
  };
  faq: { eyebrow: string; propiedad: Texto; preguntas: Texto[] };
};

export type Contenido = typeof compartido & ContenidoPlan;

const ContenidoCtx = createContext<Contenido | null>(null);

export function ContenidoProvider({ value, children }: { value: Contenido; children: ReactNode }) {
  return <ContenidoCtx.Provider value={value}>{children}</ContenidoCtx.Provider>;
}

export function useContenido() {
  const c = useContext(ContenidoCtx);
  if (!c) throw new Error("useContenido debe usarse dentro de <ContenidoProvider>");
  return c;
}
