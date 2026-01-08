<template>
  <section id="our-products" class="products-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-10">
          <h2 class="section-title">
            <a href="#our-products" class="section-anchor">Our Products</a>
          </h2>
          <p class="section-subtitle">
            High-quality ferrule printing machines designed for precision and efficiency
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="product-card"
            elevation="0"
            :class="{ 'mt-4': index > 0 }"
          >
            <v-card-title class="product-title">
              <Icon :name="product.icon" size="40" class="product-icon mr-3" />
              {{ product.name }}
            </v-card-title>
            <v-card-text>
              <p class="product-description">{{ product.description }}</p>
              <v-chip
                v-for="(feature, idx) in product.features"
                :key="idx"
                class="ma-1"
                color="primary"
                variant="outlined"
                size="small"
              >
                {{ feature }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const products = [
  {
    name: 'Ferrule Printing Machine V1',
    icon: 'mdi:printer-3d',
    description: 'Advanced ferrule printing machine with high-speed printing capabilities and precision control.',
    features: ['High Speed', 'Precision', 'Automated']
  },
  {
    name: 'Ferrule Printing Machine V2',
    icon: 'mdi:printer-3d-nozzle',
    description: 'Next-generation model with enhanced features and improved efficiency for industrial applications.',
    features: ['Enhanced Features', 'Industrial Grade', 'Efficient']
  },
  {
    name: 'Custom Ferrule Solutions',
    icon: 'mdi:tools',
    description: 'Tailored ferrule printing solutions designed to meet your specific business requirements.',
    features: ['Customizable', 'Flexible', 'Scalable']
  }
]
</script>

<style lang="scss" scoped>
.products-section {
  padding: 100px 0;
  background: #ffffff;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #000000;
  }
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #000000;
  margin-bottom: 1.5rem;
  position: relative;
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
    color: #333333;
  }
  
  &::after {
    content: '#';
    opacity: 0;
    margin-left: 8px;
    color: #000000;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 0.5;
  }
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
}

.product-card {
  height: 100%;
  border-radius: 0 !important;
  transition: all 0.3s ease;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0 0 #000000;
  
  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 10px 10px 0 0 #000000;
  }
}

.product-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  display: flex;
  align-items: center;
  padding: 24px 24px 16px !important;
  border-bottom: 2px solid #000000;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
}

.product-icon {
  color: #000000;
}

.product-description {
  color: #666666;
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 1rem;
}
</style>
