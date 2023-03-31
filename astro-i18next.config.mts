/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "en",
    locales: ["en", "es"],
    routes: {
      es: {
        "store": "tienda",
        "store/[...page]": "tienda/[...page]",
        "store/[slug]": "tienda/[slug]",
        "cv": "cv",
        "projects": "proyectos",
        "services": "servicios",
      }
    },
  };
  