<template>
  <div
    class="brand-grid"
    :class="{ 'brand-grid--light': variant === 'light' }"
    role="list"
  >
    <div
      v-for="n in count"
      :key="n"
      class="brand-grid__cell"
      role="listitem"
    >
      <img
        class="brand-grid__img"
        :src="`${basePath}/${n}.${extension}`"
        :alt="`Product image ${n}`"
        loading="lazy"
        decoding="async"
        width="400"
        height="225"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  count: { type: Number, default: 11 },
  variant: { type: String, default: "dark" },
  basePath: { type: String, default: "/images/products" },
  extension: { type: String, default: "jpeg" },
});
</script>

<style scoped lang="scss">
.brand-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .brand-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.brand-grid__cell {
  aspect-ratio: 16 / 9;
  display: block;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: rgba(15, 23, 42, 0.35);
}

.brand-grid--light .brand-grid__cell {
  border-color: rgba(15, 23, 42, 0.15);
  background: #f8fafc;
}

.brand-grid__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
