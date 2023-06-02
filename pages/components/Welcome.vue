<template>
  <div class="mt-10 welcome-main" id="in-home-rehab">
    <v-row class="align-center">
      <v-col cols="12" md="12">
        <v-row class="align-center">
          <v-col cols="12" md="7">
            <div>
              <h4 class="welcome-who">Who We Are</h4>
              <h2 class="heading-text">Welcome to InHome Rehab</h2>
              <p class="paragraph-text mt-5">
                As healthcare professionals, we understand the importance of
                timely and effective rehabilitation for patients recovering from
                injuries or illnesses. However, we also recognize that attending
                therapy sessions at hospitals or therapy centers can be
                challenging for many individuals due to personal or
                health-related reasons. That's why we founded InHome Rehab, a
                service that brings rehabilitation to your doorstep. Our team of
                qualified professionals is dedicated to delivering high-quality
                rehab services in the comfort of your own home. With our
                guidance and support, we aim to improve your quality of life and
                <span id="welcom-form-id">
                  help you achieve your recovery goals. Let's work together to
                  build a brighter future for you and your loved ones.
                </span>
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <!-- <v-img cover class="welcome-img" src="/images/doc.jpg"></v-img> -->
            <welcome-form />
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

.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
