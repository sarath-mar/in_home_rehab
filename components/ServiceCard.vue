<template>
  <article
    class="service-card"
    :class="{ 'service-card--image': !!imageSrc }"
  >
    <div v-if="imageSrc" class="service-card__media">
      <img
        class="service-card__img"
        :src="imageSrc"
        :alt="title"
        loading="lazy"
        decoding="async"
        width="400"
        height="180"
      />
    </div>
    <div v-else class="service-card__icon" aria-hidden="true">
      <slot name="icon" />
    </div>
    <h3 class="service-card__title">{{ title }}</h3>
    <p v-if="description" class="service-card__desc">{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: String,
  imageSrc: String,
});
</script>

<style scoped lang="scss">
.service-card {
  position: relative;
  padding: 1.5rem 1.35rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: linear-gradient(
    165deg,
    rgba(15, 23, 42, 0.9) 0%,
    rgba(17, 24, 39, 0.65) 100%
  );
  box-shadow: 0 16px 40px rgba(2, 6, 23, 0.35);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.service-card--image {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.service-card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-3px);
  box-shadow: 0 22px 50px rgba(2, 6, 23, 0.5);
}

.service-card__media {
  margin: 0 0 1rem;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #0f172a;
}

.service-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.service-card--image .service-card__title,
.service-card--image .service-card__desc {
  padding-left: 1.35rem;
  padding-right: 1.35rem;
}

.service-card--image .service-card__desc {
  padding-bottom: 1.35rem;
}

.service-card__icon {
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 1rem;
  display: grid;
  place-items: center;
  border-radius: 0.65rem;
  background: rgba(56, 189, 248, 0.12);
  color: var(--color-accent);
}

.service-card__icon :deep(svg) {
  width: 1.35rem;
  height: 1.35rem;
}

.service-card__title {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: var(--color-text);
}

.service-card__desc {
  margin: 0;
  font-size: 0.92rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}
</style>
