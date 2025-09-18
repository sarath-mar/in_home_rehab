<template>
  <v-layout>
    <v-footer class="footer-main text-center d-flex flex-column" id="footer">
      <div class="mt-5">
        <!-- <v-btn
          v-for="icon in socialMedia"
          :key="icon"
          class="mx-4 footer-icon"
          :icon="icon"
          variant="text"
        > -->
        <span v-for="icon in socialMedia" :key="icon" class="mx-5 footer-icon">
          <a target="_blank" class="social-icon text-white" :href="icon.url">
            <Icon :name="icon.icon" />
          </a>
        </span>

        <!-- </v-btn> -->
      </div>
      <v-row>
        <v-col cols="12">
          <div class="mt-5">
            <div class="d-flex ga-4 align-center justify-center  ">
              <!-- <Icon class="header-icon text" name="uil:phone" /> -->
              <a class="ml-2 phone-text text" href="tel:+91-04812422057"
                >Phone : 0481 2422057</a
              >
            </div>
            <div class="d-flex ga-4 align-center justify-center  mt-5">
              <!-- <Icon name="mdi-email" class="header-icon text" /> -->
              <a class="ml-2 phone-text text " href="mailto: Kalariparampiljewellers@gmail.com"
                >Gmail : kalariparampiljewellers@gmail.com</a
              >
            </div>
            <p></p>
          </div>
        </v-col>
        <v-col cols="12">
          <div>
          </div>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div class="my-2 date-footer">
        {{ new Date().getFullYear() }} — <strong>Kalariparampil</strong>
      </div>
      <div class="">
        <!-- <img
          src="/images/logo.png"
          class="my-2 mt-4 mx-4 footer-img"
          width="150"
          alt=""
        /> -->
        <p>Kalariparampil</p>
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
        url: "https://www.facebook.com/",
      },
      // { name: "Twitter", icon: "uil:twitter" },
      {
        name: "Instagram",
        icon: "uil:instagram",
        url: "https://www.instagram.com/kalariparampiljewellers?igsh=MWtyZWc2OGdodGF2Nw%3D%3D&utm_source=qr",
      },
      {
        name: "Linkedin",
        icon: "uil:linkedin",
        url: "https://www.linkedin.com/",
      },
    ],
  }),
};
</script>
<style>
.footer-main {
  background-color: black;
  color: white;
  height: 300px;
}
.date-footer {
  color: white;
}
.footer-icon {
  color: white; 
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
