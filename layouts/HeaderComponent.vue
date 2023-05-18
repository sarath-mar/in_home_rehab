<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <div>
        <v-list >
          <v-spacer></v-spacer>
          <Icon @click="drawer=!drawer" name="mdi-close" class="mx-4 close-icon" />
          <v-list-subheader>Yem Yem Impex</v-list-subheader>
          
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="primary"
          >
            <template v-slot:prepend >
              <Icon :name="item.icon" class="mx-3"></Icon>
            </template>

            <v-list-item-title > {{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      class="app-bar"
      :flat="isScroll ? false : true"
      :color="isScroll ? 'white' : 'transparent'"
      scroll-target="#scrolling-techniques-6"
    >
      <v-row class="px-10 py-5 app-bar-row align-center">
        <v-col cols="8">
          <img src="/images/yem_logo.png" class="my-6" width="170px" alt="" />
        </v-col>
        <v-col cols="4">
          <div>
            <div class="text-end">
              <div v-if="!mdAndUp">
                <v-app-bar-nav-icon
                  variant="text"
                  @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>
              </div>
              <div v-else>
                <ul class="ul-items">
                  <li v-for="item in items" :key="item">{{ item.title }}</li>
                </ul>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-layout>
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
      isScroll:false,
      scrollHeight: "",
      drawer:false ,
      items: [
        {
          title: "Home",
          value: "home",
          icon:'mdi-home'
        },
        {
          title: "About Us",
          value: "About Us",
          icon:'mdi-user'
        },
        {
          title: "Products",
          value: "Products",
          icon:'mdi-archive'
        },
        {
          title: "Contact",
          value: "Contact",
          icon:'mdi-contact'
        },
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
.app-bar {
  height: 90px !important;
  padding: 5px !important;
  /* background-color: rgb(160, 157, 154) !important; */
  /* display: flex; */
  /* align-items: center; */
  justify-content: center;
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
  background-color: red;
  /* transform-origin: bottom right; */
  transition: transform 1s ease-out;
}
.close-icon{
  font-size: 30px;
  cursor: pointer;
  background-color: rgb(97, 94, 94);
  border-radius: 50%;
}
/* .ul-items li::after {
  content: "qwe";
  background-color: red;
  width: 100%;
  height: 2px;
} */
</style>
