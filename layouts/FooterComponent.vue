<template>
  <v-layout>
    <v-footer class="footer-main text-center d-flex flex-column">
      <div class="mt-5">
        <!-- <v-btn
          v-for="icon in socialMedia"
          :key="icon"
          class="mx-4 footer-icon"
          :icon="icon"
          variant="text"
        > -->
        <span v-for="icon in socialMedia" :key="icon" class="mx-5 footer-icon">
          <a class="social-icon text-primary" :href="icon.url"> 
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
            but often face challenges attending therapy sessions at the center.
            A team of well qualified, registered group of health professionals
            will help you to restore your health, right where you are.
          </div>
        </v-col>
        <v-col cols="12">
          <div>
            <!-- <h4 class="paragraph-text mt-5 text-primary text-center">
              Contact Us
            </h4> -->
            <!-- <hr class="" />
            <v-row class="my-2 justify-center">
              <v-col cols="12" md="4">
                <div>
                  <Icon class="header-icon-1" name="uil:phone" />
                </div>
                <div class="mt-5">
                  <h3 class="ml-2">+91 9876 543210</h3>
                  <h3 class="ml-2">+91 9874 561230</h3>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div>
                  <Icon class="header-icon-1" name="mdi-email" />
                </div>
                <div class="mt-5">
                  <span class="ml-2 mail-text">inhomerehab@gmail.com</span>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div>
                  <Icon class="header-icon-1" name="mdi-location" />
                </div>
                <div class="mt-5">
                  <span class="ml-2 mail-text">inhomerehab@gmail.com</span>
                </div>
              </v-col>
            </v-row>
            <hr /> -->
          </div>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div class="my-2 date-footer">
        {{ new Date().getFullYear() }} — <strong>In Home Rehab</strong>
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
export default {
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
.footer-main {
  background-color: var(--secondary-text-color);
  color: white;
  /* height: 30vh; */
}
.date-footer {
  color: var(--primary-text-color);
}
.footer-icon {
  color: var(--primary-text-color);
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
