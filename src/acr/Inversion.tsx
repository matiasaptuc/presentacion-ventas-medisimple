import { Check, Eyebrow, Slide } from "../shared/ui";
import { inversion } from "./contenido";

// Mismo formato que la lámina "Oferta ACR" del deck original: lo incluido a la izquierda y el precio a la derecha.
export const Inversion = () => {
  const d = inversion;
  const mitad = Math.ceil(d.resumen.length / 2);
  return (
    <Slide dark>
      <Eyebrow>{d.eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
        {d.nombre} <span className="text-gray-500">· {d.sub}</span>
      </h2>
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[3fr_2fr]">
        <div>
          <div className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {[d.resumen.slice(0, mitad), d.resumen.slice(mitad)].map((col, i) => (
              <ul key={i} className="space-y-2.5">
                {col.map((t) => (
                  <li key={t.slice(0, 25)} className="flex gap-2.5 text-[15px] leading-snug text-gray-200 md:text-[17px]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00adc4]" />
                    {t}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">No incluye: {d.noIncluye.join(" · ")}.</p>
        </div>
        <div className="rounded-3xl border border-[#00adc4]/40 bg-[#00adc4]/10 p-8 text-center">
          <p className="text-5xl font-bold text-white md:text-6xl">{d.precio}</p>
          <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-300">{d.detalle}</p>
          <p className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-300">
            {d.cuotas}
          </p>
          <p className="mt-4 text-[13px] leading-snug text-gray-400">{d.garantia}</p>
          <p className="mt-5 border-t border-white/10 pt-4 text-sm font-bold uppercase tracking-wide text-[#4bacff]">{d.ideal}</p>
        </div>
      </div>
    </Slide>
  );
};
