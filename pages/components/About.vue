<template>
  <div class="pt-15">
    <div class="about-main-div pa-10">
      <v-row>
        <v-col cols="12" md="6">
          <div>
            <h1 :class="mdAndUp ? 'about-us-heading' : 'about-us-heading-sm'">About Us</h1>
            <div class="about-img">
              <v-img
                :width="mdAndUp ? '400' : '250'"
                src="/images/products/coconut_2.png"
                alt=""
              ></v-img>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div>
            <p class="paragraph-text" :class="mdAndUp ? '' : 'mt-n5'">
              Equipped with the state-of-art facilities and prerequisites, the
              Kerala based YEM YEM IMPEX is on its way to make a mark in the
              International Fresh produce industry. Unparalleled professionalism
              and utmost commitment have earned YEM YEM IMPEX the reputation for
              reliability and credibility with in a short span of its launch. By
              establishing a strong supply chain comprising numerous farm
              producers, YEM YEM IMPEX as become one of the South East Asia’s
              leading producers and exporters of high-quality fresh fruits,
              vegetables, coconut and egg. YEM YEM IMPEX offers a wide array of
              fresh produce available in South East Asia, both seasonal and
              all-year-round types to serve market demand. The company exports
              100 percent of its output to countries in the Middle East. YEM YEM
              IMPEX offers excellent service at very competitive price to all
              customers round the year and our experience team always strives
              hard to ensure that each customer get the best of their service.
              Our clientele include leading importers and distributors in the
              Middle East as well as business corporations across the globe.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
};
</script>

<style lang="scss" scoped>
.about-us-heading{
  margin-top: 160px;
  font-size: 140px;
  /* font-size: clamp(60px, 14vw, 140px); */
  color: white;
}
.about-us-heading-sm{
  margin-top: 50px;
  font-size: 60px;
  font-weight: 900;
  /* font-size: clamp(60px, 14vw, 140px); */
  color: white;
}
.about-main-div {
  margin-top: 100px;
  position: relative;
  min-height: 400px;
  background-color: rgb(127, 236, 127);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 20px;
}
.about-img {
  position: absolute;
  top: 0;
  left: 30%;
  transform: translate(-50%, -40%);
  /* height: 200px; */
}
.image-animation {
  animation: rotation 5s infinite;
  background-image: url("/images/common/about.png");
  /* width: 100%; */
  height: 100%;
  background-size: contain;
}
.image {
  height: 300px;
}
@keyframes rotation {
  0% {
    transform: rotateX(-15deg);
  }
  100% {
    transform: rotateX(15deg);
  }
}
</style>
