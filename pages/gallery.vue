<template>
    <v-container>
      <v-row
        class="masonry-grid"
        dense
      >
        <v-col
          v-for="(image, index) in images"
          :key="index"
          :cols="12" sm="6" md="4"
          class="masonry-item"
        >
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              @click="openDialog(image)"
              :style="{
                transform: isHovering ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }"
              class="image-card"
            >
              <v-img :src="image.src" class="rounded-xl" height="200px">
                <!-- Image loading placeholder -->
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-3"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title>{{ image.title }}</v-card-title>
              <v-card-subtitle v-if="isHovering">{{ image.description }}</v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
      <!-- Modal Dialog for image preview -->
      <v-dialog v-model="dialog" max-width="90%">
        <v-card>
          <v-img :src="currentImage.src" height="600px" contain></v-img>
          <v-card-title class="headline">
            {{ currentImage.title }}
            <!-- Close icon in the top-right corner -->
            <v-btn
              icon
              @click="dialog = false"
              class="close-btn"
              style="position: absolute; top: 16px; right: 16px; color: #fff;"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>{{ currentImage.description }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        currentImage: {},
        images: [
          {
            src: 'https://via.placeholder.com/600x400?text=Image+1',
            title: 'Image 1',
            description: 'This is a stylish image.',
          },
          {
            src: 'https://via.placeholder.com/400x600?text=Image+2',
            title: 'Image 2',
            description: 'Another beautiful image.',
          },
          {
            src: 'https://via.placeholder.com/800x600?text=Image+3',
            title: 'Image 3',
            description: 'A modern art style.',
          },
          {
            src: 'https://via.placeholder.com/500x500?text=Image+4',
            title: 'Image 4',
            description: 'A great nature view.',
          },
          {
            src: 'https://via.placeholder.com/700x400?text=Image+5',
            title: 'Image 5',
            description: 'An urban landscape.',
          },
          {
            src: 'https://via.placeholder.com/600x900?text=Image+6',
            title: 'Image 6',
            description: 'A futuristic concept.',
          },
        ]
      };
    },
    methods: {
      openDialog(image) {
        this.currentImage = image;
        this.dialog = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .masonry-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
  }
  
  .masonry-item {
    position: relative;
  }
  
  .image-card {
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .v-img {
    border-radius: 8px;
  }
  
  .v-card-title {
    font-weight: bold;
    font-size: 16px;
    transition: opacity 0.3s ease;
  }
  
  .v-card-subtitle {
    font-style: italic;
    color: rgba(0, 0, 0, 0.7);
    transition: opacity 0.3s ease;
  }
  
  .v-dialog {
    max-width: 90%;
  }
  
  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    color: #fff;
  }
  </style>
  