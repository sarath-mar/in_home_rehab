<template>
  <div class="my-10" id="service-we-provide" :class="customClass">
    <h2 class="heading-text ">Deposits</h2>
    <div class="mt-4">
      <MultipleCarousel />
    </div>
  </div>
</template>

<script>
import { getDocs, newsCollection } from "../../config/firebaseConfig";
import BlogCard from "../sub-components/BlogCard.vue";
import MultipleCarousel from "../sub-components/MultipleCarousel.vue";
export default {
  components: {
    BlogCard,
    MultipleCarousel,
  },
  props: {
    customClass: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  async mounted() {
    let isError = false;
    try {
      let data = await getDocs(newsCollection);
      data.forEach((doc) => {
        let postData = doc.data();
        console.log("data 0", postData);

        postData.id = doc.id;
        console.log("data 1", postData);
      });
    } catch (error) {
      isError = true;
      console.log("error lat", error);
    } finally {
      this.$emit("apiSucceed",{isError});
    }

   
  },
};
</script>

<style lang="scss" scoped>
.heading-text {
  color: var(--primary-text-color);
}
</style>
