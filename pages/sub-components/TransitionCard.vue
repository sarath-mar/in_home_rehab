<template>
  <v-card class="transition-card" @click="show = !show">
    <v-img height="300px" :src="service.img" cover></v-img>

    <v-card-title class="transition-card-title"> {{ service.title }}</v-card-title>

    <!-- <v-card-actions>
      <v-btn color="orange-lighten-2" text="Explore" @click="show = !show"
        >click</v-btn
      >

      <v-spacer></v-spacer>
      <Icon
        :name="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></Icon>
    </v-card-actions> -->

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="transition-card-content">
          <p>{{ service.description }}</p>
          <ul v-if="service.helpWith">
            <li v-for="help in service.helpWith" :key="help">
              {{ help }}
            </li>
          </ul>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props: {
    service: {
      type: Object,
      default: {},
      required: true,
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>
<style lang="scss" scoped>
.transition-card {
  width: 100%;
  cursor: pointer;
}
.transition-card-title{
  color: var(--secondary-text-color);
}
.transition-card-content{
  color: var(--primary-text-color);
 li{
  list-style-position: inside; 
 }
}

</style>
