<template>
  <div class="my-10 text-center">
    <transition name="toast">
      <div>
        <h2 class="heading-text">Our Products</h2>
        <div>
          <div>
            <!-- <h2 class="service-sub">
          <Icon name="uil:label" /> {{ service.title }}
        </h2> -->
            <h4 class="mt-3 subtitle-text">Fresh from our farms</h4>
            <div class="mt-3">
              <div class="product-list py-3">
                <div class="product-card">
                  <product-card
                    v-for="product in getCaroselData"
                    :key="product.title"
                    class="service-card-product"
                    :product="product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  setup() {
    const showToast = ref(false);

    const triggerToast = () => {
      showToast.value = true;
    };

    return { showToast, triggerToast };
  },
  mounted() {
    this.triggerToast();
  },
  data() {
    return {
      ourProducts: [
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
        // {
        //   name: "Watermelon",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "",
        // },
        // {
        //   name: "Muskmelon",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Muskmelon.jpg",
        // },

        // {
        //   name: "Pomogranate",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Pomogranate.jpg",
        // },
        // {
        //   name: "Capsicum",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Capsicum.jpg",
        // },
        // {
        //   name: "Mango",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Mango.jpg",
        // },
        // {
        //   name: "Orange",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Orange.jpg",
        // },
        // {
        //   name: "Banana",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Banana.jpg",
        // },
        // {
        //   name: "Apple",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "/images/products/Apple.jpg",
        // },
        // {
        //   name: "Pineapple",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "",
        // },
        // {
        //   name: "Avocado",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "",
        // },
        // {
        //   name: "Pappaya",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "",
        // },
        // {
        //   name: "Watermelon",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "",
        // },
        // {
        //   name: "Muskmelon",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "",
        // },
      ],
    };
  },
  computed: {
    getCaroselData() {
      // let data = this.ourProducts;
      let data = [];
      if (this.ourProducts.length) {
        data = [...this.ourProducts, ...this.ourProducts];
      }
      return data;
    },
  },
};
</script>

<style scoped>
/* slider */

@keyframes scroll {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: calc(360px * -10);
  }
  /* 0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-1000%);
  } */
}
.service-card-product :hover {
  /* animation: scroll 40s linear infinite; */
  /* transform: translate(1.1); */
}
/* slider finish */
/* .service-text {
  font-size: clamp(3em, 4vw, 4em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--primary-text-color);
} */
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
  animation: scroll 40s linear infinite;
  display: flex;
  gap: 20px;
}
.product-card:hover {
  /* transform: scale(1.1);  */
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
/* .service-content {
  font-size: clamp(0.8em, 4vw, 1.2em);
  line-height: 1.333;
  font-weight: 900;
  margin-top: 0;
} */
@media screen and (max-width: 980px) {
  @keyframes scroll {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: calc(360px * -10);
    }
  }
}

/* animation */

/* enter transitions */
.toast-enter-active {
  animation: wobble 0.5s ease;
  /* opacity: 1;
    transform: translateX(-100px); */
}
/* leave transitions */
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.3s ease;
  opacity: 1;
}

@keyframes wobble {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  /* 50% { transform: translateY(0px); opacity: 1 }
    60% { transform: translateX(8px); opacity: 1 }
    70% { transform: translateX(-8px); opacity: 1 }
    80% { transform: translateX(4px); opacity: 1 }
    90% { transform: translateX(-4px); opacity: 1 } */
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
