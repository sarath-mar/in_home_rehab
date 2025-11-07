<template>
  <div class="mt-10 welcome-main" id="in-home-rehab" :class="customClass">
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <!-- <v-row class="align-center"> -->
          <!-- <v-col cols="12" md="7"> -->
            <div>
              <h4 class="welcome-who ">About Komco</h4>
              <h2 class="heading-text">
                The Kozhikode Mercantile Co-operative Society Ltd  
              </h2>
              <p class="paragraph-text mt-5">
                The KOMCO was started in 17th November 1999 with the Kozhikode Revenue District limits as its area of operation. From a humble beginning the Society has made great progress with in a span of Twenty-two years and is at par with some of the major Societies in the District
              </p>
            </div>
          <!-- </v-col> -->
          <!-- <v-col cols="12" md="5"> -->
            <!-- <v-img cover class="welcome-img" src="/images/doc.jpg"></v-img> -->
            <!-- <welcome-form /> -->
          <!-- </v-col> -->
        <!-- </v-row> -->
      </v-col>
      <v-col cols="12" md="6">
        <v-img  class="welcome-img" src="https://www.komco.in/img/slider/About_Plant.png"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WelcomeForm from "./WelcomeForm.vue";
export default {
  components: { WelcomeForm },
  props:{
    customClass:{
      type:String,
      required:false
    }
  },
  data() {
    return {
      welcomeItems: [
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.welcome-li-div {
  display: flex;
}
.heading-text,.paragraph-text{
  color: var(--primary-text-color);
}
.welcome-ul {
  list-style: none;
  /* display: ; */
}
.welcome-li-div h4 {
  font-size: clamp(1em, 4vw, 1.5em);
  line-height: 1.333;
  font-weight: 900;
}
.welcome-li-div h6 {
  font-size: clamp(0.5em, 4vw, 1em);
  line-height: 1.333;
  font-weight: 900;
}
.welcome-ul li {
  margin-bottom: 30px;
}
.icon-welcome {
  font-size: 60px;
  font-weight: 900;
  color: var(--primary-text-color);
}
.welcome-img {
  height: 500px;
  img{
    object-fit: contain !important;
  }
}

.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
