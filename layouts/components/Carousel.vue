<template>
  <div id="why-home-therapy" :class="customClass">
    <v-row
      class=" "
      :class="!mdAndUp ? 'margin-height' : 'mt-5 align-center main-carousel'"
    >
    <star-animation-component/>
      <v-col cols="12" md="6" lg="7"> 
        <div>
          <div class="main-conntent">
            <h2 class="banner-header mt-5 mt-md-0">
              <!-- {{ mainContent.title }} -->
              Welcome to 
              <br>
              IRIS CHILD DEVELOPMENT CENTRE
            </h2>

            <h3 class="text-secondary banner-sub mt-3">
              Every child matters
            </h3>
          </div>
          <v-btn class="mt-5 px-7 py-6 pb-9 enquiry-btn">MAKE AN ENQUIRY  <Icon
          name="mdi-arrow-right"
          start
          class=" mt-n1 ml-3 right-arrow-icon"
          color="white"
        ></Icon></v-btn>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="5"
        class="carousel-container text-center mt-5 mt-md-0"
      >

        <div class="round-img">
          <div class="round round-1"></div>
          <div class="round round-2"></div>
          <img :src="imageLinks[0].src" alt="" />
        </div>
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
import ColorShadeOne from "../sub-components/ColorShadeOne.vue";
import StarAnimationComponent from "../sub-components/StarAnimationComponent.vue";
export default {
  components: { WelcomeForm, ColorShadeOne ,StarAnimationComponent},
  props: {
    customClass: {
      type: String,
      required: false,
    },
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
<style lang="scss">
.enquiry-btn {
  background-color: var(--tertiary-text-color);
  color: white;
  font-size: large;
}
.round-img {
  position: relative;
  display: inline-block;
  img {
    height: 500px;
    width: 500px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  }
  .round {
    position: absolute;
    top: 50%;
    left: 50%; /* Start from the center of the image */
    transform: translate(-50%, -50%); /* Center the round div */
    height: 100px;
    width: 100px;
    z-index: -1;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  }
}
.round-1 {
  animation: rotate-1 25s linear infinite;
  background-color: var(--primary-text-color);
}

.round-2 {
  animation: rotate-2 25s linear infinite;
  background-color: var(--secondary-text-color);
}
@keyframes rotate-1 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(250px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(250px);
  }
}

@keyframes rotate-2 {
  0% {
    transform: translate(-50%, -50%) rotate(140deg) translateX(250px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(500deg) translateX(250px);
  }
}
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
  margin: auto;
  max-height: 610px !important;
  max-width: 610px !important;
}
.banner-sub {
  // background: url(/images/h1-slider5.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
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
  aspect-ratio: 1;
  border-radius: 50%;
}
.right-arrow-icon{
  animation: moveArrow 2s infinite ease-in-out; 
}
@keyframes moveArrow {
  0% {
    transform: translateX(0); /* Start from original position */
  }
  50% {
    transform: translateX(15px); /* Move right by 15px */
  }
  100% {
    transform: translateX(0); /* Go back to original position */
  }
}


.banner-header {
  font-size: clamp(2.5em, 4.8vw, 3.3em);
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
@media (max-width: 768px) {
  .round-img {
    img {
      height: clamp(280px, 65vw, 400px);
      width: clamp(280px, 65vw, 400px);
    }
  }
}
@keyframes rotate-1 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(190px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(190px);
  }
}

@keyframes rotate-2 {
  0% {
    transform: translate(-50%, -50%) rotate(140deg) translateX(190px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(500deg) translateX(190px);
  }
}
@media (max-width: 575px) {
  @keyframes rotate-1 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) translateX(150px);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) translateX(150px);
    }
  }

  @keyframes rotate-2 {
    0% {
      transform: translate(-50%, -50%) rotate(140deg) translateX(150px);
    }
    100% {
      transform: translate(-50%, -50%) rotate(500deg) translateX(150px);
    }
  }
}
@media (max-width: 425px) {
  @keyframes rotate-1 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) translateX(120px);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) translateX(120px);
    }
  }

  @keyframes rotate-2 {
    0% {
      transform: translate(-50%, -50%) rotate(140deg) translateX(120px);
    }
    100% {
      transform: translate(-50%, -50%) rotate(500deg) translateX(120px);
    }
  }
}
@media (min-width: 769px) {
  @keyframes rotate-1 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) translateX(250px);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) translateX(250px);
    }
  }

  @keyframes rotate-2 {
    0% {
      transform: translate(-50%, -50%) rotate(140deg) translateX(250px);
    }
    100% {
      transform: translate(-50%, -50%) rotate(500deg) translateX(250px);
    }
  }
}
</style>
