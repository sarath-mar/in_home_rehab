<template>
  <div class="">
    <div class="header-content">
      <header-component />
    </div>
    <div class=" px-5 px-md-10 home-bg" 
      >
      <carousel />
    </div>
    <div class="">
      <div class="welcome-div px-10 pb-15">
        <welcome />
      </div>
      <div class="px-10" id="service-provided">
        <service-provided />
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "../layouts/HeaderComponent.vue";
import FooterComponent from "../layouts/FooterComponent.vue";
import Carousel from "./components/Carousel.vue";
import Welcome from "./components/Welcome.vue";
// import BreadComponent from "./components/BreadComponent.vue";
import ServiceProvided from "./components/ServiceProvided.vue";
export default {
  components: {
    HeaderComponent,
    Carousel,
    Welcome,
    FooterComponent,
    // BreadComponent,
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
  --primary-text-color: rgb(51, 49, 52);
  --secondary-text-color: rgb(114, 108, 107);
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
  padding-top: 0px;

  background-color: var(--primary-background);
  /* min-height: 100vh; */
  /* margin-top: -160px; */
}
.home-bg{
  
      background-image: url('https://wallpapercrafter.com/desktop1/652587-pepper-cinnamon-spices-ginger-cardamom-paprika.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
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
