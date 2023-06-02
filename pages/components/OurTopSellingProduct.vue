<template>
  <div class="py-8 pb-16">
    <h1 class="text-center heading-text">Our Top Selling Products</h1>
    <h4 class="mt-3 subtitle-text text-center ">Our Top Selling Products</h4>
   
    <!-- <div class="px-16">
      <hr class="">
    </div> -->
    
    <div class="top-selling-product-main mt-10 mb-10">
      <div
        class="top-selling-product"
        v-for="product in products"
        :key="product"
        :class="`color-${product.for}`"
      >
        <v-img class="selling-img" :src="product.img">
        </v-img>
        <h3 class="text-white product-text">{{ product.name }}</h3> 
      </div>
      
      <!-- <div class="top-selling-product">
        <v-img src="/images/products/anar_1.png" ></v-img>
      </div>
      <div class="top-selling-product">
        <v-img src="/images/products/anar_1.png" ></v-img>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Pomogranate",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/anar_1.png",
          id: "slide1",
          for: "s1",
          color:"#126782"
        },
        {
          name: "Avocado",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/avocado_3.png",
          id: "slide2",
          for: "s2",
        },
        {
          name: "Capsicum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/capsicum_1.png",
          id: "slide3",
          for: "s3",
        },
        {
          name: "Carrot",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/carrot_1.png",
          id: "slide4",
          for: "s4",
        },
        {
          name: "Tomato",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/cherry_tomato_4.png",
          id: "slide5",
          for: "s5",
        },
        {
          name: "Carrot",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/carrot_1.png",
          id: "slide4",
          for: "s4",
        },
        
        // {
        //   name: "Cherry Tomato",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/cherry_tomato_4.png",
        //   id: "slide6",
        //   for: "s6",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.top-selling-product-main {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: relative;
}
.product-text{
  position: absolute; 
  bottom: 0;
  left: 50%;
  transform: translate(-50%,-50%);

}
.color-s1{
    background-color: #126782 !important;
}

.color-s2{
    background-color: #8d2042 !important;
}
.color-s3{
    background-color: #916a5e!important;
}
.color-s4{
    background-color: #6b705c !important;
}
.color-s5{
    background-color: #a87b54 !important;
}
/* .top-selling-product-main {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
.top-selling-product-main::-webkit-scrollbar {
  display: none;
  width: 0;
} */
.top-selling-product {
  border-radius: 10px;
  padding: 30px 10px;
  /* min-width: 300px; */
  background-color: #e95b5b;
  /* display: ; */
  perspective: 10000px;
  position: relative;
  cursor: pointer;
}
.selling-img {
  transition: transform 0.55s ease-in-out;
}
.selling-img:hover {
  transform: translate3d(0%, -40%, 520px);
  
}
/* .selling-img:hover {
  transform: translate3d(0%, -40%, 520px);
  
} */
@media screen and (max-width: 1200px) {
  .top-selling-product-main {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 600px) {
  .top-selling-product-main {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
