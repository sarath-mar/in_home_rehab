<template>
  <div class="mt-10 welcome-main" id="in-home-rehab" :class="customClass">
    <v-row class="align-center">
      <v-col cols="12" md="12">
        <v-row class="align-center">
          <v-col cols="12" md="7">
            <div>
              <h4 class="welcome-who">Who We Are</h4>
              <h2 class="heading-text">
                Welcome to Iris child Development Center
              </h2>
              <p class="paragraph-text mt-5">
                Based in Calicut, Iris Child Development Centre was founded in
                2023 with the belief that each child is unique and deserves the
                support needed to reach their fullest potential. We focus on
                early identification and intervention, ensuring that children
                get the help they need at the right time. Our goals go beyond
                therapy – we aim to educate parents and the community, promote
                inclusion, and foster societal acceptance. With a foundation in
                evidence-based practices, we’re here to create a caring,
                supportive environment where children can grow, learn, and
                thrive!
                <span id="welcom-form-id">
                  Let's work together to build a brighter future for you
                  and your loved ones.
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
