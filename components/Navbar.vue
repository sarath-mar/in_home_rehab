<template>
  <v-app-bar
    :elevation="scrollY > 50 ? 4 : 0"
    fixed
    :class="['navbar', { 'navbar-scrolled': scrollY > 50 }]"
  >
    <div class="navbar-container">
      <v-row align="center" no-gutters>
        <!-- Logo -->
        <v-col cols="auto">
          <div class="logo">
            <div class="logo-icon">
              <Icon name="mdi:cube-outline" size="32" />
            </div>
            <div class="logo-text-wrapper">
              <h2 class="logo-text">V1 Solutions</h2>
              <p class="logo-subtitle">Printing Machines Manufacturer</p>
            </div>
          </div>
        </v-col>
        
        <v-spacer></v-spacer>
        
        <!-- Navigation Links -->
        <v-col cols="auto" class="d-none d-lg-flex">
          <v-btn
            v-for="(item, index) in navItems"
            :key="index"
            :href="item.href"
            variant="text"
            class="nav-link"
          >
            {{ item.label }}
            <Icon v-if="item.hasDropdown" name="mdi:chevron-down" size="16" class="ml-1" />
          </v-btn>
        </v-col>
        
        <!-- Social Media Icons -->
        <v-col cols="auto" class="d-none d-md-flex">
          <div class="social-icons">
            <a href="#" class="social-icon">
              <Icon name="mdi:facebook" size="20" />
            </a>
            <a href="#" class="social-icon">
              <Icon name="mdi:twitter" size="20" />
            </a>
            <a href="#" class="social-icon">
              <Icon name="mdi:youtube" size="20" />
            </a>
          </div>
        </v-col>
        
        <!-- Contact Us Button -->
        <v-col cols="auto" class="d-none d-md-flex">
          <v-btn
            color="primary"
            variant="flat"
            class="contact-btn"
            href="#contact"
          >
            Contact Us
          </v-btn>
        </v-col>
        
        <!-- Mobile Menu -->
        <v-col cols="auto" class="d-lg-none">
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
              >
                <v-list-item-title>{{ item.label }}</v-list-item-title>
              </v-list-item>
              <v-list-item href="#contact">
                <v-list-item-title>Contact Us</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

const navItems = [
  { label: 'Home', href: '#home', hasDropdown: false },
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Projects', href: '#projects', hasDropdown: true },
  { label: 'Pages', href: '#pages', hasDropdown: true },
  { label: 'Contact', href: '#contact', hasDropdown: false }
]

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 0.3s ease;
  z-index: 1000;
  width: 100%;
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  
  &.navbar-scrolled {
    background: #ffffff !important;
    backdrop-filter: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
  }
  
  :deep(.v-app-bar__content) {
    background: rgba(255, 255, 255, 0.95) !important;
  }
  
  &.navbar-scrolled :deep(.v-app-bar__content) {
    background: #ffffff !important;
  }
}

.navbar-container {
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

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  color: #1976D2;
  display: flex;
  align-items: center;
}

.logo-text-wrapper {
  display: flex;
  flex-direction: column;
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  color: #1976D2;
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
}

.logo-subtitle {
  font-size: 0.75rem;
  color: #1976D2;
  margin: 0;
  line-height: 1;
}

.nav-link {
  color: #1a1a1a !important;
  font-weight: 500;
  margin: 0 4px;
  text-transform: none;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  
  &:hover {
    color: #1565C0 !important;
    background: rgba(25, 118, 210, 0.1) !important;
  }
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 24px;
}

.social-icon {
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1976D2;
  }
}

.contact-btn {
  text-transform: none;
  font-weight: 500;
  padding: 8px 24px !important;
}
</style>
