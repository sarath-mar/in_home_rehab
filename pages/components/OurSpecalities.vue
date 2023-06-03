<template>
  <div class="mb-5 mt-n16 ">
    <v-card 
      color="secondary-text"
      elevation="4"
      class=" pa-10 specaliteis"
    >
      <v-row class="">
      
        <v-col class="speciality-col" cols="12" md="4" v-for="speciality in specialities" :key="speciality">
          <div class="text-center">
            <h2 class="text-center subtitle-text text-primary">{{ speciality.name }}</h2>
            <v-img
              :src="speciality.img"
              class="align-center "
              :class="speciality.id===1 ?'mt-1':speciality.id===2 ?'mt-2':''"
              :height="speciality.id===1 ?'90px':speciality.id===2 ?'60px':'80px'"
            ></v-img>
            <div v-if="speciality.id!=3 && !mdAndUp"  class="col-line my-4"></div>
            <div v-if="speciality.id!=1 && mdAndUp" class="line"></div>
            <!-- <div v-if="speciality.id!=1" class="col-line"></div> -->
          </div>
          

        </v-col>
        
        <!-- <div v-if="speciality.id!=1" class="col-line"></div> -->

      </v-row>
    </v-card>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";
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
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
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
.col-line{
    /* position: absolute; */
    /* top: 0; */
    width: 100%;
    height: 2px;
    border-radius: 20px;
    background-color: white;
    /* transform: translateY(-10 deg); */
}
.speciality-col{
    position: relative;
}
</style>
