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

      <div class="mt-10 primary-text--text">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div class="mt-10 date-footer">
        {{ new Date().getFullYear() }} — <strong>Yem Yem Impex</strong>
      </div>
    </v-footer>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    socialMedia: [
      { name: "Facebook", icon: "uil:facebook" },
      { name: "Twitter", icon: "uil:twitter" },
      { name: "Instagram", icon: "uil:instagram" },
      { name: "Youtube", icon: "uil:youtube" },
    ],
  }),
};
</script>
<style>
.footer-main {
  background-color: var(--primary);
  /* color: white; */
  /* height: 30vh; */
}
.date-footer {
  /* color: black; */
}
.footer-icon {
  /* color: black; */
  font-size: 27px;
  cursor: pointer;
}
.footer-icon :hover {
  color: red;
}
</style>
