<template>
  <v-layout>
    <v-footer class="footer-main text-center d-flex flex-column">
      <div class="mt-12">
        <!-- <v-btn
          v-for="icon in socialMedia"
          :key="icon"
          class="mx-4 footer-icon"
          :icon="icon"
          variant="text"
        > -->
        <span v-for="icon in socialMedia" :key="icon" class="mx-5 footer-icon">
          <Icon :name="icon.icon" />
        </span>

        <!-- </v-btn> -->
      </div>
      <v-row>
        <v-col cols="12">
          <div class="mt-10">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </div>
        </v-col>
        <v-col cols="12">
          <div>
            <h4>Contact Us</h4>
            <div class="d-flex justify-center mt-3">
              <div>
                <Icon class="header-icon-1" name="uil:phone" />
              </div>
              <div>
                <div>
                  <span class="ml-2">9876543210/9874561230</span>
                </div>
                <!-- <div>
                  <span class="ml-2">9874561230</span>
                </div> -->
              </div>
            </div>
            <div class="mt-3">
              <Icon class="header-icon-1" name="mdi-email" />
              <span class="ml-2 mail-text">inhomerehab@gmail.com</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div class="mt-10 date-footer">
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
      { name: "Facebook", icon: "uil:facebook" },
      // { name: "Twitter", icon: "mdi-indeed" },
      { name: "Instagram", icon: "uil:instagram" },
      { name: "Linkedin", icon: "uil:linkedin" },
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
</style>
