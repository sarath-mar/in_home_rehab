<template>
  <div class="page-solutions">
    <header class="page-head">
      <div class="container">
        <ScrollReveal>
          <p class="page-head__eyebrow">Solutions</p>
          <h1 class="page-head__title">Industrial capabilities</h1>
          <p class="page-head__lead">
            Export-import specialization with disciplined sourcing and
            documentation for mission-critical operations.
          </p>
        </ScrollReveal>
      </div>
    </header>

    <section class="block block--about" aria-labelledby="about-heading">
      <div class="container">
        <ScrollReveal>
          <div class="about-card">
            <div class="about-card__icon" aria-hidden="true">
              <IconGlobe />
            </div>
            <div>
              <h2 id="about-heading" class="about-card__title">About Ashvar</h2>
              <p class="about-card__text">
                Ashvar Import and Export focuses on industrial supply chains
                where precision, compliance, and delivery certainty matter. We
                bridge global manufacturers with process plants, power users,
                and infrastructure operators—managing sourcing, quality checks,
                and cross-border logistics so your teams can stay focused on
                production. Our practice spans spare parts, engineered systems,
                and electrical infrastructure, with clear communication and
                accountable execution.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section class="block block--detail" aria-labelledby="detail-heading">
      <div class="container container--narrow">
        <ScrollReveal>
          <h2 id="detail-heading" class="sr-only">Detailed solutions</h2>
        </ScrollReveal>

        <ScrollReveal>
          <SolutionSection id="process" title="Process Industry Solutions">
            <template #icon>
              <IconCog />
            </template>
            <SolutionSubBlock
              title="FMCG & Food Production"
              :items="[
                'Soap factories',
                'Edible oil refineries',
                'Chocolate plants',
                'Bakeries',
                'Feed mills',
              ]"
            />
            <SolutionSubBlock
              title="Extraction & Mechanical"
              :items="['Oil expellers', 'Industrial gearboxes']"
            />
          </SolutionSection>
        </ScrollReveal>

        <ScrollReveal>
          <SolutionSection id="thermal" title="Thermal & Infrastructure">
            <template #icon>
              <IconFlame />
            </template>
            <SolutionSubBlock
              title="Steam systems"
              :items="['Boilers', 'Piping', 'Valves']"
            />
            <SolutionSubBlock
              title="Safety"
              :items="['Firefighting systems']"
            />
          </SolutionSection>
        </ScrollReveal>

        <ScrollReveal>
          <SolutionSection id="electrical" title="Electrical & Power">
            <template #icon>
              <IconBolt />
            </template>
            <SolutionSubBlock
              title="Distribution & generation"
              :items="[
                'Electrical panels & DBs',
                'Generators',
                'High-tension cables',
              ]"
            />
          </SolutionSection>
        </ScrollReveal>
      </div>
    </section>

    <section
      class="block block--industries"
      aria-labelledby="industries-heading"
    >
      <div class="container">
        <ScrollReveal>
          <SectionHeading
            variant="light"
            eyebrow="Coverage"
            title="Industries served"
            description="Representative sectors where we support sourcing and supply programs."
            heading-id="industries-heading"
          >
            <template #icon>
              <IconBuilding />
            </template>
          </SectionHeading>
        </ScrollReveal>
        <ScrollReveal>
          <IndustriesGrid variant="light" :items="industryItems" />
        </ScrollReveal>
      </div>
    </section>

    <section class="block block--brands" aria-labelledby="brands-sol-heading">
      <div class="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Products"
            description="Representative product and equipment imagery from our supply portfolio."
            heading-id="brands-sol-heading"
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
      title="Discuss your next requirement"
      subtitle="Share specs, timelines, and delivery points—we will respond with a clear plan."
      button-text="Contact"
      to="/contact"
    />
  </div>
</template>

<script setup>
import IconCog from "~/components/icons/IconCog.vue";
import IconFlame from "~/components/icons/IconFlame.vue";
import IconBolt from "~/components/icons/IconBolt.vue";
import IconGlobe from "~/components/icons/IconGlobe.vue";
import IconBuilding from "~/components/icons/IconBuilding.vue";
import IconShield from "~/components/icons/IconShield.vue";
import IconBeaker from "~/components/icons/IconBeaker.vue";
import IconTruck from "~/components/icons/IconTruck.vue";
import IconCpu from "~/components/icons/IconCpu.vue";

useSeoMeta({
  title: "Solutions | Ashvar — Process, Thermal & Electrical",
  description:
    "Process industry solutions, thermal & infrastructure, electrical & power. FMCG, steam systems, panels, generators, and more.",
  ogTitle: "Ashvar Solutions",
  ogDescription:
    "Detailed industrial capabilities: process plants, thermal systems, electrical infrastructure.",
  ogUrl: "https://ashvarexport.com/solutions",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    { rel: "canonical", href: "https://ashvarexport.com/solutions" },
  ],
});

const industryItems = [
  { label: "FMCG & Food", icon: IconCog },
  { label: "Oil & extraction", icon: IconFlame },
  { label: "Power & energy", icon: IconBolt },
  { label: "Manufacturing", icon: IconCpu },
  { label: "Infrastructure", icon: IconBuilding },
  { label: "Chemicals", icon: IconBeaker },
  { label: "Logistics hubs", icon: IconTruck },
  { label: "Heavy process", icon: IconGlobe },
];
</script>

<style scoped lang="scss">
.page-solutions {
  background: var(--color-bg-deep);
}

.page-head {
  padding: 3.5rem 0 2.5rem;
  border-bottom: 1px solid var(--color-border);
  background:
    radial-gradient(800px 320px at 20% 0%, rgba(56, 189, 248, 0.1), transparent),
    var(--color-bg-dark);
}

.page-head__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.page-head__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 4vw, 2.65rem);
  color: #f8fafc;
}

.page-head__lead {
  margin: 0;
  max-width: 52ch;
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.block {
  padding: 3.5rem 0;
}

.block--about {
  background: var(--color-bg-dark);
}

.block--detail {
  background: var(--color-bg-light);
}

.block--industries {
  background: #e8edf3;
}

.block--brands {
  background: var(--color-bg-dark);
}

.container--narrow {
  max-width: 48rem;
}

.about-card {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: rgba(15, 23, 42, 0.55);
  box-shadow: var(--shadow-soft);
}

:global(html[data-theme="light"]) .about-card {
  border-color: rgba(15, 23, 42, 0.1);
  background: #ffffff ;
}

.about-card__icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: var(--radius-lg);
  background: rgba(56, 189, 248, 0.12);
  color: var(--color-accent);
}

.about-card__icon :deep(svg) {
  width: 1.5rem;
  height: 1.5rem;
}

.about-card__title {
  margin: 0 0 0.75rem;
  font-size: 1.35rem;
  color: var(--color-text);
}

.about-card__text {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.75;
}

@media (max-width: 640px) {
  .about-card {
    flex-direction: column;
  }
}
</style>
