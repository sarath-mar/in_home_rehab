<template>
    <div class="loading-container" >
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      toggleLoading() {
        this.isLoading = !this.isLoading;
      }
    }
  }
  </script>
  
  <style scoped>
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
  }
  
  .spinner {
    border: 8px solid transparent;
    border-top: 8px solid var(--primary-text-color); /* Blue color */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  