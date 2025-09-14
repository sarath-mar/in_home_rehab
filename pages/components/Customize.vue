<template>
  <div class="container">
    <div class="left">
      <img src="/images/3.png" alt="Left Image" />
    </div>
    <div class="right-top">
      <img src="/images/bangles/5.jpg" alt="Top Right Image" />
    </div>
    <div class="right-bottom">
      <img src="/images/bangles/8.jpg" alt="Bottom Right Image" />
    </div>
  </div>
</template>

<script setup>
// No script needed unless you're dynamically loading images
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;   // two columns: left and right
  grid-template-rows: 1fr 1fr;      // two rows for right-side stacking
  height: 60vh;                    // full screen height
//   width: 100vw;                     // full screen width
}

.left {
  grid-row: 1 / span 2;             // make the left image span both rows
  grid-column: 1;
}

.right-top {
  grid-row: 1;
  grid-column: 2;
}

.right-bottom {
  grid-row: 2;
  grid-column: 2;
}

.left img,
.right-top img,
.right-bottom img {
  width: 100%;
  height: 100%;
//   object-fit: cover;
  display: block;
}
</style>
