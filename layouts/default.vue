<template>
  <div>
    <v-layout>
      <v-navigation-drawer v-model="drawer" location="right" temporary>
        <div>
          <v-list>
            <v-spacer></v-spacer>
            <Icon
              @click="drawer = !drawer"
              name="mdi-close"
              class="mx-4 close-icon"
            />
            <v-list-subheader>Yem Yem Impex</v-list-subheader>

            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              active-color="primary-text"
              color="secondary-text"
              :to="item.to"
            >
              <template v-slot:prepend>
                <Icon :name="item.icon" class="mx-3"></Icon>
              </template>

              <v-list-item-title> {{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>
      <v-app-bar
        class="app-bar"
        color="white"
        scroll-target="#scrolling-techniques-6"
      >
        <!-- :flat="isScroll ? false : true"
        :color="isScroll ? 'white' : 'transparent'" -->
        <v-row class="px-10 py-5 app-bar-row align-center">
          <v-col cols="8">
            <img src="/images/yem_logo.png" class="my-6" width="170px" alt="" />
          </v-col>
          <v-col cols="4">
            <div>
              <div class="text-end">
                <div v-if="!mdAndUp">
                  <v-app-bar-nav-icon
                  class="pl-16"
                    variant="text"
                    @click.stop="drawer = !drawer"
                  ></v-app-bar-nav-icon>
                </div>
                <div v-else>
                  <ul class="ul-items ml-16">
                    <li v-for="item in items" :key="item" class="header-route">
                      <NuxtLink :to="item.to" class="link">
                        {{ item.title }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-layout>
    <div class="middle-content">
      <slot />
    </div>
    <v-layout>
      <v-footer
        elevation="14"
        class="footer-main text-center d-flex flex-column"
      >
        <div class="mt-12">
          <!-- <v-btn
          v-for="icon in socialMedia"
          :key="icon"
          class="mx-4 footer-icon"
          :icon="icon"
          variant="text"
        > -->
          <span
            v-for="icon in socialMedia"
            :key="icon"
            class="mx-5 footer-icon"
          >
            <Icon :name="icon.icon" />
          </span>
          <!-- </v-btn> -->
        </div>

        <div class="mt-10 primary-text--text normal-text">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </div>

        <v-divider></v-divider>

        <div class="mt-10 date-footer">
          {{ new Date().getFullYear() }} — <strong>Yem Yem Impex</strong>
        </div>
      </v-footer>
    </v-layout>
  </div>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  data() {
    return {
      isScroll: false,
      scrollHeight: "",
      drawer: false,
      socialMedia: [
        { name: "Facebook", icon: "uil:facebook" },
        { name: "Twitter", icon: "uil:twitter" },
        { name: "Instagram", icon: "uil:instagram" },
        { name: "Youtube", icon: "uil:youtube" },
      ],
      items: [
        {
          title: "Home",
          value: "home",
          icon: "mdi-home",
          to: "/",
        },
        {
          title: "About Us",
          value: "About Us",
          icon: "mdi-user",
          to: "/aboutUs",
        },
        {
          title: "Products",
          value: "Products",
          icon: "mdi-archive",
          to: "/products",
        },
        // {
        //   title: "Contact",
        //   value: "Contact",
        //   icon: "mdi-contact",
        //   to: "/contact",
        // },
      ],
    };
  },
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    },
  },
};
</script>
<style>
.router-link-exact-active {
  color: var(--primary-text-color) !important;
}
.link {
  text-decoration: none;
  /* color: red; */
}
.app-bar {
  height: 90px !important;
  padding: 5px !important;
  /* background-color: rgb(160, 157, 154) !important; */
  /* display: flex; */
  /* align-items: center; */
  justify-content: center;
}
.header-route a {
  color: var(--secondary-text-color);
}
.header-icon {
  color: var(--primary-text-color);
  font-size: 30px;
}
.header-icon-1 {
  color: var(--primary-text-color);
  font-size: 23px;
}
.phone-text {
  color: var(--secondary-text-color);
  font-size: 17px;
}
.mail-text {
  font-size: 18px;
}
.carrier-text {
  text-decoration: underline;
  color: var(--primary-text-color);
  font-size: 22px;
  cursor: pointer;
}
.ul-items {
  display: flex;
  gap: 20px;
  /* background-color: #fff; */
  justify-content: space-between;
  list-style: none;
  position: relative;
}
li {
  position: relative;
  cursor: pointer;
  font-size: 20px;
}
li:hover::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-text-color);
  /* transform-origin: bottom right; */
  transition: transform 1s ease-out;
}
.close-icon {
  font-size: 30px;
  cursor: pointer;
  background-color: rgb(97, 94, 94);
  border-radius: 50%;
}
.middle-content {
  min-height: 55vh;
}
.footer-main {
  background-color: var(--secondary-text-color);
  color: white;
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
/* .ul-items li::after {
    content: "qwe";
    background-color: red;
    width: 100%;
    height: 2px;
  } */
</style>
