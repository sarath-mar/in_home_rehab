<template>
  <div class="py-8">
    <h1 class="text-center heading-text mb-5">Our Top Selling Products</h1>

    <div>
      <div class="container">
        <input type="radio" name="slider" class="d-none" id="s1" checked />
        <input type="radio" name="slider" class="d-none" id="s2" />
        <input type="radio" name="slider" class="d-none" id="s3" />
        <input type="radio" name="slider" class="d-none" id="s4" />
        <input type="radio" name="slider" class="d-none" id="s5" />

        <div class="cards">
          <!-- <div > -->
          <label
            v-for="product in products"
            :key="product"
            :for="product.for"
            :id="product.id"
          >
            <div class="card">
              <div class="image">
                <!-- <img  :src="product.img" alt="" /> -->
                <v-img
                  :src="
                    product.img
                      ? product.img
                      : 'https://images.pexels.com/photos/15477567/pexels-photo-15477567.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                  "
                  class="align-end "
                  height="300px"
                  contain
                ></v-img>
                <!-- <div class="dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div> -->
              </div>
              <h2 class="text-center  text-primary-text">{{ product.name }}</h2>
              <!-- <p class="text-justify px-2  text-secondary-text">{{ product.description }}</p> -->
              <!-- <div class="infos"> -->
                <!-- <span class="name">Nike SuperRep Go</span> -->
                <!-- <span class="lorem"
                    >Lorem ipsum dolor sit amet, sit amet adipiscing elit.
                    Aenean vel ansd . Nullam lorem. Nulla eu sodales</span
                  > -->
              <!-- </div> -->
              <!-- <a href="/contact" class="btn-contact">details</a>
                <div class="socials">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-share-nodes"></i>
                </div> -->
            </div>
          </label>
          <!-- </div> -->

          <!-- <label for="s2" id="slide2">
            <div class="card">
              <div class="image">
                <img src="img/Free run flyknit.jpg" alt="" />
                <div class="dots">
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                  <div class="dot3"></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Free Run Flyknit</span>
                <span class="lorem"
                  >Lorem ipsum dolor sit, adipiscing elit. Aenean vel sit ansd .
                  Nullam lorem. Nulla eu sodales karma stellus</span
                >
              </div>
              <a href="/contact" class="btn-contact">details</a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label>

          <label for="s3" id="slide3">
            <div class="card">
              <div class="image">
                <img src="img/Black Toe Union.jpg" alt="" />
                <div class="dots">
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                  <div class="dot3"></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Black Toe Union</span>
                <span class="lorem"
                  >Lorem ipsum dolor, sit amet let kar adipiscing. Aenean vel
                  velit sit ansd . Nullam lorem. Nulla karma stellus</span
                >
              </div>
              <a href="/contact" class="btn-contact">details</a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label>

          <label for="s4" id="slide4">
            <div class="card">
              <div class="image">
                <img src="img/Retro High Og.jpg" alt="" />
                <div class="dots">
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                  <div class="dot3"></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Retro High Og</span>
                <span class="lorem"
                  >Lorem ipsum dolor sit, sit amet elit. Aenean sit amet sit
                  amet vel velit sit ansd. Nulla eu sodales stellus</span
                >
              </div>
              <a href="/contact" class="btn-contact">details</a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label>

          <label for="s5" id="slide5">
            <div class="card">
              <div class="image">
                <img src="img/Off-White x Air Jordan.jpg" alt="" />
                <div class="dots">
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                  <div class="dot3"></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Off-White Air Jordan</span>
                <span class="lorem"
                  >Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                  Nullam lorem. Nulla eu sodales stellus</span
                >
              </div>
              <a href="/contact" class="btn-contact">details</a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label> -->
        </div>
      </div>
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
@import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@200;300;400;600;700&display=swap");

/* body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232533;
  overflow-x: hidden;
  height: 100vh;
  font-family: "Urbanist", sans-serif;
} */

/* a {
  text-decoration: none;
}

input {
  display: none;
} */

.container {
  /* width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  display: flex;
  transform-style: preserve-3d;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

.cards {
  /* position: relative; */
  min-height: 60vh;
  /* width: 430px; */
  padding: 20px;
  margin-bottom: 20px;
  perspective: 2000px;
  transform-style: preserve-3d;
}

.cards label {
  position: absolute;
  /* width: 730px; */
  /* min-height: 100vh; */
  width: 40vw;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  transition: transform 0.55s ease;
}

.cards .card {
  position: relative;
  height: 100%;
  /* background-color: var(--secondary-text-color); */
  background-color: white;
  border-radius: 10px;
  padding: 30px 5px;
}

.card .image {
  display: flex;
  justify-content: space-between;
}

.card .image img {
  /* border-radius: 5px;
  box-shadow: 15px 15px 40px rgba(0, 0, 0, 50%);
  margin-top: 23px;
  width: 86%;
  height: 220px;
  object-fit: cover; */
}

/* .card .image .dots {
  text-align: center;
} */

/* .dots div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-bottom: 10px;
} */
/* 
.dots div:nth-child(1) {
  background-color: var(--current-color1);
}

.dots div:nth-child(2) {
  background-color: #5b85f9;
}

.dots div:nth-child(3) {
  background-color: #000;
} */

.card .infos {
  /* display: block;
  text-align: end;
  padding-top: 60px; */
}

/* .infos span {
  display: block;
} */

/* .infos .name {
  font-size: 30px;
  color: var(--current-color1);
  letter-spacing: 8px;
  margin-bottom: 20px;
  padding-left: 25%;
  transition: all 0.6s ease;
} */

/* .infos .lorem {
  font-size: 15.5px;
  color: #eceaed;
  letter-spacing: 3px;
} */

.card .btn-contact {
  /* width: 100%;
  height: 60px;
  margin: 35px auto;
  border-radius: 5px;
  background-color: var(--current-color1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 25px;
  letter-spacing: 10px;
  font-weight: 700;
  transition: all 0.7s ease; */
}

.card .socials {
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px; */
}

.socials i {
  /* font-size: 25px;
  transition: all 0.7s ease;
  color: var(--current-color2); */
}


#s1:checked ~ .cards #slide4,
#s2:checked ~ .cards #slide5,
#s3:checked ~ .cards #slide1,
#s4:checked ~ .cards #slide2,
#s5:checked ~ .cards #slide3 {
  /* box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transform: translate3d(-70%, 0, -220px);
  --current-color1: #eceaed;
  --current-color2: #404457;
}

#s1:checked ~ .cards #slide5,
#s2:checked ~ .cards #slide1,
#s3:checked ~ .cards #slide2,
#s4:checked ~ .cards #slide3,
#s5:checked ~ .cards #slide4 {
  /* box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 45%); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transform: translate3d(-35%, 0, -120px);
  --current-color1: #eceaed;
  --current-color2: #404457;
}

#s1:checked ~ .cards #slide1,
#s2:checked ~ .cards #slide2,
#s3:checked ~ .cards #slide3,
#s4:checked ~ .cards #slide4,
#s5:checked ~ .cards #slide5 {
  /* box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 50%); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transform: translate3d(0, 0, 0);
  --current-color1: #fad00c;
  --current-color2: #eceaed;
}

#s1:checked ~ .cards #slide2,
#s2:checked ~ .cards #slide3,
#s3:checked ~ .cards #slide4,
#s4:checked ~ .cards #slide5,
#s5:checked ~ .cards #slide1 {
  /* box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 45%); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transform: translate3d(35%, 0, -120px);
  --current-color1: #eceaed;
  --current-color2: #404457;
}

#s1:checked ~ .cards #slide3,
#s2:checked ~ .cards #slide4,
#s3:checked ~ .cards #slide5,
#s4:checked ~ .cards #slide1,
#s5:checked ~ .cards #slide2 {
  /* box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transform: translate3d(70%, 0, -220px);
  --current-color1: #eceaed;
  --current-color2: #404457;
}
@media screen and (max-width: 900px) {
    .cards label {
  position: absolute;
  /* width: 730px; */
  /* min-height: 100vh; */
  width: 50vw;}
}
</style>
