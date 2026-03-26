// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Ashvar | Global Export-Import Partner for Industrial Solutions",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Ashvar delivers high-performance spare parts and power solutions for critical industries worldwide. Process industry, thermal & infrastructure, electrical & power.",
        },
        {
          name: "keywords",
          content:
            "Ashvar, import export, industrial spare parts, power solutions, FMCG equipment, boilers, generators, India",
        },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content:
            "Ashvar | Global Export-Import Partner for Industrial Solutions",
        },
        {
          property: "og:description",
          content:
            "High-performance spare parts and power solutions for critical industries.",
        },
        {
          property: "og:url",
          content: "https://ashvarexport.com",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "Ashvar | Global Export-Import Partner for Industrial Solutions",
        },
        {
          name: "twitter:description",
          content:
            "High-performance spare parts and power solutions for critical industries.",
        },
        { name: "theme-color", content: "#0b1220" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://ashvarexport.com",
        },
        { rel: "icon", type: "image/png", href: "/images/logo.png" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap",
        },
      ],
    },
  },
});
