<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    :width="!mdAndUp ? '' : 'auto'"
    persistent
  >
    <v-sheet elevation="2" class="pa-10 bg-primary-background" rounded="xl">
      <Icon
        @click="closeIcon"
        name="mdi-close"
        class="icon-close float-right"
      />
      <h2 class="text-center text-primary">
        Opportunities Across All Career Stages
      </h2>

      <!-- </div> -->

      <div class="px-16 mt-2">
        <hr />
      </div>

      <!-- <h5 class="text-center">Or</h5> -->
      <v-form
        v-model="valid"
        ref="formSpeech"
        class="mt-5"
        @submit.prevent="formSubmit"
      >
        <v-text-field
          v-model="name"
          label="Name"
          variant="outlined"
          :rules="nameRules"
          name="entry.1954011657"
        ></v-text-field>
        <v-text-field
          v-model="phoneNo"
          label="Phone No"
          variant="outlined"
          type="number"
          name="entry.1851117419"
          :rules="phoneRules"
        ></v-text-field>
        <div>
          <p>Area of specialization</p>
          <div>
            <v-radio-group v-model="specialization" inline>
              <v-radio
                label="Speech Language Pathologist"
                value="Speech Language Pathologist"
              ></v-radio>
              <v-radio
                label="Occupational Therapist"
                value="Occupational Therapist"
              ></v-radio>
            </v-radio-group>
          </div>
        </div>
        <v-text-field
          v-show="false"
          name="entry.2106787915"
          v-model="specialization"
        >
        </v-text-field>
        <v-autocomplete
          label="Location"
          :items="[
            'Alappuzha',
            'Ernakulam',
            'Idukki',
            'Kannur',
            'Kasaragod',
            'Kollam',
            'Kottayam',
            'Kozhikode',
            'Malappuram',
            'Palakkad',
            'Pathanamthitta',
            'Thiruvananthapuram',
            'Thrissur',
            'Wayanad',
          ]"
          variant="outlined"
          v-model="location"
        ></v-autocomplete>
        <v-text-field
          v-show="false"
          name="entry.497627933"
          v-model="location"
        ></v-text-field>
        <p class="text-red">{{ errrorMsg }}</p>
        <div class="form-user-btn mt-2">
          <v-btn
            class="mx-auto"
            :loading="btnLoading"
            :disabled="!valid"
            type="submit"
            >Submit</v-btn
          >
        </div>
      </v-form>
      <v-form
        v-model="valid"
        v-show="false"
        ref="formOccupational"
        class="mt-5"
        @submit.prevent="formSubmit"
      >
        <v-text-field
          v-model="name"
          label="Name"
          variant="outlined"
          :rules="nameRules"
          name="entry.343433382"
        ></v-text-field>
        <v-text-field
          v-model="phoneNo"
          label="Phone No"
          variant="outlined"
          type="number"
          name="entry.986829468"
          :rules="phoneRules"
        ></v-text-field>
        <div>
          <p>Area of specialization</p>
          <div>
            <v-radio-group v-model="specialization" inline>
              <v-radio
                label="Speech Language Pathologist"
                value="Speech Language Pathologist"
              ></v-radio>
              <v-radio
                label="Occupational Therapist"
                value="Occupational Therapist"
              ></v-radio>
            </v-radio-group>
          </div>
        </div>
        <v-text-field
          v-show="false"
          name="entry.570858311"
          v-model="specialization"
        >
        </v-text-field>

        <v-autocomplete
          label="Location"
          :items="[
            'Alappuzha',
            'Ernakulam',
            'Idukki',
            'Kannur',
            'Kasaragod',
            'Kollam',
            'Kottayam',
            'Kozhikode',
            'Malappuram',
            'Palakkad',
            'Pathanamthitta',
            'Thiruvananthapuram',
            'Thrissur',
            'Wayanad',
          ]"
          variant="outlined"
          v-model="location"
        ></v-autocomplete>
        <v-text-field v-show="false" name="entry.1235296561" v-model="location">
        </v-text-field>
        <p class="text-red">{{ errrorMsg }}</p>
        <div class="form-user-btn mt-2">
          <v-btn
            class="mx-auto"
            :loading="btnLoading"
            :disabled="!valid"
            type="submit"
            >Submit</v-btn
          >
        </div>
      </v-form>
      <div class="mt-5" v-if="mdAndUp">
        <p class="text-center">
          Let us know more about you by contacting our talent Acquisition team
          in 876432345/ 234567865
        </p>
        <!-- <h5 class="text-center">Or</h5> -->
        <p class="mt-5 text-center">Emai Us on inhomerehab@gmail.com</p>
      </div>
      <thankyou :dialog-control="dialogControl" />
      <!-- <thankyou :dialog-control="dialogControl" /> -->
    </v-sheet>
  </v-dialog>
</template>
<script>
import { useDisplay } from "vuetify";
import Thankyou from "./Thankyou.vue";
export default {
  components: { Thankyou },
  props: {
    carrierPop: {
      required: true,
      type: Boolean,
    },
  },
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  watch: {
    carrierPop: {
      handler(newValue) {
        this.dialog = newValue;
      },
      immediate: true,
    },
  },
  methods: {
    closeIcon() {
      console.log("clicked");
      this.dialog = false;
      this.$emit("closeIcon");
    },
    formSubmit() {
      console.log("submit");
      if (!this.specialization) {
        this.errrorMsg = "Please select Area of specialization";
        setTimeout(() => {
          this.errrorMsg = "";
        }, 2000);
        return;
      }
      if (!this.location) {
        this.errrorMsg = "Please select your location";
        setTimeout(() => {
          this.errrorMsg = "";
        }, 2000);
        return;
      }
      this.btnLoading = true;
      let occupationalUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2h79X0f-TNiTjoIeroOp5poQiZZemDY7s5JMOeey4yUX-8w/formResponse";
      let speechUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe4RQUa3RlKfywU0ZRr6XOYf-tbF4qffG8R2zWEydtrXOVpRQ/formResponse";
      let url = "";
      let OccupationalForm = this.$refs.formOccupational.$el;
      let speechForm = this.$refs.formSpeech.$el;
      let form = "";
      if (this.specialization === "Speech Language Pathologist") {
        form = speechForm;
        url = speechUrl;
      } else if (this.specialization === "Occupational Therapist") {
        form = OccupationalForm;
        url = occupationalUrl;
      } else {
        return;
      }
      let formData = new FormData(form);
      // if (formData) {
      //   console.log(url);
      //   console.log("---------");
      //   console.log(form);
      //   console.log("----------");
      //   console.log(formData);
      //   return;
      // }
      console.log(formData);
      fetch(url, {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },

        method: "post",
        body: formData,
      })
        .then((data) => {
          console.log("success", data);

          if (this.specialization === "Speech Language Pathologist") {
            this.$refs.formSpeech.reset();
          } else {
            this.$refs.formOccupational.reset();
          }
          this.btnLoading = false;
          this.dialog = false;
          this.dialogControl = true;
          setTimeout(() => {
            this.dialogControl = false;
          }, 3000);
        })
        .catch((e) => {
          console.log("error", e);
          this.btnLoading = false;
        });

      // $.ajax({
      //         url:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSfjMwmjJMroEt0oepDlg68Wo-DjF_mzAahsQHVDqmNQLOae4A/formResponse",
      //         data:$("#submit-form").serialize(),
      //         method:"post",
      //         success:function (response){

      //             window.location.reload()
      //             //window.location.href="https://google.com"
      //         },
      //         error:function (err){
      //             window.location.reload()

      //         }
      //     })
    },
  },
  data: () => ({
    errrorMsg: "",
    dialog: true,
    dialogControl: false,
    name: "",
    btnLoading: false,
    nameRules: [
      (value) => {
        if (value?.length > 3) return true;
        return "Name must be at least 3 characters.";
      },
    ],
    phoneRules: [
      (value) => {
        if (/^([+]\d{2})?\d{10}$/.test(value)) return true;
        return "Must be a valid phone no";
      },
    ],
    phoneNo: "",
    specialization: "",
    location: "",
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
    ],
    valid: false,
    locations: [
      { title: "Alappuzha", value: "Alappuzha" },
      { title: "Ernakulam", value: "Ernakulam" },
      { title: "Idukki", value: "Idukki" },
      { title: "Kannur", value: "Kannur" },
      { title: "Kasaragod", value: "Kasaragod" },
      { title: "Kollam", value: "Kollam" },
      { title: "Kottayam", value: "Kottayam" },
      { title: "Kozhikode", value: "Kozhikode" },
      { title: "Malappuram", value: "Malappuram" },
      { title: "Palakkad", value: "Palakkad" },
      { title: "Pathanamthitta", value: "Pathanamthitta" },
      { title: "Thiruvananthapuram", value: "Thiruvananthapuram" },
      { title: "Thrissur", value: "Thrissur" },
      { title: "Wayanad", value: "Wayanad" },
    ],
  }),
};
</script>
<style>
.form-user-btn {
  display: flex;
}
.banner-btn {
  /* color: var(--secondary-text-color); */
}
.form-title {
  color: white;
  background-color: var(--primary-background);
}
.icon-close {
  font-size: 30px;
  cursor: pointer;
}
</style>
