<template>
  <component
    :is="tag"
    ref="root"
    class="reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: { type: String, default: "div" },
});

const root = ref(null);
const { isVisible } = useScrollReveal(root);
</script>
