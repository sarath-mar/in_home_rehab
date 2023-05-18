<template>
  <!-- <v-dialog transition="dialog-bottom-transition" width="auto"> -->
  <!-- <template v-slot:activator="{ props }">
      <v-btn
        append-icon="mdi-add"
        v-bind="props"
        class="mt-3 mt-md-5 banner-btn"
      >
        Connect With Us
      </v-btn>
    </template> -->
  <!-- <template v-slot:default="{ isActive }"> -->
  <v-sheet elevation="2" class="pa-10 bg-primary-background">
    <h2 class="mb-5 text-center">Connect With Us</h2>
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        label="First name"
        variant="outlined"
       
        :rules="firstNameRules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        variant="outlined"
       
        :rules="lastNameRules"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        label="email"
        variant="outlined"
       
        :rules="lastNameRules"
      ></v-text-field>
      <v-textarea label="description" variant="outlined" rows="3"></v-textarea>
      <!--   density="compact" -->
      <div class="form-user-btn mt-5">
        <v-btn class="mx-auto" type="submit">Submit</v-btn>
        <!-- <v-btn variant="text" class="ml-5" @click="isActive.value = false">Close</v-btn> -->
      </div>
    </v-form>
  </v-sheet>
  <!-- </template> -->
  <!-- </v-dialog> -->
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  data: () => ({
    firstName: "",
    firstNameRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "First name must be at least 3 characters.";
      },
    ],
    lastName: "",
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
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
</style>
