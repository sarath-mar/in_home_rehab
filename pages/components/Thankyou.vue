<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="auto">
    <v-sheet elevation="2" class="pa-10 bg-primary-background" rounded="xl">
      <h2 class="mb-5 text-center">Connect With Us</h2>
      <v-icon class="mdi-home "></v-icon>
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
  methods: {},
  data: () => ({
    dialog: false,
  }),
};
</script>
