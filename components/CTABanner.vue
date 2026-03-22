<template>
  <section class="cta-banner" aria-labelledby="cta-banner-title">
    <div class="cta-banner__inner container">
      <div class="cta-banner__content">
        <h2 id="cta-banner-title" class="cta-banner__title">{{ title }}</h2>
        <p v-if="subtitle" class="cta-banner__sub">{{ subtitle }}</p>
      </div>
      <NuxtLink :to="to" class="cta-banner__btn">
        {{ buttonText }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: String,
  buttonText: { type: String, required: true },
  to: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.cta-banner {
  padding: 3rem 0;
  background:
    radial-gradient(800px 200px at 10% 50%, rgba(56, 189, 248, 0.12), transparent),
    linear-gradient(120deg, #0c4a6e 0%, #1e3a8a 50%, #172554 100%);
  border-top: 1px solid rgba(148, 163, 184, 0.15);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.cta-banner__inner {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .cta-banner__inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.cta-banner__title {
  margin: 0 0 0.35rem;
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  color: #f8fafc;
}

.cta-banner__sub {
  margin: 0;
  font-size: 0.95rem;
  color: #cbd5e1;
  max-width: 42ch;
}

.cta-banner__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #0f172a;
  background: #f8fafc;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  white-space: nowrap;
}

.cta-banner__btn:hover {
  color: #0f172a;
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}
</style>
