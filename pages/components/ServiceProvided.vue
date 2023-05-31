<template>
  <div class="my-10">
    <h2 class="heading-text">Services we provide</h2>
    <div v-for="service in servicesProvided" :key="service.title">
      <div class="mt-8">
        <h2 class="service-sub text-primary">
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
              title: "Autism Spectrum Disorder (ASD)",
              description:
                "Autism Spectrum Disorder (ASD), is a neurodevelopmental disorder caused by differences in the brain. Children with ASD often have problems with social communication and interaction, and restricted or repetitive behaviors or interests. Speech therapy for ASD  addresses language and communication challenges. It helps to improve their verbal, nonverbal and social communication.",
              image: "/images/service/1.png",
            },
            {
              title: "Language Disorder",
              description:
                "Language Disorder is an impairment in the processing of linguistic information that affects an individual's ability to receive and/or express language.The disorder involves persistent difficulties in the comprehension or production of spoken, written, sign language, or other forms of language.Speech therapy will often start by identifying your child’s areas of strength and weakness. They will develop a tailored treatment plan to help your child master their language skills and communicate more effectively.",
              image: "/images/service/2.png",
            },
            {
              title: "Dysarthria",
              description:
                "Dysarthria is a motor speech disorder that results from loss of strength, slowness, or coordination of the muscles that control speech. This results in difficulty understanding the speech and can range from mild slurring to completely unintelligible speech. Speech therapy goals include adjusting speech rate, strengthening muscles, improving breath support, improving articulation, and helping family members communicate with you.",
              image: "/images/service/3.png",
            },
            {
              title: "Aphasia",
              description:
                "Aphasia is a disorder that results from damage to areas of the brain that are responsible for language.Occurs suddenly following a stroke or head injury or slowly,as a result of tumor or progressive neurological conditions.Speech therapists help with language therapy, teach non-verbal communication skills, and help family members adapt to new forms of communication.",
              image: "/images/service/4.png",
            },
            // { title: "Test", description: "Description", image: "" },
            // { title: "Test", description: "Description", image: "" },
          ],
        },
        {
          title: "Occupational Therapy",
          description:
            "Occupational therapy works with people of all age groups and abilities to help them do everyday tasks that they find meaningful. These can include looking after yourself (self-care): brushing, eating, bathing, dressing, etc., work or school-related skills, engaging in social activities, hobbies or interests, and being part of your community. Occupational therapy services typically include an evaluation that tells us what values and activities are important to you, an intervention plan that is unique to you to improve your ability to perform daily activities and reach your goals, and an outcome evaluation to make sure that the goals you set with your occupational therapist are being met. The primary goal of occupational therapy is to enable people to participate in the activities of everyday life as independently as possible",
          content: [
            {
              title: "Autism",
              description:
                "Autism, or autism spectrum disorder (ASD), refers to a broad range of conditions characterized by challenges with social skills, repetitive behaviors, speech and nonverbal communication. For children with autism, Occupational Therapists often focus on fine motor skills, play skills, learning strategies, social skills and self-care. Occupational Therapy strategies can also help to manage sensory issues.",
              image: "/images/service/5.png",
            },
            {
              title: "Stroke",
              description:
                "Stroke is a medical condition in which there is damage to the brain caused by an interruption in the blood supply to the brain.After stroke, Occupational Therapy can help you return to work, be independent in your own home, and do leisure activities and hobbies. Occupational Therapy can also help in learning strategies to manage the cognitive, perceptual, and behavioral changes associated with Stroke. In addition, an Occupational Therapist can fabricate splints, advise on  equipments and home modifications to make you as safe and independent as possible",
              image: "/images/service/6.png",
            },
            {
              title: "Hand injuries",
              description:
                "Hand injuries involve injuries to the bone or soft tissue occurring below the wrist joint with exception of tendon injuries outside of this zone. Types of hand injuries depend on tissues involved in the injury as skin, tendon, nerve, vessel, bone or combination of these injuries. Occupational therapy can help in recovery after surgery including scar management, reducing pain, regaining movements, hand function strengthening and custom splinting to facilitate healing and also prevent stiffness",
              image: "/images/service/7.png",
            },
            {
              title: "Traumatic brain injury",
              description:
                "Traumatic brain injury (TBI) happens when a sudden, external, physical assault damages the brain. It often occurs as a result of a severe sports injury or car accident. A TBI can affect a variety of physical, cognitive, and psychological functions such as memory, emotional regulation, movement, and sensory processing. An occupational therapist will create a personalized rehabilitation regimen to help regain or compensate for these skills. The primary goal of occupational therapy for brain injury rehabilitation is to help individuals regain functional independent living skills.",
              image: "/images/service/8.png",
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
