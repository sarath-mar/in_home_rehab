<template>
  <ul
    class="brand-grid"
    :class="{ 'brand-grid--light': variant === 'light' }"
  >
    <li
      v-for="(src, index) in images"
      :key="`${src}-${index}`"
      class="brand-grid__cell"
    >
      <img
        class="brand-grid__img"
        :src="src"
        :alt="`Product ${index + 1}`"
        loading="lazy"
        decoding="async"
        width="400"
        height="225"
      />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  variant: { type: String, default: "dark" },
  images: {
    type: Array,
    default: () => [
      "/images/products/product_1/1.jpeg",
      "/images/products/product_1/2.jpeg",
      "/images/products/product_1/3.jpeg",
      "/images/products/product_1/4.jpeg",
      "/images/products/product_2/1.jpeg",
      "/images/products/product_2/2.jpeg",
      "/images/products/product_2/3.jpeg",
      "/images/products/product_2/4.jpeg",
      "/images/products/product_3/1.jpeg",
      "/images/products/product_3/2.jpeg",
      "/images/products/product_3/3.jpeg",
      "/images/products/product_3/4.jpeg",
      "/images/products/12.jpeg",
      "/images/products/13.jpeg",
      "/images/products/14.jpeg",
      "/images/products/15.jpeg",
      "/images/products/16.jpeg",
      "/images/products/17.jpeg",
      "/images/products/edible_oil_refinery.jpeg",
      "/images/products/ept_under.jpeg",
      "/images/products/high_effect_vaccum.jpeg",
      "/images/products/refinery_oil_seperator.jpeg",
    ],
  },
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
