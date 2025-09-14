<template>
  <div class=" welcome-main" id="about-us">
    <v-row class="align-center" no-gutters>
      <v-col class="d-flex align-center" cols="6" sm="4" md="2" >
        <img class="welcome-img" src="/images/bangles/1.jpg" alt="">
      </v-col>
      <v-col class="d-flex align-center" cols="6" sm="4" md="2" >
        <img class="welcome-img" src="/images/ear_rings/4.jpg" alt="">
      </v-col>
      <v-col class="d-flex align-center" cols="6" sm="4" md="2" >
        <img class="welcome-img" src="/images/necklace/3.jpg" alt="">
      </v-col>
      <v-col class="d-flex align-center" cols="6" sm="4" md="2" >
        <img class="welcome-img" src="/images/bangles/4.jpg" alt="">
      </v-col>
      <v-col class="d-flex align-center" cols="6" sm="4" md="2" >
        <img class="welcome-img" src="/images/rings/4.jpg" alt="">
      </v-col>
       <v-col  class="d-flex align-center" cols="6" sm="4" md="2" >
        <img class="welcome-img" src="/images/necklace/1.jpg" alt="">
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
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

<style scoped>
.welcome-li-div {
  display: flex;
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
  /* height: 50vh; */
  width: 100%;
  aspect-ratio: 3/2;
  /* border-radius: 20px; */
}

.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
