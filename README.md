# paaki — Homepage

Plataforma de distribución inteligente para Latinoamérica.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment)

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

```bash
npx vercel
```

O conecta el repositorio en [vercel.com](https://vercel.com) y despliega automáticamente.

## Estructura

```
src/
  app/
    globals.css      # Estilos globales + Tailwind
    layout.tsx       # Root layout + metadata SEO
    page.tsx         # Homepage completa (todos los componentes)
```

## Personalización

### Logo
El logo SVG está definido en el componente `PaakiLogo` dentro de `page.tsx`. Para usar la imagen PNG oficial, reemplaza con `next/image`.

### Fotografía real
Los `PhotoCell` del hero están listos para recibir `<Image>` de Next.js. Reemplaza los `div` de color por:
```tsx
import Image from "next/image";
<Image src="/hero-hogar.jpg" alt="Hogar eficiente" fill className="object-cover" />
```

### Productos
Actualiza el array `PRODUCTS` en `page.tsx` con los productos reales del catálogo.

### Colores de marca
El verde principal `#1a7a3e` está hardcodeado en Tailwind classes y puede centralizarse en `tailwind.config.ts` bajo `colors.brand`.
