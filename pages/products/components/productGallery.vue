<template>
  <div>
    <h2 class="subtitle-text-normal py-5">Our Products</h2>

    <v-row>
      <v-col v-for="n in ourProducts" :key="n" cols="6" sm="4" md="3" >
        <v-sheet elevation="3" >
          <v-img
          
            :src="
              n.img
                ? n.img
                : `https://picsum.photos/500/300?image=${1 * 5 + 10}`
            "
            :lazy-src="
              n.img ? n.img : `https://picsum.photos/10/6?image=${1 * 5 + 10}`
            "
            aspect-ratio="1"
            contain
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <h3 class="text-center">{{ n.name }}</h3>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
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
          img: "/images/products/pineapple.jpeg",
        },
        // {
        //   name: "Avocado",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
        //   img: "",
        // },
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
        {
          name: "Muskmelon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa totam quas ea, quidem dolor eaque incidunt aperiam ratione, ametvoluptatibus accusamus, iure iste praesentium cumque laboriosam hiclabore magni.",
          img: "/images/products/Muskmelon.jpg",
        },

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
};
</script>
