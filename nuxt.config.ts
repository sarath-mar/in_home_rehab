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
      title: "Iris Child Development Centre - Calicut, Kerala | Child Therapy & Development Services",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Iris Child Development Centre in Calicut, Kerala provides comprehensive child development services including occupational therapy, speech therapy, special education, and behavioral support for children with developmental needs." },
        { name: "keywords", content: "child development centre, occupational therapy, speech therapy, special education, autism therapy, ADHD therapy, developmental delay, Calicut, Kerala, Kozhikode, child therapy, behavioral therapy, early intervention, learning disability, sensory integration" },
        { name: "author", content: "Iris Child Development Centre" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "language", content: "English" },
        { name: "revisit-after", content: "7 days" },
        { name: "rating", content: "general" },
        { name: "distribution", content: "global" },
        { name: "geo.region", content: "IN-KL" },
        { name: "geo.placename", content: "Calicut, Kerala" },
        { name: "geo.position", content: "11.2588;75.7804" },
        { name: "ICBM", content: "11.2588, 75.7804" },
        
        // Open Graph tags
        { property: "og:title", content: "Iris Child Development Centre - Calicut, Kerala | Child Therapy & Development Services" },
        { property: "og:description", content: "Comprehensive child development services including occupational therapy, speech therapy, special education, and behavioral support for children with developmental needs in Calicut, Kerala." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://iriscdc.com" },
        { property: "og:image", content: "https://iriscdc.com/images/logo.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:site_name", content: "Iris Child Development Centre" },
        { property: "og:locale", content: "en_IN" },
        
        // Twitter Card tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Iris Child Development Centre - Calicut, Kerala" },
        { name: "twitter:description", content: "Comprehensive child development services including therapy, education, and support for children and their families in Calicut, Kerala." },
        { name: "twitter:image", content: "https://iriscdc.com/images/logo.png" },
        
        // Additional SEO meta tags
        { name: "theme-color", content: "#89c303" },
        { name: "msapplication-TileColor", content: "#89c303" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        { name: "apple-mobile-web-app-title", content: "Iris CDC" },
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
        {
          rel: "alternate",
          hreflang: "en-in",
          href: "https://iriscdc.com"
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/logo.png"
        }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Iris Child Development Centre",
            "alternateName": "Iris CDC",
            "url": "https://iriscdc.com/",
            "logo": "https://iriscdc.com/images/logo.png",
            "description": "Comprehensive child development services including occupational therapy, speech therapy, special education, and behavioral support for children with developmental needs in Calicut, Kerala.",
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "Iris Child Development Centre Team"
            },
            "sameAs": [
              "https://www.facebook.com/people/Iris-Child-Development/pfbid0Lso8438Qo2yBzzcyXx36hHMSXcWRpGJgNz9325D9LoSFeGsS51569dnyi5SYPr2El/",
              "https://www.instagram.com/iris__cdc/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8891575227",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Malayalam", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Calicut",
              "addressRegion": "Kerala",
              "postalCode": "673001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "11.2588",
              "longitude": "75.7804"
            },
            "areaServed": {
              "@type": "City",
              "name": "Calicut",
              "containedInPlace": {
                "@type": "State",
                "name": "Kerala"
              }
            },
            "medicalSpecialty": [
              "Occupational Therapy",
              "Speech Therapy", 
              "Special Education",
              "Behavioral Therapy",
              "Early Intervention",
              "Sensory Integration"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Child Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Occupational Therapy",
                    "description": "Therapy to help children develop fine motor skills, sensory processing, and daily living skills"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Speech Therapy",
                    "description": "Therapy to help children develop communication and language skills"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Special Education",
                    "description": "Educational support for children with learning disabilities and developmental delays"
                  }
                }
              ]
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$"
          })
        }
      ]
    },
  }
});
