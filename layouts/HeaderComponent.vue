<template>
  <v-layout>
    <v-navigation-drawer v-if="!mdAndUp" v-model="drawer" location="right">
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
          <a :href="item.to" class="text-primary" style="text-decoration: none">
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
          <v-btn
            @click="
              carrierPop = !carrierPop;
              drawer = !drawer;
            "
            class="header-btn bg-secondary"
          >
            careers</v-btn
          >
          <!-- <CarriersForm :carrierPop="carrierPop" @closeIcon="closeIcon" /> -->
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      class="app-bar"
      :flat="false"
      scroll-target="#scrolling-techniques-6"
    >
      <v-row class="px-10 py-5 app-bar-row align-center" v-show="mdAndUp">
        <v-col>
          <img src="/images/logo.png" class="mt-2" width="160px" alt="" />
        </v-col>
        <v-col justify-center>
          <p @click="carrierPop = true" class="text-center carrier-text">
            Careers
          </p>
          <CarriersForm :carrierPop="carrierPop" @closeIcon="closeIcon" />
        </v-col>
        <v-col>
          <div>
            <!-- <p class="text-end">contact us on</p> -->
            <div class="text-end">
              <Icon class="header-icon-1" name="uil:phone" />
              <span class="ml-2 phone-text">8891575227 / 9961132071</span>
            </div>
            <div class="text-end mt-2">
              <!-- <Icon class="header-icon" name="uil:fast-mail" /> -->
              <Icon name="mdi-email" class="header-icon" />
              <!-- <span class="ml-2  mail-text">inhomerehab@gmail.com</span> -->
              <a class="ml-2 mail-text" href="mailto: inhomerehab01@gmail.com"
                >inhomerehab01@gmail.com</a
              >
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="px-10 py-5 app-bar-row align-center" v-show="!mdAndUp">
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
                <v-list-item>
                  <v-list-item-title>
                    <Icon class="header-icon-1" name="uil:phone" />
                    <a class="ml-2 phone-text" href="tel:+91-9961132071"
                      >+919961132071 (occupational therapy)</a
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <Icon name="mdi-email" class="header-icon" />
                    <a
                      class="ml-2 phone-text"
                      href="mailto: inhomerehab01@gmail.com"
                      >inhomerehab01@gmail.com</a
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
      carrierPop: false,
      drawer: false,
      items: [
        {
          title: "InHome Rehab",
          value: "foo",
          to: "#in-home-rehab",
        },
        {
          title: "Service We Provide",
          value: "bar",
          to: "#service-we-provide",
        },
        {
          title: "Why Home Therapy",
          value: "fizz",
          to: "#why-home-therapy",
        },
        // {
        //   title: "Connect With Us",
        //   value: "connect",
        // },
        // {
        //   title: "Carriers",
        //   value: "carrier",
        // },
      ],
    };
  },
  methods: {
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
.carrier-text {
  text-decoration: underline;
  color: var(--primary-text-color);
  font-size: 22px;
  cursor: pointer;
}
.header-btn {
  text-transform: capitalize;
}
</style>
