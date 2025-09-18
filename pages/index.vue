<template>
  <div>
    <main>
      <div>
        <transition name="fade">
          <div class="fade-enter-active">
            <div class="outer-layer">
              <div class="header-content">
                <header-component :custom-class="customWidthClass" />
              </div>
              <div class="mt-n10 mt-md-10 px-5 px-md-10">
                <carousel :custom-class="customWidthClass" />
              </div>
            </div>
            <div class="mt-5 inner-layer">
              <!-- About Us Section -->
              <section class="welcome-div px-10 pb-15" id="about-us" aria-label="About Us">
                <h1 class="sr-only">Iris Child Development Centre - Comprehensive Child Development Services in Calicut, Kerala</h1>
                <welcome :custom-class="customWidthClass" />
              </section>
              
              <!-- Services Section -->
              <section class="px-10" id="service-provided" aria-label="Our Services">
                <h2 class="sr-only">Our Child Development Services</h2>
                <service-provided :custom-class="customWidthClass" />
              </section>
              
              <!-- Latest News Section -->
              <section class="px-10" id="latest-news" aria-label="Latest News">
                <h2 class="sr-only">Latest News and Updates</h2>
                <latest-news
                  v-if="showLatestNews"
                  :custom-class="customWidthClass"
                  @apiSucceed="apiSucceed"
                />
              </section>
              
              <!-- Contact Section -->
              <section class="px-10" id="contact-us" aria-label="Contact Information">
                <h2 class="sr-only">Contact Us</h2>
                <address-component :custom-class="customWidthClass" />
              </section>
            </div>
            <footer-component :custom-class="customWidthClass" />
          </div>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from "../layouts/HeaderComponent.vue";
import FooterComponent from "../layouts/FooterComponent.vue";
import Carousel from "../layouts/components/Carousel.vue";
import Welcome from "../layouts/components/Welcome.vue";
import ServiceProvided from "../layouts/components/ServiceProvided.vue";
import LatestNews from "../layouts/components/LatestNews.vue";
import WelcomeForm from "~/layouts/components/WelcomeForm.vue";
import MainLoader from "~/layouts/sub-components/MainLoader.vue";
import AddressComponent from '~/layouts/components/AddressComponent.vue';

export default {
  components: {
    HeaderComponent,
    Carousel,
    Welcome,
    FooterComponent,
    ServiceProvided,
    LatestNews,
    WelcomeForm,
    MainLoader,
    AddressComponent,
  },
  data: () => ({
    value: 0,
    customWidthClass: "custom-max-width",
    isLoading: true,  
    showLatestNews: true,
  }),
  head() {
    return {
      title: "Iris Child Development Centre - Calicut, Kerala | Child Therapy & Development Services",
      meta: [
        { name: "description", content: "Iris Child Development Centre in Calicut, Kerala provides comprehensive child development services including occupational therapy, speech therapy, special education, and behavioral support for children with developmental needs." },
        { name: "keywords", content: "child development centre, occupational therapy, speech therapy, special education, autism therapy, ADHD therapy, developmental delay, Calicut, Kerala, Kozhikode, child therapy, behavioral therapy, early intervention, learning disability, sensory integration" }
      ]
    }
  },
  methods: {
    apiSucceed({ isError }) {
      this.showLatestNews = !isError;
      this.isLoading = false;
      console.log("api succeed");
    },
  },
};
</script>

<style>
/* Screen reader only class for accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.outer-layer {
  background-size: cover;
}
.inner-layer {
  margin-bottom: 220px;
}
.welcome-test {
  opacity: 0;
}
.heading-text {
  font-size: clamp(2em, 4vw, 3em);
  font-weight: 900;
}
.paragraph-text {
  font-size: clamp(1em, 4vw, 1.5em);
  text-align: justify;
  color: var(--secondary-text-color);
}
.welcome-div {
  padding: 10px;
  background-color: var(--primary-background);
}
.welcome-component {
  padding: 100px 0px;
}
</style>
