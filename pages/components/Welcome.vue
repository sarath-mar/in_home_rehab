<template>
  <div class="mt-10 welcome-main">
    <v-row class="align-center">
      <v-col cols="12" md="12"> 
        <v-row class="align-center">
          <v-col cols="12" md="7">
            <div>
              <h4 class="welcome-who">Who We Are</h4>
              <h2 class="heading-text">Welcome to Home Rehab</h2>
              <p class="paragraph-text mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                ea illum deleniti maiores velit eaque assumenda! Accusantium,
                dolor. Voluptate sunt quod veniam nisi officia maxime quaerat
                aut consequatur ipsum iusto!
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5"> 
            <!-- <v-img cover class="welcome-img" src="/images/doc.jpg"></v-img> -->
            <welcome-form/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WelcomeForm from "./WelcomeForm.vue";
export default {
  components: { WelcomeForm },
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
  font-size: clamp(.5em, 4vw, 1em);
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
  height: 100%;
  border-radius: 20px;
}

.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
