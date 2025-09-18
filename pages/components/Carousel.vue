<template>
  <div id="home">
    <v-row class=" " :class="' main-carousel'" no-gutters>
      <!-- <v-col cols="6" >
        <video autoplay muted loop playsinline class="video-banner">
          <source src="/images/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </v-col> -->
      <v-col cols="6" >
        <video autoplay muted loop playsinline class="video-banner">
          <source src="/images/v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </v-col>
      <v-col cols="6" >
       <img class="video-banner" src="/images/one.jpg" alt="">
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
.video-banner {
  width:100%;
  height: 100vh;
  object-fit: cover;
  /* position: absolute; */
  top: 0;
  left: 0;
  z-index: -1;
  aspect-ratio: 16/9;
}
.social-icon {
  text-decoration: none;
}
.margin-height {
  /* margin-top: 130px; */
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
  /* height: 100vh; */
}
.carousel-item {
  /* background-color: red; */
  border-radius: 20px;
  /* height: 90vh;  */
}
.banner-header {
  /* font-size: 4.5em; */
  font-size: clamp(3em, 4vw, 4.5em);
  line-height: 1.333;
  font-weight: 900;
  /* letter-spacing: 0.1rem; */
  margin-top: 0;
  color: var(--primary-text-color);
}
.banner-subtitle {
  /* font-size: 3em; */
  font-size: clamp(1.3em, 4vw, 2em);

  line-height: 1.333;
  font-weight: 500;
  /* letter-spacing: 0.1rem; */
  color: rgb(237, 233, 233);
  /* text-align: justify; */
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
