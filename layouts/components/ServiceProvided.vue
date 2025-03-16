<template>
  <div class="my-10" id="service-we-provide" :class="customClass">
    <h2 class="heading-text text">Our Services</h2>
    <v-row class="service-main mt-4">
      <v-col
        cols="12"
        md="4"
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
          title: "Speech and Language Therapy",
          isClicked: false,
          icon: "uil:instagram",
          img: "https://circlecare4kids.com/wp-content/uploads/2022/12/iStock-1364504091.jpg",
          description:
            "Speech and Language Therapy (SLT) is a specialized field that focuses on assessing, diagnosing, and treating communication disorders. At Iris CDC, we work with individuals of all age groups to address a wide range of communication difficulties, including challenges with speech, language, social skills, and literacy. We offer comprehensive services, including assessment, treatment planning, counselling, and home-based plans, all tailored to each individual’s unique needs. Our therapy programs are grounded in the latest, evidence-based strategies and techniques, ensuring that each individual benefits from the most effective and adaptive methods available.",
          helpWith: [
            "Receptive and Expressive Language Delay",
            "Attention Deficit Hyperactivity Disorder (ADHD)",
            "Autism",
            "Down’s Syndrome",
            "Stuttering",
            "Speech Sound Disorder",
            "Learning Disability",
            "Intellectual Disability",
            "Dysarthria",
            "Aphasia",
            "Social Communication Disorder",
          ],
        },
        {
          title: "Feeding Therapy",
          isClicked: false,
          icon: "uil:instagram",
          img: "https://cdikids.org/wp-content/uploads/2019/04/Feeding.jpg",
          description:
            "Feeding Therapy is a specialized intervention designed to help individuals overcome difficulties related to eating, drinking, and swallowing. At Iris CDC, we work with individuals who face challenges with feeding, including food refusal, texture aversions, swallowing difficulties, and mealtime behaviors. Our pediatric therapists, trained in TalkTools, USA, use specialized techniques to help children expand their diets, address feeding difficulties, and ensure safety throughout the process. After a thorough assessment, we create a personalized therapy plan based on the child’s age, abilities, and specific challenges. Our goal is to make mealtimes a more enjoyable and safe experience while addressing specific feeding challenges.",
        },
        {
          title: "Oral Placement Therapy",
          isClicked: false,
          icon: "uil:instagram",
          img: "https://server.imsdesk.com/ecom/clients/169/images/oral.jpg",
          description:
            "Oral Placement Therapy (OPT) focuses on improving oral motor skills necessary for speech clarity, feeding, and overall oral motor function. By enhancing muscle strength, coordination, and awareness, individuals can improve speech production and swallowing abilities. We start with a thorough assessment of the individual’s oral motor skills, speech patterns, and feeding abilities to identify areas of weakness. Based on this assessment, our speech-language therapists create personalized intervention plans using OPT techniques and tools, such as Z-vibes,straws, chewy tubes, and jaw graders which are carefully selected based on the individual's needs and goals.",
        },
        {
          title: "Articulation therapy",
          isClicked: false,
          icon: "uil:instagram",
          isLocalImg:true,
          img: "images/service/service_1.jpeg",
          description:
            'Articulation therapy is a type of speech therapy designed to help individuals correct speech sound errors and improve their articulation. This therapy focuses on teaching the correct way to produce specific sounds and helps individuals develop clearer speech patterns. It is commonly used for children or adults who have difficulty pronouncing certain sounds, resulting in misarticulations such as <br> <br> Substitution: Replacing one sound with another, for example, saying "wabbit" instead of "rabbit." <br> <br>Omission: Leaving out a sound in a word, such as saying "ca" instead of "cat." <br> <br> Distortion: Producing a sound inaccurately, often making it sound unclear Addition: Inserting extra sounds into words, such as saying "buhlack" instead of "black."Articulation therapy typically involves a series of exercises and techniques that focus on the  production of sounds. These may include activities to strengthen the muscles involved in speech, visual, tactile and auditory cues to promote accurate sound production, and practice with words, phrases, or sentences that contain the target sounds',
        },
        {
          title: "Auditory Verbal Therapy (AVT)",
          isClicked: false,
          icon: "uil:instagram",
          isLocalImg:true,
          img: "images/service/service_2.jpeg",
          description:
            "Auditory Verbal Therapy (AVT) is a specialized, parent-centered approach designed to help individuals with hearing loss develop spoken language through listening. This approach utilizes advanced hearing technology such as cochlear implants and hearing aids to maximize a child’s ability to understand and use spoken language without relying on sign language or lip reading. AVT is based on structured listening activities, auditory training, and consistent parental involvement to integrate listening into everyday life. <br> <br> AVT follows a set of guiding principles that focus on: <br> Promoting the development of spoken language through active listening. <br> Encouraging early detection and intervention for hearing loss. <br> Training parents and caregivers to become the primary facilitators of auditory learning.  <br> Using age-appropriate and meaningful listening experiences to develop speech and communication skills. <br> Helping children integrate into mainstream education and social settings.",
        },
        {
          title: "Adult Speech and Language Therapy",
          isClicked: false,
          icon: "uil:instagram",
          isLocalImg:true,
          img: "images/service/service_3.jpeg",
          description:
            "Speech and language therapy aims at identifying and treating disorders related to speech, language, communication, and swallowing. Therapy involves personalized treatment plans designed to address the specific needs of the individual, with the aim of improving functional communication skills in everyday settings. <br> <br> Several conditions can impair an adult's ability to communicate. Some of the most common include",
          helpWith: [
            "Aphasia: A language disorder that affects the ability to speak, understand speech, read, and write. It is often caused by a stroke or brain injury.",
            "Dysarthria: A motor speech disorder that occurs when the muscles used for speaking become weak or difficult to control, often due to neurological conditions such as stroke or Parkinson’s disease.",
            "Cognitive Communication Disorders: These disorders affect cognitive functions like memory, attention, problem-solving, and executive function, which in turn impact communication abilities. Conditions such as traumatic brain injury (TBI) or dementia can cause these issues.",
            "Voice Disorders: Conditions that affect the pitch, volume, or quality of the voice, such as vocal cord paralysis.",
            "Swallowing Disorders (Dysphagia): Conditions that make it difficult to swallow food or liquids properly, often associated with neurological conditions, such as stroke or Parkinson’s disease.",
            "Apraxia of Speech: A motor speech disorder that impairs the ability to plan and coordinate the movements necessary for speech, often caused by brain injury or neurological disease.",
          ],
        },
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
