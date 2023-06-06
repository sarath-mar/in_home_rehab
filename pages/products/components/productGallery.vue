<template>
  <div
    class="py-8"
    :class="mdAndUp ? 'top-selling-comp' : 'top-selling-comp-sm'"
  >
    <h4 class="mt-3 subtitle-text text-center">Our Products</h4>

    <!-- <div class="px-16">
      <hr class="">
    </div> -->

    <div class="top-selling-product-main mt-10 mb-10">
      <div
        class="top-selling-product"
        v-for="(product, index) in products"
        :key="index"
        :class="`color-${getIndex(index)}`"
      >
      <!-- {{ getIndex(index) }} -->
        <!--  :class="`color-${product.for}`" -->
        <v-img class="selling-img" :src="product.img"> </v-img>
        <h3 class="text-white product-text">{{ product.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
// import { log } from 'console';
import { useDisplay } from "vuetify";
export default {
  data() {
    return {
      // {
      //     name: "Pomogranate",
      //     description:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
      //     img: "/images/products/anar_1.png",
      //     id: "slide1",
      //     for: "s1",
      //     color: "#126782",
      //   },
      products: [
        {
          name: "Pomogranate",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/anar_1.png",
        },
        {
          name: "Avocado",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/avocado_3.png",
        },
        {
          name: "Capsicum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/capsicum_1.png",
        },
        {
          name: "Carrot",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/carrot_1.png",
        },
        {
          name: "Cherry Tomato",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/cherry_tomato_4.png",
        },
        {
          name: "Coconut",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/coconut_2.png",
        },

        {
          name: "Orange",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Orange.jpg",
        },
        {
          name: "Banana",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/banan_1.png",
        },
        // {
        //   name: "Apple",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Apple.jpg",
        // },
        // {
        //   name: "Mango",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Mango.jpg",
        // },
        {
          name: "Pineapple",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/pineapple.jpeg",
        },
        {
          name: "Pappaya",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/papaya.jpg",
        },
      ],
    };
  },
  methods: {
    getIndex(index){
      console.log(index );
      if(index>8){
        return index%8
      }
      return index
    }
  },
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
};
</script>

<style scoped>
.top-selling-comp-sm {
  padding-bottom: 100px !important;
}
.top-selling-comp {
  padding-bottom: 250px !important;
}
.top-selling-product-main {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(auto-fill, 300px) ;
  /* grid-template-rows: repeat(auto-fill,200px); */
  position: relative;
}
.product-text {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.color-0 {
  background-color: #12827e !important;
}
.color-1 {
  background-color: #126782 !important;
}

.color-2 {
  background-color: #8d2042 !important;
}
.color-3 {
  background-color: #916a5e !important;
}
.color-4 {
  background-color: #6b705c !important;
}
.color-5 {
  background-color: #a87b54 !important;
}
.color-6 {
  background-color: #e4b890 !important;
}
.color-7 {
  background-color: #a3da56 !important;
}
.color-8 {
  background-color: #d47a2b !important;
}
/* .top-selling-product-main {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;selling-im
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
  /* min-height: 300px; */
  /* background-color: var(--primary-color); */
  /* background-color: #e95b5b; */
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
