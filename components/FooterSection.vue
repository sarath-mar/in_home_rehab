<template>
  <footer class="footer-section">
    <div class="footer-container">
      <!-- Top Section -->
      <div class="footer-top">
        <v-row>
          <!-- Logo and Description -->
          <v-col cols="12" md="3">
            <div class="footer-logo-section">
              <div class="footer-logo">
                <div class="logo-icon">
                  <Icon name="mdi:cube-outline" size="32" />
                </div>
                <h2 class="logo-text">V1 Solutions</h2>
              </div>
              <p class="footer-tagline">Printing Machines Manufacturer</p>
              <p class="footer-description">
                Leading manufacturer of Ferrule Printing Machines, Wristband Printers, and specialized printing solutions for industrial applications.
              </p>
            </div>
          </v-col>

          <!-- Services -->
          <v-col cols="12" sm="6" md="3">
            <div class="footer-column">
              <h3 class="footer-heading">Products</h3>
              <ul class="footer-links">
                <li><a href="#services">Ferrule Printing Machines</a></li>
                <li><a href="#services">Wristband Printer 660</a></li>
                <li><a href="#services">Industrial Printers</a></li>
                <li><a href="#services">Custom Solutions</a></li>
              </ul>
            </div>
          </v-col>

          <!-- Quick Links -->
          <v-col cols="12" sm="6" md="3">
            <div class="footer-column">
              <h3 class="footer-heading">Quick Links</h3>
              <ul class="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Products</a></li>
                <li><a href="#brochures">Brochures</a></li>
              </ul>
            </div>
          </v-col>

          <!-- Contact Us -->
          <v-col cols="12" md="3">
            <div class="footer-column">
              <h3 class="footer-heading">Contact Us</h3>
              <div class="footer-contact">
                <a href="tel:+800-3374-4676" class="footer-phone">+800-3374-4676</a>
                <a href="mailto:hola@dominantsite.com" class="footer-email">hola@dominantsite.com</a>
                <p class="footer-address">
                  456 Creative District Ahmad Yani,<br>
                  Medan, North Sumatera
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Bottom Section -->
      <div class="footer-bottom">
        <v-row align="center">
          <v-col cols="12" md="4" class="text-center text-md-left">
            <p class="footer-copyright">
              V1 Solutions, 2025 © All Rights Reserved Dex-Theme
            </p>
          </v-col>
          
          <v-col cols="12" md="4" class="text-center">
            <div class="footer-legal">
              <a href="#faq" class="legal-link">FAQ</a>
              <span class="legal-separator">|</span>
              <a href="#terms" class="legal-link">Terms & Conditions</a>
              <span class="legal-separator">|</span>
              <a href="#privacy" class="legal-link">Privacy Policy</a>
            </div>
          </v-col>
          
          <v-col cols="12" md="4" class="text-center text-md-right">
            <div class="footer-social">
              <a href="#" class="social-link">
                <Icon name="mdi:facebook" size="20" />
              </a>
              <a href="#" class="social-link">
                <Icon name="mdi:twitter" size="20" />
              </a>
              <a href="#" class="social-link">
                <Icon name="mdi:youtube" size="20" />
              </a>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component - no script needed
</script>

<style lang="scss" scoped>
.footer-section {
  background: #1976D2;
  width: 100%;
  position: relative;
  padding: 80px 0 40px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 21px),
      repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 21px);
    pointer-events: none;
    z-index: 0;
  }
}

.footer-container {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  
  
  @media (max-width: 960px) {
    padding: 0 24px;
  }
  
  @media (max-width: 600px) {
    padding: 0 16px;
  }
}

.footer-top {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-logo-section {
  margin-bottom: 24px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.logo-icon {
  color: #ffffff;
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #ffffff;
  border-radius: 8px;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.footer-tagline {
  font-size: 0.9rem;
  color: #ffffff;
  margin: 0 0 16px 0;
  opacity: 0.9;
}

.footer-description {
  font-size: 0.95rem;
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.footer-column {
  margin-bottom: 32px;
}

.footer-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 24px 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  li {
    margin: 0;
  }
  
  a {
    font-size: 0.95rem;
    color: #ffffff;
    text-decoration: none;
    transition: opacity 0.3s ease;
    opacity: 0.9;
    
    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-phone {
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
}

.footer-email {
  font-size: 0.95rem;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.3s ease;
  opacity: 0.9;
  
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
}

.footer-address {
  font-size: 0.95rem;
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.footer-bottom {
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-copyright {
  font-size: 0.9rem;
  color: #ffffff;
  margin: 0;
  opacity: 0.9;
}

.footer-legal {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.legal-link {
  font-size: 0.9rem;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.3s ease;
  opacity: 0.9;
  
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
}

.legal-separator {
  color: #ffffff;
  opacity: 0.5;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  
  @media (max-width: 960px) {
    justify-content: center;
    margin-top: 16px;
  }
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976D2;
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.9);
  }
}
</style>
