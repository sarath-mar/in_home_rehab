<template>
  <v-layout>
    <v-app-bar
      class="app-bar"
      :flat="false"
      scroll-target="#scrolling-techniques-6"
    >
      <v-row class="px-10  py-5 app-bar-row align-center">
        <v-col>
          <!-- <v-app-bar-title>in home rehab</v-app-bar-title> -->
          <img
            src="/images/in_home_rehab.jpg"
            class="mt-6"
            width="110px"
            alt=""
          />
          <!-- ../../../public/images -->
        </v-col>
        <v-col justify-center>
          <p class="text-center sample">Professionals</p>
        </v-col>
        <v-col>
          <div>
            <p class="text-end">contact us on</p>
            <p class="text-end">8714443989</p>
            <p class="text-end">8714443989</p>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      scrollHeight: "",
    };
  },
};
</script>
<style>
.app-bar {
  
  height: 120px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sample {
}
</style>
