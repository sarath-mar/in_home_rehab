<template>
  <section class="services-section">
    <div class="services-container">
      <!-- Header -->
      <div class="services-header">
        <p class="services-subtitle">Our Products</p>
        <h2 class="services-title">Premium Printing Machines</h2>
        <p class="services-description">
          From Ferrule Printing Machines to Wristband Printers, we offer a comprehensive range of high-quality printing solutions for diverse industrial needs.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="services-cards">
        <v-row>
          <v-col
            v-for="(service, index) in services"
            :key="index"
            cols="12"
            sm="6"
            lg="3"
          >
            <v-card
              :class="['service-card', { 'service-card-dark': service.isDark }]"
            >
              <div class="service-icon">
                <Icon :name="service.icon" size="48" />
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <v-btn
                :variant="service.isDark ? 'text' : 'text'"
                :class="['service-btn', { 'service-btn-dark': service.isDark }]"
              >
                Learn More
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Call to Action -->
      <div class="services-cta">
        <p class="cta-text">Discover Our Complete Range of Printing Machines</p>
        <v-btn
          color="primary"
          size="large"
          variant="flat"
          class="cta-button"
          href="#brochures"
        >
          View All Products
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'mdi:printer',
    title: 'Ferrule Printing Machines',
    description: 'Advanced ferrule printing machines designed for precision and durability in industrial applications with high-speed performance.',
    isDark: false
  },
  {
    icon: 'mdi:printer',
    title: 'Wristband Printer 660',
    description: 'Specialized wristband printing solution with exceptional print quality and reliability for identification and security applications.',
    isDark: true
  },
  {
    icon: 'mdi:printer',
    title: 'Industrial Printers',
    description: 'Heavy-duty industrial printing machines built for continuous operation and demanding production environments.',
    isDark: true
  },
  {
    icon: 'mdi:printer',
    title: 'Custom Solutions',
    description: 'Tailored printing machine solutions designed to meet specific requirements and unique industrial applications.',
    isDark: false
  }
]
</script>

<style lang="scss" scoped>
.services-section {
  padding: 100px 0;
  background: #ffffff;
  width: 100%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0, 0, 0, 0.02) 20px, rgba(0, 0, 0, 0.02) 21px),
      repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0, 0, 0, 0.02) 20px, rgba(0, 0, 0, 0.02) 21px);
    pointer-events: none;
    z-index: 0;
  }
}

.services-container {
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

.services-header {
  text-align: center;
  margin-bottom: 60px;
}

.services-subtitle {
  font-size: 0.95rem;
  color: #1976D2;
  font-weight: 500;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.services-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 24px 0;
  line-height: 1.2;
  
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
}

.services-description {
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.8;
  margin: 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 960px) {
    font-size: 1rem;
  }
}

.services-cards {
  margin-bottom: 60px;
}

.service-card {
  border-radius: 12px;
  padding: 40px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  background: #ffffff !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
  
  &.service-card-dark {
    background: #1976D2 !important;
    border-color: #1976D2;
    color: #ffffff;
  }
}

.service-icon {
  margin-bottom: 24px;
  color: #000000;
  
  .service-card-dark & {
    color: #ffffff;
  }
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 16px 0;
  line-height: 1.3;
  
  .service-card-dark & {
    color: #ffffff;
  }
}

.service-description {
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin: 0 0 24px 0;
  flex-grow: 1;
  
  .service-card-dark & {
    color: rgba(255, 255, 255, 0.9);
  }
}

.service-btn {
  text-transform: none;
  font-weight: 500;
  padding: 0 !important;
  min-width: auto !important;
  color: #000000 !important;
  align-self: flex-start;
  
  &.service-btn-dark {
    color: #ffffff !important;
  }
  
  &:hover {
    background: transparent !important;
    opacity: 0.8;
  }
}

.services-cta {
  text-align: center;
  padding-top: 40px;
}

.cta-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 24px 0;
  
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
}

.cta-button {
  text-transform: none;
  font-weight: 500;
  padding: 14px 40px !important;
  border-radius: 8px;
  font-size: 1rem;
}
</style>
