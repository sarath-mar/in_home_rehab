<template>
  <div class="mb-5 mt-n16">
    <!-- <v-card color="secondary-text" elevation="4" class="pa-10 specaliteis">
      <v-row class="">
        <v-col
          class="speciality-col"
          cols="12"
          md="4"
          v-for="speciality in specialities"
          :key="speciality"
        >
          <div class="text-center">
            <h2 class="text-center subtitle-text">{{ speciality.name }}</h2>
            <v-img
              :src="speciality.img"
              class="align-center"
              :class="
                speciality.id === 1 ? 'mt-1' : speciality.id === 2 ? 'mt-2' : ''
              "
              :height="
                speciality.id === 1
                  ? '90px'
                  : speciality.id === 2
                  ? '60px'
                  : '80px'
              "
            ></v-img>
            <div
              v-if="speciality.id != 3 && !mdAndUp"
              class="col-line my-4"
            ></div>
            <div v-if="speciality.id != 1 && mdAndUp" class="line"></div>
          </div>
        </v-col>
      </v-row>
    </v-card> -->
    <div
      class="speciality-main-div pa-10"
      :class="mdAndUp ? 'margin-cont' : 'margin-cont-sm'"
    >
      <v-row>
        <v-col cols="12" md="8">
          <div>
            <h1
              :class="
                mdAndUp ? 'speciality-us-heading' : 'speciality-us-heading-sm'
              "
            >
              Our Speciality
            </h1>
            <div
              :class="mdAndUp ? 'speciality-content' : 'speciality-content-sm'"
            >
              <div v-for="specality in specialities" :key="specality">
                <p>{{ specality.name }}</p>
              </div>
            </div>

            <div :class="mdAndUp ? 'speciality-img' : 'speciality-img-sm'">
              <v-img
                :width="mdAndUp ? '400' : '250'"
                src="/images/p1.png"
                alt=""
              ></v-img>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4"> </v-col>
      </v-row>
    </div>
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
.speciality-content-sm {
  margin-top: 10px;
  font-weight: 900;
  font-size: 20px;
  /* color: white; */
}
.speciality-content-sm p {
  margin-top: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  gap: 30px;

  padding: 10px;
  /* color: rgb(127, 236, 127); */
  border-radius: 9px;
  /* display: flex; */
  /* padding-bottom: 30px; */
}
.speciality-content p {
  background-color: #fff;
  display: inline;
  padding: 10px;
  /* color: rgb(127, 236, 127); */
  border-radius: 9px;
}
.speciality-content {
  /* float: right; */
  margin-top: 150px;
  display: inline;
  /* background-color: white; */
  /* color: white; */
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  gap: 30px;
  /* margin-left: 170px; */
  font-weight: 900;
  font-size: 20px;
  /* margin-top: 160px; */
}
.margin-cont-sm {
  margin-top: 50px;
}
.margin-cont {
  margin-top: 100px;
}
.speciality-main-div {
  /* margin-top: 100px; */
  position: relative;
  min-height: 300px;
  background-color: rgb(127, 236, 127);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 20px;
}

.speciality-us-heading {
  /* margin-top: 160px; */
  font-size: 50px;
  /* font-size: clamp(60px, 14vw, 140px); */
  color: white;
  position: absolute;
  top: 0;
  background-color: #fff;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  color: rgb(127, 236, 127);
}
.speciality-us-heading-sm {
  margin-top: 100px;
  font-size: 40px;
  font-weight: 900;
  /* font-size: clamp(60px, 14vw, 140px); */
  color: white;
}
.speciality-img {
  position: absolute;
  top: 0;
  right: 10%;
  transform: translate(0%, -40%);
}
.speciality-img-sm {
  position: absolute;
  top: 0;
  left: 30%;
  transform: translate(-0%, -40%);
}
.specaliteis {
  border-radius: 10px;
}
.line {
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  border-radius: 20px;
  background-color: var(--primary-text-color);
  /* background-color: white; */
}
.col-line {
  /* position: absolute; */
  /* top: 0; */
  width: 100%;
  height: 2px;
  border-radius: 20px;
  background-color: white;
  /* transform: translateY(-10 deg); */
}
.speciality-col {
  position: relative;
}
</style>
