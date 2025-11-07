<template>
  <loader v-if="loading" />

  <v-app v-else>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-title>PADCOS</v-list-item-title>
          <v-list-item @click="navigateTo(componentNames.connect)">
            <v-list-item-title
              :class="{
                'active-component': isActiveClass(componentNames.connect),
              }"
              >Connect With Us</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="navigateTo(componentNames.gallery)">
            <v-list-item-title
              :class="{
                'active-component': isActiveClass(componentNames.gallery),
              }"
              >Gallery</v-list-item-title
            >
            </v-list-item>
          <v-list-item @click="navigateTo(componentNames.blogs)">
            <v-list-item-title>Latest News</v-list-item-title>
          </v-list-item>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>InHome</v-list-item-title>
          <v-list-item @click="navigateTo('inhome/connect')">
            <v-list-item-title>Connect With Us</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigateTo('inhome/career')">
            <v-list-item-title>Career</v-list-item-title>
          </v-list-item>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- <v-container fluid> -->
      <Icon
        v-if="!drawer"
        @click="
          () => {
            drawer = !drawer;
          }
        "
        class="c-pointer"
        name="mdi-menu"
      ></Icon>
      <!-- <v-main> -->
      <!-- <keep-alive> -->
      <component class="pa-5" :is="currentComponent" :key="currentComponent" />
      <!-- </keep-alive> -->
      <!-- </v-main> -->

      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import Blogs from '~/layouts/iris/Blogs.vue';
import Connect from "~/layouts/iris/Connect.vue";
import Gallery from "~/layouts/iris/Gallery.vue";
import Loader from "~/layouts/sub-components/Loader.vue";

export default {
  components: { Loader, Connect, Gallery, Blogs },
  data() {
    return {
      loading: true,
      drawer: true,
      currentComponent: "Connect",
      componentNames: {
        connect: "Connect",
        gallery: "Gallery",
        blogs: "Blogs",
      },
    };
  },
  mounted() {
    this.checkLoginStatus();
    this.loading = false;
  },
  methods: {
    isActiveClass(component) {
      return this.currentComponent === component;
    },
    navigateTo(component) {
      console.log(component);
      this.currentComponent = component;
    },
    logout() {
      localStorage.removeItem(this.$CONSTANTS.USER_KEY);
      localStorage.removeItem(this.$CONSTANTS.LOGIN_TIME_KEY);
      this.$router.push("/login"); // Redirect to login page after logout
    },
    checkLoginStatus() {
      // Check if the user is logged in. If not, redirect to the login page
      if (!localStorage.getItem(this.$CONSTANTS.USER_KEY)) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style>
.active-component {
  text-decoration: underline;
  text-underline-offset: 5px;
  color: var(--primary-text-color);
}
</style>
