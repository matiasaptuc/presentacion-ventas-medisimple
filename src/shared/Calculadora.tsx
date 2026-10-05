import { useMemo, useState, type CSSProperties } from "react";
import { esUsd } from "./ui";

const CLP = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
const USD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const MILES = new Intl.NumberFormat("es-CL", { maximumFractionDigits: 0 });
const PCT = new Intl.NumberFormat("es-CL", { maximumFractionDigits: 1 });
const FACTOR = new Intl.NumberFormat("es-CL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** Valor inicial desde la URL (?int=&pac=&ticket=&a=&c=&r=) para precargar los números del prospecto. */
function param(nombre: string, porDefecto: number) {
  const valor = new URLSearchParams(location.search).get(nombre);
  const n = Number(valor);
  return valor !== null && Number.isFinite(n) && n >= 0 ? n : porDefecto;
}

// Mismos colores que las letras de la lámina "Todos necesitan esto".
const PILARES = [
  { key: "a", letra: "A", nombre: "Adquisición", desc: "Más interesados al mes", color: "#02b9cd", porDefecto: 15 },
  { key: "c", letra: "C", nombre: "Conversión", desc: "Más interesados que se vuelven pacientes", color: "#3b75c0", porDefecto: 20 },
  { key: "r", letra: "R", nombre: "Recurrencia", desc: "Más pacientes que vuelven", color: "#64b2ff", porDefecto: 10 },
] as const;

type Clave = (typeof PILARES)[number]["key"];
const MAX = 50;

function Campo({ label, value, onChange, prefijo }: { label: string; value: number; onChange: (n: number) => void; prefijo?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[15px] font-bold text-ink">{label}</span>
      <div className="flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-4 focus-within:border-ink">
        {prefijo && <span className="text-sm font-semibold text-slate-400">{prefijo}</span>}
        <input
          type="text"
          inputMode="numeric"
          value={value ? MILES.format(value) : ""}
          onChange={(e) => onChange(Number(e.target.value.replace(/\D/g, "")))}
          className="h-12 w-full bg-transparent text-lg font-bold text-ink outline-none"
          aria-label={label}
        />
      </div>
    </label>
  );
}

function SliderPilar({ pilar, valor, onChange }: { pilar: (typeof PILARES)[number]; valor: number; onChange: (n: number) => void }) {
  return (
    <label className="block rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5">
      <span className="flex items-center gap-3">
        <span className="display w-7 shrink-0 text-center text-3xl leading-none" style={{ color: pilar.color }}>
          {pilar.letra}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[15px] font-bold leading-tight text-ink">{pilar.nombre}</span>
          <span className="block text-sm leading-tight text-body">{pilar.desc}</span>
        </span>
        <span className="display text-2xl text-ink">+{valor}%</span>
      </span>
      <input
        type="range"
        min={0}
        max={MAX}
        step={1}
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-pilar mt-3 w-full"
        style={{ "--c": pilar.color, "--p": `${(valor / MAX) * 100}%` } as CSSProperties}
        aria-label={`Mejora en ${pilar.nombre}`}
      />
    </label>
  );
}

/**
 * Calculadora ACR. Hoy: pacientes × ticket. Con ACR, cada pilar multiplica:
 * interesados × (1 + A), tasa de conversión × (1 + C) e ingreso por paciente × (1 + R).
 */
export function Calculadora() {
  const usd = useMemo(esUsd, []);
  const fmt = usd ? USD : CLP;
  const [interesados, setInteresados] = useState(() => param("int", 300));
  const [pacientes, setPacientes] = useState(() => param("pac", 15));
  const [ticket, setTicket] = useState(() => param("ticket", usd ? 1_000 : 1_000_000));
  const [mejoras, setMejoras] = useState<Record<Clave, number>>(() => ({
    a: param("a", PILARES[0].porDefecto),
    c: param("c", PILARES[1].porDefecto),
    r: param("r", PILARES[2].porDefecto),
  }));

  const factor = PILARES.reduce((f, p) => f * (1 + mejoras[p.key] / 100), 1);
  const conversion = interesados > 0 ? (pacientes / interesados) * 100 : 0;
  const facturacion = pacientes * ticket;
  const pacientesPotencial = pacientes * factor;
  const potencial = facturacion * factor;
  const brechaMes = potencial - facturacion;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Campo label="¿Cuántos interesados llegan al mes?" value={interesados} onChange={setInteresados} />
        <Campo label="¿Cuántos se transforman en pacientes?" value={pacientes} onChange={setPacientes} />
        <Campo label="Ticket promedio por paciente" value={ticket} onChange={setTicket} prefijo={usd ? "USD $" : "$"} />
      </div>

      <div className="mt-5 grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <div className="space-y-3">
          {PILARES.map((p) => (
            <SliderPilar key={p.key} pilar={p} valor={mejoras[p.key]} onChange={(n) => setMejoras((m) => ({ ...m, [p.key]: n }))} />
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-base font-semibold text-body">
            Hoy conviertes el <strong className="text-ink">{PCT.format(conversion)}%</strong> de tus interesados.{" "}
            <strong className="text-ink">Cada pilar multiplica al anterior:</strong>
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {PILARES.map((p, i) => (
              <span key={p.key} className="flex items-center gap-2">
                {i > 0 && <span className="text-lg font-bold text-slate-300">×</span>}
                <span className="rounded-lg px-2.5 py-1 text-sm font-bold text-white" style={{ backgroundColor: p.color }}>
                  {p.letra} ×{FACTOR.format(1 + mejoras[p.key] / 100)}
                </span>
              </span>
            ))}
            <span className="text-lg font-bold text-slate-300">=</span>
            <span className="rounded-lg bg-ink px-2.5 py-1 text-sm font-bold text-white">
              ×{FACTOR.format(factor)} · +{Math.round((factor - 1) * 100)}%
            </span>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span className="text-sm font-bold text-ink">Hoy</span>
                <span className="text-right text-sm font-bold text-ink">
                  {MILES.format(pacientes)} pacientes · {fmt.format(Math.round(facturacion))} al mes
                </span>
              </div>
              <div className="h-7 overflow-hidden rounded-lg bg-slate-100">
                <div className="h-full rounded-lg bg-ink transition-all duration-500" style={{ width: `${Math.max(3, (1 / factor) * 100)}%` }} />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span className="text-sm font-bold text-cta-edge">Con ACR funcionando</span>
                <span className="text-right text-sm font-bold text-cta-edge">
                  {MILES.format(Math.round(pacientesPotencial))} pacientes · {fmt.format(Math.round(potencial))} al mes
                </span>
              </div>
              <div className="h-7 overflow-hidden rounded-lg bg-slate-100">
                <div className="h-full w-full rounded-lg bg-cta transition-all duration-500" />
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border-2 border-ink bg-white px-5 py-4 text-center shadow-[0_12px_35px_rgb(11,20,36,0.10)]">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-slate-500">Cada mes queda sin capturar</p>
            <p className="display mt-2 text-[clamp(2rem,4.5vw,3rem)] leading-none text-ink">
              <span className="mark-brand">{fmt.format(Math.round(brechaMes))}</span>
            </p>
            <p className="mt-2 text-base font-medium text-body">{fmt.format(Math.round(brechaMes * 12))} al año.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
