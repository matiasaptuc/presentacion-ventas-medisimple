import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export const LOGO =
  "https://storage.googleapis.com/msgsndr/fYP5vfIsftUCUDfZOvjM/media/698b95cdca717cb5cec872f7.png";

/** ?v=usd muestra montos en dólares (calculadora y resultados de casos). */
export const esUsd = () => new URLSearchParams(location.search).get("v") === "usd";

export function Check({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m3.5 10.5 4.5 4.5 8.5-9.5" />
    </svg>
  );
}

const ESCALA_MINIMA = 0.6;

/**
 * Si el contenido no cabe en el alto de la pantalla, lo escala para que la lámina se vea
 * completa sin scrollear (como un deck). En celular (< 768 px de ancho) se deja el scroll normal.
 */
function useAjusteAlto() {
  const seccion = useRef<HTMLElement>(null);
  const contenido = useRef<HTMLDivElement>(null);
  const [ajuste, setAjuste] = useState({ escala: 1, alto: 0 });

  useLayoutEffect(() => {
    const s = seccion.current;
    const c = contenido.current;
    if (!s || !c) return;
    const medir = () => {
      const alto = c.offsetHeight; // no lo afecta el transform
      if (window.innerWidth < 768 || alto === 0) return setAjuste({ escala: 1, alto });
      const estilo = getComputedStyle(s);
      const disponible = window.innerHeight - parseFloat(estilo.paddingTop) - parseFloat(estilo.paddingBottom);
      const escala = Math.min(1, Math.max(ESCALA_MINIMA, disponible / alto));
      setAjuste((a) => (Math.abs(a.escala - escala) < 0.005 && a.alto === alto ? a : { escala, alto }));
    };
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(c);
    window.addEventListener("resize", medir);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", medir);
    };
  }, []);

  const estilo =
    ajuste.escala < 1
      ? { transform: `scale(${ajuste.escala})`, transformOrigin: "top center", marginBottom: ajuste.alto * (ajuste.escala - 1) }
      : undefined;
  return { seccion, contenido, estilo };
}

/** Lámina a pantalla completa; `dark` usa el fondo oscuro con los halos de marca. */
export function Slide({
  dark = false,
  onLogoClick,
  id,
  children,
}: {
  dark?: boolean;
  onLogoClick?: () => void;
  id?: string;
  children: ReactNode;
}) {
  const { seccion, contenido, estilo } = useAjusteAlto();
  return (
    <section
      ref={seccion}
      id={id}
      className={`slide relative flex min-h-svh snap-start flex-col justify-center overflow-hidden px-6 py-16 md:px-14 ${dark ? "bg-[#08080f] text-white" : "bg-white text-ink"}`}
    >
      {dark && (
        <>
          <div className="pointer-events-none absolute left-1/2 top-[-15%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#3572c4] opacity-15 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[-15%] right-[10%] h-[350px] w-[350px] rounded-full bg-[#00adc4] opacity-10 blur-[100px]" />
        </>
      )}
      <img
        src={LOGO}
        alt=""
        aria-hidden="true"
        onClick={onLogoClick}
        className="absolute right-6 top-6 z-20 h-9 w-auto select-none object-contain md:right-10 md:top-8 md:h-11"
      />
      <div ref={contenido} style={estilo} className="relative z-10 mx-auto w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
}

/** Título de lámina oscura. */
export const TituloDark = ({ children }: { children: ReactNode }) => (
  <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">{children}</h2>
);

/** Texto con el degradado de marca (azul → cian). */
export const Grad = ({ children }: { children: ReactNode }) => (
  <span className="bg-gradient-to-r from-[#4bacff] to-[#00adc4] bg-clip-text text-transparent">{children}</span>
);

/** Título de lámina clara (Archivo Black). */
export const TituloLight = ({ children }: { children: ReactNode }) => (
  <h2 className="display text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1] text-ink">{children}</h2>
);

export const Mark = ({ children }: { children: ReactNode }) => <span className="mark-brand">{children}</span>;

/** Antetítulo en mayúsculas espaciadas (láminas oscuras). */
export const Eyebrow = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`text-sm font-semibold uppercase tracking-[0.25em] text-[#4bacff] ${className}`}>{children}</p>
);

export function NavBtn({ children, onClick, label }: { children: ReactNode; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/85 text-lg font-bold text-white backdrop-blur transition-colors hover:bg-ink"
    >
      {children}
    </button>
  );
}
