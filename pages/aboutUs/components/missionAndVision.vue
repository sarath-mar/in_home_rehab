<template>
  <div>
    <v-row >
      <v-col cols="12" md="5">
        <div>
          <h2 class="subtitle-text-normal pt-5">Mission</h2>
          <!-- <v-sheet elevation="4" class="pa-5"> -->
            <p class="paragraph-text mt-5">
              We achieve our quality through a rigorous selection of farms and
              partner supplies, who share our vision of affordable quality, as
              well as our insistence on operating a short supply chain; a
              dedicated and ultra-efficient logistics system and a brand new,
              state-of-the-art storage facility that underscores our commitment
              to fast, fresh delivery. At YEM YEM IMPEX, we deliver a whole
              world of freshness, no matter wherever you are…
            </p>
          <!-- </v-sheet> -->
        </div>
      </v-col>
      <v-col cols="12" md="7" >
      
        <div :class="mdAndUp ? 'ml-10': ''">
          <h2 class="subtitle-text-normal pt-5">Vision</h2>
          <p class="paragraph-text mt-5">
            As our name suggest, at YEM YEM IMPEX, our vision is to supply
            customers with fresh produce of highest quality. We source produce
            from southeastern countries so that everyone gets a taste of home
            and also the exotic flowers they may have never tried.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";
export default {
    setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
};
</script>

<style scoped></style>
