<template>
  <div>
    <h2 class="subtitle-text-normal pt-5">Our Division</h2>
    <div class="mt-5">
      <v-row>
        <v-col
          v-for="division in divisions"
          :key="division.name"
          cols="12"
          md="4"
        >
          <DivisonCard :division="division" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import DivisonCard from "./divisonCard.vue";

export default {
  components: { DivisonCard },
  data() {
    return {
      divisions: [
        {
          name: "BUR AL HAKMAN TRADING LLC",
          place:
            "Central Fruits and Vegetables Market Al Mawelah, Muscat, Oman",
          img: "/images/common/c2.jpeg",
        },
        {
          name: "AL HAKMANI AL BROWNZA",
          place:
            "Central Fruits and Vegetables Market Al Mawelah, Muscat, Oman",
          img: "/images/common/c1.jpeg",
        },
        {
          name: "BROWNZA INTERNATIONAL VEGITABLES & FRUIT  TRADING L.L.C",
          place: "AL FATTAN JABAL ALI LABOUR BLOCK 1, DUBAI, UAE",
          img: "/images/common/c2.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
