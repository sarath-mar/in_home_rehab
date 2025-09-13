<template>
  <div class=" welcome-main" id="about-us">
    <v-row class="align-center" no-gutters>
      <v-col cols="3" >
        <img class="welcome-img" src="/images/1.png" alt="">
      </v-col>
      <v-col cols="3" >
        <img class="welcome-img" src="/images/4.png" alt="">
      </v-col>
      <v-col cols="3" >
        <img class="welcome-img" src="/images/3.png" alt="">
      </v-col>
      <v-col cols="3" >
        <img class="welcome-img" src="/images/4.png" alt="">
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
  height: 90vh;
  width: 100%;
  /* border-radius: 20px; */
}

.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
