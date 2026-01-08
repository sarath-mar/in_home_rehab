<template>
  <section id="about-us" class="about-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-10">
          <h2 class="section-title">
            <a href="#about-us" class="section-anchor">About Us</a>
          </h2>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="about-content">
            <h3 class="about-heading mb-4">Welcome to V1 Solutions</h3>
            <p class="about-text mb-4">
              V1 Solutions is a leading manufacturer and supplier of high-quality ferrule printing machines. 
              With years of industry experience, we specialize in delivering precision-engineered solutions 
              that meet the diverse needs of our clients.
            </p>
            <p class="about-text mb-4">
              Our commitment to excellence, innovation, and customer satisfaction has made us a trusted partner 
              for businesses across various industries. We combine cutting-edge technology with reliable 
              manufacturing processes to ensure superior product quality.
            </p>
            <p class="about-text">
              At V1 Solutions, we believe in building long-term relationships with our clients by providing 
              exceptional products and outstanding service support.
            </p>
          </div>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-row>
            <v-col
              v-for="(stat, index) in stats"
              :key="index"
              cols="6"
              class="text-center"
            >
              <v-card class="stat-card" elevation="0">
                <v-card-text class="pa-4">
                  <Icon :name="stat.icon" size="40" class="stat-icon mb-2" />
                  <div class="stat-number">{{ stat.number }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col
          v-for="(value, index) in values"
          :key="index"
          cols="12"
          md="4"
        >
          <v-card class="value-card" elevation="0">
            <v-card-text class="pa-6 text-center">
              <Icon :name="value.icon" size="48" class="value-icon mb-4" />
              <h4 class="value-title mb-3">{{ value.title }}</h4>
              <p class="value-description">{{ value.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const stats = [
  {
    icon: 'mdi:factory',
    number: '10+',
    label: 'Years Experience'
  },
  {
    icon: 'mdi:account-group',
    number: '500+',
    label: 'Happy Clients'
  },
  {
    icon: 'mdi:package-variant',
    number: '1000+',
    label: 'Machines Sold'
  },
  {
    icon: 'mdi:earth',
    number: '50+',
    label: 'Cities Served'
  }
]

const values = [
  {
    icon: 'mdi:lightbulb-on',
    title: 'Innovation',
    description: 'We continuously innovate to bring you the latest technology in ferrule printing solutions.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Quality',
    description: 'Quality is at the heart of everything we do, ensuring reliable and durable products.'
  },
  {
    icon: 'mdi:handshake',
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We work closely with clients to meet their specific needs.'
  }
]
</script>

<style lang="scss" scoped>
.about-section {
  padding: 100px 0;
  background: #ffffff;
  position: relative;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #000000;
  margin-bottom: 1rem;
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

.about-content {
  padding: 20px 0;
}

.about-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.about-text {
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.stat-card {
  border-radius: 0 !important;
  background: #000000;
  color: #ffffff;
  transition: transform 0.3s ease;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0 0 #333333;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 0 #333333;
  }
}

.stat-icon {
  color: #ffffff;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 8px 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.value-card {
  border-radius: 0 !important;
  height: 100%;
  transition: all 0.3s ease;
  border: 3px solid #000000;
  background: #ffffff;
  box-shadow: 6px 6px 0 0 #000000;
  
  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 10px 10px 0 0 #000000;
  }
}

.value-icon {
  color: #000000;
}

.value-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
}

.value-description {
  font-size: 1rem;
  color: #666666;
  line-height: 1.8;
}
</style>
