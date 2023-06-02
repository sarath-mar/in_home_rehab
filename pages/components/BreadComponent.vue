<template>
  <div>
    <h2 class="heading-text text-center">Shop By Category</h2>

    <v-row class="mt-5">
      <v-col cols="12" md="3" v-for="shop in shopBy" :key="shop">
        <v-card
          color="text-primary-text "
          class="right-bread pa-5 shop-card"
          elevation="10"
          variant=""
        >
          <v-card-item>
            <div class="card-image-content">
              
              <v-img
                :src="shop.img"
                class="align-left"
               
                width="130px"
              >
              </v-img>
              <h2 class=" mt-5 mb-1">{{ shop.name }}</h2>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <!-- <v-col cols="12" md="4">
        <v-card
          color="text-primary-text "
          class="right-bread pa-5"
          elevation="10"
          variant=""
        >
          <v-card-item>
            <div class="card-image-content">
              <div class="subtitle-text-normal mb-1">100% Natural</div>
              <v-img
                src="/images/common/natural.png"
                class="align-left"
                height="200px"
                width="180px"
              >
              </v-img>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          color="text-primary-text "
          class="right-bread pa-5"
          elevation="10"
          variant=""
        >
          <v-card-item>
            <div class="card-image-content">
              <div class="subtitle-text-normal mb-1">Premium Quality</div>
              <v-img
                src="/images/common/premium.png"
                class="align-left"
                height="200px"
                width="380px"
              >
              </v-img>
            </div>
          </v-card-item>
        </v-card>
      </v-col> -->
    </v-row>
    <!-- <v-row class="mt-5">
      <v-col cols="12" md="4">
        <v-card
          color="text-primary-text "
          class="right-bread pa-5"
          elevation="10"
          variant=""
        >
          <v-card-item>
            <div class="card-image-content">
              <div class="subtitle-text-normal mb-1">Always Fresh</div>
              <v-img
                src="/images/common/fresh.png"
                class="align-left"
                height="200px"
                width="380px"
              >
              </v-img>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          color="text-primary-text "
          class="right-bread pa-5"
          elevation="10"
          variant=""
        >
          <v-card-item>
            <div class="card-image-content">
              <div class="subtitle-text-normal mb-1">100% Natural</div>
              <v-img
                src="/images/common/natural.png"
                class="align-left"
                height="200px"
                width="180px"
              >
              </v-img>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          color="text-primary-text "
          class="right-bread pa-5"
          elevation="10"
          variant=""
        >
          <v-card-item>
            <div class="card-image-content">
              <div class="subtitle-text-normal mb-1">Premium Quality</div>
              <v-img
                src="/images/common/premium.png"
                class="align-left"
                height="200px"
                width="380px"
              >
              </v-img>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopBy: [
        {
          name: "Vegetables",
          img: "//cdn.shopify.com/s/files/1/0587/1409/5650/files/c1.png?v=1679913402",
        },
        {
          name: "Fruits",
          img: "//cdn.shopify.com/s/files/1/0587/1409/5650/files/Group_723.png?v=1678448230",
        },
        {
          name: "Nuts",
          img: "//cdn.shopify.com/s/files/1/0587/1409/5650/files/Group_723_1.png?v=1678448186",
        },
        {
          name: "Dried Fruits",
          img: "//cdn.shopify.com/s/files/1/0587/1409/5650/files/Group_723_2.png?v=1678448262",
        },
      ],
    };
  },
};
</script>
<style>
.shop-card{
  border: 2px var(--secondary-text-color) solid;
  border-radius: 20%;
  cursor: pointer;
  transition:  0.55s ease-in-out;
  color: var(--secondary-text-color);
}
.shop-card:hover{
background-color: var(--secondary-text-color);
color: white !important;
}
.left-bread {
  background-color: white;
}
.card-image-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url("/images/products/anar_1.png");
  background-size: contain;
  background-blend-mode: difference; */
}
.bread-image {
  text-align: left;
}
.right-bread {
  /* height: 100%; */
  /* height: 200px; */
  /* background-color: var(--primary-text-color); */
  background-color: white;
}
.bread-text {
  font-size: clamp(1.5em, 4vw, 2em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  height: 100%;
  color: var(--primary-text-color);
}
/* .bread-text-contact {
  font-size: clamp(1.5em, 4vw, 2em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--primary-text-color);
} */
.bread-caption {
  font-size: clamp(0.5em, 4vw, 1em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--secondary-text-color);
}
.bread-caption-contact {
  font-size: clamp(0.5em, 4vw, 1em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  /* color: var(--secondary-text-color); */
}
.bread-caption li {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
}
.bread-icon-contact {
  font-size: 60px;
  color: var(--primary-text-color);
}
</style>
