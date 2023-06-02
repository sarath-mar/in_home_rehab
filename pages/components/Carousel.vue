<template>
  <div id="why-home-therapy">
    <v-row
      class=" "
      :class="!mdAndUp ? 'margin-height' : 'mt-5 align-center main-carousel'"
    >
      <!-- flex-column-reverse -->
      <v-col cols="12" md="6">
        <!-- -->
        <div v-if="mdAndUp">
          <v-carousel
            cycle
            class="carousel"
            hide-delimiter-background
            :show-arrows="false"
            hide-delimiters
          >
            <v-carousel-item v-for="(slide, i) in imageLinks" :key="i" cover>
              <div class="main-conntent">
                <h3 class="text-secondary mt-n5 mb-5">
                  {{ mainContent.title }} ?
                </h3>
                <h2 class="banner-header">
                  {{ slide.title }}
                </h2>
                <p class="banner-subtitle mt-2 mt-md-5">
                  {{ slide.subtitle }}
                </p>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="" v-else>
          <h1 class="heading-text">
            Restoring your health, Right where you are
          </h1>
          <!-- <p class="paragraph-text mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quos vero vitae enim? Temporibus nisi nam cumque, atque quae
            eligendi ut reiciendis velit saepe esse eum molestiae libero
            expedita. Velit?
          </p> -->
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-carousel
          cycle
          class="carousel"
          hide-delimiter-background
          show-arrows="hover"
          :height="mdAndUp ? '75vh' : '45vh'"
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
              <!-- <Icon :name="media.icon" /> -->
              <a class="social-icon text-primary" :href="media.url">
                <Icon :name="media.icon" />
              </a>
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <div v-if="mdAndUp" class="mt-n10">
      <ul class="social-media">
        <li v-for="media in socialMedia" :key="media.name">
          <a class="social-icon text-primary" :href="media.url">
            {{ media.name }}
            <Icon :name="media.icon" />
          </a>
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
        {
          name: "Facebook",
          icon: "uil:facebook",
          url: "https://www.facebook.com/profile.php?id=100092701407162",
        },
        // { name: "Twitter", icon: "uil:twitter" },
        {
          name: "Instagram",
          icon: "uil:instagram",
          url: "https://www.instagram.com/inhomerehab01/",
        },
        {
          name: "Linkedin",
          icon: "uil:linkedin",
          url: "https://www.linkedin.com/company/inhome-rehab/",
        },
      ],
      mainContent: {
        title: "Why Home Therapy",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea fugiat corrupti odit,",
      },
      imageLinks: [
        {
          src: "/images/banner/1.png",
          // src: "http://yesofcorsa.com/wp-content/uploads/2018/05/Therapist-Wallpaper-High-Definition.jpg",
          title: "Accessible to individuals with disabilities",
          subtitle:
            "Home therapy can be a more accessible option for individuals with disabilities who may face challenges traveling to and from therapy appointments.",
          buttonDetail: "test",
        },
        {
          src: "/images/banner/2.png",
          // src: "https://wallpapercave.com/wp/wp4750435.jpg",
          title: "More comfortable for children",
          subtitle:
            "For children who may feel anxious about going to a new place or meeting a new person, home therapy can be a more comfortable and familiar option.",
          buttonDetail: "test",
        },
        {
          src: "/images/banner/3.png",
          // src: "https://wallpaperaccess.com/full/970880.jpg",
          title: "Time-saving",
          subtitle:
            "Home therapy eliminates the need to travel to appointments, saving time and energy. This can be especially important for busy individuals or those with a hectic schedule.",
          buttonDetail: "test",
        },
        {
          src: "/images/banner/4.png",
          // src: "https://wallpaperaccess.com/full/1964833.jpg",
          title: "Comfort",
          subtitle:
            "Being in the comfort of your own home can be reassuring and comforting during therapy sessions. Being in a familiar environment can also help you feel more relaxed and open to discussing personal issues.",
          buttonDetail: "test",
        },
        {
          src: "/images/banner/7.png",
          // src: "https://wallpapercave.com/wp/wp4750435.jpg",
          title: "Increased access",
          subtitle:
            " For individuals who live in rural or remote areas, home therapy can be a lifeline. It can provide access to mental health services that may not be available in their area, helping to bridge the gap in mental health care.",
          buttonDetail: "test",
        },
      ],
    };
  },
};
</script>
<style>
.social-icon {
  text-decoration: none;
}
.margin-height {
  margin-top: 130px;
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
.main-conntent {
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
  /* letter-spacing: 0.1rem; */
  margin-top: 0;
  color: var(--primary-text-color);
}
.banner-subtitle {
  /* font-size: 3em; */
  font-size: clamp(0.5em, 4vw, 1.5em);

  line-height: 1.333;
  font-weight: 500;
  /* letter-spacing: 0.1rem; */
  color: var(--secondary-text-color);
  text-align: justify;
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
