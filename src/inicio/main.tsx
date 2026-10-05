import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/styles.css";
import { Check, Grad, LOGO, Slide } from "../shared/ui";

// Página de inicio (/): elegir cuál de las dos presentaciones mostrar.
const PRESENTACIONES = [
  {
    href: "/acr",
    nombre: "Metodología ACR",
    para: "Para clínicas y centros de salud",
    puntos: ["Implementación completa en 8 semanas", "Go live en la semana 6", "Pago único"],
  },
  {
    href: "/growthpartner",
    nombre: "Growth Partner",
    para: "Para profesionales y clínicas de 1 a 2 profesionales",
    puntos: ["Sin pago de implementación", "Go live en 4 semanas", "Fijo mensual + % de la venta"],
  },
];

function Inicio() {
  return (
    <Slide dark>
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4bacff]">Presentaciones · 2026</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <img src={LOGO} alt="MediSimple" className="h-12 w-auto md:h-16" />
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">MEDISIMPLE</h1>
        </div>
        <p className="mt-4 text-base font-medium uppercase tracking-[0.2em] text-gray-400 md:text-lg">Elige la presentación</p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        {PRESENTACIONES.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors duration-200 hover:border-[#00adc4]/60 hover:bg-[#00adc4]/10 focus-visible:border-[#00adc4]/60 focus-visible:outline-none"
          >
            <p className="text-3xl font-bold tracking-tight md:text-4xl">
              <Grad>{p.nombre}</Grad>
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-400">{p.para}</p>
            <ul className="mb-6 mt-5 space-y-2">
              {p.puntos.map((t) => (
                <li key={t} className="flex gap-2.5 text-[15px] leading-snug text-gray-200 md:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00adc4]" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-auto border-t border-white/10 pt-4 text-sm font-bold uppercase tracking-wide text-[#4bacff]">
              Ver presentación <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </p>
          </a>
        ))}
      </div>
    </Slide>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Inicio />
  </StrictMode>,
);
