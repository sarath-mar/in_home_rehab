<template>
  <div class="my-10" id="service-we-provide" :class="customClass">
    <h2 class="heading-text">Latest News & Blog</h2>
  </div>
</template>

<script>
import {getDocs,newsCollection }  from  '../../config/firebaseConfig'
export default {
  props: {
    customClass: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
        
    }
  },
 async mounted(){
    let data=await getDocs(newsCollection) 
    data.forEach((doc) => {
      let postData = doc.data();
      console.log('data 0',postData)

      postData.id = doc.id;
      console.log('data 1',postData)
    });
  }
};
</script>

<style lang="scss" scoped></style>
