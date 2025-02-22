<template>
  <v-card class="blog-card-container" variant="outlined">
    <v-img
      class="align-end text-white blog-card-img"
      :height="200"
      :src="details.imgUrl"
      cover
    >
      <!-- <v-card-title class="title">Created At</v-card-title> -->
    </v-img>
    <Icon name="mdi-account-circle" class="icon-admin"></Icon>
    <div class="border pa-3 pt-8">
      <!-- mdiAccountCircle -->
      <h1 class="title">{{ details.title }}</h1>
      <v-card-subtitle class="pt-4 created-at">{{ formatDate(details.createdAt) }} </v-card-subtitle>

      <!-- <v-card-text class="subject">{{ details.content }} </v-card-text> -->
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
  border: 1px solid var(--underline-color);
  box-shadow: none;
  cursor: pointer;
}
.blog-card-container:hover {
  transform: none !important;
}
.icon-admin {
  font-size: 70px;
  position: absolute;
  color: #c5c5c5;
  margin-left: 10px;
  top: 175px;
  background: white;
  border-radius: 50%;
}

.border {
  background-color: #f3f7fe;
  overflow: hidden;
  padding-top: 30px;
  color: var(--primary-text-color);
  height: 200px;

}
.title {
  color: var(--primary-text-color);
  font-family: "Nunito", Sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding-inline: 1rem;
}
.created-at{
    font-size: 17px;
    font-weight: 700; 
}
.subject {
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
