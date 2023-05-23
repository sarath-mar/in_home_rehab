<template>
  
    <div class="welcome-main">
      <v-row class="align-center">
        <v-col cols="12" md="12">
          <v-row>
            <v-col cols="12">
              <div class="text-center">
                <!-- <h4 class="welcome-who">Who We Are</h4> -->
                <h2 class="welcome-main-text">Welcome to Yem Yem Impex</h2>
                <p class="welcome-secondary mt-5">
                  Equipped with the state-of-art facilities and prerequisites,
                  the Kerala based YEM YEM IMPEX is on its way to make a mark in
                  the International Fresh produce industry. Unparalleled
                  professionalism and utmost commitment have earned YEM YEM
                  IMPEX the reputation for reliability and credibility with in a
                  short span of its launch. By establishing a strong supply
                  chain comprising numerous farm producers, YEM YEM IMPEX as
                  become one of the South East Asia’s leading producers and
                  exporters of high-quality fresh fruits, vegetables, coconut
                  and egg
                </p>
                <p class="welcome-secondary mt-10">
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem ex neque, in blanditiis delectus aliquam perspiciatis
                cupiditate voluptates veniam eveniet, iure ullam quos quae
                recusandae earum beatae illo sint corrupti. -->
                </p>
              </div>
            </v-col>
            <!-- <v-col cols="12" md="5">
            <v-img cover class="welcome-img" src="/images/doc.jpg"></v-img>
          </v-col> -->
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
.welcome-main-text {
  font-size: clamp(2.5em, 4vw, 3.5em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  /* margin-top: 20px; */
  color: var(--secondary-text-color);
}
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
  height: 100%;
  border-radius: 20px;
}
.welcome-secondary {
  font-size: clamp(0.8em, 4vw, 1.3em);
  /* line-height: 1.333; */
  font-weight: 400;
  letter-spacing: 0.1rem;
  /* margin-top: 20px; */
  /* color: var(--primary-text-color); */
}
.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
