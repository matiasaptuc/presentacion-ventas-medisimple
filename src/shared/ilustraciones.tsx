// Ilustraciones del CRM con datos de ejemplo (nombres ficticios). Reemplazan las capturas
// antiguas, que mostraban la marca BerrySimple y nombres reales de contactos.
import type { ReactNode } from "react";
import { LOGO } from "./ui";

type Etiqueta = { t: string; c: "meta" | "ia" | "seg" | "ok" | "web" | "ig" | "rec" };

const ESTILO_ETIQUETA: Record<Etiqueta["c"], string> = {
  meta: "bg-[#3b75c0]/10 text-[#3b75c0]",
  ia: "bg-[#02b9cd]/12 text-[#017784]",
  seg: "bg-amber-100 text-amber-800",
  ok: "bg-green-100 text-green-800",
  web: "bg-slate-100 text-slate-600",
  ig: "bg-pink-100 text-pink-700",
  rec: "bg-violet-100 text-violet-700",
};

const COLUMNAS: { titulo: string; total: string; tarjetas: { nombre: string; detalle: string; etiquetas: Etiqueta[] }[] }[] = [
  {
    titulo: "Nuevo interesado",
    total: "42",
    tarjetas: [
      { nombre: "Camila R.", detalle: "Rinoplastia", etiquetas: [{ t: "Meta · Anuncio 3", c: "meta" }] },
      { nombre: "Javier P.", detalle: "Lipoescultura", etiquetas: [{ t: "Instagram", c: "ig" }] },
      { nombre: "Fernanda S.", detalle: "Blefaroplastia", etiquetas: [{ t: "Sitio web", c: "web" }] },
    ],
  },
  {
    titulo: "Precalificado",
    total: "18",
    tarjetas: [
      { nombre: "Valentina M.", detalle: "Rinoplastia", etiquetas: [{ t: "Agente IA", c: "ia" }] },
      { nombre: "Tomás L.", detalle: "Abdominoplastia", etiquetas: [{ t: "Agente IA", c: "ia" }] },
      { nombre: "Isidora B.", detalle: "Lipoescultura", etiquetas: [{ t: "Seguimiento día 3", c: "seg" }] },
    ],
  },
  {
    titulo: "Evaluación agendada",
    total: "11",
    tarjetas: [
      {
        nombre: "Daniela C.",
        detalle: "Lipoescultura",
        etiquetas: [
          { t: "Agendó la IA", c: "ia" },
          { t: "En tu ficha ✓", c: "ok" },
        ],
      },
      { nombre: "Ignacio V.", detalle: "Rinoplastia", etiquetas: [{ t: "Agendó recepción", c: "seg" }] },
    ],
  },
  {
    titulo: "Asistió",
    total: "8",
    tarjetas: [
      { nombre: "Catalina H.", detalle: "Blefaroplastia", etiquetas: [{ t: "Confirmó por WhatsApp", c: "ok" }] },
      { nombre: "Matías F.", detalle: "Rinoplastia", etiquetas: [{ t: "Meta · Anuncio 1", c: "meta" }] },
    ],
  },
  {
    titulo: "Procedimiento pagado",
    total: "5 · $19,6M",
    tarjetas: [
      { nombre: "Sofía A.", detalle: "Rinoplastia · $3.900.000", etiquetas: [{ t: "Meta · Anuncio 3", c: "meta" }] },
      { nombre: "Martina G.", detalle: "Lipoescultura · $4.800.000", etiquetas: [{ t: "Reactivación", c: "rec" }] },
    ],
  },
];

const Ventana = ({ titulo, children }: { titulo: string; children: ReactNode }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#f6f8fb] text-ink shadow-2xl shadow-[#3572c4]/20">
    <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-2.5">
      <img src={LOGO} alt="" className="h-6 w-auto" />
      <span className="text-sm font-bold text-ink">{titulo}</span>
      <span className="ml-auto hidden gap-2 sm:flex">
        <span className="rounded-md border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-500">Todos los canales</span>
        <span className="rounded-md border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-500">Este mes</span>
      </span>
    </div>
    {children}
  </div>
);

export const Pie = () => <p className="mt-2 text-right text-[11px] text-gray-500">Ilustración con datos de ejemplo.</p>;

export function PipelineIlustracion() {
  return (
    <Ventana titulo="Pipeline de pacientes">
      <div className="overflow-x-auto">
        <div className="grid min-w-[760px] grid-cols-5 gap-3 p-4">
          {COLUMNAS.map((col, i) => (
            <div key={col.titulo}>
              <div
                className={`mb-2 border-t-[3px] pt-2 ${i === COLUMNAS.length - 1 ? "border-[#02b9cd]" : "border-[#3b75c0]/60"}`}
              >
                <p className="text-[12px] font-extrabold text-ink">{col.titulo}</p>
                <p className={`text-[11px] font-semibold ${i === COLUMNAS.length - 1 ? "text-[#017784]" : "text-slate-400"}`}>{col.total}</p>
              </div>
              <div className="space-y-2">
                {col.tarjetas.map((t) => (
                  <div key={t.nombre} className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm">
                    <p className="text-[12px] font-bold text-ink">{t.nombre}</p>
                    <p className="text-[11px] text-slate-500">{t.detalle}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {t.etiquetas.map((e) => (
                        <span key={e.t} className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${ESTILO_ETIQUETA[e.c]}`}>
                          {e.t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Ventana>
  );
}

const CANAL = {
  wa: { nombre: "WhatsApp", color: "bg-[#25D366]" },
  ig: { nombre: "Instagram", color: "bg-[#E1306C]" },
  web: { nombre: "Sitio web", color: "bg-[#3b75c0]" },
};

const CONVERSACIONES: { nombre: string; canal: keyof typeof CANAL; texto: string; hora: string; activa?: boolean }[] = [
  { nombre: "Camila R.", canal: "wa", texto: "Jueves a las 10:00 🙌", hora: "10:42", activa: true },
  { nombre: "Javier P.", canal: "ig", texto: "Hola! Vi el anuncio de lipo…", hora: "10:31" },
  { nombre: "Fernanda S.", canal: "web", texto: "Quiero agendar una evaluación", hora: "09:58" },
  { nombre: "Tomás L.", canal: "wa", texto: "Sí, confirmo 👍", hora: "09:15" },
  { nombre: "Daniela C.", canal: "wa", texto: "¡Muchas gracias!", hora: "ayer" },
  { nombre: "Ignacio V.", canal: "ig", texto: "¿Tienen hora el sábado?", hora: "ayer" },
];

const Burbuja = ({ de, children }: { de: "paciente" | "ia"; children: ReactNode }) =>
  de === "paciente" ? (
    <div className="max-w-[78%] self-start rounded-2xl rounded-tl-md bg-white px-3 py-2 text-[12.5px] leading-snug text-ink shadow-sm">{children}</div>
  ) : (
    <div className="max-w-[78%] self-end rounded-2xl rounded-tr-md bg-[#dff7f2] px-3 py-2 text-[12.5px] leading-snug text-ink shadow-sm">
      <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-[#017784]">Agente IA</p>
      {children}
    </div>
  );

export function BandejaIlustracion() {
  return (
    <Ventana titulo="Conversaciones">
      <div className="grid sm:grid-cols-[2fr_5fr]">
        <div className="hidden border-r border-slate-200 bg-white sm:block">
          {CONVERSACIONES.map((c) => (
            <div key={c.nombre} className={`flex items-center gap-2.5 border-b border-slate-100 px-3 py-2.5 ${c.activa ? "bg-[#eef6ff]" : ""}`}>
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[11px] font-bold text-slate-600">
                {c.nombre
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
                <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${CANAL[c.canal].color}`} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="text-[12px] font-bold text-ink">{c.nombre}</span>
                  <span className="text-[10px] text-slate-400">{c.hora}</span>
                </span>
                <span className="block truncate text-[11px] text-slate-500">{c.texto}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-2.5">
            <span className="text-[13px] font-bold text-ink">Camila R.</span>
            <span className="text-[11px] text-slate-400">· WhatsApp</span>
            <span className="ml-auto rounded-full bg-[#02b9cd]/12 px-2 py-0.5 text-[10px] font-bold text-[#017784]">Agente IA activo</span>
          </div>
          <div className="flex flex-1 flex-col gap-2 bg-[#eef1f5] p-4">
            <Burbuja de="paciente">Hola! Vi el anuncio de rinoplastia, ¿cuál es el valor?</Burbuja>
            <Burbuja de="ia">
              ¡Hola Camila! El valor referencial parte en $3.900.000 e incluye una evaluación con el doctor. Tengo horas el jueves 9 a
              las 10:00 o a las 12:30. ¿Cuál te acomoda?
            </Burbuja>
            <Burbuja de="paciente">Jueves a las 10:00 🙌</Burbuja>
            <p className="self-center rounded-full bg-white px-3 py-1 text-[10.5px] font-semibold text-green-800 shadow-sm">
              ✓ Evaluación agendada en tu ficha clínica · jue 9, 10:00
            </p>
            <div className="max-w-[78%] self-end overflow-hidden rounded-2xl rounded-tr-md bg-[#dff7f2] text-[12.5px] leading-snug text-ink shadow-sm">
              <p className="px-3 pt-2 text-[10px] font-bold uppercase tracking-wide text-[#017784]">Recordatorio automático</p>
              <p className="px-3 pb-2">Camila, mañana a las 10:00 es tu evaluación. ¿Confirmas tu asistencia?</p>
              <div className="grid grid-cols-2 border-t border-[#02b9cd]/20 text-center text-[12px] font-semibold text-[#3b75c0]">
                <span className="py-1.5">Confirmo</span>
                <span className="border-l border-[#02b9cd]/20 py-1.5">Cambiar hora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Ventana>
  );
}
