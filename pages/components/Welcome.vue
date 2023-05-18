<template>
  <div class="welcome-main">
    <v-row class="align-center">
      <v-col cols="12" md="12">
        <v-row>
          <v-col cols="12">
            <div class="text-center">
              <h4 class="welcome-who">Who We Are</h4>
              <h2 class="welcome-main-text">Welcome to Yem Yem Impex</h2>
              <p class="welcome-secondary mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                ea illum deleniti maiores velit eaque assumenda! Accusantium,
                dolor. Voluptate sunt quod veniam nisi officia maxime quaerat
                aut consequatur ipsum iusto! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Corrupti, a quos. Recusandae
                eveniet voluptatibus ad in, quisquam facere quia doloremque
                dolor magnam necessitatibus, nisi amet quis. Maiores, placeat
                enim. Fugiat.
              </p>
              <p class="welcome-secondary mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem ex neque, in blanditiis delectus aliquam perspiciatis
                cupiditate voluptates veniam eveniet, iure ullam quos quae
                recusandae earum beatae illo sint corrupti.
              </p>
            </div>
          </v-col>
          <!-- <v-col cols="12" md="5">
            <v-img cover class="welcome-img" src="/images/doc.jpg"></v-img>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WelcomeForm from "./WelcomeForm.vue";
export default {
  components: { WelcomeForm },
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
.welcome-main-text {
  font-size: clamp(3.5em, 4vw, 4.5em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  /* margin-top: 20px; */
  color: var(--secondary-text-color);
}
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
  height: 100%;
  border-radius: 20px;
}
.welcome-secondary {
  font-size: clamp(1em, 4vw, 2em);
  /* line-height: 1.333; */
  font-weight: 600;
  letter-spacing: 0.1rem;
  /* margin-top: 20px; */
  /* color: var(--primary-text-color); */
}
.welcome-who {
  font-size: clamp(0.8em, 4vw, 1.5em);
  color: var(--primary-text-color);
}
</style>
