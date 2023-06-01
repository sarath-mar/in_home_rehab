<template>
  <div class="py-8">
    <h1 class="text-center heading-text mb-5">Our Top Selling Products</h1>
    <div class="top-selling-product-main mb-10">
      <div
        class="top-selling-product"
        v-for="product in products"
        :key="product"
      >
        <v-img class="selling-img" :src="product.img"></v-img>
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
  /* display: flex; */
  display: grid;
  gap: 10px;
  /* grid-template-columns: repeat(auto-fill, minmax(200px ,1fr)); */
  grid-template-columns: repeat(6, 1fr);
}
.top-selling-product {
  border-radius: 10px;
  padding: 30px 10px;
  background-color: #e95b5b;
  /* display: ; */
  perspective: 10000px;
  position: relative;
  cursor: pointer;
}
.selling-img {
  transition: transform 0.55s ease;
}
.selling-img:hover {
  /* height: 300px; */
  /* position: absolute; */
  transform: translate3d(0%, -40%, 520px);
  /* 
   top: 0;
   left: 0; */
}
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
