<template>
  <v-layout>
    <v-app-bar
      class="app-bar"
      :flat="false"
      scroll-target="#scrolling-techniques-6"
    >
      <v-row class="px-10 py-5 app-bar-row align-center">
        <v-col>
          <!-- <v-app-bar-title>in home rehab</v-app-bar-title> -->
          <img
            src="/images/logo.png"
            class="mt-2"
            width="160px"
            alt=""
          />
          <!-- ../../../public/images -->
        </v-col>
        <v-col justify-center>
          <p @click="carrierPop=true" class="text-center carrier-text">Carriers</p>
          <CarriersForm :carrierPop="carrierPop" @closeIcon="closeIcon"/>
          <!-- <div class="text-center">
            <v-btn  variant="text"  color="primary ">Carriers</v-btn>

          </div> -->
        </v-col>
        <v-col v-if="mdAndUp">
          <div>
            <!-- <p class="text-end">contact us on</p> -->
            <div class="text-end">
              <Icon class="header-icon-1 " name="uil:phone" />
              <span class="ml-2 phone-text">9876543210 / 9874561230</span>
            </div>
            <div class="text-end ">
              <Icon class="header-icon " name="uil:fast-mail" />
              <span class="ml-2 mail-text">inhomerehab@gmail.com</span>
            </div>
            <!-- <span class="material-icons">face</span> -->
           
            <!-- <p class="text-end">8714443989</p>
            <p class="text-end">8714443989</p> -->
          </div>
        </v-col>
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
            carrierPop:false,
        };
    },
    methods:{
      closeIcon(){
        this.carrierPop=false
      }
    },
    components: { CarriersForm }
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
.mail-text{
  font-size: 18px;
}
.carrier-text{
  text-decoration: underline;
  color: var(--primary-text-color);
  font-size: 22px;
  cursor: pointer;
}
</style>
