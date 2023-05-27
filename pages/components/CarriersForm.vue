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
        ref="form"
        class="mt-5"
        @submit.prevent="formSubmit"
      >
        <v-text-field
          v-model="name"
          label="Name"
          variant="outlined"
          :rules="nameRules"
          name="entry.1686296719"
        ></v-text-field>
        <v-text-field
          v-model="phoneNo"
          label="Phone No"
          variant="outlined"
          type="number"
          name="entry.1717555786"
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
      const form = this.$refs.form.$el;
      if (form) return;
      fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSej3Q60MLIFP8l5_hLspgjgiQG9A5qsOAfSKxHyYUZCi7yMlA/formResponse",
        {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },

          method: "post",
          body: new FormData(form),
        }
      )
        .then((data) => {
          console.log("success", data);
          this.dialogControl = true;
          setTimeout(() => {
            this.dialogControl = false;
          }, 2500);
          this.$refs.form.reset();
          this.btnLoading = false;
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
