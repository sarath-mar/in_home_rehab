<template>
    <div>
<div class="d-flex justify-space-between">

    <h3 class="mb-5">Gallery</h3>

    <v-btn  color="primary" @click="openUploadDialog">Add Image</v-btn>

</div>
      <v-row>
        <v-col
          v-for="(image, index) in images"
          :key="index"
          cols="12" sm="6" md="4"
        >
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 4"
              v-bind="props"
              @click="openDialog(image)"
            >
              <div class="gallery-icon-container">
                <Icon name="mdi-close" class="gallery-icon"></Icon>
              </div>
              <v-img :src="image.src" height="200px" class="white--text" />
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
      <!-- Dialog to confirm image delete -->
      <v-dialog v-model="dialog" max-width="300px">
        <v-card class="pa-8">
          Are you sure you want to delete this image?
          <div class="d-flex mt-4">
            <v-btn class="mr-5" @click="dialog = false">Close</v-btn>
            <v-btn color="red" @click="deleteImage">Confirm</v-btn>
          </div>
        </v-card>
      </v-dialog>
  
      <!-- Dialog for uploading image -->
      <v-dialog v-model="uploadDialog" max-width="500px">
        <v-card class="pa-8">
          <v-file-input v-model="newImage" label="Select Image" accept="image/*" outlined />
          <div class="d-flex mt-4">
            <v-btn class="mr-5" @click="uploadDialog = false">Cancel</v-btn>
            <v-btn color="primary" @click="addImage">Upload</v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        uploadDialog: false,  // Track the visibility of the upload dialog
        selectedImage: {},
        newImage: null,  // Holds the new image to be uploaded
        images: [
          { src: 'https://circlecare4kids.com/wp-content/uploads/2022/12/iStock-1364504091.jpg' },
          { src: 'https://via.placeholder.com/400x300?text=Image+2' },
          { src: 'https://via.placeholder.com/400x300?text=Image+3' },
          { src: 'https://via.placeholder.com/400x300?text=Image+4' },
          { src: 'https://via.placeholder.com/400x300?text=Image+5' },
          { src: 'https://via.placeholder.com/400x300?text=Image+6' },
        ],
      };
    },
    methods: {
      openDialog(image) {
        this.selectedImage = image;
        this.dialog = true;
      },
      deleteImage() {
        const index = this.images.indexOf(this.selectedImage);
        if (index !== -1) {
          this.images.splice(index, 1);
        }
        this.dialog = false;
      },
      openUploadDialog() {
        this.uploadDialog = true;  // Show the upload dialog
      },
      addImage() {
        if (this.newImage) {
          // For the sake of this example, I'm assuming the new image will be uploaded as a URL
          // You might want to adjust this part if you're working with actual file uploads
          const reader = new FileReader();
          reader.onload = (e) => {
            this.images.push({ src: e.target.result });
            this.uploadDialog = false;
          };
          reader.readAsDataURL(this.newImage);
          this.newImage = null;  // Reset the input
        } else {
          this.uploadDialog = false;  // Close the dialog if no image was selected
        }
      },
    },
  };
  </script>
  
  <style lang="scss">
  .gallery-icon-container {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    right: 3px;
    top: 3px;
    height: 27px;
    width: 27px;
    border: 1px solid red;
    border-radius: 50%;
    margin: auto;
    text-align: center;
    color: red;
  }
  
  .v-img__img--contain {
    width: 100%;
    object-fit: cover !important;
  }
  
  .v-card {
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .v-card:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  </style>
  