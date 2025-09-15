<template>
    <div>
      <v-row class=" " no-gutters>
        <v-col cols="12" md="6" >
            <img class="video-banner" src="/images/1.png" alt="">
         
        </v-col>
        <v-col cols="12" md="6" >
            <v-row no-gutters>
                <v-col cols="6">
                    <common-card-slider :slides="slides" />
                </v-col>
                <v-col cols="6">
                    <common-card-slider :slides="slides2" />
                </v-col>
         </v-row>
         <v-row no-gutters>
            <v-col cols="6">
                <common-card-slider :slides="slides" />
            </v-col>
            <v-col cols="6">
                <common-card-slider :slides="slides2" />
            </v-col>
         </v-row>

        </v-col>
      </v-row>
    </div>
  </template>
  <script setup>
  import CommonCardSlider from '../common/card-slider.vue';
  const slides = [
    {
      image: '/images/KLR/15.jpg',
    },
    {
      image: '/images/KLR/16.jpg',
    },
    {
      image: '/images/KLR/17.jpg',
    },
    
  ];
  const slides2 = [
    {
      image: '/images/KLR/16.jpg',
    },
    {
      image: '/images/KLR/17.jpg',
    },
    {
      image: '/images/KLR/18.jpg',
    },
  ];
  </script>
  <style scoped>
  .video-banner {
    width:100%;
    height: 100%;
    object-fit: cover;
    min-height: 80vh;
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
  