<template>
  <div class="header-content"></div>
  <div :class="mdAndUp ? 'px-10' : 'px-5'">
    <about-us />
  </div>
  <div class="welcome-div mt-5" :class="mdAndUp ? 'px-10' : 'px-5'">
    <mission-and-vision />
  </div>
  <div class="mt-5" :class="mdAndUp ? 'px-10' : 'px-5'">
    <division />
  </div>
</template>

<script>
import aboutUs from "./components/aboutUs.vue";
import Division from "./components/division.vue";
import MissionAndVision from "./components/missionAndVision.vue";
export default {
  components: { aboutUs, MissionAndVision, Division },
};
</script>

<style>
/* .header-content {
  margin-bottom: 190px;
} */
</style>
