<template>
  <section class="about-section">
    <div class="about-container">
      <v-row align="stretch">
        <!-- Left Content - About V1 Solutions -->
        <v-col cols="12" lg="4">
          <div class="about-content">
            <p class="about-label">About V1 Solutions</p>
            <h2 class="about-title">Your Partner in Printing Excellence</h2>
            <p class="about-description">
              We manufacture and supply high-quality printing machines including Ferrule Printing Machines and Wristband Printers, delivering reliable solutions for diverse industrial needs.
            </p>
            
            <!-- Progress Bars -->
            <div class="progress-bars">
              <div
                v-for="(skill, index) in skills"
                :key="index"
                class="progress-item"
              >
                <div class="progress-header">
                  <span class="progress-label">{{ skill.label }}</span>
                  <span class="progress-value">{{ skill.value }}</span>
                </div>
                <div class="progress-bar-wrapper">
                  <div
                    class="progress-bar-fill"
                    :class="{ 'animate': isVisible }"
                    :style="{ width: isVisible ? skill.value : '0%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        
        <!-- Center Image -->
        <v-col cols="12" lg="4" class="about-image-col">
          <div class="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
              alt="V1 Solutions team members"
              class="about-image"
              @error="handleImageError"
            />
          </div>
        </v-col>
        
        <!-- Right Content - Vision and Mission -->
        <v-col cols="12" lg="4">
          <div class="vision-mission-content">
            <div class="vision-mission-item">
              <h3 class="vision-mission-title">| Our Vision</h3>
              <p class="vision-mission-text">
                To become a global leader in printing machine manufacturing by delivering innovative, precision-engineered solutions that transform industrial printing capabilities and drive business success.
              </p>
            </div>
            
            <div class="vision-mission-item">
              <h3 class="vision-mission-title">| Our Mission</h3>
              <p class="vision-mission-text">
                We empower businesses and industries by manufacturing and supplying reliable, high-quality printing machines including Ferrule Printers and Wristband Printers that deliver exceptional performance, efficiency, and value across every sector we serve.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const skills = [
  { label: 'Quality', value: '99%', percentage: 99 },
  { label: 'Precision', value: '99.9%', percentage: 99.9 },
  { label: 'Reliability', value: '98%', percentage: 98 }
]

const isVisible = ref(false)
let observer = null

const handleImageError = (event) => {
  // Fallback to a placeholder
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UZWFtIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
}

onMounted(() => {
  const section = document.querySelector('.about-section')
  if (section) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(section)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style lang="scss" scoped>
.about-section {
  padding: 80px 0;
  background: #ffffff;
  width: 100%;
}

.about-container {
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

.about-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-label {
  font-size: 0.95rem;
  color: #1976D2;
  font-weight: 500;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 24px 0;
  line-height: 1.2;
  
  @media (max-width: 960px) {
    font-size: 2rem;
  }
}

.about-description {
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.8;
  margin: 0 0 40px 0;
  
  @media (max-width: 960px) {
    font-size: 1rem;
  }
}

.progress-bars {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.progress-item {
  width: 100%;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.progress-label {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
}

.progress-value {
  font-size: 1rem;
  font-weight: 600;
  color: #1976D2;
}

.progress-bar-wrapper {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: #1976D2;
  border-radius: 4px;
  width: 0%;
  transition: width 1.5s ease;
  
  &.animate {
    transition: width 1.5s ease;
  }
}

.about-image-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.about-image-wrapper {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.vision-mission-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.vision-mission-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.vision-mission-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  line-height: 1.3;
}

.vision-mission-text {
  font-size: 1rem;
  color: #000000;
  line-height: 1.8;
  margin: 0;
}
</style>
