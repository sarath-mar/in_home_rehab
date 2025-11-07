// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  plugins: [
    "~/plugins/constants.js",
    "~/plugins/mixins.js"
  ],
  telemetry: {
    enabled: true,
    consent: 1,
  },
  modules: ["nuxt-icon"],
  css: ["vuetify/styles/main.sass", "~/utils/global.css"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "PADCOS",
      meta: [
        { name: "description", content: "Iris Child Development Centre in Calicut, Kerala. We provide comprehensive child development services including therapy, education, and support for children and their families." },
        { name: "keywords", content: "child development, therapy, education, Calicut, Kerala, Iris Child Development Centre" },
        { name: "author", content: "Iris Child Development Centre" },
    { property: "og:title", content: "Iris Child Development Centre - Calicut, Kerala" },
    { property: "og:description", content: "Comprehensive child development services including therapy, education, and support for children and their families in Calicut, Kerala." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://iriscdc.com" },
    { property: "og:image", content: "https://iriscdc.com/images/logo.png" }
      ],
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
        {
          href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap",
          rel: "stylesheet",
        },
        {
          rel: "canonical",
          href: "https://iriscdc.com"
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Iris Child Development Centre",
            "url": "https://iriscdc.com/",
            "logo": "https://iriscdc.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/people/Iris-Child-Development/pfbid0Lso8438Qo2yBzzcyXx36hHMSXcWRpGJgNz9325D9LoSFeGsS51569dnyi5SYPr2El/",
              "https://www.instagram.com/iris__cdc/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8891575227",
              "contactType": "Customer Service"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Calicut",
              "addressRegion": "KL",
              "postalCode": "673001",
              "addressCountry": "IN"
            }
          })
        }
      ]
    },
  },
});
// export default {
//     telemetry: {
//        enabled: true,
//        consent: true
//     }
//   }
