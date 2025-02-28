<template>
  <div>
    <table class="colorful-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone No</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.phoneNo }}</td>
          <td>{{ item.description }}</td>
          <td>{{ new Date(item.createdAt.seconds * 1000).toLocaleString() }}</td>
          <td>
            <!-- <button @click="openEditDialog(item)">Edit</button> -->
            <button @click="openDeleteDialog(item)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Edit Dialog -->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>Edit Item</v-card-title>
        <v-card-text>
          <v-form ref="editForm">
            <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
            <v-text-field v-model="editedItem.phoneNo" label="Phone No"></v-text-field>
            <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="closeEditDialog">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="saveEdit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Dialog -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title>Confirm Delete</v-card-title>
        <v-card-text>Are you sure you want to delete this item?</v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="closeDeleteDialog">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="confirmDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getDocs, irisConnectWithUsCollection, orderBy, query, doc, deleteDoc } from "@/config/firebaseConfig";

export default {
  data() {
    return {
      items: [],
      editDialog: false,
      deleteDialog: false,
      editedItem: {},
      itemToDelete: null,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      const tableQuery = query(
        irisConnectWithUsCollection,
        orderBy("createdAt", "desc")
      );
      let result = [];
      let data = await getDocs(tableQuery);
      data.forEach((doc) => {
        let documentData = doc.data();
        documentData.id = doc.id;
        result.push(documentData);
      });
      this.items = result;
      this.loading = false;
    },
    openEditDialog(item) {
      this.editedItem = { ...item };
      this.editDialog = true;
    },
    closeEditDialog() {
      this.editDialog = false;
    },
    saveEdit() {
      // Save the edited item
      // Update the item in the items array
      const index = this.items.findIndex(i => i.id === this.editedItem.id);
      if (index !== -1) {
        this.items.splice(index, 1, this.editedItem);
      }
      this.closeEditDialog();
    },
    openDeleteDialog(item) {
      this.itemToDelete = item;
      this.deleteDialog = true;
    },
    closeDeleteDialog() {
      this.deleteDialog = false;
    },
    async confirmDelete() {
      // Delete the item
      const docRef = doc(irisConnectWithUsCollection, this.itemToDelete.id);
      await deleteDoc(docRef);
      this.fetchData();
      this.closeDeleteDialog();
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.colorful-table {
  width: 100%;
  border-collapse: collapse;
}

.colorful-table th, .colorful-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.colorful-table th {
  background-color: #4CAF50;
  color: white;
}

.colorful-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.colorful-table tr:hover {
  background-color: #ddd;
}

.colorful-table td button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  color: white;
  cursor: pointer;
}

.colorful-table td button:first-child {
  background-color: #4CAF50; /* Green */
}

.colorful-table td button:last-child {
  background-color: #f44336; /* Red */
}
</style>
