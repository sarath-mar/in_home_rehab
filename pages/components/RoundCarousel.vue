<template>
    <div id="app">
      <div class="carousel-container">
        <div class="carousel">
          <div
            v-for="(item, index) in bannerItems"
            :key="index"
            class="carousel-item"
            :class="{'active': index === activeIndex}"
            :style="getItemStyle(index)"
          >
            <img :src="item.src" alt="Carousel image" />
            <div class="carousel-caption">
              <h3>{{ item.title }}</h3>
              <p>{{ item.subtitle }}</p>
              <button @click="viewDetail(item.buttonDetail)">Learn More</button>
            </div>
          </div>
        </div>
        <button class="prev-btn" @click="moveSlide(-1)">❮</button>
        <button class="next-btn" @click="moveSlide(1)">❯</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bannerItems: [
          {
            src: "/images/banner/1.png",
            title: "Accessible to individuals with disabilities",
            subtitle:
              "Home therapy can be a more accessible option for individuals with disabilities who may face challenges traveling to and from therapy appointments.",
            buttonDetail: "test",
          },
          {
            src: "/images/banner/2.png",
            title: "More comfortable for children",
            subtitle:
              "For children who may feel anxious about going to a new place or meeting a new person, home therapy can be a more comfortable and familiar option.",
            buttonDetail: "test",
          },
          {
            src: "/images/banner/3.png",
            title: "Time-saving",
            subtitle:
              "Home therapy eliminates the need to travel to appointments, saving time and energy. This can be especially important for busy individuals or those with a hectic schedule.",
            buttonDetail: "test",
          },
          {
            src: "/images/banner/4.png",
            title: "Comfort",
            subtitle:
              "Being in the comfort of your own home can be reassuring and comforting during therapy sessions. Being in a familiar environment can also help you feel more relaxed and open to discussing personal issues.",
            buttonDetail: "test",
          },
          {
            src: "/images/banner/7.png",
            title: "Increased access",
            subtitle:
              " For individuals who live in rural or remote areas, home therapy can be a lifeline. It can provide access to mental health services that may not be available in their area, helping to bridge the gap in mental health care.",
            buttonDetail: "test",
          },
        ],
        activeIndex: 0,
        transitionDuration: 0.6,
      };
    },
    methods: {
      moveSlide(direction) {
        this.activeIndex = (this.activeIndex + direction + this.bannerItems.length) % this.bannerItems.length;
      },
      getItemStyle(index) {
        const angle = (360 / this.bannerItems.length) * index;
        return {
          transform: `rotateY(${angle}deg) translateZ(300px)`,
          transition: `transform ${this.transitionDuration}s ease-in-out`,
        };
      },
      viewDetail(buttonDetail) {
        alert(`Button clicked: ${buttonDetail}`);
      },
    },
  };
  </script>
  
  <style scoped>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
  
  .carousel-container {
    position: relative;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotate(0deg);
  }
  
  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    animation: rotate 20s infinite linear;
  }
  
  .carousel-item {
    position: absolute;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .carousel-caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
  }
  
  .carousel-caption h3 {
    margin: 0;
    font-size: 18px;
  }
  
  .carousel-caption p {
    margin: 5px 0;
    font-size: 14px;
  }
  
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 10;
  }
  
  .prev-btn {
    left: 10px;
  }
  
  .next-btn {
    right: 10px;
  }
  
  button:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
  </style>
  