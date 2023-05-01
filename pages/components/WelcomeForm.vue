<template>
  <v-dialog transition="dialog-bottom-transition" width="auto">
    <template v-slot:activator="{ props }">
      <!-- <v-btn color="primary" v-bind="props">From the bottom</v-btn> -->
      <v-btn append-icon="mdi-add" v-bind="props" class="mt-3 mt-md-5 banner-btn">
            Connect With Us
          </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar class="form-title" title="Connect with us"></v-toolbar>
        <v-card-text>
          <div class="text-h2 pa-12">Hello world!</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<style>
.form-title{
    color: white; 
    background-color: var(--secondary-text-color);
}
</style>
