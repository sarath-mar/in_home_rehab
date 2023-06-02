<template>
  <div class="contact-main">
   
    <div class="py-15">
      <h1 class="text-center heading-text mt-10">Contact Us</h1>
      <v-row class="mt-15">
      <v-col cols="12" md="4" v-for="contact in contactBy" :key="contact">
        <div
          color="text-primary-text "
          class="right-bread pa-5 contact-card"
          elevation="10"
          variant=""
        >
          <v-card-item>
            <Icon :name="contact.icon" class="icon-contact text-primary-text" />
            <div class="card-image-content">
              
              <!-- <v-img
                :src="contact.img"
                class="align-left"
               
                width="130px"
              >
              </v-img> -->
              <h2 class=" mt-5 mb-1">{{ contact.name }}</h2>
            </div>
          </v-card-item>
        </div>
      </v-col>
    </v-row>
      <!-- <v-sheet class="pa-1 mt-5">
        <div class="contact-method">
          <div class="methods">
            <Icon name="mdi-home" class="icon text-primary-text" />
            <h3 class="contact-by subtitle-text-normal">By Address</h3>
            <div class="contact-text">
              <p>Mundassery Tower, Kozhinchena</p>
              <p>Valakkulam(P.O), Malappuram - Dist.</p>
              <p>Kerala - India Pin : 676 508</p>
            </div>
          </div>

          <div class="methods">
            <Icon name="mdi-email" class="icon text-primary-text" />
            <h3 class="subtitle-text-normal">By Gmail / Phone</h3>
            <div class="contact-text">
              <p>Mobile : +91 9747 800 008</p>
              <p>Phone : 0494 2496 555</p>
              <p>Gmail : info@yemyemimpex.com</p>
            </div>
          </div>
          <div class="methods">
            <Icon name="mdi-qrcode" class="icon text-primary-text" />
            <h3 class="subtitle-text-normal">By QrCode</h3>
            <div class="text-center ">
              <div class="qr-image"></div>
            </div>
          </div>
        </div>
      </v-sheet> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactBy: [
        { id: 1, name: "By Address", img: "/images/common/fresh.png",icon:"mdi-home" },
        { id: 2, name: "By Gmail / Phone", img: "/images/common/natural.png",icon:"mdi-email" },
        { id: 3, name: "By QR Code", img: "/images/common/premium.png",icon:"mdi-qrcode" },
      ],
    };
  },
};
</script>
<style>
.qr-image {
  background-image: url("/images/common/qrcode.jpeg");
  /* background-color: red; */
  height: 100px;
  background-size: contain;
  width: 100px;
  text-align: center;
}
.contact {
  /* min-height: 50vh; */
  /* opacity: 0.6; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-main {
  /* position: relative; */
  background-color: #f2f4f5;
}
.contact-text {
  font-size: clamp(0.8em, 4vw, 1em);
  font-weight: 700;
  /* text-decoration: underline ; */
  /* font-style: italic; */
  text-align: center;
  color: var(--primary-text-color);
}
/* .contact-content {
  position: absolute;
  top: 0;
  left: 0;
} */
.contact-method {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  padding: 60px 20px;
  gap: 30px;
}
.contact-method .icon {
  font-size: clamp(2.5em, 4vw, 3.5em);
}
.methods {
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
}
.icon-contact{
  font-size: 80px;
  position: absolute  ;
  top: -1px;
  left: 50%;
  transform: translate(-50%,-50%);

  
}
.contact-card{
  position: relative;
  /* box-shadow: 0 0 0px 2px  #999; */
}
@media screen and (max-width: 850px) {
  .contact-method {
    flex-direction: column;
  }
}
</style>
