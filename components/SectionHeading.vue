<template>
  <div
    class="section-heading"
    :class="{ 'section-heading--light': variant === 'light' }"
  >
    <div v-if="$slots.icon" class="section-heading__icon" aria-hidden="true">
      <slot name="icon" />
    </div>
    <div>
      <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
      <h2
        :id="headingId || undefined"
        class="section-heading__title"
      >
        {{ title }}
      </h2>
      <p v-if="description" class="section-heading__desc">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  eyebrow: String,
  description: String,
  variant: { type: String, default: "dark" },
  headingId: String,
});
</script>

<style scoped lang="scss">
.section-heading {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 2rem;
  max-width: 48rem;
}

.section-heading__icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: rgba(15, 23, 42, 0.5);
  color: var(--color-accent);
}

.section-heading__icon :deep(svg) {
  width: 1.5rem;
  height: 1.5rem;
}

.section-heading__eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.section-heading__title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--color-text);
}

.section-heading__desc {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}

/* Explicit slate text so headings stay readable on light surfaces (theme tokens can inherit wrong context). */
.section-heading--light .section-heading__title {
  color: #0f172a;
}

.section-heading--light .section-heading__desc {
  color: #475569;
}

.section-heading--light .section-heading__icon {
  border-color: rgba(15, 23, 42, 0.12);
  background: #fff;
  color: var(--color-accent-deep);
}
</style>
