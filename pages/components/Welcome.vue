<template>
  <div class="py-10 welcome-main" id="about-us">
    <v-row class="align-center">
      <v-col cols="12" md="12">
        <v-row class="align-center">
          <v-col cols="12" md="7">
            <div>
              <h4 class="welcome-who">About Us</h4>
              <!-- <h4 class="welcome-who">Explore Our Cardamom Collection</h4> -->
              <!-- <h2 class="heading-text">Cardamom: The Queen of Spices</h2> -->
              <h2 class="heading-text">Elevate Your Culinary Journey</h2>
              <p class="paragraph-text mt-5">
                For over 30 years, zaffra has been dedicated to producing the
                finest premium cardamom. Each pod is carefully handpicked to
                ensure exceptional aroma, rich flavor, and unmatched quality.
                Rooted in tradition and refined by expertise, we deliver a
                luxurious spice experience that elevates every dish. Our
                commitment to excellence and sustainable practices has made us a
                trusted name among discerning customers worldwide
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <v-img cover class="welcome-img" src="/images/about.webp"></v-img>
            <!-- <v-img cover class="welcome-img" src="/images/doc.jpg"></v-img> -->
            <!-- <welcome-form /> -->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeItems: [
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Science Based Research",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.welcome-li-div {
  display: flex;
}
.welcome-ul {
  list-style: none;
  /* display: ; */
}
.welcome-li-div h4 {
  font-size: clamp(1em, 4vw, 1.5em);
  line-height: 1.333;
  font-weight: 900;
}
.welcome-li-div h6 {
  font-size: clamp(0.5em, 4vw, 1em);
  line-height: 1.333;
  font-weight: 900;
}
.welcome-ul li {
  margin-bottom: 30px;
}
.icon-welcome {
  font-size: 60px;
  font-weight: 900;
  color: var(--primary-text-color);
}
.welcome-img {
  height: 90vh;
  border-radius: 20px;
}

.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
