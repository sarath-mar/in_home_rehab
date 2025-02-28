<template>
  <div>
    <MainLoader v-if="isLoading" />
    <!--  -->
    <div v-show="!isLoading">
      <transition name="fade">
        <div class="fade-enter-active" >
          <div class="outer-layer">
            <div class="header-content">
              <header-component :custom-class="customWidthClass" />
            </div>
            <div class="mt-n10 mt-md-10 px-5 px-md-10">
              <carousel :custom-class="customWidthClass" />
            </div>
          </div>
          <div class="mt-5 inner-layer">
            <!-- <div class="bread px-10">
        <bread-component />
      </div> -->
            <div class="welcome-div px-10 pb-15">
              <!-- <div class="welcome-component "> -->
              <welcome :custom-class="customWidthClass" />
              <!-- </div> -->
            </div>
            <div class="px-10" id="service-provided">
              <service-provided :custom-class="customWidthClass" />
            </div>
            <div class="px-10" id="latest-news">
              <latest-news
                :custom-class="customWidthClass"
                @apiSucceed="apiSucceed"
              />
            </div>
          </div>
          <!-- <WelcomeForm/> -->
          <footer-component :custom-class="customWidthClass" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../layouts/HeaderComponent.vue";
import FooterComponent from "../layouts/FooterComponent.vue";
import Carousel from "../layouts/components/Carousel.vue";
import Welcome from "../layouts/components/Welcome.vue";
import BreadComponent from "../layouts/components/BreadComponent.vue";
import ServiceProvided from "../layouts/components/ServiceProvided.vue";
import LatestNews from "../layouts/components/LatestNews.vue";
import WelcomeForm from "~/layouts/components/WelcomeForm.vue";
import MainLoader from "~/layouts/sub-components/MainLoader.vue";
export default {
  components: {
    HeaderComponent,
    Carousel,
    Welcome,
    FooterComponent,
    BreadComponent,
    ServiceProvided,
    LatestNews,
    WelcomeForm,
    MainLoader,
  },
  data: () => ({
    value: 0,
    customWidthClass: "custom-max-width",
    isLoading: true,
  }),
  methods: {
    apiSucceed() {
      this.isLoading = false;
      console.log("api succeed");
    },
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.outer-layer {
  background-size: cover;
  /* mix-blend-mode: overlay; */
  /* background-image: url("https://png.pngtree.com/png-vector/20240328/ourmid/pngtree-crumpled-white-paper-texture-ideal-for-transparent-background-designs-isolated-on-png-image_11991006.png"); */
}
.inner-layer {
  margin-bottom: 220px;
}
.welcome-test {
  opacity: 0;
}
.heading-text {
  font-size: clamp(2em, 4vw, 3em);
  /* line-height: 1.333; */
  font-weight: 900;
  /* letter-spacing: 0.1rem; */
  /* margin-top: 20px; */
  /* color: var(--secondary-text-color); */
}
.paragraph-text {
  font-size: clamp(1em, 4vw, 1.5em);
  /* font-weight: 600; */
  /* letter-spacing: 0.1rem; */
  text-align: justify;
  color: var(--secondary-text-color);
}
/* background-image: url(https://kitnew.moxcreative.com/kindera/wp-content/uploads/sites/35/2023/01/bg_img.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
} */
/* .welcome-div-main {
  min-height: 80vh;
  display: flex;
  align-items: center;
} */
.welcome-div {
  /* background-image: url(../public/images/bg_image.png); */
  /* padding: 60px 0px 90px 0px; */
  padding: 10px;

  background-color: var(--primary-background);
  /* min-height: 100vh; */
  /* margin-top: -160px; */
}
.welcome-component {
  padding: 100px 0px;
}
.bread {
  /* margin-top:230px ; */
  /* z-index: 122; */
}
.header-content {
  /* margin-top: 100px; */
}
.custom-max-width {
  max-width: 1920px;
  margin-inline: auto;
}

.splash {
  height: 0px;
  padding: 0px;
  border: 130em solid #039be5;
  position: fixed;
  left: 50%;
  top: 100%;
  display: block;
  box-sizing: initial;
  overflow: hidden;

  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,
    borderRadius 0.2s 2.3s linear forwards;
}
#welcome-page {
  background: #311b92;
  width: 56px;
  height: 56px;
  position: absolute;
  left: 50%;
  top: 50%;
  overflow: hidden;
  opacity: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: init 1.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,
    moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards,
    moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
    materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards,
    hide 2s 2.9s ease forwards;
}
@keyframes init {
  0% {
    width: 0px;
    height: 0px;
  }
  100% {
    width: 56px;
    height: 56px;
    margin-top: 0px;
    opacity: 1;
  }
}

@keyframes puff {
  0% {
    top: 100%;
    height: 0px;
    padding: 0px;
  }
  100% {
    top: 50%;
    height: 100%;
    padding: 0px 100%;
  }
}

@keyframes borderRadius {
  0% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0px;
  }
}

@keyframes moveDown {
  0% {
    top: 50%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 100%;
  }
}

@keyframes moveUp {
  0% {
    background: #311b92;
    top: 100%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 50%;
    background: #039be5;
  }
}

@keyframes materia {
  0% {
    background: #039be5;
  }
  50% {
    background: #039be5;
    top: 26px;
  }
  100% {
    background: #311b92;
    width: 100%;
    height: 64px;
    border-radius: 0px;
    top: 26px;
  }
}

@keyframes moveIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
