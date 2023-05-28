<template>
  <div class="header-content">
    
  </div>
  <div :class="mdAndUp ? 'px-10' : 'px-5'">
    <about-us/>
  </div>
</template>

<script>
import aboutUs from './components/aboutUs.vue';
export default {
  components: { aboutUs },};
</script>

<style>
/* .header-content {
  margin-bottom: 190px;
} */
</style>
