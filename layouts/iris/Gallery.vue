<template>
  <div>
    <div class="d-flex justify-space-between">
      <h3 class="mb-5 text-primary">Gallery</h3>

      <v-btn class="bg-text" @click="openUploadDialog">Add Image</v-btn>
    </div>
    <snackbar
      :message="snackbarMessage"
      :type="snackbarType"
      :visible="snackbarVisible"
    />
    <loader v-if="loading" />
    <v-row v-else>
      <v-col
        v-for="(galleryData, index) in galleryDetails"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-hover v-slot:default="{ isHovering, props }">
          <v-card
            :elevation="isHovering ? 12 : 4"
            v-bind="props"
            @click="openDeleteDialog(galleryData)"
          >
            <div class="gallery-icon-container">
              <Icon name="mdi-close" class="gallery-icon"></Icon>
            </div>
            <v-img
              :src="galleryData.imgUrl"
              height="200px"
              class="white--text"
            />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <!-- Dialog to confirm image delete -->
    <v-dialog v-model="deleteDialog" max-width="300px">
      <v-card class="pa-8">
        Are you sure you want to delete this image?
        <div class="d-flex mt-4">
          <v-btn class="mr-5" @click="cancelDeleteImage">Close</v-btn>
          <v-btn :loading="deleteLoading" color="red" @click="deleteImage"
            >Confirm</v-btn
          >
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
  deleteDoc,
  deleteObject,
  doc,
  galleryCollection,
  getDocs,
  getDownloadURL,
  getStorage,
  orderBy,
  query,
  ref,
  serverTimestamp,
  uploadBytes,
} from "@/config/firebaseConfig";
import Snackbar from "../globalComponent/Snackbar.vue";
import Loader from "../sub-components/Loader.vue";
export default {
  components: { Snackbar, Loader },
  data() {
    return {
      deleteDialog: false,
      deleteLoading: false,
      uploadLoading: false,
      uploadDialog: false, // Track the visibility of the upload dialog
      selectedGallery: {},
      file: null,
      galleryDetails: [],
      snackbarMessage: "",
      snackbarType: "info",
      snackbarVisible: false,
      loading: false,
    };
  },
  mounted() {
    this.getGalleryDetails();
  },
  methods: {
    cancelDeleteImage() {
      this.selectedGallery = {};
      this.deleteDialog = false;
    },
    activeSnackbar(msg, type = "info") {
      (this.snackbarMessage = msg), (this.type = type);
      this.snackbarVisible = true;
    },
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

      this.galleryDetails = result;
      this.loading = false;
    },
    openDeleteDialog(data) {
      this.selectedGallery = data;
      this.deleteDialog = true;
    },
    async deleteImage() {
      if (!this.selectedGallery.id) {
        return;
      }
      try {
        this.deleteLoading = true;
        const docRef = doc(galleryCollection, this.selectedGallery.id);
        await deleteDoc(docRef);
        const storage = getStorage();
        const galleryRef = ref(
          storage,
          `gallery/${this.selectedGallery.imgId}.jpg`
        );
        await deleteObject(galleryRef);
        this.activeSnackbar("Successfully deleted the image", "success");

        this.getGalleryDetails();
        this.selectedGallery = {};
      } catch (error) {
        console.log('delete error : ',error)
        this.activeSnackbar("Something went error", "error");
      } finally {
        this.deleteDialog = false;
        this.deleteLoading = false;
      }
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
      try {
        let imgId = this.generateUniqueId();
        var storageRef = ref(getStorage(), `gallery/${imgId}.jpg`);
        await uploadBytes(storageRef, this.file);
        let imgUrl = await getDownloadURL(storageRef);
        await addDoc(galleryCollection, {
          imgUrl,
          imgId,
          createdAt: serverTimestamp(),
        });
        this.activeSnackbar("Successfully created the image", "success");
        this.getGalleryDetails();
      } catch (error) {
        this.activeSnackbar("Something went error", "error");

        console.log("Upload Error : ", error);
      } finally {
        this.uploadLoading = false;
        this.uploadDialog = false;
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
