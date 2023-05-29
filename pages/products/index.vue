<template>
  <div class="header-content"></div>
  <div :class="mdAndUp ? 'px-10' : 'px-5 mb-5'">
    <product-gallery />
  </div>
</template>

<script>
import productGallery from "./components/productGallery.vue";
export default {
  components: { productGallery },
};
</script>

<style>
/* .header-content {
    margin-bottom: 190px;
  } */
</style>
