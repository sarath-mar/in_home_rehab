<template>
  <v-layout class="footer-layout">
    <v-footer
      class="footer-main text-center d-flex flex-column"
      :class="customClass"
    >
      <!-- <v-row class="footer-row">
        <v-col cols="8"> -->
      <v-col class="footer-form-col" :cols="sm ? 10 : xs ? 11 : 8">
        <WelcomeForm class="footer-form" />
      </v-col>
      <!-- </v-col>
      </v-row> -->
      <div class="mt-5">
        <!-- <v-btn
          v-for="icon in socialMedia"
          :key="icon"
          class="mx-4 footer-icon"
          :icon="icon"
          variant="text"
        > -->
        <span v-for="icon in socialMedia" :key="icon" class="mx-5 footer-icon">
          <a class="social-icon" :href="icon.url">
            <Icon :name="icon.icon" />
          </a>
        </span>

        <!-- </v-btn> -->
      </div>
      <v-row>
        <v-col cols="12">
          <div class="mt-5">
            InHome Rehab offers home-based therapy programs to improve quality
            of life for the patients recovering from the injuries or illness,
            but often face challenges attending therapy sessions at the centre.
            A team of well qualified, registered group of health professionals
            will help you to restore your health, right where you are.
          </div>
        </v-col>
        <v-col cols="12">
          <div></div>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div class="my-2 date-footer">
        {{ new Date().getFullYear() }} -
        <strong>Iris child Development Centre</strong>
      </div>
      <div class="bg-white">
        <img
          src="/images/logo.png"
          class="my-2 mt-4 mx-4 footer-img"
          width="70px"
          alt=""
        />
      </div>
    </v-footer>
  </v-layout>
</template>
<script>
import { useDisplay } from "vuetify";
import WelcomeForm from "./components/WelcomeForm.vue";
export default {
  components: { WelcomeForm },
  setup() {
    const { xs, md, sm, lg } = useDisplay();

    return { xs, md, sm, lg };
  },
  props: {
    customClass: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    socialMedia: [
      {
        name: "Facebook",
        icon: "uil:facebook",
        url: "https://www.facebook.com/profile.php?id=100092701407162",
      },
      // { name: "Twitter", icon: "uil:twitter" },
      {
        name: "Instagram",
        icon: "uil:instagram",
        url: "https://www.instagram.com/inhomerehab01/",
      },
      {
        name: "Linkedin",
        icon: "uil:linkedin",
        url: "https://www.linkedin.com/company/inhome-rehab/",
      },
    ],
  }),
};
</script>
<style>
.footer-row {
  justify-content: center;
  margin-bottom: -30px;
  z-index: 20 !important;
}
.footer-form-col {
  /* position: absolute; */
  /* top: -30px; */
  /* margin: auto; */
  width: 100%;
  margin-top: -230px;
}
.footer-main {
  background-color: #1f1f1f;
  color: white;
  /* height: 30vh; */
}
.footer-layout {
  background-color: var(--secondary-text-color);
  color: white;
  position: relative;
  height: 100%;
  margin-top: 220px;
  /* height: 30vh; */
}
.date-footer {
  color: var(--secondary-text-color);
}
.footer-icon {
  color: var(--secondary-text-color);
  font-size: 27px;
  cursor: pointer;
}
.footer-icon :hover {
  color: white;
}
.footer-img {
  background-blend-mode: lighten;
}
hr {
  height: 2px;
  background-color: rgba(26, 224, 238, 0.466);
  border: none;
}
</style>
