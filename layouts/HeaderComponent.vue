<template>
  <v-layout>
    <v-navigation-drawer v-if="!lgAndUp" v-model="drawer" location="right">
      <div>
        <Icon
          name="mdi-close"
          @click="drawer = !drawer"
          class="icon-close float-right mr-5 mt-5"
        />
      </div>
      <h2 class="text-color ml-5 mt-5">Iris</h2>
      <div class="mt-5">
        <v-list-item v-for="(item, i) in items" :key="i">
          <a class="text-color" style="text-decoration: none">
            <v-list-item-title class="ml-5 list-item" @click="onClickNav(item)">
              <Icon name="mdi-greater-than" class="mr-2 text-color"></Icon
              >{{ item.title }}
            </v-list-item-title>
          </a>
        </v-list-item>
      </div>
      <div class="drawer-btn">
        <div>
          <a
            href="#connect-with-us"
            @click="drawer = false"
            style="text-decoration: none"
          >
            <v-btn class="header-btn connect"> Connect with Us</v-btn>
          </a>
        </div>
        <div class="mt-5"></div>
      </div>
    </v-navigation-drawer>
    <v-app-bar class="app-bar" :elevation="elevation">
      <v-row
        class="px-10 py-5 app-bar-row align-center"
        :class="customClass"
        v-show="lgAndUp"
      >
        <v-col cols="3">
          <img src="/images/logo.png" class="mt-2 icon-image" alt="logo" @click="onClickNav({route:'/'})" /> 
        </v-col>
        <v-col cols="6" justify-center>
          <ul class="header-list">
            <li v-for="(item, i) in items" :key="i" @click="onClickNav(item)">
              {{ item.title }}
            </li>
          </ul>
        </v-col>
        <v-col cols="3">
          <div>
            <div class="text-end contact">
              <a class="ml-2 phone-text" href="tel:+91-8891575227">
                <Icon class="header-icon-1" name="uil:phone" /> +918891575227</a
              >
            </div>
            <div class="text-end mt-2 contact">
              <a class="ml-2 mail-text" href="mailto: inhomerehab01@gmail.com"
                ><Icon name="mdi-email" class="header-icon" />
                iriscdc1@gmail.com</a
              >
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="px-10 py-5 app-bar-row align-center" v-show="!lgAndUp">
        <v-col>
          <img src="/images/logo.png" class="mt-n2 ml-n7 icon-image" alt="" @click="onClickNav({route:'/'})" />
        </v-col>
        <v-col>
          <div class="float-right mt-n5 mr-n10">
            <v-menu>
              <template v-slot:activator="{ props }">
                <!-- <v-btn color="primary" > Dropdown </v-btn> -->
                <Icon v-bind="props" class="header-icon-1" name="uil:phone" />
              </template>

              <v-list elevation="3">
                <v-list-item>
                  <v-list-item-title>
                    <Icon class="header-icon-1" name="uil:phone" />
                    <a class="ml-2 phone-text" href="tel:+91-8891575227"
                      >+918891575227</a
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <a
                      class="ml-2 phone-text"
                      href="mailto: inhomerehab01@gmail.com"
                    >
                      <Icon name="mdi-email" class="header-icon" />
                      iriscdc1@gmail.com</a
                    >
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-app-bar-nav-icon
              variant="text"
              class="ml-4 bar-icon"
              @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </div>
        </v-col>
        <!-- <v-col>
          <div>
            <div class="text-end">
              
              <span class="ml-2 phone-text">9876543210 / 9874561230</span>
            </div>
            <div class="text-end">
              <Icon class="header-icon" name="uil:fast-mail" />
              <span class="ml-2 mail-text">inhomerehab@gmail.com</span>
            </div>
          </div>
        </v-col> -->
      </v-row>
    </v-app-bar>
  </v-layout>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  props: {
    customClass: {
      type: String,
      required: false,
    },
  },
  setup() {
    // Destructure only the keys we want to use
    const { xs, lgAndUp } = useDisplay();
    return { xs, lgAndUp };
  },
  data() {
    return {
      elevation: 0,
      scrollHeight: "",
      carrierPop: false,
      drawer: false,
      items: [
        {
          title: "About Us",
          value: "foo",
          route: "/",
          hash: "#in-home-rehab",
        },
        {
          title: "Our Services",
          value: "bar",
          route: "/",
          hash: "#service-we-provide",
        },
        {
          title: "Gallery",
          value: "gallery",
          route: "/gallery",
          hash: "#why-home-therapy",
        },
        {
          title: "Blog",
          value: "fizz",
          route: "/",
          hash: "#latest-news",
        },
        {
          title: "Contact Us",
          value: "fizz",
          route: "/",
          hash: "#connect-with-us",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 50) {
        this.elevation = 4;
      } else {
        this.elevation = 0;
      }
    },
    closeIcon() {
      this.carrierPop = false;
    },
    onClickNav(item) {
      if (!item) {
        return;
      }
      this.$router.push({ path: item.route, hash: item.hash });
    },
  },
};
</script>
<style lang="scss">
.contact {
  // color:var(--tertiary-text-color)
}
.connect {
  background-color: var(--primary-text-color);
  color: var(--secondary-text-color);
}
.drawer-btn {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.text-color,
.text-color {
  color: var(--primary-text-color);
}
.icon-image {
  width: 190px;
  cursor: pointer;
}
.drawer-btn .header-btn {
  width: 140px;
  /* padding: 20px; */
  /* padding-bottom: 30px; */
}
.app-bar {
  height: 90px !important;
  padding: 5px !important;
  /* background-color: rgb(160, 157, 154) !important; */
  /* display: flex; */
  /* align-items: center; */
  justify-content: center;
}
.list-item {
  cursor: pointer;
}
.bar-icon {
  background-color: var(--primary-text-color);
  color: var(--secondary-text-color);
}
.header-icon {
  color: var(--primary-text-color);
  font-size: 26px;
}
.header-icon-1 {
  color: var(--primary-text-color);
  font-size: 23px;
  cursor: pointer;
}
.phone-text {
  // color: var(--secondary-text-color);
  font-size: 17px;
  text-decoration: none;
  color: black;
}
.mail-text {
  text-decoration: none;
  font-size: 18px;
  color: var(--primary-text-color);
  cursor: pointer;
}
.header-btn {
  text-transform: capitalize;
}
.header-list {
  display: flex;
  justify-content: space-around;
  li {
    list-style: none;
    color: var(--primary-text-color);
    font-size: 22px;
    cursor: pointer;
    position: relative;
    padding-bottom: 3px;
  }
  li::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background-color: var(--underline-color);
    transition: width 0.3s ease;
  }
  li:hover::after {
    width: 100%;
  }
}
</style>
