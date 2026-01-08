<template>
  <v-app>
    <div class="home-page">
      <!-- Navigation Bar -->
      <v-app-bar
        :elevation="scrollY > 50 ? 2 : 0"
        :color="scrollY > 50 ? 'white' : 'transparent'"
        fixed
        class="navigation-bar"
      >
        <v-container>
          <v-row align="center">
            <v-col cols="auto">
              <div class="logo">
                <img src="/images/logo.webp" alt="V1 Solutions Logo" class="logo-image" />
                <h2 class="logo-text">V1 Solutions</h2>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto" class="d-none d-md-flex">
              <v-btn
                v-for="(item, index) in navItems"
                :key="index"
                :href="item.href"
                variant="text"
                class="nav-link"
                @click="scrollToSection(item.href)"
              >
                {{ item.label }}
              </v-btn>
            </v-col>
            <v-col cols="auto" class="d-md-none">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" color="primary" icon>
                    <Icon name="mdi:menu" size="24" />
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in navItems"
                    :key="index"
                    :href="item.href"
                    @click="scrollToSection(item.href)"
                  >
                    <v-list-item-title>{{ item.label }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-pattern"></div>
        <v-container>
          <v-row justify="center" align="center" class="hero-content">
            <v-col cols="12" md="10" lg="8" class="text-center">
              <div class="hero-logo-wrapper mb-8">
                <img src="/images/logo.webp" alt="V1 Solutions Logo" class="hero-logo" />
              </div>
              <h1 class="hero-title mb-6">
                Precision Engineering<br>
                <span class="hero-title-accent">Excellence in Every Machine</span>
              </h1>
              <p class="hero-subtitle mb-4">
                Leading Manufacturer of Ferrule Printing Machines
              </p>
              <p class="hero-description mb-10">
                Experience quality, reliability, and innovation in every machine.<br>
                Precision-engineered solutions for your printing needs.
              </p>
              <div class="hero-buttons">
                <v-btn
                  color="primary"
                  size="x-large"
                  variant="flat"
                  class="hero-btn-primary mr-4 mb-2"
                  href="#our-products"
                  @click="scrollToSection('#our-products')"
                >
                  <Icon name="mdi:package-variant" size="20" class="mr-2" />
                  Our Products
                </v-btn>
                <v-btn
                  color="secondary"
                  size="x-large"
                  variant="outlined"
                  class="hero-btn-secondary mb-2"
                  href="#contact-us"
                  @click="scrollToSection('#contact-us')"
                >
                  <Icon name="mdi:phone" size="20" class="mr-2" />
                  Contact Us
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <div class="scroll-indicator" @click="scrollToSection('#our-products')">
          <div class="scroll-line"></div>
          <Icon name="mdi:chevron-down" size="24" class="scroll-icon" />
        </div>
      </section>

      <OurProducts />

      <DownloadBrochure />

      <AboutUs />

      <ContactUs />

      <!-- Footer -->
      <v-footer class="footer-section">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="text-center text-md-left">
              <div class="footer-logo mb-4">
                <img src="/images/logo.webp" alt="V1 Solutions Logo" class="footer-logo-image" />
              </div>
              <h3 class="footer-title mb-2">V1 Solutions</h3>
              <p class="footer-text">
                Your trusted partner for ferrule printing machines
              </p>
            </v-col>
            <v-col cols="12" md="6" class="text-center text-md-right d-flex flex-column justify-center">
              <p class="footer-text mb-2">
                &copy; {{ new Date().getFullYear() }} V1 Solutions. All rights reserved.
              </p>
              <div class="footer-links">
                <a href="#our-products" class="footer-link">Products</a>
                <span class="mx-2">|</span>
                <a href="#about-us" class="footer-link">About</a>
                <span class="mx-2">|</span>
                <a href="#contact-us" class="footer-link">Contact</a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'V1 Solutions - Ferrule Printing Machines',
  meta: [
    { name: 'description', content: 'V1 Solutions - Leading manufacturer of high-quality ferrule printing machines. Precision-engineered solutions for your printing needs.' }
  ]
})

const scrollY = ref(0)
const navItems = [
  { label: 'Our Products', href: '#our-products' },
  { label: 'Download Brochure', href: '#download-brochure' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Contact Us', href: '#contact-us' }
]

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}

.navigation-bar {
  transition: all 0.3s ease;
  z-index: 1000;
  backdrop-filter: blur(10px);
  
  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .logo-image {
    height: 45px;
    width: auto;
    object-fit: contain;
  }
  
  .logo-text {
    font-size: 1.4rem;
    font-weight: 700;
    color: #000000;
    margin: 0;
    letter-spacing: -0.5px;
  }
  
  .nav-link {
    color: #000000 !important;
    font-weight: 500;
    margin: 0 8px;
    text-transform: none;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    
    &:hover {
      color: #333333 !important;
      background: rgba(0, 0, 0, 0.05) !important;
    }
  }
}

.hero-section {
  min-height: 100vh;
  background: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 80px;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.03) 35px, rgba(0, 0, 0, 0.03) 70px),
    repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.03) 35px, rgba(0, 0, 0, 0.03) 70px);
  opacity: 0.5;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 60px 0;
}

.hero-logo-wrapper {
  display: inline-block;
  padding: 30px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 0;
  margin: 0 auto;
  box-shadow: 8px 8px 0 0 #000000;
  animation: logoFloat 4s ease-in-out infinite;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 0 #000000;
  }
}

@keyframes logoFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-logo {
  height: 100px;
  width: auto;
  object-fit: contain;
  
  @media (max-width: 768px) {
    height: 70px;
  }
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 900;
  color: #000000;
  line-height: 1.1;
  animation: fadeInUp 1s ease-out;
  letter-spacing: -2px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
}

.hero-title-accent {
  font-weight: 300;
  font-style: italic;
  color: #333333;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  animation: fadeInUp 1s ease-out 0.2s both;
  letter-spacing: 2px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
}

.hero-description {
  font-size: 1.15rem;
  color: #666666;
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out 0.4s both;
  line-height: 1.8;
  letter-spacing: 0.3px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-buttons {
  animation: fadeInUp 1s ease-out 0.6s both;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.hero-btn-primary {
  background: #000000 !important;
  color: #ffffff !important;
  padding: 18px 40px !important;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0 !important;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0 0 #333333;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 0 #333333;
    background: #333333 !important;
  }
}

.hero-btn-secondary {
  background: #ffffff !important;
  color: #000000 !important;
  padding: 18px 40px !important;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0 !important;
  border: 2px solid #000000 !important;
  box-shadow: 4px 4px 0 0 #000000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 0 #000000;
    background: #f5f5f5 !important;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  animation: bounce 2s ease-in-out infinite;
}

.scroll-line {
  width: 2px;
  height: 40px;
  background: #000000;
  margin-bottom: 8px;
}

.scroll-icon {
  color: #000000;
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

.footer-section {
  background: #000000;
  color: #ffffff;
  padding: 60px 0 40px;
  border-top: 3px solid #ffffff;
}

.footer-logo {
  display: inline-block;
  margin-bottom: 16px;
}

.footer-logo-image {
  height: 50px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: 1px;
}

.footer-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.6;
}

.footer-links {
  margin-top: 12px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
  
  &:hover {
    color: #ffffff;
  }
}
</style>
