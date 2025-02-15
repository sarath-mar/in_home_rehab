<template>
  <v-layout>
    <v-navigation-drawer v-if="!lgAndUp" v-model="drawer" location="right">
      <div>
        <Icon
          name="mdi-close"
          @click="drawer = !drawer"
          class="icon-close text-primary-text float-right mr-5 mt-5"
        />
      </div>
      <h2 class="text-primary ml-5 mt-5">In Home Rehab</h2>
      <div class="mt-5">
        <!-- <v-list :items="items" @click="onClickNav"></v-list> -->
        <v-list-item v-for="(item, i) in items" :key="i">
          <!-- <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template> -->
          <a  class="text-primary" style="text-decoration: none">
            <v-list-item-title
              class="ml-5 list-item"
              @click="onClickNav(item.value)"
            >
              <Icon name="mdi-greater-than" class="mr-2 text-primary"></Icon
              >{{ item.title }}
            </v-list-item-title>
          </a>
        </v-list-item>
      </div>
      <!-- <div>
        <v-sheet elevation="2" class="sheet" >Connect With Us</v-sheet>
        <v-sheet elevation="2" >Carriers</v-sheet>
      </div> -->
      <div class="drawer-btn">
        <div>
          <a href="#welcom-form-id" @click="drawer = false" style="text-decoration: none">
            <v-btn class="header-btn bg-secondary"> Connect with Us</v-btn>
          </a>
        </div>
        <div class="mt-5">
          <!-- <v-btn
            @click="
              carrierPop = !carrierPop;
              drawer = !drawer;
            "
            class="header-btn bg-secondary"
          >
            careers</v-btn
          > -->
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      class="app-bar"
      :elevation="elevation"
     
    >
      <v-row class="px-10 py-5 app-bar-row align-center"  :class="customClass" v-show="lgAndUp">
        <v-col cols="3">
          <img src="/images/logo.png" class="mt-2" width="160px" alt="" />
        </v-col>
        <v-col cols="6" justify-center>
          <!-- <p @click="carrierPop = true" class="text-center carrier-text">
            Careers
          </p>
          <CarriersForm :carrierPop="carrierPop" @closeIcon="closeIcon" /> -->
          <ul class="header-list">
            <li v-for="(item, i)  in items" :key="i"  @click="onClickNav(item.value)">{{ item.title }}</li>
          </ul>
        </v-col>
        <v-col cols="3">
          <div>
            <!-- <p class="text-end">contact us on</p> -->
            <div class="text-end">
              <Icon class="header-icon-1" name="uil:phone" />
              <span class="ml-2 phone-text"> 8891575227</span>
            </div>
            <div class="text-end mt-2">
              <!-- <Icon class="header-icon" name="uil:fast-mail" /> -->
              <Icon name="mdi-email" class="header-icon" />
              <!-- <span class="ml-2  mail-text">inhomerehab@gmail.com</span> -->
              <a class="ml-2 mail-text" href="mailto: inhomerehab01@gmail.com"
                >iriscdc1@gmail.com</a
              >
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="px-10 py-5 app-bar-row align-center" v-show="!lgAndUp">
        <v-col>
          <img
            src="/images/logo.png"
            class="mt-n2 ml-n7"
            width="160px"
            alt=""
          />
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
                      >+918891575227 (speech therapy)</a
                    >
                  </v-list-item-title>
                </v-list-item>
                <!-- <v-list-item>
                  <v-list-item-title>
                    <Icon class="header-icon-1" name="uil:phone" />
                    <a class="ml-2 phone-text" href="tel:+91-9961132071"
                      >+919961132071 (occupational therapy)</a
                    >
                  </v-list-item-title>
                </v-list-item> -->
                <v-list-item>
                  <v-list-item-title>
                    <Icon name="mdi-email" class="header-icon" />
                    <a
                      class="ml-2 phone-text"
                      href="mailto: inhomerehab01@gmail.com"
                      >iriscdc1@gmail.com</a
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
  props:{
    customClass:{
      type:String,
      required:false
    }
  },
  setup() {
    // Destructure only the keys we want to use
    const { xs, lgAndUp } = useDisplay();
    return { xs, lgAndUp };
  },
  data() {
    return {
      elevation:0,
      scrollHeight: "",
      carrierPop: false,
      drawer: false,
      items: [
        {
          title: "About Us",
          value: "foo",
          to: "#in-home-rehab",
        },
        {
          title: "Our Services",
          value: "bar",
          to: "#service-we-provide",
        },
        {
          title: "Gallery",
          value: "gallery",
          to: "#why-home-therapy",
        },
        {
          title: "Blog",
          value: "fizz",
          to: "#why-home-therapy",
        },
        {
          title: "Contact Us",
          value: "fizz",
          to: "#why-home-therapy",
        }
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
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
      if(item=='gallery'){
        console.log('gallery')
        this.$router.push('/gallery')
        return
      }
      this.drawer = false;
      if (item === "carrier") {
        this.carrierPop = true;
        return;
      }
    },
  },
};
</script>
<style lang="scss">
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
  background-color: greenyellow;
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
  color: var(--secondary-text-color);
  font-size: 17px;
  text-decoration: none;
}
.mail-text {
  font-size: 18px;
}
.header-btn {
  text-transform: capitalize;
}
.header-list{
  display: flex;
  justify-content: space-around;
 li{
  list-style: none;
  color: var(--primary-text-color);
  font-size: 22px;
  cursor: pointer;
  position: relative;
  padding-bottom: 3px;
 }
 li::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: var(--secondary-text-color);
  transition: width 0.3s ease;
}
li:hover::after {
  width: 100%;
}
}

</style>
