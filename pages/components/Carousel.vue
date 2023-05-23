<template>
  <div>
    <!-- <v-row
      class="align-center main-carousel"
      :class="!mdAndUp ? ' flex-column-reverse' : 'margin-height'"
    >
      <v-col cols="12"> -->
    <div class="main-carousel">
      <v-carousel
        cycle
        class="carousel"
        hide-delimiter-background
        :hide-delimiters="mdAndUp ? false : true"
        show-arrows="hover"
        :height="mdAndUp ? '70vh':'40vh'"
      >
      <!-- :height="mdAndUp ? '100vh':'40vh'" -->
        <v-carousel-item
          v-for="(slide, i) in imageLinks"
          :key="i"
          :src="slide.src"
          cover
          class="carousel-item"
        >
          <div class="d-flex fill-height align-center mx-16">
            <div class="mx-md-10"></div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <!-- <div v-if="!mdAndUp" class="px-10">
      <ul class="social-media mt-3 primary-text social-media-small">
        <li v-for="media in socialMedia" :key="media.name">
          <Icon :name="media.icon" />
        </li>
      </ul>
    </div> -->
    <!-- <div v-if="!mdAndUp" class="px-10">
      <ul class="social-media mt-3 secondary-text social-media-small">
        <li v-for="media in socialMedia" :key="media.name">
          <Icon :name="media.icon" />
        </li>
      </ul>
    </div>
    <div v-if="mdAndUp" class="px-10">
      <ul class="social-media">
        <li v-for="media in socialMedia" :key="media.name">
          {{ media.name }}
          <Icon :name="media.icon" />
        </li>
      </ul>
    </div> -->
    <!-- </v-col>
    </v-row> -->
    <!-- <div v-if="mdAndUp" class="mt-n10 px-10">
      <ul class="social-media">
        <li v-for="media in socialMedia" :key="media.name">
          {{ media.name }}
          <Icon :name="media.icon" />
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import { useDisplay } from "vuetify";
import WelcomeForm from "./WelcomeForm.vue";
export default {
  components: { WelcomeForm },
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  data() {
    return {
      socialMedia: [
        { name: "Facebook", icon: "uil:facebook" },
        { name: "Twitter", icon: "uil:twitter" },
        { name: "Instagram", icon: "uil:instagram" },
        { name: "Youtube", icon: "uil:youtube" },
      ],
      mainContent: {
        title: "Why Home Theraphy",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea fugiat corrupti odit,",
      },
      imageLinks: [
        {
          src: "/images/banner1.jpg",
          title: "Are Your a Therapist",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea fugiat corrupti odit,",
          buttonDetail: "test",
        },
        {
          src: "/images/banner2.jpg",
          title: "One",
          subtitle: "one subtitle",
          buttonDetail: "test",
        },
        // {
        //   src: "http://wallpapercave.com/wp/DIkTH3a.jpg",
        //   title: "Two",
        //   subtitle: "two subtitle",
        //   buttonDetail: "test",
        // },
        // {
        //   src: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Download-Fruit-Wallpaper.jpg",
        //   title: "Three",
        //   subtitle: "three subtitle",
        //   buttonDetail: "test",
        // },
      ],
    };
  },
};
</script>
<style>
.margin-height {
  /* margin-top: 30px; */
}
.social-media {
  display: flex;
  gap: 40px;
  list-style: none;
}
.social-media li {
  z-index: 10;
  font-size: 1.3em;
  line-height: 1.333;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: var(--secondary-text-color);
  cursor: pointer;
}
.social-media li:hover {
  color: var(--primary-text-color);
}
.social-media-small {
  justify-content: end;
}
.icon-color {
  /* color: var(--primary-text-color); */
}
.main-conntent {
  /* background-color: red ; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main-carousel {
  /* min-height: 100vh; */
}
.carousel-item {
  /* background-color: red; */
  /* border-radius: 20px; */
}
.banner-header {
  /* font-size: 4.5em; */
  font-size: clamp(3.5em, 4vw, 4.5em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--primary-text-color);
}
.banner-subtitle {
  /* font-size: 3em; */
  font-size: clamp(2em, 4vw, 3em);

  line-height: 1.333;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: var(--secondary-text-color);
  /* margin-top: 0; */
}
.banner-btn {
  background-color: var(--secondary-text-color);
  color: white;
  padding: 25px 30px 45px;
  font-size: 1.2em;
  text-transform: capitalize;
}
</style>
