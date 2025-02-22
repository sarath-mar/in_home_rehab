<template>
  <v-carousel
    show-arrows="hover"
    cycle
    hide-delimiter-background
    :height="470"
    hide-delimiters
  >
  <!-- 
    progress="primary" -->
    <v-carousel-item v-for="(slides, index) in getSidesDetails" :key="index">
      <div class="multiple-carousel-content px-2">
        <div class="carousel-content" v-for="(slide, i) in slides" :key="i">
          <BlogCard :details="slide" />
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import { useDisplay } from "vuetify";
import BlogCard from "./BlogCard.vue";
import {
  blogCollection,
  getDocs,
  orderBy,
  query,
} from "~/config/firebaseConfig";

export default {
  components: { BlogCard },
  setup() {
    // Destructure only the keys we want to use
    const { xs, md, sm, lg } = useDisplay();

    return { xs, md, sm, lg };
  },

  data() {
    return {
      slides: [],
    };
  },
  mounted() {
    this.getBlogDetails();
  },
  methods: {
    async getBlogDetails() {
      this.loading = true;
      let result = [];

      const blogQuery = query(blogCollection, orderBy("createdAt", "desc"));

      let data = await getDocs(blogQuery);
      console.log("blog", data);
      data.forEach((doc) => {
        let documentData = doc.data();
        documentData.id = doc.id;
        result.push(documentData);
      });

      this.slides = result;
      this.loading = false;
    },
  },
  computed: {
    getSidesDetails() {
      const sidesDetails = [];
      const count = this.xs ? 1 : this.sm ? 2 : this.md ? 3 : 4;
      for (let i = 0; i < this.slides.length; i += count) {
        sidesDetails.push(this.slides.slice(i, i + count));
      }
      return sidesDetails;
    },
  },
};
</script>
<style>
.carousel-content {
  margin: auto;
  width: 100%;
}
.multiple-carousel-content {
  display: grid;
  gap: 20px;
  justify-content: center;
  /* align-items: center; */
  grid-template-columns: repeat(
    1,
    1fr
  ); /* Default: 1 column for small screens */
}

@media (min-width: 600px) {
  .multiple-carousel-content {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (min-width: 900px) {
  .multiple-carousel-content {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for larger screens */
  }
}

@media (min-width: 1200px) {
  .multiple-carousel-content {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 4 columns for extra-large screens */
  }
}
</style>
