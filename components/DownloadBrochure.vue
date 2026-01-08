<template>
  <section id="download-brochure" class="brochure-section">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="section-title">
            <a href="#download-brochure" class="section-anchor">Download Brochure</a>
          </h2>
          <p class="section-subtitle mb-8">
            Get detailed information about our ferrule printing machines and solutions
          </p>

          <v-card class="brochure-card" elevation="0">
            <v-card-text class="pa-8">
              <div class="brochure-icon-wrapper mb-6">
                <Icon name="mdi:file-document" size="80" class="brochure-icon" />
              </div>
              
              <h3 class="brochure-title mb-4">Product Catalog 2024</h3>
              <p class="brochure-description mb-6">
                Download our comprehensive brochure to learn more about our range of ferrule printing machines, 
                specifications, features, and technical details.
              </p>

              <v-btn
                color="primary"
                size="large"
                variant="flat"
                class="download-btn"
                @click="downloadBrochure"
              >
                <Icon name="mdi:download" size="20" class="mr-2" />
                Download Brochure
              </v-btn>

              <p class="brochure-note mt-4">
                <Icon name="mdi:information" size="16" class="mr-1" />
                PDF format • 2.5 MB
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const downloadBrochure = () => {
  window.open('#', '_blank')
}
</script>

<style lang="scss" scoped>
.brochure-section {
  padding: 100px 0;
  background: #000000;
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.section-anchor {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #cccccc;
  }
  
  &::after {
    content: '#';
    opacity: 0;
    margin-left: 8px;
    color: #ffffff;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 0.7;
  }
}

.section-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 1;
  font-weight: 400;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
}

.brochure-card {
  background: #ffffff !important;
  border-radius: 0 !important;
  position: relative;
  z-index: 1;
  border: 3px solid #000000;
  box-shadow: 8px 8px 0 0 #000000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 0 #000000;
  }
}

.brochure-icon-wrapper {
  display: inline-block;
  width: 120px;
  height: 120px;
  background: #000000;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0 0 #333333;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.brochure-icon {
  color: #ffffff;
}

.brochure-title {
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.brochure-description {
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.download-btn {
  background: #000000 !important;
  color: #ffffff !important;
  padding: 16px 48px !important;
  font-size: 1.1rem;
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

.brochure-note {
  font-size: 0.9rem;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
