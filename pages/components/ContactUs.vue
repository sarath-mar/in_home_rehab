<template>
  <div class="contact-main">
    <v-parallax
      class="contact"
      src="https://cdn.wallpapersafari.com/37/34/t8w4sf.jpg"
    >
      <div class="my-15">
        <h1 class="text-h4 text-white text-center mb-4">Contact Us</h1>
        <div class="contact-method mt-15 text-red">
          <div class="methods">
            <Icon name="mdi-phone-outgoing" class="icon" />
            <h3>8714443989</h3>
          </div>
          <div class="methods">
            <Icon name="mdi-email" class="icon" />
            <h3>sarathbnm@gmail.com</h3>
          </div>
          <div class="methods">
            <!-- <Icon name="mdi-qrcode" class="icon" /> -->
            <img src="/images/common/qrcode.jpeg" width="170px" alt="" />
          </div>
        </div>
      </div>
    </v-parallax>
    <!-- <div class="text-red contact-content">
      <h1 class="text-h4 font-weight-thin mb-4">Contact Us</h1>
    </div> -->
  </div>
</template>
<style>
.contact {
  /* min-height: 50vh; */
  /* opacity: 0.6; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-main {
  position: relative;
}
.contact-content {
  position: absolute;
  top: 0;
  left: 0;
}
.contact-method {
  background-color: #f2f4f5;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
}
</style>
