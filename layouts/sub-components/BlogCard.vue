<template>
  <v-card elevation="10" class="blog-card-container">
    <v-img
      class="align-end text-white blog-card-img"
      :height="sm && xs ? 300 : 350"
      :src="details.imgUrl"
      cover
    >
      <v-card-title>Created At</v-card-title>
    </v-img>
<div class="border">

    <v-card-subtitle class="pt-4">{{ details.title }} </v-card-subtitle>

    <v-card-text class="subject">{{ details.content }}
    </v-card-text>
</div>
  </v-card>
</template>
<script>
import { useDisplay } from "vuetify";

export default {
  props: {
    details: {},
  },
  setup() {
    const { xs, md, sm, lg } = useDisplay();

    return { xs, md, sm, lg };
  },
};
</script>
<style lang="scss">
.blog-card-container {
  height: 100%;
  border: 2px solid var(--secondary-text-color);
  box-shadow: none;
}
.blog-card-container:hover {
  transform: none !important;
}
.border{
    border-top: 2px solid var(--secondary-text-color) !important;
    overflow: hidden;
}
.subject{
    height: 100px;
    overflow: hidden;
}
.blog-card-img {
  margin: 5px !important;
 
  overflow: hidden;
}
.blog-card-img .v-img__img {
  transition: transform 0.3s ease;
}
.blog-card-img .v-img__img:hover {
  transform: scale(1.2) rotate(5deg);
}
</style>
