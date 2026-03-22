<template>
  <ul
    class="industries"
    :class="{ 'industries--light': variant === 'light' }"
    role="list"
  >
    <li v-for="item in items" :key="item.label" class="industries__item">
      <span class="industries__icon" aria-hidden="true">
        <component :is="item.icon" />
      </span>
      <span class="industries__label">{{ item.label }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
  variant: { type: String, default: "dark" },
});
</script>

<style scoped lang="scss">
.industries {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 640px) {
  .industries {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .industries {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.industries__item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: rgba(15, 23, 42, 0.45);
  color: var(--color-text);
  font-size: 0.88rem;
  font-weight: 500;
}

.industries--light .industries__item {
  border-color: rgba(15, 23, 42, 0.1);
  background: #fff;
  color: var(--color-text-dark);
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
}

.industries__icon {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.45rem;
  background: rgba(56, 189, 248, 0.15);
  color: var(--color-accent);
  flex-shrink: 0;
}

.industries__icon :deep(svg) {
  width: 1.1rem;
  height: 1.1rem;
}

.industries--light .industries__icon {
  background: #e0f2fe;
  color: #0369a1;
}
</style>
