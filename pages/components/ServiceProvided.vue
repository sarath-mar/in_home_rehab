<template>
  <div class="my-10">
    <h2 class="heading-text">Services we provide</h2>
    <div v-for="service in servicesProvided" :key="service.title">
      <div class="mt-8">
        <h2 class="service-sub text-primary ">
          <Icon name="uil:label" /> {{ service.title }}
        </h2>
        <p class="mt-3 paragraph-text">{{ service.description }}</p>
        <div class="mt-3">
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
          title: "Speech Therapy",
          description:
            "Speech therapy is a type of therapy that helps people improve their communication skills, including speech, language, and swallowing abilities. It can benefit individuals with a wide range of conditions, such as developmental delays, stuttering, voice disorders, and brain injuries. The therapy typically involves exercises, strategies, and techniques to improve communication and promote functional independence. Speech therapists work with individuals of all ages, from children to the elderly, and tailor the therapy to meet the unique needs and goals of each person. The ultimate goal of speech therapy is to improve an individual's ability to communicate effectively and confidently in daily life.",
          content: [
            {
              title: "Test",
              description:
                "Autism Spectrum Disorder (ASD), is a neurodevelopmental disorder caused by differences in the brain. Children with ASD often have problems with social communication and interaction, and restricted or repetitive behaviors or interests. Speech therapy for ASD  addresses language and communication challenges. It helps to improve their verbal, nonverbal and social communication.",
              image: "",
            },
            {
              title: "Test",
              description:
                "Language Disorder is an impairment in the processing of linguistic information that affects an individual's ability to receive and/or express language.The disorder involves persistent difficulties in the comprehension or production of spoken, written, sign language, or other forms of language.Speech therapy will often start by identifying your child’s areas of strength and weakness. They will develop a tailored treatment plan to help your child master their language skills and communicate more effectively.",
              image: "",
            },
            {
              title: "Test",
              description:
                "Dysarthria is a motor speech disorder that results from loss of strength, slowness, or coordination of the muscles that control speech. This results in difficulty understanding the speech and can range from mild slurring to completely unintelligible speech. Speech therapy goals include adjusting speech rate, strengthening muscles, improving breath support, improving articulation, and helping family members communicate with you.",
              image: "",
            },
            {
              title: "Test",
              description:
                "Aphasia is a disorder that results from damage to areas of the brain that are responsible for language.Occurs suddenly following a stroke or head injury or slowly,as a result of tumor or progressive neurological conditions.Speech therapists help with language therapy, teach non-verbal communication skills, and help family members adapt to new forms of communication.",
              image: "",
            },
            // { title: "Test", description: "Description", image: "" },
            // { title: "Test", description: "Description", image: "" },
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
