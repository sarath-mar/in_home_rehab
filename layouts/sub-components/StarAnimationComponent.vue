<template>
  <div>
    <div v-for="i in starCount" :key="i" :class="'star'">⭐</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starCount: 5,
    };
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
.star:nth-child(n) {
  top: -10px;
  left: calc(100% * (random() * 1)); /* Random horizontal position */
  animation-duration: calc(
    4s + (random() * 3s)
  ); /* Random duration between 4s to 7s */
  animation-delay: calc(random() * 2s); /* Random delay between 0s to 2s */
  animation-timing-function: ease-in;
}

/* Position stars at random locations and sizes */
.star:nth-child(1) {
  top: -10px;
  left: 20%;
  animation-duration: 4s;
  animation-delay: 0s;
  animation-timing-function: ease-in;
}

.star:nth-child(2) {
  top: -10px;
  left: 50%;
  animation-duration: 6s;
  animation-delay: 1s;
}

.star:nth-child(3) {
  top: -10px;
  left: 75%;
  animation-duration: 5.5s;
  animation-delay: 0.5s;
}

.star:nth-child(4) {
  top: -10px;
  left: 10%;
  animation-duration: 7s;
  animation-delay: 2s;
}

.star:nth-child(5) {
  top: -10px;
  left: 90%;
  animation-duration: 4.5s;
  animation-delay: 1.5s;
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
