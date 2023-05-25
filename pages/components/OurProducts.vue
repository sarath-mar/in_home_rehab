<template>
  <div class="my-10 text-center">
    <h2 class="service-text">Our Products</h2>
    <div>
      <div>
        <!-- <h2 class="service-sub">
          <Icon name="uil:label" /> {{ service.title }}
        </h2> -->
        <h4 class="mt-3 service-content">Fresh from our farms</h4>
        <div class="mt-3">
          <div class="product-list py-3">
            <div
              class="product-card"
              v-for="product in ourProducts"
              :key="product.title"
            >
              <product-card class="service-card-product" :product="product" />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      ourProducts: [
        {
          name: "Pomogranate",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Pomogranate.jpg",
        },
        {
          name: "Capsicum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Capsicum.jpg",
        },
        {
          name: "Mango",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Mango.jpg",
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
          img: "/images/products/Banana.jpg",
        },
        {
          name: "Apple",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Apple.jpg",
        },
        {
          name: "Pineapple",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
        {
          name: "Avocado",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
        {
          name: "Pappaya",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
        {
          name: "Watermelon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
        {
          name: "Muskmelon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },


        {
          name: "Pomogranate",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Pomogranate.jpg",
        },
        {
          name: "Capsicum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Capsicum.jpg",
        },
        {
          name: "Mango",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Mango.jpg",
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
          img: "/images/products/Banana.jpg",
        },
        {
          name: "Apple",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Apple.jpg",
        },
        {
          name: "Pineapple",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
        {
          name: "Avocado",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
        {
          name: "Pappaya",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
        {
          name: "Watermelon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
        {
          name: "Muskmelon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "",
        },
      ],
    };
  },
  computed: {
    getCaroselData() {
      let data = this.ourProducts;
      let newArray = [];
      let key = 0;
      let length = 4;
      //  for (const key in data) {
      //   if(key)

      //  }
    },
  },
};
</script>

<style scoped>

/* slider */



@keyframes scroll {
	0% {  transform: translateX(0px); }
	100% {  transform: translateX(-300%)}
}
.service-card-product{
  animation:scroll 40s linear infinite

}
/* slider finish */
.service-text {
  font-size: clamp(3em, 4vw, 4em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--primary-text-color);
}
.product-list {
  display: flex;
  gap: 20px;
  /* overflow-x: auto; */
  /* margin: auto; */
	/* overflow:hidden; */
	/* position: relative; */
  overflow-x: auto;

  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* animation: slide 15s linear infinite; */
  /* animation:scroll 50s linear infinite */
}
.product-list::-webkit-scrollbar {
  display: none;
  width: 0;
}
.example {
}
.product-card {
  /* width: 300px !important; */
}
@keyframes slide {
  0% {
    /* transform: translate3d(0, 0, 0); */
    /* margin-left: 0; */
  }
  100% {
    /* transform: translate3d(-100%, 0, 0); */
    /* margin-left: -160%; */
  }
}
.service-sub {
  font-size: clamp(1em, 4vw, 2em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--secondary-text-color);
}
.service-content {
  font-size: clamp(0.8em, 4vw, 1.2em);
  line-height: 1.333;
  font-weight: 900;
  /* letter-spacing: 0.1rem; */
  margin-top: 0;
  /* color: var(--primary-text-color); */
}
@media screen and (max-width: 980px) {
  @keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-700%))}
}
}
</style>
