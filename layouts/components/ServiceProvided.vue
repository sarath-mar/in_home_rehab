<template>
  <div class="my-10" id="service-we-provide" :class="customClass">
    <h2 class="heading-text ">What We Do</h2>
    <v-row class="service-main mt-4">
      <v-col
        cols="12"
        md="6"
        v-for="service in servicesProvided"
        :key="service.title"
      >
        <transition-card :service="service" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import ServiceCard from "./ServiceCard.vue";
import TransitionCard from "../sub-components/TransitionCard.vue";
export default {
  props: {
    customClass: {
      type: String,
      required: false,
    },
  },
  components: {
    //  ServiceCard,
    TransitionCard,
  },
  data() {
    return {
      servicesProvided: [
        {
          title: "Land Mortgage Loans",
          isClicked: false,
          icon: "uil:instagram",
          img: "https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.jpg?s=612x612&w=0&k=20&c=r6Tmn31ZHHr-8ZuWfZaYIYdqM9nD4dMc6NfDXxwsZeo=",
          description:
            "We are ready to lend your land anywhere in Kozhikode district, without delay, in simple terms, with low interest rates, as soon as possible. No other charges .",
        },
        {
          title: "Personal Loans",
          isClicked: false,
          icon: "uil:instagram",
          img: "https://www.livemint.com/lm-img/img/2025/02/10/600x338/investor_1726811993233_1739190690862.jpg",
          description:
           "The loan is secured by one person within one week on collateral. Say goodbye to the strings of pledge. Personal loan is the fastest way to meet the needs." },
        {
          title: "Gold Loans",
          isClicked: false,
          icon: "uil:instagram",
          img: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/blog/what-is-the-process-of-pledging-your-gold-to-secure-high-value-d.webp",
          description:
         "The essentials need to be met immediately. There will be very little time 'within 3 minutes the gold mortgage is in your hands." },
        {
          title: "Housing Loans",
          isClicked: false,
          icon: "uil:instagram",
          isLocalImg:true,
          img: "https://www.mahindrafinance.com/wp-content/uploads/2024/02/What-is-a-Home-Loan.jpg",
          description:
           "Owning a home is a dream for anyone.We are ready to give a loan for land in Kozhikode district ,We are here to make your dream home a reality as installments at low interest rates" },
       
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.heading-text {
  color: var(--primary-text-color);
}
.service-main {
  align-items: flex-start;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 0;
}

li {
  flex: 1; /* Adjust this to control the number of items per row */
  box-sizing: border-box;
  padding: 0px !important;
}
.service-no-transition {
  transition: all 0.5s ease-in-out;
  color: var(--secondary-text-color) !important;
  text-align: center;
  border-radius: 5px;
  height: -webkit-fill-available;
  z-index: 2;
  font-size: 20px;
  font-weight: bold;
  h1 {
    mix-blend-mode: multiply;
  }
  .service-icon {
    font-size: 50px;
  }
}
.service-transition {
  transition: all 0.5s ease-in-out;
  background-color: var(--primary-text-color);
  color: var(--secondary-text-color) !important;
  border-radius: 5px;
  padding: 5px;
}
.service-sub {
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  border: 1px dashed var(--primary-text-color);
  /* padding: 10px; */
  flex: 1;
  min-width: 300px;
  height: 100%;
  min-height: 400px;
}
/* .se */
</style>
