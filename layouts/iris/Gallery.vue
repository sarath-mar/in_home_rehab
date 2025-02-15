<template>
  <div>
    <div class="d-flex justify-space-between">
      <h3 class="mb-5 text-primary">Gallery</h3>

      <v-btn class="bg-text" @click="openUploadDialog">Add Image</v-btn>
    </div>
    <v-row>
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="12"
        sm="6"
        md="4"
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
        <!-- <v-file-input v-model="newImage" label="Select Image" accept="image/*" outlined /> -->
        <input type="file" @change="handleFileUpload" accept="image/*" />
        <div class="d-flex mt-4">
          <v-btn class="mr-5" @click="uploadDialog = false">Cancel</v-btn>
          <v-btn :loading="uploadLoading" color="primary" @click="uploadImage"
            >Upload</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  addDoc,
  galleryCollection,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "@/config/firebaseConfig";
export default {
  data() {
    return {
      dialog: false,
      uploadLoading: false,
      uploadDialog: false, // Track the visibility of the upload dialog
      selectedImage: {},
      file: null,
      images: [
        {
          src: "https://circlecare4kids.com/wp-content/uploads/2022/12/iStock-1364504091.jpg",
        },
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
      this.uploadDialog = true; // Show the upload dialog
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
      }
    },
    async uploadImage() {
      if (!this.file) {
        return;
      }
      this.uploadLoading = true;
      console.log("object");
      try {
        var storageRef = ref(getStorage(), `albums/${this.file.name}.jpg`);
        await uploadBytes(storageRef, this.file);
        let postUrl = await getDownloadURL(storageRef);
        let data = await addDoc(galleryCollection, {
          postUrl,
        });
        //   if (data){

        //       this.uploadDialog = false;
        //   }
      } catch (error) {
        console.log("Upload Error : ", error);
      } finally {
        this.uploadLoading = false;
        this.uploadDialog = false;
      }

      // // const uploadTask = storage.ref(`images/${this.file.name}`).put(this.file);

      // // uploadTask.on(
      // //   'state_changed',
      // //   (snapshot) => {
      // //     // You can track upload progress here (optional)
      // //   },
      // //   (error) => {
      // //     console.error(error);
      // //   },
      // //   () => {
      // //     // Once the upload is complete, get the file's download URL
      // //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      // //       // Save the URL in Firebase Realtime Database
      // //       const imageData = {
      // //         url: downloadURL,
      // //         name: this.file.name,
      // //       };

      // //       // If you want to store it in the Realtime Database:
      // //       database.ref('images').push(imageData);

      // //       // If you want to store it in Firestore:
      // //       // firestore.collection('images').add(imageData);
      // //     });
      //   }
      // );
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
