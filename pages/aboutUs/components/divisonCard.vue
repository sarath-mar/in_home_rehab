<template>
  <v-card :loading="loading" class="my-2" elevation="8">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      :src="
        division.img
          ? division.img
          : 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
      "
    ></v-img>

    <!-- <v-card-item> -->
    <div class="ma-2">
      <h3>{{ division.name }}</h3>

      <!-- <v-card-subtitle> -->
        <div class="d-flex align-center " >
            <Icon name="mdi-location"></Icon>
      <p class="ml-1 mt-2">{{ division.place }}</p>
        </div>
       
    </div>
    <!-- <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon> -->
    <!-- </v-card-subtitle> -->
    <!-- </v-card-item> -->

    <v-card-text>
      <v-row align="center" class="mx-0">
        <!-- <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating> -->

        <!-- <div class="text-grey ms-4">4.5 (413)</div> -->
      </v-row>

      <!-- <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div> -->

      <!-- <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div> -->
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <!-- <v-card-title>Tonight's availability</v-card-title> -->

    <!-- <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div> -->

    <!-- <v-card-actions>
      <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),
  props: {
    division: {
      required: true,
      type: Object,
    },
  },

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
