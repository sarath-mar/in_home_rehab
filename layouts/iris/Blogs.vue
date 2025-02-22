<template>
    <div>
      <div class="d-flex justify-space-between">
        <h3 class="mb-5 text-primary">Blog</h3>
        <v-btn class="bg-text" @click="openUploadDialog">Add Blog Post</v-btn>
      </div>
      <snackbar
        :message="snackbarMessage"
        :type="snackbarType"
        :visible="snackbarVisible"
      />
      <loader v-if="loading" />
      <v-row v-else>
        <v-col
          v-for="(blogData, index) in blogDetails"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 4"
              v-bind="props"
            
            >
              <v-img :src="blogData.imgUrl" height="200px" class="white--text" />
              <v-card-title>{{ blogData.title }}</v-card-title>
              <v-card-subtitle >{{ blogData.content }}</v-card-subtitle>
              <div class="d-flex pa-2 align-end">

                  <v-btn color="blue" @click.stop="openEditDialog(blogData)">Edit</v-btn>
                  <v-btn class="ml-4" color="red" @click.stop="openDeleteDialog(blogData)">Delete</v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
      <!-- Dialog to confirm blog delete -->
      <v-dialog v-model="deleteDialog" max-width="300px">
        <v-card class="pa-8">
          Are you sure you want to delete this blog post?
          <div class="d-flex mt-4">
            <v-btn class="mr-5" @click="cancelDeleteBlog">Close</v-btn>
            <v-btn :loading="deleteLoading" color="red" @click="deleteBlog">Confirm</v-btn>
          </div>
        </v-card>
      </v-dialog>
  
      <!-- Dialog for uploading or editing blog -->
      <v-dialog v-model="uploadDialog" max-width="500px">
        <v-card class="pa-8">
          <v-text-field v-model="newBlogTitle" label="Blog Title" outlined required />
          <v-textarea v-model="newBlogContent" label="Blog Content" outlined required />
          <input type="file" @change="handleFileUpload" accept="image/*" />
          <div class="d-flex mt-4">
            <v-btn class="mr-5" @click="uploadDialog = false">Cancel</v-btn>
            <v-btn :loading="uploadLoading" color="primary" @click="uploadBlog">{{ isEditMode ? "Save Changes" : "Upload" }}</v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </template>
<script>
import {
  addDoc,
  updateDoc,
  deleteDoc,
  deleteObject,
  doc,
  blogCollection,
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
      uploadDialog: false,
      isEditMode: false, // Track if we are editing
      selectedBlog: {},
      file: null,
      newBlogTitle: "",
      newBlogContent: "",
      blogDetails: [],
      snackbarMessage: "",
      snackbarType: "info",
      snackbarVisible: false,
      loading: false,
    };
  },
  mounted() {
    this.getBlogDetails();
  },
  methods: {
    cancelDeleteBlog() {
      this.selectedBlog = {};
      this.deleteDialog = false;
      this.file=null
    },
    activeSnackbar(msg, type = "info") {
      this.snackbarMessage = msg;
      this.snackbarType = type;
      this.snackbarVisible = true;
    },
    async getBlogDetails() {
      this.loading = true;
      let result = [];

      const blogQuery = query(blogCollection, orderBy("createdAt", "desc"));

      let data = await getDocs(blogQuery);
      data.forEach((doc) => {
        let documentData = doc.data();
        documentData.id = doc.id;
        result.push(documentData);
      });

      this.blogDetails = result;
      this.loading = false;
    },
    openDeleteDialog(data) {
      this.selectedBlog = data;
      this.deleteDialog = true;
    },
    async deleteBlog() {
      if (!this.selectedBlog.id) {
        return;
      }
      try {
        this.deleteLoading = true;
        const docRef = doc(blogCollection, this.selectedBlog.id);
        await deleteDoc(docRef);
        const storage = getStorage();
        const blogRef = ref(storage, `blogs/${this.selectedBlog.imgId}.jpg`);
        await deleteObject(blogRef);
        this.activeSnackbar("Successfully deleted the blog post", "success");

        this.getBlogDetails();
        this.selectedBlog = {};
      } catch (error) {
        console.log("delete error: ", error);
        this.activeSnackbar("Something went wrong", "error");
      } finally {
        this.deleteDialog = false;
        this.deleteLoading = false;
      }
    },
    openUploadDialog() {
        this.isEditMode = false;
        this.uploadDialog = true; // Show the upload dialog
      },
    openEditDialog(blogData) {
      // Set the form into edit mode and pre-fill it with the existing blog data
      this.selectedBlog = blogData;
      this.isEditMode = true;
      this.newBlogTitle = blogData.title;
      this.newBlogContent = blogData.content;
      this.uploadDialog = true;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
      }
    },
    async uploadBlog() {
      if (!this.newBlogTitle || !this.newBlogContent || (!this.file && !this.isEditMode)) {
        this.activeSnackbar("Please fill all fields and upload an image.", "error");
        return;
      }
      this.uploadLoading = true;
      console.log('file',this.file)
      console.log('this.isEditMode',this.isEditMode)
      try {
        if (this.isEditMode) {
          // If in edit mode, update the blog
          let imgUrl = this.selectedBlog.imgUrl;

          // If a new file is uploaded, upload it and get the new URL
          if (this.file) {
            let imgId = this.selectedBlog.imgId; // Keep the same imgId for the blog
            const storageRef = ref(getStorage(), `blogs/${imgId}.jpg`);
            await uploadBytes(storageRef, this.file);
            imgUrl = await getDownloadURL(storageRef);
          }

          // Update blog data in Firestore
          const docRef = doc(blogCollection, this.selectedBlog.id);
          await updateDoc(docRef, {
            imgUrl,
            title: this.newBlogTitle,
            content: this.newBlogContent,
            updatedAt: serverTimestamp(),
          });
          this.activeSnackbar("Blog post updated successfully", "success");
        } else {
          // Upload new blog post
          let imgId = this.generateUniqueId();
          const storageRef = ref(getStorage(), `blogs/${imgId}.jpg`);
          await uploadBytes(storageRef, this.file);
          let imgUrl = await getDownloadURL(storageRef);
          await addDoc(blogCollection, {
            imgUrl,
            imgId,
            title: this.newBlogTitle,
            content: this.newBlogContent,
            createdAt: serverTimestamp(),
          });
          this.activeSnackbar("Successfully created the blog post", "success");
        }

        this.getBlogDetails();
        this.resetForm();
      } catch (error) {
        this.activeSnackbar("Something went wrong", "error");
        console.log("Upload Error: ", error);
      } finally {
        this.uploadLoading = false;
        this.uploadDialog = false;
        this.file=null
      }
    },
    resetForm() {
      this.isEditMode = false;
      this.newBlogTitle = "";
      this.newBlogContent = "";
      this.file = null;
    },
  },
};
</script>
<style lang="scss">
.blog-icon-container {
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