import { useState } from "react";
import { Check, Eyebrow, Slide } from "../shared/ui";
import { inversion } from "./contenido";

export const Inversion = () => {
  const d = inversion;
  // Clic en el logo: muestra lo que no se ofrece de entrada (opción sin variable y % sobre honorario médico).
  const [extra, setExtra] = useState(false);
  const opciones = extra
    ? [...d.opciones, { ...d.sinVariable, variable: null, honorario: null, destacado: false }]
    : d.opciones;
  return (
    <Slide dark onLogoClick={() => setExtra((v) => !v)}>
      <Eyebrow>{d.eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">{d.nombre}</h2>
      <p className="mt-2 text-base text-gray-400 md:text-lg">{d.intro}</p>
      <div className={`mt-5 grid gap-4 md:gap-5 ${extra ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
        {opciones.map((o) => (
          <div
            key={o.nombre}
            className={`relative flex flex-col rounded-3xl border p-5 text-center ${o.destacado ? "border-[#00adc4]/60 bg-[#00adc4]/10" : "border-white/10 bg-white/5"} ${o.variable === null ? "precio-pop" : ""}`}
          >
            {o.destacado && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r/srgb from-[#4bacff] to-[#00adc4] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                Recomendado
              </span>
            )}
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">{o.nombre}</p>
            <p className="mt-3 text-4xl font-bold text-white md:text-[2.6rem] md:leading-none">{o.fijo}</p>
            {o.variable ? (
              <>
                <p className="mt-2 text-2xl font-bold text-[#4bacff]">
                  + {o.variable} <span className="text-sm font-semibold uppercase tracking-wide text-gray-400">{d.neto}</span>
                </p>
                {extra && <p className="precio-pop mt-1 text-[12px] text-gray-500">o {o.honorario} sobre honorario médico</p>}
              </>
            ) : (
              <p className="mt-2 text-2xl font-bold text-[#4bacff]">
                Sin % <span className="text-sm font-semibold uppercase tracking-wide text-gray-400">sobre la venta</span>
              </p>
            )}
            <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-gray-600">{d.nota}</p>
            <p className="mt-3 border-t border-white/10 pt-2.5 text-[13px] leading-snug text-gray-400">{o.desc}</p>
          </div>
        ))}
      </div>
      {extra && <p className="mt-3 text-center text-[12px] leading-snug text-gray-500">{d.honorarioNota}</p>}
      <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">{d.incluyeTitulo}</p>
      <ul className="mt-2 grid gap-x-8 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-4">
        {d.incluye.map((t) => (
          <li key={t.slice(0, 25)} className="flex gap-2 text-[13px] leading-snug text-gray-300 md:text-sm">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00adc4]" />
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-xs font-bold uppercase tracking-wide text-[#4bacff]">{d.ideal}</p>
    </Slide>
  );
};

