// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: {
    enabled: true,
    consent: 1,
  },
  modules: ["nuxt-icon"],
  css: ["vuetify/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "Yem Yem Impex",
      meta: [{ name: "description", content: "" }],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=League+Spartan:wght@400&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@1,700&family=Lato&family=Montserrat&family=Roboto&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
          rel: "stylesheet",
        },
      ],
      // href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400&display=swap",
      //     rel="stylesheet"
      //       <link rel="preconnect" href="https://fonts.googleapis.com">
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      // <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@1,700&family=Lato&family=Montserrat&family=Roboto&display=swap" rel="stylesheet">
    },
  },
});
// export default {
//     telemetry: {
//        enabled: true,
//        consent: true
//     }
//   }
