<template>
  <div>
    <div class="header-content">
      <header-component />
    </div>
    <div class="mt-n10 mt-md-10 px-5 px-md-10">
      <carousel />
    </div>
    <div class="mt-5">
      <!-- <div class="bread px-10">
        <bread-component />
      </div> -->
      <div class="welcome-div px-10 pb-15">
        <!-- <div class="welcome-component "> -->
        <welcome />
        <!-- </div> -->
      </div>
      <div class="px-10" id="service-provided">
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
  --primary-text-color: #89c303;
  --secondary-text-color: #12595d;
  --primary-background: #f2f4f5;
}

html {
  font-family: "League Spartan", sans-serif;
  /* main-text-color:var() */
  scroll-behavior: smooth;
}
.welcome-test {
  opacity: 0;
}
.heading-text {
  font-size: clamp(2em, 4vw, 3em);
  /* line-height: 1.333; */
  font-weight: 900;
  /* letter-spacing: 0.1rem; */
  /* margin-top: 20px; */
  color: var(--secondary-text-color);
}
.paragraph-text {
  font-size: clamp(1em, 4vw, 1.5em);
  /* font-weight: 600; */
  /* letter-spacing: 0.1rem; */
  text-align: justify;
  color: var(--secondary-text-color);
}
/* background-image: url(https://kitnew.moxcreative.com/kindera/wp-content/uploads/sites/35/2023/01/bg_img.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
} */
/* .welcome-div-main {
  min-height: 80vh;
  display: flex;
  align-items: center;
} */
.welcome-div {
  /* background-image: url(../public/images/bg_image.png); */
  /* padding: 60px 0px 90px 0px; */
  padding: 10px;

  background-color: var(--primary-background);
  /* min-height: 100vh; */
  /* margin-top: -160px; */
}
.welcome-component {
  padding: 100px 0px;
}
.bread {
  /* margin-top:230px ; */
  /* z-index: 122; */
}
.header-content {
  /* margin-top: 100px; */
}
</style>
