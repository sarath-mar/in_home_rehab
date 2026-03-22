<template>
  <div class="why-item">
    <div class="why-item__icon" aria-hidden="true">
      <slot name="icon" />
    </div>
    <div>
      <h3 class="why-item__title">{{ title }}</h3>
      <p class="why-item__text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.why-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
}

.why-item__icon {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 0.55rem;
  background: linear-gradient(135deg, #e0f2fe, #dbeafe);
  color: #0369a1;
}

.why-item__icon :deep(svg) {
  width: 1.25rem;
  height: 1.25rem;
}

.why-item__title {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  color: #0f172a;
}

.why-item__text {
  margin: 0;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.55;
}
</style>
