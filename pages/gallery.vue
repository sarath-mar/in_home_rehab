<template>
  <div class="pa-5">
    <h1 class="gallery-heading">Gallery</h1>
    <!-- Masonry Gallery -->
    <div class="masonry-gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="masonry-item"
        @click="openLightbox(index)"
      >
        <!-- Image -->
        <v-img
          :src="image.imgUrl"
          class="rounded-lg"
          alt="iris"
          @load="imageLoaded(index)"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-3"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </div>
    <v-dialog v-model="showLightbox" max-width="90%">
      <v-card>
        <v-img
          :src="images[lightboxIndex].imgUrl"
          height="600px"
          cover
        ></v-img>
        <v-card-title class="headline">
          <v-btn
            icon
            @click="closeLightbox"
            class="close-btn"
            style="position: absolute; top: 16px; right: 16px; color: #fff"
          >
            <Icon class="close-icon" name="mdi-close"></Icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="justify-space-between">
          <v-btn icon @click="prevImage" :disabled="lightboxIndex === 0">
            <Icon class="next-icon" name="mdi-arrow-left"></Icon>
          </v-btn>
          <v-btn text @click="closeLightbox">Close</v-btn>
          <v-btn
            icon
            @click="nextImage"
            :disabled="lightboxIndex === images.length - 1"
          >
            <Icon class="next-icon" name="mdi-arrow-right"></Icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  galleryCollection,
  getDocs,
  orderBy,
  query,
} from "@/config/firebaseConfig";
export default {
  name: "MasonryGallery",
  data() {
    return {
      images: [],
      showLightbox: false,
      lightboxIndex: 0,
    };
  },
  mounted() {
    this.getGalleryDetails();
  },
  methods: {
    async getGalleryDetails() {
      this.loading = true;
      let result = new Array();

      const galleryQuery = query(
        galleryCollection,
        orderBy("createdAt", "desc")
      );

      let data = await getDocs(galleryQuery);
      data.forEach((doc) => {
        let documentData = doc.data();
        documentData.id = doc.id;
        result.push(documentData);
      });

      this.images = result;
      this.loading = false;
    },
    imageLoaded(index) {
      // Mark the image as loaded when it finishes loading
      this.images[index].loaded = true;
    },
    openLightbox(index) {
      this.lightboxIndex = index;
      this.showLightbox = true;
    },
    closeLightbox() {
      this.showLightbox = false;
    },
    prevImage() {
      if (this.lightboxIndex > 0) {
        this.lightboxIndex--;
      }
    },
    nextImage() {
      if (this.lightboxIndex < this.images.length - 1) {
        this.lightboxIndex++;
      }
    },
  },
};
</script>

<style scoped>
/* Masonry layout using CSS Masonry */
.masonry-gallery {
  column-count: 3; /* Number of columns */
  column-gap: 10px;
  /* padding: 10px; */
}

.masonry-item {
  cursor: pointer;
  display: inline-block;
  margin-bottom: 20px;
  width: 100%;
  break-inside: avoid;
}

.masonry-item img {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.masonry-item img:hover {
  transform: scale(1.05);
}
.close-icon {
  color: black;
}
.next-icon {
  font-size: 20px;
}
/* Loader Spinner */
.image-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 80%;
  max-height: 80%;
}

.lightbox-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
}

.close-btn:hover {
  background-color: #ff4e4e;
  color: white;
}
.gallery-heading{
    color: var(--primary-text-color);
}
</style>
