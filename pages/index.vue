<template>
  <v-app>
    <div class="home-page">
      <!-- Navigation Bar -->
      <Navbar />

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-container">
          <v-row align="center" class="hero-content">
            <v-col cols="12" lg="6" class="hero-text-col">
              <p class="welcome-text">Welcome to V1 Solutions</p>
              <h1 class="hero-title">
                Precision Printing Machines<br>For Every Industry
              </h1>
              <p class="hero-description">
                Leading manufacturer and supplier of high-quality printing machines including Ferrule Printing Machines, Wristband Printers, and specialized printing solutions for diverse industrial applications.
              </p>
              <div class="hero-buttons">
                <v-btn
                  color="primary"
                  size="large"
                  variant="flat"
                  class="quote-btn"
                >
                  Get A Free Quote
                </v-btn>
                <v-btn
                  color="primary"
                  size="large"
                  variant="flat"
                  class="play-btn"
                  icon
                >
                  <Icon name="mdi:arrow-top-right" size="24" />
                </v-btn>
              </div>
            </v-col>
            
            <v-col cols="12" lg="6" class="hero-image-col">
              <div class="hero-image-wrapper">
                <transition name="fade" mode="out-in">
                  <img
                    :key="currentImageIndex"
                    :src="heroImages[currentImageIndex]"
                    alt="Printing machine"
                    class="hero-image"
                    @error="handleImageError"
                  />
                </transition>
                <div class="image-indicators">
                  <div
                    v-for="(img, index) in heroImages"
                    :key="index"
                    :class="['indicator', { active: currentImageIndex === index }]"
                    @click="currentImageIndex = index"
                  ></div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </section>

      <!-- Statistics Section -->
      <section class="statistics-section">
        <div class="statistics-container">
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="stat-card">
                <div class="stat-content">
                  <div class="stat-bullet"></div>
                  <div class="stat-info">
                    <h3 class="stat-label">Machine Models</h3>
                    <p class="stat-number">50+</p>
                  </div>
                  <div class="stat-icon">
                    <Icon name="mdi:printer" size="48" />
                    <Icon name="mdi:cog" size="32" class="icon-overlay" />
                  </div>
                </div>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card class="stat-card">
                <div class="stat-content">
                  <div class="stat-bullet"></div>
                  <div class="stat-info">
                    <h3 class="stat-label">Machines Sold</h3>
                    <p class="stat-number">5000+</p>
                  </div>
                  <div class="stat-icon">
                    <Icon name="mdi:printer" size="48" />
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </section>

      <!-- Features Section -->
      <FeaturesSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Services Section -->
      <ServicesSection />

      <!-- Brochure Download Section -->
      <BrochureSection />

      <!-- Contact Section -->
      <ContactSection />

      <!-- Footer Section -->
      <FooterSection />
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'V1 Solutions - Printing Machines Manufacturer',
  meta: [
    { name: 'description', content: 'V1 Solutions - Leading manufacturer of Ferrule Printing Machines, Wristband Printers, and specialized printing solutions for industrial applications.' }
  ]
})

const currentImageIndex = ref(0)
let imageInterval = null

// Hero images - printing machines
const heroImages = [
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=800&fit=crop'
]

const rotateImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length
}

const handleImageError = (event) => {
  // Fallback to a placeholder or default image
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4zRCBNb2RlbDwvdGV4dD48L3N2Zz4='
}

onMounted(() => {
  // Rotate image every 10 seconds
  imageInterval = setInterval(rotateImage, 10000)
})

onUnmounted(() => {
  if (imageInterval) {
    clearInterval(imageInterval)
  }
})
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: #ffffff;
  
  // Ensure all sections respect max-width
  section {
    width: 100%;
    max-width: 100%;
  }
  
  // Ensure containers respect max-width
  :deep(.v-row) {
    max-width: 100%;
  }
}

.hero-section {
  min-height: 90vh;
  background: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 80px;
  width: 100%;
}

.hero-container {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;
  
  @media (max-width: 960px) {
    padding: 0 24px;
  }
  
  @media (max-width: 600px) {
    padding: 0 16px;
  }
}

.hero-content {
  min-height: 70vh;
}

.hero-text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcome-text {
  font-size: 0.95rem;
  color: #1976D2;
  font-weight: 500;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -1px;
  
  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 600px) {
    font-size: 2rem;
  }
}

.hero-description {
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.8;
  margin-bottom: 32px;
  
  @media (max-width: 960px) {
    font-size: 1rem;
  }
}

.hero-buttons {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.quote-btn {
  text-transform: none;
  font-weight: 500;
  padding: 14px 32px !important;
  border-radius: 4px;
}

.play-btn {
  width: 56px !important;
  height: 56px !important;
  border-radius: 50% !important;
}

.hero-image-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active {
    background: #1976D2;
    width: 24px;
    border-radius: 5px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.statistics-section {
  padding: 80px 0;
  background: #ffffff;
  width: 100%;
}

.statistics-container {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;
  
  @media (max-width: 960px) {
    padding: 0 24px;
  }
  
  @media (max-width: 600px) {
    padding: 0 16px;
  }
}

.stat-card {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
}

.stat-content {
  display: flex;
  align-items: center;
  padding: 32px;
  gap: 24px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
}

.stat-bullet {
  width: 12px;
  height: 12px;
  background: #1976D2;
  border-radius: 50%;
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1976D2;
  margin: 0;
  line-height: 1;
  
  @media (max-width: 600px) {
    font-size: 2rem;
  }
}

.stat-icon {
  color: #1976D2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .icon-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.6;
  }
}
</style>