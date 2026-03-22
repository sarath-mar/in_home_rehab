<template>
  <section class="solution-section" :aria-labelledby="id">
    <div class="solution-section__head">
      <div class="solution-section__icon" aria-hidden="true">
        <slot name="icon" />
      </div>
      <h2 :id="id" class="solution-section__title">{{ title }}</h2>
    </div>
    <div class="solution-section__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  id: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.solution-section {
  padding: 2rem 0;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.solution-section:last-child {
  border-bottom: none;
}

.solution-section__head {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.25rem;
}

.solution-section__icon {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, #e0f2fe, #dbeafe);
  color: #0369a1;
}

.solution-section__icon :deep(svg) {
  width: 1.5rem;
  height: 1.5rem;
}

.solution-section__title {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.45rem);
  color: var(--color-text-dark);
}

.solution-section__body {
  padding-left: 0;
}

@media (min-width: 640px) {
  .solution-section__body {
    padding-left: 4rem;
  }
}
</style>
