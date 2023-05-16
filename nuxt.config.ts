// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: {
    enabled: true,
    consent: 1,
  },
  modules: ['nuxt-icon'],
  css: ["vuetify/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "In Home Rehab",
      meta: [{ name: "description", content: "" }],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=League+Spartan:wght@400&display=swap",
          rel: "stylesheet",
        },
        {
          href:"https://fonts.googleapis.com/icon?family=Material+Icons",
          rel:"stylesheet"
        },
      ],
      // href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400&display=swap",
      //     rel="stylesheet"
    },
  },
});
// export default {
//     telemetry: {
//        enabled: true,
//        consent: true
//     }
//   }
