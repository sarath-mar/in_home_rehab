<template>
  <div class=" welcome-main" id="about-us">
    <v-row class="align-center" no-gutters>
      <v-col class="d-flex align-center" cols="6"  md="3" >
         <common-card-slider :slides="slides1" />
      </v-col>
        <v-col class="d-flex align-center" cols="6"  md="3" >
          <common-card-slider :slides="slides2" />
        </v-col>
        <v-col class="d-flex align-center" cols="6"  md="3" >
          <common-card-slider :slides="slides3" />
        </v-col>
        <v-col class="d-flex align-center" cols="6"  md="3" >
          <common-card-slider :slides="slides4" />
        </v-col>
    </v-row>
    <v-row class="align-center" no-gutters>
      <v-col class="d-flex align-center" cols="6"   md="3" >
         <common-card-slider :slides="slides5" />
      </v-col>
        <v-col class="d-flex align-center" cols="6" md="3" >
          <common-card-slider :slides="slides6" />
        </v-col>
        <v-col class="d-flex align-center" cols="6" md="3" >
          <common-card-slider :slides="slides7" />
        </v-col>
        <v-col class="d-flex align-center" cols="6" md="3" >
          <common-card-slider :slides="slides8" />
        </v-col>
    </v-row>
  </div>
</template>

<script>
import CommonCardSlider from '../common/card-slider.vue';
export default {
  components: {
    CommonCardSlider,
  },
  data() {
    return {
      slides1: [
          {
            image: '/images/KLR/1.jpg',
          },
          {
            image: '/images/KLR/2.jpg',
          },
          {
            image: '/images/KLR/3.jpg',
          },
          {
            image: '/images/KLR/4.jpg',
          },
          {
            image: '/images/KLR/3.jpg',
          },
        
      ],
      slides2: [
        {
          image: '/images/KLR/10.jpg',
        },
        {
          image: '/images/KLR/11.jpg',
        },
        
        {
          image: '/images/KLR/12.jpg',
        },
        {
          image: '/images/KLR/13.jpg',
        },
        {
          image: '/images/KLR/14.jpg',
        },
        {
          image: '/images/KLR/15.jpg',
        }
      ],
      slides3: [
        {
          image: '/images/KLR/20.jpg',
        },
        {
          image: '/images/KLR/21.jpg',
        },
        
        {
          image: '/images/KLR/22.jpg',
        },
        {
          image: '/images/KLR/23.jpg',
        },
        {
          image: '/images/KLR/24.jpg',
        },
        {
          image: '/images/KLR/25.jpg',
        }
      ],
      slides4: [
        {
          image: '/images/KLR/30.jpg',
        },
        {
          image: '/images/KLR/31.jpg',
        },
        
        {
          image: '/images/KLR/32.jpg',
        },
        {
          image: '/images/KLR/33.jpg',
        },
        {
          image: '/images/KLR/34.jpg',
        },
        {
          image: '/images/KLR/35.jpg',
        },
      ],
      slides5: [
        {
          image: '/images/KLR/40.jpg',
        },
        {
          image: '/images/KLR/41.jpg',
        },
        
      ],
      slides6: [
        {
          image: '/images/KLR/35.jpg',
        },
        {
          image: '/images/KLR/36.jpg',
        },
        
      ],
      slides7: [
        {
          image: '/images/KLR/45.jpg',
        },
        {
          image: '/images/KLR/46.jpg',
        },
        
      ],
      slides8: [
        {
          image: '/images/KLR/25.jpg',
        },
        {
          image: '/images/KLR/26.jpg',
        },
        
      ],
      welcomeItems: [
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.welcome-li-div {
  display: flex;
}
.welcome-ul {
  list-style: none;
  /* display: ; */
}
.welcome-li-div h4 {
  font-size: clamp(1em, 4vw, 1.5em);
  line-height: 1.333;
  font-weight: 900;
}
.welcome-li-div h6 {
  font-size: clamp(0.5em, 4vw, 1em);
  line-height: 1.333;
  font-weight: 900;
}
.welcome-ul li {
  margin-bottom: 30px;
}
.icon-welcome {
  font-size: 60px;
  font-weight: 900;
  color: var(--primary-text-color);
}
.welcome-img {
  /* height: 50vh; */
  height: 420px;
  width: 100%;
  aspect-ratio: 3/2;
  /* border-radius: 20px; */
}

.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
