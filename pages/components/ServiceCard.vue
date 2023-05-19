<template>
  <v-card width="300">
    <!-- max-width="344" -->
    <v-img
      :src="product.img ? product.img : 'https://images.pexels.com/photos/15477567/pexels-photo-15477567.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'"
      height="200px"
      cover
    ></v-img>

    <v-card-title class="service-title"> {{ product.name }} </v-card-title>

    <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->

    <v-card-actions>
      <v-btn class="service-btn" @click="show = !show" variant="text">
        {{ show ? "View Less" : "View More" }}</v-btn
      >

      <v-spacer></v-spacer>

      <!-- <v-btn
        v-if="show"
        variant="text"
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
        >View Less</v-btn
      > -->
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text
          >We have expertise in providing fresh fruits online and fresh
          vegetables online and offline and sourcing the choicest of fruits and
          vegetables from around the world
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>
<style>
.service-btn {
  color: var(--primary-text-color);
  text-transform: capitalize;
}
.service-title {
  color: var(--secondary-text-color);
}
</style>
