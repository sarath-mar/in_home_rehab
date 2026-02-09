<template>
  <section class="features-section">
    <div class="features-container">
      <v-row align="stretch">
        <!-- Feature Cards -->
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="4" v-for="(feature, index) in features" :key="index">
              <v-card class="feature-card">
                <div class="feature-icon">
                  <Icon :name="feature.icon" size="48" />
                </div>
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        
        <!-- Trusted by Professionals Block -->
        <v-col cols="12" md="4">
          <v-card class="trusted-card">
            <h2 class="trusted-title">Trusted by Professionals Worldwide</h2>
            <div class="trusted-content">
              <div class="trusted-label">
                <div class="trusted-bullet"></div>
                <span>Satisfied Client</span>
              </div>
              <div class="trusted-stats">
                <p class="trusted-percentage">98%</p>
                <div class="trusted-avatars">
                  <div
                    v-for="(avatar, index) in clientAvatars"
                    :key="index"
                    class="avatar"
                    :style="{ backgroundImage: `url(${avatar})` }"
                  ></div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'mdi:handshake',
    title: 'Transparent Pricing',
    description: 'Clear and honest pricing from the start so you always know exactly what you will pay for our printing machines.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Quality Assurance',
    description: 'Every machine undergoes rigorous testing and quality checks to ensure reliability and performance excellence.'
  },
  {
    icon: 'mdi:tools',
    title: 'Expert Support',
    description: 'Comprehensive installation, training, and ongoing support services to maximize your machine performance.'
  }
]

// Client avatars
const clientAvatars = [
  'https://i.pravatar.cc/150?img=12',
  'https://i.pravatar.cc/150?img=33',
  'https://i.pravatar.cc/150?img=47'
]
</script>

<style lang="scss" scoped>
.features-section {
  padding: 80px 0;
  background: #ffffff;
  width: 100%;
}

.features-container {
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

.feature-card {
  background: #1976D2 !important;
  color: #ffffff;
  border-radius: 12px;
  padding: 40px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(25, 118, 210, 0.3);
  }
}

.feature-icon {
  margin-bottom: 24px;
  color: #ffffff;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.feature-description {
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  opacity: 0.95;
}

.trusted-card {
  background: #ffffff !important;
  border-radius: 12px;
  padding: 40px 32px;
  height: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.trusted-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: 1.3;
}

.trusted-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.trusted-label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  color: #000000;
  font-weight: 500;
}

.trusted-bullet {
  width: 8px;
  height: 8px;
  background: #1976D2;
  border-radius: 50%;
}

.trusted-stats {
  display: flex;
  align-items: center;
  gap: 24px;
}

.trusted-percentage {
  font-size: 4rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  line-height: 1;
  
  @media (max-width: 960px) {
    font-size: 3rem;
  }
}

.trusted-avatars {
  display: flex;
  align-items: center;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  background: #e0e0e0;
  background-size: cover;
  background-position: center;
  margin-left: -12px;
  position: relative;
  z-index: 1;
  
  &:first-child {
    margin-left: 0;
    z-index: 3;
  }
  
  &:nth-child(2) {
    z-index: 2;
  }
  
  &:nth-child(3) {
    z-index: 1;
  }
  
  @media (max-width: 960px) {
    width: 40px;
    height: 40px;
  }
}
</style>
