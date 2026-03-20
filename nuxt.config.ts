// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "Ashvar Import and Export | Coming Soon",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Ashvar Import and Export is launching soon. We provide trusted global import and export solutions.",
        },
        {
          name: "keywords",
          content:
            "Ashvar Import and Export, import export, global trade, coming soon",
        },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Ashvar Import and Export | Coming Soon",
        },
        {
          property: "og:description",
          content:
            "Ashvar Import and Export is launching soon. Trusted global import and export services.",
        },
        {
          property: "og:url",
          content: "https://ashvarimportexport.com",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Ashvar Import and Export | Coming Soon",
        },
        {
          name: "twitter:description",
          content:
            "Ashvar Import and Export is launching soon. Trusted global import and export services.",
        },
        { name: "theme-color", content: "#0f172a" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://ashvarimportexport.com",
        },
      ],
    },
  },
});
