<template>
  <v-card>
    <!-- max-width="344" -->
    <v-img
      src="https://tse3.mm.bing.net/th?id=OIP.8VPcuDF_yp6AfNH0z2uksQHaE7&pid=Api&P=0"
      height="200px"
      cover
    ></v-img>

    <v-card-title class="service-title"> Articulation disorders </v-card-title>

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

        <v-card-text
          >Children with articulation disorders are unable to produce certain
          word sounds. For example, they may substitute one sound for another —
          like saying “wed” instead of “red” or “thith” instead of “this.” Early
          intervention speech therapy can help with articulation disorders
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
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
</style>
