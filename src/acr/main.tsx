import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/styles.css";
import { ContenidoProvider } from "../shared/contenido";
import { Deck, type Lamina } from "../shared/Deck";
import * as L from "../shared/laminas";
import { contenido } from "./contenido";
import { Inversion } from "./Inversion";

const laminas: Lamina[] = [
  { titulo: "Portada", contenido: <L.Portada /> },
  { titulo: "¿Quiénes somos?", contenido: <L.QuienesSomos /> },
  { titulo: "Nuestra misión", contenido: <L.Mision /> },
  { titulo: "¿El problema?", contenido: <L.Problema /> },
  { titulo: "Metodología ACR", contenido: <L.Metodologia /> },
  { titulo: "Problemáticas comunes", contenido: <L.Problematicas /> },
  { titulo: "Resultados promedio", contenido: <L.Promedio /> },
  ...contenido.casos.map((c) => ({ titulo: `Caso: ${c.titulo}`, contenido: <L.CasoExito caso={c} /> })),
  { titulo: "Entendemos el rubro", contenido: <L.Rubro /> },
  { titulo: "Nuestra solución", contenido: <L.Solucion /> },
  { titulo: "⭐ Calculadora ACR", contenido: <L.Brecha /> },
  { titulo: "Profundicemos en tu negocio", contenido: <L.Profundicemos /> },
  { titulo: "Pipeline de pacientes", contenido: <L.Software /> },
  { titulo: "Qué hacemos por ti", contenido: <L.Servicios /> },
  { titulo: "Reportes con datos reales", contenido: <L.Dashboard /> },
  { titulo: "Todo en un solo lugar", contenido: <L.Bandeja /> },
  { titulo: "Agentes IA", contenido: <L.AgentesIA /> },
  { titulo: "¿Por qué nosotros?", contenido: <L.PorQue /> },
  { titulo: "Nuestro proceso", contenido: <L.Proceso /> },
  { titulo: "Bonuses", contenido: <L.Bonuses /> },
  { titulo: "ACR: qué incluye", contenido: <L.Incluye /> },
  { titulo: "ACR: inversión", contenido: <Inversion /> },
  { titulo: "¿Cómo medimos los resultados?", contenido: <L.Medicion /> },
  { titulo: "Cierre", contenido: <L.Cierre /> },
  { titulo: "(extra) Preguntas frecuentes", contenido: <L.Faq /> },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContenidoProvider value={contenido}>
      <Deck laminas={laminas} />
    </ContenidoProvider>
  </StrictMode>,
);
