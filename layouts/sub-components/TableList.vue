<template>
  <div>
    jiii {{ totalItems }} {{ items }} hhh
    <!-- <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        :server-items-length="totalItems"
        :items-per-page="itemsPerPage"
        @update:page="fetchData"
        @update:items-per-page="fetchData"
        item-key="id"
      >
        <template v-slot:[`item.name`]="{ item }">
          <span>{{ item.name }}</span>
        </template>
      </v-data-table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', align: 'start', key: 'name' },
        { text: 'Email', align: 'start', key: 'email' },
        { text: 'Phone', align: 'start', key: 'phone' },
        // Add more headers based on your data
      ],
      items: [],
      totalItems: 10,
      loading: false,
      page: 1,
      itemsPerPage: 10,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = {
          data: [{ name: "sarath", email: "test", phone: "113" }],
        };
        this.items = response.data.items;
        this.totalItems = response.data.total;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
