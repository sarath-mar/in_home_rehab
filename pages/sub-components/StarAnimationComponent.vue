<template>
    <div>
      <div
        v-for="i in starCount"
        :key="i"
        :class="'star'"
        :style="getStarStyle(i)"
      >
        ⭐
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        starCount: 10,
        mouseX: 0,
        mouseY: 0,
        starPositions: [], // Store original positions of stars
        smoothMouseX: 0, // Smoothed mouse X position
        smoothMouseY: 0, // Smoothed mouse Y position
        smoothingFactor: 0.1, // Smoothing factor for mouse movement
      };
    },
    created() {
      // Initialize star positions
      this.starPositions = Array.from({ length: this.starCount }, () => ({
        top: `${Math.random() * -50 - 10}px`,
        left: `${Math.random() * 100}%`,
      }));
    },
    methods: {
        //   moveStars(event) {
        //     this.mouseX = event.clientX;
        //     this.mouseY = event.clientY;
        //   },
      getStarStyle(index) {
        const { top, left } = this.starPositions[index - 1];
  
        // Smooth the mouse movement
        this.smoothMouseX += (this.mouseX - this.smoothMouseX) * this.smoothingFactor;
        this.smoothMouseY += (this.mouseY - this.smoothMouseY) * this.smoothingFactor;
  
        // Calculate the effect of mouse movement on star position
        // const mouseEffectX = (this.smoothMouseX / window.innerWidth) * 20 - 10;
        // const mouseEffectY = (this.smoothMouseY / window.innerHeight) * 20 - 10;
  
        return {
          top,
          left,
          fontSize: `${Math.random() * 10 + 20}px`,
          animationDuration: `${Math.random() * 2 + 4}s`,
          animationDelay: `${Math.random() * 2}s`,
          animationTimingFunction: 'ease-in',
        //   transform: `translate(${mouseEffectX}px, ${mouseEffectY}px)`,
        //   transition: 'transform 0.1s ease-out', // smooth mouse follow effect
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .star {
    position: absolute;
    font-size: 30px;
    animation: fall 5s linear infinite;
    opacity: 0;
    z-index: 5;
  }
  
  /* Keyframe animation for dropping stars */
  @keyframes fall {
    0% {
      top: -10px;
      opacity: 1;
    }
    100% {
      top: 100vh; /* Drops to the bottom of the viewport */
      opacity: 0;
    }
  }
  </style>