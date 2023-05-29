<template>
  <div>
    <v-sheet>
      <h2 class="subtitle-text-normal pt-5">About Us</h2>
      <div class="mt-5">
        <v-row>
          <v-col cols="12" md="7">
            <p class="paragraph-text">
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
          </v-col>
          <v-col cols="12" md="5">
            <div class="image-animation" :class="mdAndUp ? 'mt-n10' : 'mt-2 image'">

            </div>
            <!-- <img
              src="/images/common/about.png"
              width="80%"
              alt=""
              :class="mdAndUp ? 'mt-n16' : ''"
            /> -->
          </v-col>
        </v-row>
      </div>
    </v-sheet>
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

<style scoped>
.image-animation {
  animation: rotation 5s infinite;
  background-image: url("/images/common/about.png");
  /* width: 100%; */
  height: 100%;
  background-size: contain;
}
.image{
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
