<template>
  <div class="card-slider-container">
    <v-carousel
      :height="height"
      hide-delimiters
      show-arrows="hover"
      class="card-slider"
    >
      <template v-slot:prev="{ props }">
        <Icon @click="props.onClick" name="uil:angle-left" class="icon-text" />
      </template>
      <template v-slot:next="{ props }">
        <Icon @click="props.onClick" name="uil:angle-right" class="icon-text" />
      </template>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <img class="welcome-img" :src="slide.image" alt="" />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="card-slider-text pa-3">
      <p class="sub-one">Rose gold ceramic</p>
      <h4>B zero 1 Earrings</h4>
    </div>
  </div>
</template>
<script setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { mobile } = useDisplay();
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const height = computed(() => {
  return mobile.value ? '300' : '500';
});
</script>
<style scoped>
.welcome-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.icon-text {
  font-size: 40px;
  color: white;
  cursor: pointer;
  opacity: 0;
}
.card-slider:hover .icon-text {
  opacity: 1;
}
.card-slider {
  /* position: relative; */
  width: 100%;
}
.card-slider-text {
  /* position: absolute; */
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
  color: white;
}
.sub-one{
    font-size: 14px;
    /* font-weight: 600; */
    color: rgb(220, 214, 214);
}
.card-slider-container{
   background-color: black;
   width: 100%;
}
</style>
