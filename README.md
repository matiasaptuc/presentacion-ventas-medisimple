# Presentaciones de ventas MediSimple

Proyecto Vercel `presentacion-ventas-medisimple` (cuenta `matias-2284`).

| Ruta | Qué es | Contenido propio |
|---|---|---|
| `/` | Inicio: elegir entre las dos presentaciones | `src/inicio/main.tsx` |
| `/acr` | Deck Metodología ACR: implementación de 8 semanas (clínicas) | `src/acr/contenido.ts` |
| `/growthpartner` | Deck Growth Partner (profesionales y clínicas de 1 a 2 profesionales) | `src/growthpartner/contenido.ts` |

Ambos usan las mismas láminas y el mismo diseño. Basados en el Playbook de Notion (oct. 2026).

## Dónde se edita

- **Contenido común** (quiénes somos, misión, problemáticas, resultados promedio, servicios, agentes IA, bonuses, logos de clientes y la biblioteca de casos): `src/shared/contenido.tsx`.
- **Contenido de cada plan** (casos elegidos, preguntas, proceso, qué incluye, FAQ): `src/acr/contenido.ts` y `src/growthpartner/contenido.ts`.
- **Lámina de inversión** de cada plan: `src/acr/Inversion.tsx` y `src/growthpartner/Inversion.tsx` (los precios están en el `contenido.ts` de cada plan).
- **Orden de las láminas:** `src/acr/main.tsx` y `src/growthpartner/main.tsx`.
- **Diseño de las láminas:** `src/shared/laminas.tsx` (mismas clases que el deck original del lander).
- **Fotos:** `public/presentacion/clientes/` (logos y fotos de clientes) y `public/growthpartner/` (reporte de resultados).

## Durante la presentación

- `←` `→` o espacio para avanzar, `M` abre el menú de láminas.
- **Clic en el logo de la lámina "Inversión" (solo Growth Partner):** muestra la opción sin variable y el % sobre honorario médico (no se ofrecen de entrada).
- La calculadora ACR acepta los números del prospecto por URL, por ejemplo `/acr?int=400&pac=12&ticket=1500000&a=15&c=20&r=10` (interesados al mes, pacientes al mes, ticket promedio y % de mejora en Adquisición, Conversión y Recurrencia). Igual en `/growthpartner`.
- Si la pantalla es baja, cada lámina se escala sola para verse completa sin scrollear.

## Comandos

```bash
npm install
npm run dev        # http://localhost:5173/acr.html y /growthpartner.html (el build queda en dist.nosync/)
npm run build
vercel deploy --prod --yes --scope matias-2284s-projects
```

El Escritorio está en iCloud: las dependencias viven en `node_modules.nosync` (con un enlace `node_modules`) y el build en `dist.nosync`, para que la sincronización no trabe la compilación.
