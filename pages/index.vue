<template>
  <div>
    <div class="header-content">
    </div>
    <div class="">
      <carousel />
    </div>
    <div class="mt-0">
      <div class="welcome-div" :class="mdAndUp ? 'px-10' : 'px-5'">
        <div class="welcome-component">
          <!--  pb-5 --> 
          <welcome />
        </div>
      </div>
      <div :class="mdAndUp ? 'px-10' : 'px-5'">
        <service-provided />
      </div>
      <div class="bread mb-n16" :class="mdAndUp ? 'px-10' : 'px-5'">
        <bread-component />
      </div>
      <div>
        <contact-us />
      </div>
    </div>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";
import Carousel from "./components/Carousel.vue";
import Welcome from "./components/Welcome.vue";
import BreadComponent from "./components/BreadComponent.vue";
import ServiceProvided from "./components/OurProducts.vue";
import ContactUs from "./components/ContactUs.vue";
export default {
  components: {
    Carousel,
    Welcome,
    BreadComponent,
    ServiceProvided,
    ContactUs,
  },
  data: () => ({ value: 0 }),
  methods: {},
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
};
</script>

<style>
:root {
  /*  #acd525; green  */
  /*  #003265; blue  */
  /*  #acd525; green  */
  --primary-text-color: #003265;  /*green */
  --primary: #f2f5ec;
  --secondary-text-color: #cf1113;
  --secondary: #f0fdf4;
}

html {
  /* font-family: "League Spartan", sans-serif; */

  /* font-family: 'Courier Prime', monospace; */
/* font-family: 'Lato', sans-serif; */
font-family: 'Montserrat', sans-serif;
/* font-family: 'Roboto', sans-serif; */
  /* main-text-color:var() */
}
.heading-text {
  font-size: clamp(2em, 4vw, 3em);
 /* font-style: italic; */
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  color: var(--primary-text-color)
}
.paragraph-text {
  font-size: clamp(1em, 4vw, 1.2em);
  font-weight: 500;
  /* font-style: italic; */
  text-indent: 100px;
  text-align: justify;
  /* letter-spacing: 0.1rem; */
}
.subtitle-text {
  font-size: clamp(1em, 4vw, 1.5em);
  font-weight: 500;
  /* font-style: italic; */
  font-family: 'Kaushan Script', cursive;
  color: var(--secondary-text-color);
  /* letter-spacing: 0.1rem; */
}
.normal-text{
  /* font-style: italic; */
}
.subtitle-text-normal{
  font-size: clamp(1em, 4vw, 1.5em);
  font-weight: 700;
  /* text-decoration: underline ; */
  /* font-style: italic; */
  color: var(--secondary-text-color);
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
  /* min-height: 100vh; */
  /* margin-top: -160px; */
}
.welcome-component {
  /* padding-top: 30px; */
}
.bread {
  /* margin-top:230px ; */
  z-index: 122;
}
.header-content {
  margin-bottom: 90px;
}
</style>
