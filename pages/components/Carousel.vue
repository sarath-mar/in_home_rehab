<template>
  <div>
    <v-row
      class="align-center main-carousel"
      :class="!mdAndUp ? 'margin-height ' : 'mt-5'"
    >
    <!-- flex-column-reverse -->
      <v-col cols="12" md="6" v-if="mdAndUp">
        <v-carousel
          cycle
          class="carousel"
          hide-delimiter-background
          :show-arrows="false"
          hide-delimiters
        >
          <v-carousel-item
            v-for="(slide, i) in imageLinks"
            :key="i"
            cover
            
          >
            <div class="main-conntent">
              <h2 class="banner-header">
                {{ slide.title }}
              </h2>
              <p class="banner-subtitle mt-2 mt-md-5">
                {{ slide.subtitle }}
              </p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="6" >
        <v-carousel
          cycle
          class="carousel"
          hide-delimiter-background
          show-arrows="hover"
          height="75vh"
        >
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
        <div v-if="!mdAndUp">
          <ul class="social-media mt-3 social-media-small">
            <li v-for="media in socialMedia" :key="media.name">
              <Icon :name="media.icon" />
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <div v-if="mdAndUp" class="mt-n10">
      <ul class="social-media">
        <li v-for="media in socialMedia" :key="media.name">
          {{ media.name }}
          <Icon :name="media.icon" />
        </li>
      </ul>
    </div>
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
        // { name: "Twitter", icon: "uil:twitter" },
        { name: "Instagram", icon: "uil:instagram" },
        { name: "Linkedin", icon: "uil:linkedin" },
      ],
      mainContent: {
        title: "Why Home Theraphy",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea fugiat corrupti odit,",
      },
      imageLinks: [
        {
          src: "http://yesofcorsa.com/wp-content/uploads/2018/05/Therapist-Wallpaper-High-Definition.jpg",
          title: "Are Your a Therapist",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea fugiat corrupti odit,",
          buttonDetail: "test",
        },
        {
          src: "https://wallpapercave.com/wp/wp4750435.jpg",
          title: "One",
          subtitle: "one subtitle",
          buttonDetail: "test",
        },
        {
          src: "https://wallpaperaccess.com/full/970880.jpg",
          title: "Two",
          subtitle: "two subtitle",
          buttonDetail: "test",
        },
        {
          src: "https://wallpaperaccess.com/full/1964833.jpg",
          title: "Three",
          subtitle: "three subtitle",
          buttonDetail: "test",
        },
      ],
    };
  },
};
</script>
<style>
.margin-height {
  margin-top: 90px;
}
.social-media {
  display: flex;
  gap: 40px;
  list-style: none;
}
.social-media li {
  font-size: 1.3em;
  line-height: 1.333;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: var(--primary-text-color);
  cursor: pointer;
}
.social-media li:hover {
  color: var(--secondary-text-color);
}
.social-media-small {
  justify-content: end;
}
.icon-color {
  color: var(--primary-text-color);
}
.carousel {
  /* height: 10vh ; */
  /* height: calc(100vh - 100px) !important ; */
}
.main-conntent{
  /* background-color: red ; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.main-carousel {
  min-height: 95vh;
}
.carousel-item {
  /* background-color: red; */
  border-radius: 20px;
  /* height: 90vh;  */
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
