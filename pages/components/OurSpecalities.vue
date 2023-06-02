<template>
  <div class="mb-5 mt-10 ">
    <v-sheet
      color="secondary-text"
      elevation="4"
      class="mx-auto pa-10 specaliteis"
    >
      <v-row class="">
        <v-col class="speciality-col" cols="4" v-for="speciality in specialities" :key="speciality">
          <div class="text-center">
            <h2 class="text-center subtitle-text text-primary">{{ speciality.name }}</h2>
            <v-img
              :src="speciality.img"
              class="align-center mb-n8"
              :class="speciality.id===1 ?'mt-1':speciality.id===2 ?'mt-2':''"
              :height="speciality.id===1 ?'90px':speciality.id===2 ?'60px':'80px'"
            ></v-img>
            <div v-if="speciality.id!=1" class="line"></div>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specialities: [
        { id: 1, name: "Always Fresh", img: "/images/common/fresh.png" },
        { id: 2, name: "100% Natural", img: "/images/common/natural.png" },
        { id: 3, name: "Premium Quality", img: "/images/common/premium.png" },
      ],
    };
  },
};
</script>

<style scoped>
.specaliteis {
  border-radius: 10px;
}
.line{
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    border-radius: 20px;
    background-color: white;
}
.speciality-col{
    position: relative;
}
</style>
