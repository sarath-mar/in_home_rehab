<template>
  <v-container fluid class="construction-container">
    <v-row justify="center" align="center" class="min-height-screen">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <!-- Animated Construction Icon -->
        <div class="construction-icon-wrapper mb-8">
          <div class="construction-icon">
            <Icon name="mdi:hammer-wrench" size="120" class="animated-icon" />
          </div>
          <div class="pulse-ring"></div>
          <div class="pulse-ring delay-1"></div>
          <div class="pulse-ring delay-2"></div>
        </div>

        <!-- Main Heading -->
        <h1 class="main-heading mb-4">
          <span class="gradient-text">We're Under Construction</span>
        </h1>

        <!-- Subheading -->
        <p class="subheading mb-8">
          Something amazing is coming soon! We're working hard to bring you an exceptional experience.
        </p>

        <!-- Contact Information Card -->
        <v-card class="contact-card mx-auto" elevation="8">
          <v-card-text class="pa-6">
            <h2 class="contact-heading mb-6">Get In Touch</h2>
            
            <v-row class="contact-info">
              <!-- Phone -->
              <v-col cols="12" md="6" class="contact-item">
                <div class="contact-icon-wrapper mb-3">
                  <Icon name="mdi:phone" size="32" class="contact-icon" />
                </div>
                <h3 class="contact-label mb-2">Phone</h3>
                <a href="tel:+919021039208" class="contact-value">
                  +91-9021039208
                </a>
                <br>
                <a href="tel:+918660463130" class="contact-value">
                  +91-8660463130
                </a>
              </v-col>

              <!-- Address -->
              <v-col cols="12" md="6" class="contact-item">
                <div class="contact-icon-wrapper mb-3">
                  <Icon name="mdi:map-marker" size="32" class="contact-icon" />
                </div>
                <h3 class="contact-label mb-2">Address</h3>
                <p class="contact-value">
                  5/1/2, Haridwar Park, Baner<br>
                  Pune, Maharashtra 411045<br>
                  India
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Animated Dots -->
        <div class="loading-dots mt-8">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
useHead({
  title: 'Under Construction - Coming Soon',
  meta: [
    { name: 'description', content: 'We are currently under construction. Please contact us for more information.' }
  ]
})
</script>

<style lang="scss" scoped>
.construction-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    animation: backgroundShift 15s ease-in-out infinite;
  }
}

@keyframes backgroundShift {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.min-height-screen {
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.construction-icon-wrapper {
  position: relative;
  display: inline-block;
  margin: 0 auto;
}

.construction-icon {
  position: relative;
  z-index: 2;
  color: #fff;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.animated-icon {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: pulse 2s ease-out infinite;
}

.pulse-ring.delay-1 {
  animation-delay: 0.5s;
}

.pulse-ring.delay-2 {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

.main-heading {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
}

.gradient-text {
  background: linear-gradient(45deg, #fff, #f0f0f0, #fff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.subheading {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  animation: fadeInUp 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
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

.contact-card {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  border-radius: 20px !important;
  animation: fadeInUp 1s ease-out 0.4s both;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}

.contact-heading {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.contact-info {
  margin-top: 1rem;
}

.contact-item {
  text-align: center;
  padding: 1rem;
}

.contact-icon-wrapper {
  display: inline-block;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.contact-icon {
  color: #fff;
}

.contact-label {
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-value {
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  display: inline-block;
  
  &:hover {
    color: #667eea;
  }
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.dot {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: dotBounce 1.4s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
}

@keyframes dotBounce {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>