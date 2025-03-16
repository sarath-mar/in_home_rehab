<template>
  <div :class="customClass" class="mb-10">
    <hr class="hr-address" />
    <div class="address-component-container font-syne">
      <!-- <div> -->
      <div>
        <h2>
          Phone :
          <a class="ml-2 phone-text" href="tel:+91-8891575227">
            +918891575227</a
          >
        </h2>
        <h2 class="mt-4">
          Email :
          <a class="ml-2 mail-text" href="mailto: inhomerehab01@gmail.com">
            iriscdc1@gmail.com</a
          >
        </h2>
      </div>
      <div>
        <h2 class="mb-3">Address</h2>
        <h3>Chevarambalam,</h3>
        <h3>Iringadampalli Rd,</h3>
        <h3>Vrindavan Colony,</h3>
        <h3>Kozhikode, Kerala 673017</h3>
      </div>
      <!-- </div> -->
    </div>
    <!-- <v-row class="address-component">
      <v-col>
        Phone: +234 803 123 4567
        <br />    
        Email:
        <a href="mailto:iris@gmail.com">iris</a>
      </v-col>
      <v-col>
        Address: 123, Iris Street, Lagos, Nigeria
      </v-col>
     </v-row> -->
  </div>
</template>
<script>
export default {
  props: {
    customClass: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style >
.address-component-container {
  padding-block: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  text-align: center;
  flex-wrap: wrap-reverse;
}
h3,.address-component-container a{
  color: #626468 !important;
}
.hr-address{
  background-color: #62646840;
}
</style>
