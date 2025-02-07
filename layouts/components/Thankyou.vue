<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="auto">
    <v-sheet
      elevation="2"
      class="pa-10 bg-primary-background tankyou"
      rounded="xl"
    >
      <div class="text-center thankyou-icon">
        <Icon
          name="mdi-check-circle-outline"
          class="icon-thankyou text-primary-text"
        />
      </div>
      <h1 class="my-5 text-center">Thank You !</h1>
      <h4>Your submission is received and we will contact you soon.</h4>

      <!-- <v-btn>Back To Home</v-btn>
       -->
    </v-sheet>
  </v-dialog>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  props: {
    dialogControl: {
      required: true,
      type: Boolean,
    },
  },
  methods: {},
  data: () => ({
    dialog: false,
  }),
  watch: {
    dialogControl: {
      handler(newValue) {
        this.dialog=newValue
      },
      immediate:true
    },
  },
};
</script>
<style>
.icon-thankyou {
  text-align: center;
  font-size: 100px !important;
  color: var(--primary-text-color);
}
</style>
