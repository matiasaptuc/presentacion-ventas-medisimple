import { Fragment, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { NavBtn } from "./ui";

export type Lamina = { titulo: string; contenido: ReactNode };

/**
 * Contenedor de la presentación: scroll con snap por lámina, barra de progreso,
 * flechas, contador y menú de láminas (M). Teclado: ← → ↑ ↓, espacio, Inicio/Fin.
 * Cada lámina debe renderizar exactamente un <section class="slide">.
 */
export function Deck({ laminas }: { laminas: Lamina[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(0);
  const [menu, setMenu] = useState(false);
  const total = laminas.length;

  const ir = useCallback((n: number) => {
    const slides = ref.current?.querySelectorAll(".slide");
    slides?.[Math.max(0, Math.min(n, slides.length - 1))]?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const slides = Array.from(el.querySelectorAll<HTMLElement>(".slide"));
      const centro = el.scrollTop + el.clientHeight / 2;
      const i = slides.findIndex((s) => centro >= s.offsetTop && centro < s.offsetTop + s.offsetHeight);
      if (i >= 0) setActual(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const actualRef = useRef(0);
  useEffect(() => {
    actualRef.current = actual;
  }, [actual]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement | null)?.tagName === "INPUT") return;
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        ir(actualRef.current + 1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        ir(actualRef.current - 1);
      } else if (e.key === "Home") ir(0);
      else if (e.key === "End") ir(total - 1);
      else if (e.key.toLowerCase() === "m") setMenu((v) => !v);
      else if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ir, total]);

  return (
    <div className="relative">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-black/20">
        <div className="h-full bg-cta transition-all duration-300" style={{ width: `${((actual + 1) / total) * 100}%` }} />
      </div>
      <button
        type="button"
        onClick={() => setMenu((v) => !v)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-ink/85 px-4 py-2 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-ink"
        title="Menú de láminas (M)"
      >
        {actual + 1} / {total}
      </button>
      {menu && (
        <nav className="fixed bottom-16 right-4 z-50 max-h-[70vh] w-72 overflow-y-auto rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-2xl backdrop-blur">
          {laminas.map((l, i) => (
            <button
              key={l.titulo + i}
              type="button"
              onClick={() => ir(i)}
              className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${i === actual ? "bg-cta text-white" : "text-gray-300 hover:bg-white/10"}`}
            >
              <span className="mr-2 text-xs text-gray-500">{i + 1}</span>
              {l.titulo}
            </button>
          ))}
        </nav>
      )}
      <div className="fixed bottom-4 left-4 z-50 flex gap-2">
        <NavBtn onClick={() => ir(actual - 1)} label="Lámina anterior">
          ←
        </NavBtn>
        <NavBtn onClick={() => ir(actual + 1)} label="Lámina siguiente">
          →
        </NavBtn>
      </div>
      <div ref={ref} className="h-svh snap-y snap-mandatory overflow-y-auto scroll-smooth">
        {laminas.map((l, i) => (
          <Fragment key={l.titulo + i}>{l.contenido}</Fragment>
        ))}
      </div>
    </div>
  );
}
