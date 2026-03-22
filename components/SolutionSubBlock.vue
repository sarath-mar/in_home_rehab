<template>
  <div class="sub-block">
    <h3 class="sub-block__title">{{ title }}</h3>
    <ul class="sub-block__list">
      <li v-for="(item, i) in items" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
});
</script>

<style scoped lang="scss">
.sub-block + .sub-block {
  margin-top: 1.25rem;
}

.sub-block__title {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #0c4a6e;
}

.sub-block__list {
  margin: 0;
  padding-left: 1.15rem;
  color: var(--color-text-dark-muted);
  font-size: 0.92rem;
  line-height: 1.65;
}

.sub-block__list li + li {
  margin-top: 0.25rem;
}
</style>
