<template>
  <div class="mt-10" id="about-us">
    <h2 class="heading-text px-10">Our Journey</h2>
    <div  :key="service.title">
      <div class="mt-3">
        <p class="mt-3 paragraph-text px-10">{{ service.description }}</p>
        <div class="mt-10">
          <v-row>
            <!-- <v-col
              v-for="content in service.content"
              :key="content.title"
              cols="12"
              md="6"
              lg="3"
            > -->
              <!-- <service-card :content="content" /> -->
              <v-parallax src="/images/4.png">
                <v-row>
                  <v-col cols="12" md="6">
                    <!-- <h2 class="heading-text">Our Family's Legacy</h2> -->
                    <!-- <p class="mt-3 text-black">{{ service.description }}</p> -->
                  </v-col>
                </v-row>
              </v-parallax>
            <!-- </v-col> -->
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
      service: 
        {
          title: "Our Family's Legacy",
          description: 'Our journey began in 1972, when our grandfather KC Joseph first started with a humble chitty fund to serve the local community with trust and transparency. In 1993, we expanded into the finance sector, carrying forward the same values of reliability and care. With the blessings of our well-wishers and the trust of our customers, we entered the world of fine jewellery in 2005, when our founder Tom Joseph established our jewellery store. What began as a small showroom has today grown into a trusted name, known for purity, craftsmanship, and timeless designs. For over five decades, our family\'s commitment has remained the same: to serve every customer with honesty, quality, and warmth.',
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
    };
  },
};
</script>

<style scoped></style>
