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
              class="my-3"
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
              title: "Autism Spectrum Disorder (ASD)",
              description:
                "Autism Spectrum Disorder (ASD), is a neurodevelopmental disorder caused by differences in the brain. Children with ASD often have problems with social communication and interaction, and restricted or repetitive behaviors or interests. Speech therapy for ASD  addresses language and communication challenges. It helps to improve their verbal, nonverbal and social communication.",
              image: "https://cdn-imgs.dora.run/design/CrReCYXbELTHFLvaS4qLJE.webp/w/4096/h/4096/format/webp?",
            },
            {
              title: "Language Disorder",
              description:
                "Language Disorder is an impairment in the processing of linguistic information that affects an individual's ability to receive and/or express language.The disorder involves persistent difficulties in the comprehension or production of spoken, written, sign language, or other forms of language.Speech therapy will often start by identifying your child’s areas of strength and weakness. They will develop a tailored treatment plan to help your child master their language skills and communicate more effectively.",
              image: "https://cdn-imgs.dora.run/design/FxUOeVKbl51J8LAcYBWEFl.webp/w/4096/h/4096/format/webp?",
            },
            {
              title: "Dysarthria",
              description:
                "Dysarthria is a motor speech disorder that results from loss of strength, slowness, or coordination of the muscles that control speech. This results in difficulty understanding the speech and can range from mild slurring to completely unintelligible speech. Speech therapy goals include adjusting speech rate, strengthening muscles, improving breath support, improving articulation, and helping family members communicate with you.",
              image: "https://www.12taste.com/in/wp-content/uploads/2018/10/cardamom-wooden-scoop-cardamom-wooden-shovel-gray-wooden-table.jpg",
            },
            {
              title: "Aphasia",
              description:
                "Aphasia is a disorder that results from damage to areas of the brain that are responsible for language.Occurs suddenly following a stroke or head injury or slowly,as a result of tumor or progressive neurological conditions.Speech therapists help with language therapy, teach non-verbal communication skills, and help family members adapt to new forms of communication.",
              image: "https://c0.wallpaperflare.com/preview/820/779/735/spices-ingredients-turmeric-cinnamon.jpg",
            },
            // { title: "Test", description: "Description", image: "" },
            // { title: "Test", description: "Description", image: "" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
