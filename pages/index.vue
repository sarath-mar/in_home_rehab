<template>
  <div>
    <div class="header-content">
      <header-component />
    </div>
    <div class="">
      <carousel />
    </div>
    <div class="mt-0">
      <!-- <div class="bread px-10">
        <bread-component />
      </div> -->
      <div class="welcome-div" :class="mdAndUp ? 'px-10' : 'px-5'">
        <div class="welcome-component pb-15">
          <welcome />
        </div>
      </div>
      <div :class="mdAndUp ? 'px-10' : 'px-5'">
        <service-provided />
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
// import Header from "../layouts/HeaderComponent.vue"
// export default {};
const scrolling = (e) => {
  console.log("hyyy");
};
import HeaderComponent from "../layouts/HeaderComponent.vue";
import FooterComponent from "../layouts/FooterComponent.vue";
import Carousel from "./components/Carousel.vue";
import Welcome from "./components/Welcome.vue";
import BreadComponent from "./components/BreadComponent.vue";
import ServiceProvided from "./components/ServiceProvided.vue";
export default {
  components: {
    HeaderComponent,
    Carousel,
    Welcome,
    FooterComponent,
    BreadComponent,
    ServiceProvided,
  },
  data: () => ({ value: 0 }),
  methods: {
    scrolling() {
      console.log("hey");
    },
  },
};
</script>

<style>
:root {
  --primary-text-color: #acd525;
  --primary: #f2f5ec;
  --secondary-text-color: #000000;
  --secondary: #f0fdf4;
}

html {
  font-family: "League Spartan", sans-serif;
  /* main-text-color:var() */
}
.welcome-test {
  opacity: 0;
}
/* background-image: url(https://kitnew.moxcreative.com/kindera/wp-content/uploads/sites/35/2023/01/bg_img.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
} */
.welcome-div-main {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
.welcome-div {
  /* background-image: url(../public/images/bg_image.png); */

  background-color: #f2f4f5;
  min-height: 100vh;
  /* margin-top: -160px; */
}
.welcome-component {
  padding-top: 70px;
}
.bread {
  /* margin-top:230px ; */
  z-index: 122;
}
.header-content {
  /* margin-top: 100px; */
}
</style>
