<template>
  <v-sheet elevation="2" class="pa-10 bg-primary-background" rounded="xl">
    <h2 class="mb-5 text-center">Connect With Us</h2>
    <v-form fast-fail @submit.prevent v-model="valid" ref="form">
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf4bXFNLjy8PCXdeyiGiL7V2SCBRZW_MJjCcvTZbHVliuTFhg/formResponse"
        method="post"
        v-on:submit.prevent="formSubmit"
      >
        <v-text-field
          v-model="name"
          label="Name"
          variant="outlined"
          :rules="nameRules"
          name="entry.1702660706"
        ></v-text-field>
        <v-text-field
          v-model="phoneNo"
          label="Phone No"
          variant="outlined"
          type="number"
          name="entry.549054387"
        ></v-text-field>
        <v-textarea
          label="description"
          v-model="description"
          variant="outlined"
          name="entry.1036763654"
          rows="3"
        ></v-textarea>
        <div class="form-user-btn mt-5">
          <v-btn class="mx-auto" :disabled="!valid" type="submit">Submit</v-btn>
        </div>
      </form>
    </v-form>
    <thankyou />
  </v-sheet>
</template>
<script>
import { useDisplay } from "vuetify";
import Thankyou from "./Thankyou.vue";
export default {
  components: { Thankyou },
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  methods: {
    formSubmit(e) {
      console.log("submit");
      this.$refs.form.reset();
    },
  },
  data: () => ({
    name: "",
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
