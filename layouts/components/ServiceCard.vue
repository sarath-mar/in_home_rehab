<template>
  <v-card>
    <!-- max-width="344" -->
    <v-img
      :src="content.image"
      height="200px"
      cover
    ></v-img>

    <v-card-title class="service-title"> {{ content.title }} </v-card-title>

    <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->

    <!-- <v-card-actions>
      <v-btn class="service-btn" @click="show = !show" variant="text">
        {{ show ? 'View Less': 'View More' }}</v-btn
      >

      <v-spacer></v-spacer>
    </v-card-actions> -->

    <v-expand-transition>
      <div v-show="true">
        <v-divider></v-divider>

        <v-card-text class="service-text"
          >{{ content.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props:{
    content:{
      required:true
    }
  },
  data: () => ({
    show: false,
  }),
};
</script>
<style>
.service-btn {
  color: var(--primary-text-color);
}
.service-title {
  color: var(--secondary-text-color);
}
.service-text{
  min-height: 270px;
  text-align: justify;
}
</style>
