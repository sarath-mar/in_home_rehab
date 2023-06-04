<template>
  <div class="">
    <div class="py-15">
      <h1 class="text-center heading-text mt-10">Contact Us</h1>
      <!-- <v-row class="mt-15">
        <v-col cols="12" md="4" v-for="contact in contactBy" :key="contact">
          <div
            color="text-primary-text "
            class="right-bread pa-5 contact-card"
            elevation="10"
            variant=""
          >
            <v-card-item>
              <Icon
                :name="contact.icon"
                class="icon-contact text-secondary-text"
              />
              <div class="card-image-content">
                <h5 class="subtitle-text mt-5 mb-1">{{ contact.name }}</h5>
                <div class="mt-2">
                  <div
                    v-if="contact.id == 1"
                    class="contact-text text-secondary-text mt-5"
                  >
                    <p>Mundassery Tower, Kozhinchena</p>
                    <p>Valakkulam(P.O), Malappuram - Dist.</p>
                    <p>Kerala - India Pin : 676 508</p>
                  </div>
                  <div
                    class="contact-text text-secondary-text mt-5"
                    v-if="contact.id == 2"
                  >
                    <p>Mobile : +91 9747 800 008</p>
                    <p>Phone : 0494 2496 555</p>
                    <p>Gmail : info@yemyemimpex.com</p>
                  </div>

                  <div class="methods"  v-if="contact.id == 3">
                    <div class="text-center">
                      <div class="qr-image"></div>
                    </div>
                  </div>
                </div>
              </div>
            </v-card-item>
          </div>
        </v-col>
      </v-row> -->
      <div class="about-main-div pa-10">
      <v-row>
        <v-col cols="12" md="6">
          <div>
            <h1 :class="mdAndUp ? 'about-us-heading' : 'about-us-heading-sm'">About Us</h1>
            <div class="about-img">
              <v-img
                :width="mdAndUp ? '400' : '250'"
                src="/images/products/coconut_2.png"
                alt=""
              ></v-img>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div>
            <p class="paragraph-text" :class="mdAndUp ? '' : 'mt-n5'">
              Equipped with the state-of-art facilities and prerequisites, the
              Kerala based YEM YEM IMPEX is on its way to make a mark in the
              International Fresh produce industry. Unparalleled professionalism
              and utmost commitment have earned YEM YEM IMPEX the reputation for
              reliability and credibility with in a short span of its launch. By
              establishing a strong supply chain comprising numerous farm
              producers, YEM YEM IMPEX as become one of the South East Asia’s
              leading producers and exporters of high-quality fresh fruits,
              vegetables, coconut and egg. YEM YEM IMPEX offers a wide array of
              fresh produce available in South East Asia, both seasonal and
              all-year-round types to serve market demand. The company exports
              100 percent of its output to countries in the Middle East. YEM YEM
              IMPEX offers excellent service at very competitive price to all
              customers round the year and our experience team always strives
              hard to ensure that each customer get the best of their service.
              Our clientele include leading importers and distributors in the
              Middle East as well as business corporations across the globe.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactBy: [
        { id: 1, name: "By Address", data: {}, icon: "mdi-home" },
        { id: 2, name: "By Gmail / Phone", data: {}, icon: "mdi-email" },
        { id: 3, name: "By QR Code", data: {}, icon: "mdi-qrcode" },
      ],
    };
  },
};
</script>
<style scoped>

.contact-us-heading{
  margin-top: 160px;
  font-size: 140px;
  /* font-size: clamp(60px, 14vw, 140px); */
  color: white;
}
.contact-us-heading-sm{
  margin-top: 100px;
  font-size: 60px;
  font-weight: 900;
  /* font-size: clamp(60px, 14vw, 140px); */
  color: white;
}
.contact-main-div {
  margin-top: 100px;
  position: relative;
  min-height: 400px;
  background-color: rgb(127, 236, 127);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 20px;
}
.about-img {
  position: absolute;
  top: 0;
  left: 30%;
  transform: translate(-50%, -40%);
  /* height: 200px; */
}
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
.icon-contact {
  font-size: 80px;
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.contact-card {
  position: relative;
  min-height: 240px;
  cursor: pointer;
  /* box-shadow: 0 0 0px 2px  #999; */
}
@media screen and (max-width: 850px) {
  .contact-method {
    flex-direction: column;
  }
}
</style>
