<template>
  <div class="pt-5 pb-12">
    <!-- <h2 class="heading-text text-center">Shop By Category</h2> -->
    <h4 class="mt-3 subtitle-text text-center">Contact Us</h4>

    <v-row class="mt-5">
      <v-col cols="12" md="4" v-for="shop in shopBy" :key="shop">
        <v-card
          color="text-primary-text "
          class="right-bread pa-5 shop-card"
          elevation="3"
          variant=""
        >
          <v-card-item>
            <div class="card-image-content">
              <Icon :name="shop.icon" class="shop-icon" />
              <v-img :src="shop.img" class="align-left" width="130px"> </v-img>
              <!-- <h2 class="mt-5 mb-1 text-secondary-text">{{ shop.name }}</h2> -->
              <!-- <v-card class="pa-10"> -->
              <div v-if="shop.id == 1" class="mt-5">
                <p class="text-center">
                  Mundassery Tower, Kozhinchena, Valakkulam(P.O), Malappuram -
                  Dist. Kerala - India Pin : 676 508
                </p>
              </div>
              <div class="mt-5 text-center  " v-if="shop.id == 2">
                <p>
                  <a class="" style="text-decoration: none" href="tel:+91 9747 800 008"
                    >+91 9747 800 008</a
                  >
                </p>
                <p>
                  <a style="text-decoration: none" href="tel:0494 2496 555"
                    >0494 2496 555</a
                  >
                </p>
                <p>
                  <a
                    href="mailto:info@yemyemimpex.com"
                    style="text-decoration: none"
                    >info@yemyemimpex.com</a
                  >
                </p>
              </div>
              <div v-if="shop.id == 3">
                <div class="text-center mt-4">
                  <div class="qr-image"></div>
                </div>
              </div>
              <!-- </v-card> -->
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
        //   {
        //     name: "Vegetables",
        //     img: "//cdn.shopify.com/s/files/1/0587/1409/5650/files/c1.png?v=1679913402",
        //   },
        //   {
        //     name: "Fruits",
        //     img: "//cdn.shopify.com/s/files/1/0587/1409/5650/files/Group_723.png?v=1678448230",
        //   },
        //   {
        //     name: "Nuts",
        //     img: "//cdn.shopify.com/s/files/1/0587/1409/5650/files/Group_723_1.png?v=1678448186",
        //   },
        //   {
        //     name: "Dried Fruits",
        //     img: "//cdn.shopify.com/s/files/1/0587/1409/5650/files/Group_723_2.png?v=1678448262",
        //   },
        { id: 1, name: "By Address", data: {}, icon: "mdi-home" },
        { id: 2, name: "By Gmail / Phone", data: {}, icon: "mdi-email" },
        { id: 3, name: "By QR Code", data: {}, icon: "mdi-qrcode" },
      ],
    };
  },
};
</script>
<style>
.shop-icon {
  font-size: 30px;
}
.shop-card {
  border: 2px var(--secondary-text-color) solid;
  border-radius: 10px;
  cursor: pointer;
  min-height: 220px;
  transition: 0.55s ease-in-out;
  color: var(--secondary-text-color);
  perspective: 10000px;

  /* min-height: 400px; */
}
.shop-card:hover {
  background-color: var(--secondary-text-color);
  color: white !important;
  transform: translate3d(0px, 0px, -300px);
}
a{
  color: var(--secondary-text-color);
}
.shop-card:hover a{
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
