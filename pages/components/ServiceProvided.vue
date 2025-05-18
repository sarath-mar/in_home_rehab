<template>
  <div class="my-10" id="service-we-provide">
    <h2 class="heading-text">Services we provide</h2>
    <div v-for="service in servicesProvided" :key="service.title">
      <div class="mt-8">
        <h2 class="service-sub">
          <Icon name="uil:label" /> {{ service.title }}
        </h2>
        <p class="mt-3 paragraph-text">{{ service.description }}</p>
        <div class="my-10">
          <v-row>
            <v-col
              v-for="content in service.content"
              :key="content.title"
              cols="12"
              md="6"
              lg="3"
            >
              <service-card :content="content" />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";
export default {
  components: { ServiceCard },
  data() {
    return {
      servicesProvided: [
        {
          title: "Elevate Your Culinary Journey",
          description:'Grown in the lush highlands, our premium cardamom delivers a rich, aromatic taste that will elevate your cooking to new heights. Explore our selection and experience the Zaffra difference',
           content: [
        {
          image: "/images/one.jpeg",
        },
        {
          image: "/images/two.webp",
        },
        {
          image: "/images/three.jpg",
        },
        {
          image: "/images/four.jpg",
        },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
