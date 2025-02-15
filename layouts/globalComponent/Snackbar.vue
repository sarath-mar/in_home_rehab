<template>
  <v-snackbar v-model="show" :color="type" timeout="3000" bottom>
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  name: "CommonSnackbar",
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["success", "info", "error"].includes(value);
      },
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  data() {
    return {
      show: false,
    };
  },
  watch: {
    // Watch for changes in the `visible` prop to update `localVisible`
    visible(newValue) {
      this.show = newValue;
    },
  },
  methods: {},
};
</script>

<style scoped>
/* Customize styles here if needed */
</style>
