<template>
  <div id="why-home-therapy" :class="customClass">
    <v-row
      class=" "
      :class="!mdAndUp ? 'margin-height' : 'mt-5 align-center main-carousel'"
    >
      <v-col cols="12" md="7">
        <div>
          <div class="main-conntent">
            <h2 class="banner-header mt-5 mt-md-0">
              {{ mainContent.title }}
            </h2>
            <h3 class="text-secondary mt-3">
              {{ mainContent.subTitle }}
            </h3>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5" class="carousel-container">
        <v-carousel
          cycle
          class="carousel"
          hide-delimiter-background
          show-arrows="hover"
        >
        
          <v-carousel-item
            v-for="(slide, i) in imageLinks"
            :key="i"
            :src="slide.src"
            cover
            class="carousel-item"
          >
            <div class="star">⭐</div>
            <div class="star">⭐</div>
            <div class="star">⭐</div>
            <div class="star">⭐</div>
            <div class="star">⭐</div>
          </v-carousel-item>
        </v-carousel>
        <div v-if="!mdAndUp">
          <ul class="social-media mt-3 social-media-small">
            <li v-for="media in socialMedia" :key="media.name">
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
  props:{
    customClass:{
      type:String,
      required:false
    }
  },
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
        title: "Welcome to Iris child Development Center",
        subTitle: "Where every child's potential is recognized and nurtured!",
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
  height: auto !important;
  /* max-height: 25vh; */
margin:auto;
  max-height: 610px !important;
  max-width: 610px !important;
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
.carousel-container {
  /* display: flex;
  justify-content: center; */
  /* position: relative;
  overflow: hidden; */
}
.carousel-item {
  /* width: 500px; */
  /* height: 500px; */
  aspect-ratio: 1;
  border-radius: 50%;

}


.star {
  position: absolute;
  font-size: 30px;
  animation: fall 5s linear infinite;
  opacity: 0;
}

/* Position stars at random locations and sizes */
.star:nth-child(1) {
  top: -10px;
  left: 20%;
  animation-duration: 4s;
  animation-delay: 0s;
  animation-timing-function: ease-in;
}

.star:nth-child(2) {
  top: -10px;
  left: 50%;
  animation-duration: 6s;
  animation-delay: 1s;
}

.star:nth-child(3) {
  top: -10px;
  left: 75%;
  animation-duration: 5.5s;
  animation-delay: 0.5s;
}

.star:nth-child(4) {
  top: -10px;
  left: 10%;
  animation-duration: 7s;
  animation-delay: 2s;
}

.star:nth-child(5) {
  top: -10px;
  left: 90%;
  animation-duration: 4.5s;
  animation-delay: 1.5s;
}

/* Keyframe animation for dropping stars */
@keyframes fall {
  0% {
    top: -10px;
    opacity: 1;
  }
  100% {
    top: 100vh; /* Drops to the bottom of the viewport */
    opacity: 0;
  }
}
.banner-header {
  /* font-size: 4.5em; */
  font-size: clamp(3em, 5vw, 3.3em);
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
/* @media (min-width: 1440px) {
  .carousel {
    max-height: 660px !important;
    max-width: 660px !important;
  }
} */
/* @media (min-width: 1024px) {
  .carousel {
    max-height: 630px !important;
    max-width: 630px !important;
  }
} */
</style>
