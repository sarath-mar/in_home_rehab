<template>
  <div class="contact-main">
    <!-- <v-parallax
      class="contact"
      src="https://cdn.wallpapersafari.com/37/34/t8w4sf.jpg"
    > -->
    <div class="pt-15">
      <h1 class="text-h4 text-center contact-text mt-10">Contact Us</h1>
      <div class="contact-method">
        <div class="methods">
          <Icon name="mdi-home" class="icon text-primary-text" />
          <h3>By Address</h3>
          <p>Mundassery Tower, Kozhinchena</p>
          <p>Valakkulam(P.O), Malappuram - Dist.</p>
          <p>Kerala - India Pin : 676 508</p>
        </div>
        <div class="methods">
          <Icon name="mdi-email" class="icon text-primary-text" />
          <h3>By Gmail / Phone</h3>
          <p>Mobile : +91 9747 800 008</p>
          <p>Phone : 0494 2496 555</p>
          <p>Gmail : info@yemyemimpex.com</p>
        </div>
        <div class="methods">
          <!-- mdi-phone-outgoing -->
          <Icon name="mdi-qrcode" class="icon text-primary-text" />
          <h3>By QrCode</h3>
          <img src="/images/common/qrcode.jpeg" width="100px" alt="" />
        </div>
      </div>
    </div>
    <!-- </v-parallax> -->
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
  /* position: relative; */
  background-color: #f2f4f5;
}
.contact-text {
  font-size: clamp(3em, 4vw, 4em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
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
@media screen and (max-width: 850px) {
  .contact-method{
    flex-direction: column;
  }
}
</style>
