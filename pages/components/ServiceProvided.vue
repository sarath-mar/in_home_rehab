<template>
  <div class="my-10">
    <h2 class="heading-text">Service We Provide</h2>
    <div v-for="service in servicesProvided" :key="service.title">
      <div class="mt-8">
        <h2 class="service-sub">
          <Icon name="uil:label" /> {{ service.title }}
        </h2>
        <h4 class="mt-3 service-content">{{ service.description }}</h4>
        <div class="mt-3">
          <v-row>
            <v-col
              v-for="content in service.content"
              :key="content.title"
              cols="12"
              md="4"
              lg="2"
            >
              <service-card />
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
          title: "Speech Theraphy",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          content: [
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
          ],
        },
        {
          title: "Occupational Therapy",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          content: [
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
            { title: "Test", description: "Description", image: "" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>

.service-sub {
  font-size: clamp(1em, 4vw, 2em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--secondary-text-color);
}
.service-content {
  font-size: clamp(0.8em, 4vw, 1.2em);
  line-height: 1.333;
  font-weight: 900;
  /* letter-spacing: 0.1rem; */
  margin-top: 0;
  /* color: var(--primary-text-color); */
}
</style>
