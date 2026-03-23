<template>
  <div class="page-home">
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero__ambient" aria-hidden="true">
        <span class="hero__orb hero__orb--1" />
        <span class="hero__orb hero__orb--2" />
      </div>
      <div class="hero__layout container">
        <div class="hero__copy">
          <ScrollReveal>
            <p class="hero__eyebrow">Industrial supply · Worldwide</p>
            <h1 id="hero-heading" class="hero__title">
              Global Export-Import Partner for Industrial Solutions
            </h1>
            <p class="hero__sub">
              High-performance spare parts and power solutions for critical
              industries
            </p>
            <div class="hero__actions">
              <NuxtLink to="/contact#get-quote" class="hero__cta"
                >Get Quote</NuxtLink
              >
              <NuxtLink to="/solutions" class="hero__cta hero__cta--ghost"
                >Explore solutions</NuxtLink
              >
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <HomeHeroShowcase class="hero__showcase" />
        </ScrollReveal>
      </div>
    </section>

    <HomeImageMarquee />

    <section
      class="section section--dark"
      aria-labelledby="services-heading"
    >
      <div class="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Services preview"
            description="End-to-end sourcing and logistics for plants that cannot afford downtime."
          >
            <template #icon>
              <IconCog />
            </template>
          </SectionHeading>
        </ScrollReveal>
        <div class="grid-3">
          <ScrollReveal v-for="card in serviceCards" :key="card.title">
            <ServiceCard
              :title="card.title"
              :description="card.description"
              :image-src="card.imageSrc"
            >
              <template #icon>
                <component :is="card.icon" />
              </template>
            </ServiceCard>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section
      class="section section--light"
      aria-labelledby="why-heading"
    >
      <div class="container">
        <ScrollReveal>
          <SectionHeading
            variant="light"
            eyebrow="Why Ashvar"
            title="Built for reliability at scale"
            heading-id="why-heading"
          >
            <template #icon>
              <IconAward />
            </template>
          </SectionHeading>
        </ScrollReveal>
        <div class="grid-why">
          <ScrollReveal v-for="item in whyItems" :key="item.title">
            <WhyChooseItem :title="item.title" :text="item.text">
              <template #icon>
                <component :is="item.icon" />
              </template>
            </WhyChooseItem>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="section section--dark" aria-labelledby="brands-heading">
      <div class="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Product showcase"
            description="Representative equipment and components from our industrial supply portfolio."
          >
            <template #icon>
              <IconShield />
            </template>
          </SectionHeading>
        </ScrollReveal>
        <ScrollReveal>
          <BrandGrid />
        </ScrollReveal>
      </div>
    </section>

    <CTABanner
      title="Looking for reliable industrial supply?"
      button-text="Contact Us"
      to="/contact"
    />
  </div>
</template>

<script setup>
import IconCog from "~/components/icons/IconCog.vue";
import IconFlame from "~/components/icons/IconFlame.vue";
import IconBolt from "~/components/icons/IconBolt.vue";
import IconGlobe from "~/components/icons/IconGlobe.vue";
import IconShield from "~/components/icons/IconShield.vue";
import IconAward from "~/components/icons/IconAward.vue";

useSeoMeta({
  title: "Home | Ashvar — Industrial Export & Import",
  description:
    "Global export-import partner for industrial solutions. Spare parts, thermal systems, and electrical infrastructure for critical industries.",
  ogTitle: "Ashvar | Global Export-Import Partner for Industrial Solutions",
  ogDescription:
    "High-performance spare parts and power solutions for critical industries.",
  ogUrl: "https://ashvarexport.com/",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://ashvarexport.com/" }],
});

const serviceCards = [
  {
    title: "Process Industry Solutions",
    description:
      "Equipment and spares for food, FMCG, extraction, and mechanical processing lines.",
    icon: IconCog,
    imageSrc: "/images/products/1.jpeg",
  },
  {
    title: "Thermal & Infrastructure Engineering",
    description:
      "Steam systems, piping, valves, and safety-critical infrastructure components.",
    icon: IconFlame,
    imageSrc: "/images/products/2.jpeg",
  },
  {
    title: "Electrical & Power Infrastructure",
    description:
      "Panels, distribution, generators, and cabling for stable plant power.",
    icon: IconBolt,
    imageSrc: "/images/products/3.jpeg",
  },
];

const whyItems = [
  {
    title: "Niche Expertise",
    text: "Deep knowledge across process plants, thermal systems, and electrical distribution.",
    icon: IconAward,
  },
  {
    title: "Global Logistics",
    text: "Coordinated import-export lanes and documentation for time-sensitive projects.",
    icon: IconGlobe,
  },
  {
    title: "Quality Commitment",
    text: "Verified sourcing, traceability, and alignment with industry standards.",
    icon: IconShield,
  },
];
</script>

<style scoped lang="scss">
.page-home {
  background: var(--color-bg-deep);
}

.hero {
  position: relative;
  min-height: min(90vh, 820px);
  display: flex;
  align-items: center;
  padding: 3.5rem 0 2.5rem;
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);
}

.hero__ambient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 420px at 15% 20%, rgba(56, 189, 248, 0.14), transparent),
    radial-gradient(700px 380px at 85% 70%, rgba(37, 99, 235, 0.12), transparent),
    linear-gradient(165deg, #020617 0%, #0b1220 45%, #030712 100%);
  pointer-events: none;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(52px);
  opacity: 0.42;
  animation: orbDrift 22s ease-in-out infinite;
}

.hero__orb--1 {
  width: min(380px, 50vw);
  height: min(380px, 50vw);
  top: -8%;
  right: -5%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.4), transparent 68%);
}

.hero__orb--2 {
  width: min(300px, 42vw);
  height: min(300px, 42vw);
  bottom: 0;
  left: -8%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 68%);
  animation-delay: -8s;
}

@keyframes orbDrift {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-16px, 12px) scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__orb {
    animation: none;
  }
}

.hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
}

@media (min-width: 1024px) {
  .hero__layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 2rem 3rem;
  }
}

.hero__copy {
  max-width: 38rem;
}

.hero__showcase {
  width: 100%;
}

.hero__eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.hero__title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3.1rem);
  font-weight: 700;
  color: #f8fafc;
  line-height: 1.12;
}

.hero__sub {
  margin: 0 0 1.75rem;
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 38ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.98rem;
  color: #0f172a;
  background: linear-gradient(135deg, #e0f2fe 0%, #fff 100%);
  border: 1px solid rgba(56, 189, 248, 0.45);
  box-shadow: 0 14px 40px rgba(56, 189, 248, 0.22);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.hero__cta:hover {
  color: #0f172a;
  box-shadow: 0 18px 48px rgba(56, 189, 248, 0.3);
  transform: translateY(-2px);
}

.hero__cta--ghost {
  color: #e2e8f0;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: none;
  backdrop-filter: blur(10px);
}

.hero__cta--ghost:hover {
  color: #fff;
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 12px 32px rgba(2, 6, 23, 0.45);
}

.section {
  padding: 4rem 0;
}

.section--dark {
  background: var(--color-bg-dark);
}

.section--light {
  background: var(--color-bg-light);
  color: var(--color-text-dark);
}

.grid-3 {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.grid-why {
  display: grid;
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid-why {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
