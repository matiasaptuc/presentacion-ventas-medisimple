import { Calculadora } from "./Calculadora";
import { Check, Eyebrow, Grad, LOGO, Mark, Slide, TituloDark, TituloLight } from "./ui";
import { useContenido, type Caso } from "./contenido";
import { BandejaIlustracion, Pie, PipelineIlustracion } from "./ilustraciones";

export const Portada = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4bacff]">{C.portada.anio}</p>
        <div className="mt-8 flex items-center justify-center gap-5">
          <img src={LOGO} alt="MediSimple" className="h-16 w-auto md:h-24" />
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-8xl">MEDISIMPLE</h1>
        </div>
        <p className="mt-6 text-2xl font-bold md:text-4xl">
          <Grad>{C.portada.plan}</Grad>
        </p>
        <p className="mt-8 text-base font-medium uppercase tracking-[0.2em] text-gray-400 md:text-lg">{C.portada.para}</p>
      </div>
    </Slide>
  );
};

export const QuienesSomos = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <TituloDark>¿Quiénes somos?</TituloDark>
          <ul className="mt-8 space-y-4">
            {C.quienesSomos.map((t) => (
              <li key={t.slice(0, 20)} className="flex gap-3 text-base leading-relaxed text-gray-300 md:text-lg">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4bacff]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative text-center lg:text-left">
          <span
            aria-hidden="true"
            className="absolute -top-14 left-1/2 -translate-x-1/2 select-none text-[10rem] font-bold leading-none text-[#3572c4]/20 lg:-left-6 lg:translate-x-0"
          >
            "
          </span>
          <p className="relative text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
            Lo que no se mide,
            <br />
            <Grad>no se escala</Grad>.
          </p>
          <p className="relative mt-6 text-base font-semibold uppercase tracking-[0.2em] text-gray-500">
            El principio detrás de todo lo que construimos
          </p>
        </div>
      </div>
    </Slide>
  );
};

export const Mision = () => {
  const C = useContenido();
  return (
    <Slide>
      <TituloLight>Nuestra misión</TituloLight>
      <p className="mt-8 max-w-3xl text-2xl font-bold leading-snug text-ink md:text-3xl">
        <Mark>{C.mision.destacado}</Mark>
        {C.mision.resto}
      </p>
      <ul className="mt-8 max-w-2xl space-y-4">
        {C.mision.puntos.map((t) => (
          <li key={t} className="flex items-center gap-3 text-lg font-medium text-body md:text-xl">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100">
              <Check className="h-4 w-4 text-green-700" />
            </span>
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-10 text-xl font-bold text-ink md:text-2xl">{C.mision.cierre}</p>
    </Slide>
  );
};

export const Problema = () => (
  <Slide dark>
    <TituloDark>¿El problema?</TituloDark>
    <p className="mt-10 max-w-4xl text-2xl font-medium leading-snug text-gray-300 md:text-4xl">
      Muchos profesionales invierten en marketing midiendo likes, clics y mensajes…
    </p>
    <p className="mt-8 max-w-4xl text-2xl font-bold leading-snug text-white md:text-4xl">
      El problema no es invertir en marketing: es <Grad>no saber cuántos pacientes y cuánta facturación te trae</Grad>.
    </p>
  </Slide>
);

export const Metodologia = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <TituloDark>Todos necesitan esto:</TituloDark>
      <div className="mt-14 flex items-start justify-center gap-4 md:gap-16">
        {C.pilares.map((p) => (
          <div key={p.letra} className="max-w-[16rem] text-center">
            <span className="text-[clamp(5rem,16vw,11rem)] font-bold leading-none" style={{ color: p.color }}>
              {p.letra}
            </span>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-gray-300 sm:text-sm sm:tracking-[0.15em] md:text-lg">{p.nombre}</p>
            <p className="mt-2 hidden text-sm leading-snug text-gray-500 md:block md:text-base">{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-center text-base font-semibold text-gray-300 md:text-lg">
        Y de forma transversal, <Grad>trazabilidad</Grad>: todo medido en pacientes y facturación.
      </p>
    </Slide>
  );
};

export const Problematicas = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <TituloDark>
        Problemáticas <Grad>comunes</Grad>
      </TituloDark>
      <div className="mt-8 max-w-4xl space-y-3">
        {C.problematicas.map((t, i) => (
          <div key={t.slice(0, 15)} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3572c4]/20 text-sm font-bold text-[#4bacff]">
              {i + 1}
            </span>
            <p className="text-base font-medium leading-snug text-gray-200 md:text-lg">{t}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
};

export const Promedio = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <Eyebrow>{C.promedio.eyebrow}</Eyebrow>
      <div className="mt-3">
        <TituloDark>
          Lo que cambia con <Grad>MediSimple</Grad>
        </TituloDark>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {C.promedio.kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <p className="text-5xl font-bold tracking-tight md:text-6xl">
              <Grad>{k.valor}</Grad>
            </p>
            <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-gray-300">{k.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-sm leading-relaxed text-gray-500">{C.promedio.nota}</p>
    </Slide>
  );
};

/** Barras de antes/después de un caso (mismo lenguaje visual que la calculadora). */
function Metricas({ metricas }: { metricas: Caso["metricas"] }) {
  return (
    <div className="w-full space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      {metricas.map((m) => {
        const max = Math.max(...m.barras.map((b) => b.n));
        return (
          <div key={m.titulo}>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500">{m.titulo}</p>
            <div className="mt-2 space-y-1.5">
              {m.barras.map((b) => (
                <div key={b.etiqueta} className="flex items-center gap-3">
                  <span className={`w-28 shrink-0 text-[13px] font-semibold ${b.destacado ? "text-white" : "text-gray-400"}`}>{b.etiqueta}</span>
                  <div className="h-6 flex-1 overflow-hidden rounded-md bg-white/5">
                    <div
                      className={`h-full rounded-md ${b.destacado ? "bg-gradient-to-r from-[#4bacff] to-[#00adc4]" : "bg-white/25"}`}
                      style={{ width: `${Math.max(4, (b.n / max) * 100)}%` }}
                    />
                  </div>
                  <span className={`w-[4.5rem] shrink-0 whitespace-nowrap text-right text-sm font-bold ${b.destacado ? "text-[#4bacff]" : "text-gray-400"}`}>{b.valor}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const CasoExito = ({ caso }: { caso: Caso }) => (
  <Slide dark>
    <Eyebrow>Casos de éxito</Eyebrow>
    <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">{caso.titulo}</h2>
    <div className="mt-8 grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
      <div className="space-y-5">
        <p className="text-base leading-relaxed text-gray-300 md:text-xl">{caso.problema}</p>
        <p className="rounded-2xl border border-[#00adc4]/30 bg-[#00adc4]/10 p-5 text-base font-medium leading-relaxed text-white md:text-xl">
          <strong className="text-[#00adc4]">Resultado: </strong>
          {caso.resultado}
        </p>
        <p className="text-sm text-gray-500">{caso.medicion}</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm font-semibold text-gray-400">{caso.etiqueta}</p>
        {caso.imagenes.map((img) => (
          <img key={img.src} src={img.src} alt={img.alt} className={`max-w-full ${img.clase ?? "rounded-xl"}`} />
        ))}
        <Metricas metricas={caso.metricas} />
      </div>
    </div>
  </Slide>
);

export const Rubro = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <div className="text-center">
        <TituloDark>
          Entendemos <Grad>el rubro</Grad>
        </TituloDark>
        <p className="mt-3 text-base text-gray-400 md:text-lg">Más de 40 clínicas y profesionales de la salud han confiado en nosotros</p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-10">
        {C.logosClientes.map((src) => (
          <span key={src} className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white px-3">
            <img src={src} alt="" className="max-h-14 w-auto max-w-full object-contain md:max-h-16" />
          </span>
        ))}
      </div>
      <p className="mt-6 text-center text-lg font-semibold text-gray-300">
        … <Grad>entre otros</Grad>.
      </p>
    </Slide>
  );
};

export const Solucion = () => {
  const C = useContenido();
  return (
    <Slide>
      <TituloLight>
        Nuestra <Mark>solución</Mark>
      </TituloLight>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {C.solucion.map((s, i) => (
          <div key={s.titulo} className="relative rounded-xl border-2 border-slate-200 bg-white p-6">
            <span className="display flex h-10 w-10 items-center justify-center rounded-full bg-ink text-lg text-white">{i + 1}</span>
            <h3 className="mt-4 text-lg font-extrabold text-ink">{s.titulo}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body md:text-base">{s.desc}</p>
            {i < C.solucion.length - 1 && (
              <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl font-bold text-slate-300 md:block">→</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-lg font-bold text-ink">
        Todo conectado y medido en <Mark>pacientes y facturación</Mark>.
      </p>
    </Slide>
  );
};

export const Brecha = () => (
  <Slide>
    <TituloLight>
      Lo que hoy queda <Mark>sobre la mesa</Mark>
    </TituloLight>
    <p className="mt-3 max-w-3xl text-base text-body md:text-lg">
      Tres palancas que se multiplican. Movámoslas con tus números mientras conversamos.
    </p>
    <div className="mt-6">
      <Calculadora />
    </div>
  </Slide>
);

export const Profundicemos = () => {
  const C = useContenido();
  return (
    <Slide>
      <TituloLight>
        Profundicemos en <Mark>tu negocio</Mark>
      </TituloLight>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {C.preguntas.map((g) => (
          <div key={g.area}>
            <h3 className="border-b-2 border-slate-200 pb-2 text-base font-extrabold uppercase tracking-[0.1em] text-ink">{g.area}</h3>
            <ul className="mt-4 space-y-3">
              {g.preguntas.map((q) => (
                <li key={q.slice(0, 20)} className="flex gap-2.5 text-[15px] leading-relaxed text-body md:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-tertiary" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Slide>
  );
};

export const Software = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <TituloDark>
        Todo tu <Grad>pipeline</Grad> de pacientes
      </TituloDark>
      <p className="mt-4 max-w-3xl text-base text-gray-400 md:text-lg">{C.software.sub}</p>
      <div className="mt-8">
        <PipelineIlustracion />
        <Pie />
      </div>
    </Slide>
  );
};

export const Servicios = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <TituloDark>
        Qué hacemos <Grad>por ti</Grad>
      </TituloDark>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {C.servicios.map((s, i) => (
          <div key={s.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">{s.t}</h3>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#4bacff]/40 text-sm font-bold text-[#4bacff]">
                {i + 1}
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-400 md:text-base">{s.d}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
};

export const Dashboard = () => {
  const C = useContenido();
  return (
    <Slide>
      <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr]">
        <div>
          <TituloLight>
            Reportes con <Mark>datos reales</Mark>
          </TituloLight>
          <ul className="mt-8 space-y-4">
            {C.dashboard.puntos.map((t) => (
              <li key={t.slice(0, 20)} className="flex gap-3 text-base font-medium text-body md:text-lg">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-3.5 w-3.5 text-green-700" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <figure>
          <img src={C.dashboard.img} alt={C.dashboard.alt} className="w-full rounded-2xl border-2 border-slate-200 shadow-xl" />
          <figcaption className="mt-2 text-right text-[12px] text-slate-500">{C.dashboard.pie}</figcaption>
        </figure>
      </div>
    </Slide>
  );
};

export const Bandeja = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <TituloDark>
        Todo en <Grad>un solo lugar</Grad>
      </TituloDark>
      <p className="mt-4 max-w-3xl text-base text-gray-400 md:text-lg">{C.bandeja.sub}</p>
      <div className="mt-8">
        <BandejaIlustracion />
        <Pie />
      </div>
    </Slide>
  );
};

export const PorQue = () => {
  const C = useContenido();
  return (
    <Slide>
      <TituloLight>
        ¿Por qué <Mark>trabajar con nosotros</Mark>?
      </TituloLight>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {C.porQue.map((p) => (
          <div key={p.t} className="rounded-xl border-2 border-slate-200 bg-white p-6">
            <h3 className="text-lg font-extrabold text-ink">{p.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{p.d}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
};

export const AgentesIA = () => {
  const C = useContenido();
  return (
    <Slide>
      <TituloLight>
        Agentes <Mark>IA</Mark>
      </TituloLight>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {C.agentesIA.items.map((a) => (
          <div key={a.t} className="rounded-xl border-2 border-slate-200 bg-white p-6">
            <h3 className="font-extrabold text-ink">{a.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body md:text-base">{a.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-lg font-bold text-ink">
        {C.agentesIA.dato.antes}
        <Mark>{C.agentesIA.dato.destacado}</Mark>
        {C.agentesIA.dato.despues}
      </p>
    </Slide>
  );
};

export const Proceso = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <TituloDark>
        Nuestro <Grad>proceso</Grad>
      </TituloDark>
      <p className="mt-3 max-w-3xl text-base text-gray-400 md:text-lg">{C.procesoIntro}</p>
      <div className="relative mt-10">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-[#4bacff] via-[#3572c4] to-[#00adc4] lg:left-0 lg:top-5 lg:h-0.5 lg:w-full lg:bg-gradient-to-r" />
        <div className="grid gap-8 lg:grid-cols-4 lg:gap-5">
          {C.proceso.map((f, i) => (
            <div key={f.fase} className="relative pl-14 lg:pl-0 lg:pt-14">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3572c4] to-[#00adc4] text-sm font-bold text-white shadow-lg shadow-[#4bacff]/30">
                {i + 1}
              </span>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4bacff]">{f.tiempo}</p>
              <h3 className="mt-1 text-2xl font-bold text-white">{f.fase}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-400 md:text-base">{f.resumen}</p>
              <ul className="mt-3 space-y-1.5">
                {f.detalle.map((d) => (
                  <li key={d} className="flex gap-2 text-[15px] text-gray-300">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00adc4]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export const Bonuses = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <TituloDark>
        <Grad>Bonuses!</Grad>
      </TituloDark>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {C.bonuses.map((b, i) => (
          <div key={b.t} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3572c4]/20 text-base font-bold text-[#4bacff]">
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-bold text-[#4bacff]">{b.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-300">{b.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
};

const ListaCheck = ({ titulo, items }: { titulo: string; items: string[] }) => (
  <div>
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">{titulo}</p>
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t.slice(0, 25)} className="flex gap-2.5 text-[15px] leading-snug text-gray-200 md:text-[17px]">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00adc4]" />
          {t}
        </li>
      ))}
    </ul>
  </div>
);

export const Incluye = () => {
  const p = useContenido().incluye;
  return (
    <Slide dark>
      <Eyebrow>{p.eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
        {p.nombre} <span className="text-gray-500">· {p.sub}</span>
      </h2>
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <ListaCheck titulo={p.inicio.titulo} items={p.inicio.items} />
          <ListaCheck titulo={p.mes.titulo} items={p.mes.items} />
        </div>
        <div className="rounded-3xl border border-[#00adc4]/40 bg-[#00adc4]/10 p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-300">{p.destacadoPre}</p>
          <p className="mt-1 text-5xl font-bold text-white md:text-6xl">{p.destacado}</p>
          <p className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-300">
            {p.modalidad}
          </p>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-gray-600">{p.nota}</p>
          <p className="mt-5 border-t border-white/10 pt-4 text-sm font-bold uppercase tracking-wide text-[#4bacff]">{p.ideal}</p>
        </div>
      </div>
    </Slide>
  );
};

export const Medicion = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <Eyebrow>{C.medicion.eyebrow}</Eyebrow>
      <div className="mt-3">
        <TituloDark>
          {C.medicion.titulo.antes}
        <Grad>{C.medicion.titulo.destacado}</Grad>
        {C.medicion.titulo.despues}
        </TituloDark>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {C.medicion.pasos.map((p, i) => (
          <div key={p.t} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3572c4]/20 text-base font-bold text-[#4bacff]">
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-bold text-[#4bacff]">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-300 md:text-[15px]">{p.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-[#00adc4]/40 bg-[#00adc4]/10 p-6 md:p-7">
        <h3 className="text-xl font-bold text-white md:text-2xl">{C.medicion.caja.t}</h3>
        <p className="mt-3 max-w-4xl text-base leading-relaxed text-gray-200 md:text-lg">{C.medicion.caja.d}</p>
      </div>
    </Slide>
  );
};

export const Cierre = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <div className="text-center">
        <h2 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          ¿Listo para <Grad>crecer</Grad>?
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-400 md:text-2xl">{C.cierre.texto}</p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <img src={LOGO} alt="MediSimple" className="h-12 w-auto" />
          <div className="text-left">
            <p className="text-lg font-bold text-white">MediSimple</p>
            <p className="text-sm text-gray-400">{C.cierre.contacto}</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export const Faq = () => {
  const C = useContenido();
  return (
    <Slide dark>
      <Eyebrow>{C.faq.eyebrow}</Eyebrow>
      <TituloDark>
        Preguntas <Grad>frecuentes</Grad>
      </TituloDark>
      <div className="mt-6 rounded-2xl border border-[#00adc4]/40 bg-[#00adc4]/10 p-5 md:p-6">
        <h3 className="text-xl font-bold text-white md:text-2xl">{C.faq.propiedad.t}</h3>
        <p className="mt-2 max-w-4xl text-base leading-relaxed text-gray-200 md:text-lg">{C.faq.propiedad.d}</p>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {C.faq.preguntas.map((q) => (
          <div key={q.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <h4 className="text-base font-bold text-[#4bacff] md:text-lg">{q.t}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-300 md:text-[15px]">{q.d}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
};
