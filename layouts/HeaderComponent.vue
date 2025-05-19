<template>
  <v-layout>
    <v-navigation-drawer v-if="!mdAndUp" v-model="drawer" location="right">
      <div>
        <Icon
          name="mdi-close"
          @click="drawer = !drawer"
          class="icon-close  float-right mr-5 mt-5"
        />
      </div>
      <h2 class=" ml-5 mt-5">Zaffra</h2>
      <div class="mt-5">
        <!-- <v-list :items="items" @click="onClickNav"></v-list> -->
        <v-list-item v-for="(item, i) in items" :key="i">
          <!-- <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template> -->
          <a :href="item.to" class="text-black" style="text-decoration: none">
            <v-list-item-title
              class="ml-5 list-item"
              @click="onClickNav(item.value)"
            >
              {{ item.title }}
            </v-list-item-title>
          </a>
        </v-list-item>
      </div>
      <!-- <div>
        <v-sheet elevation="2" class="sheet" >Connect With Us</v-sheet>
        <v-sheet elevation="2" >Carriers</v-sheet>
      </div> -->
      <!-- <div class="drawer-btn">
        <div>
          <a href="#welcom-form-id" @click="drawer = false" style="text-decoration: none">
            <v-btn class="header-btn bg-secondary"> Connect with Us</v-btn>
          </a>
        </div>
        <div class="mt-5">
          <v-btn
            @click="
              carrierPop = !carrierPop;
              drawer = !drawer;
            "
            class="header-btn bg-secondary"
          >
            careers</v-btn
          >
        </div>
      </div> -->
    </v-navigation-drawer>
    <v-app-bar
      class="app-bar"
      :class="scrollTop ? 'active-app' : 'disable-app'"
      :flat="!scrollTop"
      scroll-target="#scrolling-techniques-6"
    >
      <v-row class="px-10 py-5 app-bar-row align-center" v-show="mdAndUp">
        <v-col>
          <!-- <img src="/images/logo.png" class="mt-2" width="160" alt="" /> -->
           <p class="logo-font">ZAFFRA</p>
        </v-col>
       
        <v-col>
          <div class="text-end">
            <!-- <div> -->
              <ul class="content-list">
                <li
                  v-for="(item, i) in items"
                  :key="i"
                  class="list-item"
                  @click="onClickNav(item.value)"
                >
          <a :href="item.to" :class="scrollTop ? 'text-black' : 'text-white'" style="text-decoration: none">

                 {{ item.title }}
          </a>
                </li>
              </ul>
            </div>
            
          <!-- </div> -->
        </v-col>
      </v-row>
      <v-row class="px-10 py-5 app-bar-row align-center" v-show="!mdAndUp">
        <v-col>
          <!-- <img
            src="/images/logo.png"
            class="mt-n2 ml-n7"
            width="110"
            alt=""
          /> -->
          <p class="mt-n3 logo-font-mb" >ZAFFRA</p>
        </v-col>
        <v-col>
          <div class="float-right mt-n5 mr-n10">
            <v-menu>
              <template v-slot:activator="{ props }">
                <!-- <v-btn color="primary" > Dropdown </v-btn> -->
                <Icon v-bind="props" :class="scrollTop ? 'text-black' : 'text-white' " class="header-icon-1" name="uil:phone" />
              </template>

              <v-list elevation="3">
                <v-list-item>
                  <v-list-item-title>
                    <Icon class="header-icon" name="uil:phone" />
                    <a class="ml-2 phone-text" href="tel:+91-9400422107"
                      >+91-9400422107</a
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <Icon name="mdi-email" class="header-icon" />
                    <a
                      class="ml-2 phone-text"
                      href="mailto: zaffraspices@gmail.com"
                      >zaffraspices@gmail.com</a
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
import CarriersForm from "~/pages/components/CarriersForm.vue";
export default {
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();
    return { xs, mdAndUp };
  },
  data() {
    return {
      scrollHeight: "",
      scrollTop: false,
      carrierPop: false,
      drawer: false,
      items: [
        {
          title: "Home",
          value: "foo",
          to: "#home",
        },
        {
          title: "About Us",
          value: "bar",
          to: "#about-us",
        },
        // {
        //   title: "Products",
        //   value: "fizz",
        //   to: "#why-home-therapy",
        // },
        {
          title: "Connect With Us",
          value: "",
          to:'#footer'
        },
        // {
        //   title: "Carriers",
        //   value: "carrier",
        // },
      ],
    };
  },
   mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    closeIcon() {
      this.carrierPop = false;
    },
     handleScroll() {
      // You can adjust the scroll threshold as needed
      this.scrollTop = window.scrollY > 10;
    },
    // connectWithUs(event) {
    //   // this.drawer=false
    //   let targetId = event.currentTarget;
    //   console.log(targetId);
    // },
    onClickNav(item) {
      console.log("clikd nav", item);
      if (!item) {
        return;
      }
      this.drawer = false;
      if (item === "carrier") {
        this.carrierPop = true;
        return;
      }
    },
  },
  components: { CarriersForm },
};
</script>
<style>
.content-list{
  display: flex;
  justify-content: end;
  gap: 40px;
  list-style: none;
}
.drawer-btn {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.drawer-btn .header-btn {
  width: 140px;
  /* padding: 20px; */
  /* padding-bottom: 30px; */
}
.app-bar {
  height: 90px !important;
  /* padding: 5px !important; */
  /* background-color: rgb(160, 157, 154) !important; */
  /* display: flex; */
  /* align-items: center; */
  justify-content: center;
  
  /* position: absolute; */
}
.active-app{
  color: black !important;
  background-color: white !important;
  transition: all 0.3s ease;
}
.disable-app{
  color: white !important;
  background-color: transparent !important;
  transition: all 0.3s ease;
}
.list-item {
  cursor: pointer;
}
.bar-icon {
  /* background-color: greenyellow; */
}
.header-icon {
  color: var(--primary-text-color);
  font-size: 26px;
}
.header-icon-1 {
  color: white;
  font-size: 23px;
  cursor: pointer;
}
.phone-text {
  color: var(--secondary-text-color);
  font-size: 17px;
  text-decoration: none;
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
.header-btn {
  text-transform: capitalize;
}
.logo-font{
  font-size: 2em;
  font-weight: 700;
  letter-spacing: .3em;
}
.logo-font-mb{
  font-size: 1em;
}
</style>
