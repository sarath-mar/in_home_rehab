// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["~/plugins/constants.js", "~/plugins/mixins.js"],
  telemetry: {
    enabled: true,
    consent: 1,
  },
  modules: ["nuxt-icon"],
  css: ["vuetify/styles/main.sass",'~/utils/global.css'],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "Iris",
      meta: [{ name: "description", content: "" }],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=League+Spartan:wght@400&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@1,700&family=Kaushan+Script&family=Lato&family=Liter&family=Montserrat&family=Roboto&display=swap",
          rel: "stylesheet",
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
