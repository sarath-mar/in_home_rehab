<template>
  <v-sheet
    elevation="2"
    class="pa-10 bg-primary-background"
    rounded="xl"
    id="connect-with-us"
  >
    <h2 class="mb-5 text-center heading-text text">Connect With Us</h2>
    <v-form
      v-model="valid"
      class="mt-4"
      ref="form"
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
      <v-textarea
        label="description"
        v-model="description"
        variant="outlined"
        name="entry.1347844840"
        rows="3"
      ></v-textarea>
      <div class="form-user-btn mt-5">
        <v-btn
          class="mx-auto"
          :loading="btnLoading"
          :disabled="!valid"
          type="submit"
          >Submit</v-btn
        >
      </div>
    </v-form>
    <thankyou :dialog-control="dialogControl" />
  </v-sheet>
</template>
<script>
import { useDisplay } from "vuetify";
import {
  addDoc,
  irisConnectWithUsCollection,
  serverTimestamp,
} from "@/config/firebaseConfig";
import Thankyou from "./Thankyou.vue";
export default {
  components: { Thankyou },
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  methods: {
    async formSubmit() {
      this.btnLoading = true;
      console.log("submit");
      try {
        await addDoc(irisConnectWithUsCollection, {
          name: this.name,
          phoneNo: this.phoneNo,
          description: this.description,
          createdAt: serverTimestamp(),
        });
        this.dialogControl = true;
        setTimeout(() => {
          this.dialogControl = false;
        }, 2500);
        this.$refs.form.reset();
        this.btnLoading = false;
      } catch (error) {
        console.log("error", error);
        this.btnLoading = false;
      }
    },
  },
  data: () => ({
    dialogControl: false,
    name: "",
    btnLoading: false,
    nameRules: [
      (value) => {
        if (value?.length > 3) return true;
        return "Name must be at least 3 characters.";
      },
    ],
    // phoneRules: [
    //   (value) => {
    //     if (value?.length > 3) return true;
    //     return "First name must be at least 3 characters.";
    //   },
    // ],
    description: "",
    phoneNo: "",
    phoneRules: [
      (value) => {
        if (/^([+]\d{2})?\d{10}$/.test(value)) return true;
        return "Must be a valid phone no";
      },
    ],

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
</style>
