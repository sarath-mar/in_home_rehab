<template>
  <section class="contact-section">
    <div class="contact-container">
      <v-row align="stretch">
        <!-- Left Column - Image -->
        <v-col cols="12" lg="6" class="contact-image-col">
          <div class="contact-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
              alt="V1 Solutions team member"
              class="contact-image"
              @error="handleImageError"
            />
          </div>
        </v-col>

        <!-- Right Column - Contact Form -->
        <v-col cols="12" lg="6" class="contact-form-col">
          <div class="contact-content">
            <p class="contact-label">Contact</p>
            <h2 class="contact-title">Get Expert Support for Your Printing Needs</h2>

            <!-- Contact Form -->
            <v-form @submit.prevent="handleSubmit" class="contact-form">
              <v-text-field
                v-model="form.fullName"
                label="Full Name *"
                placeholder="Your Real Name"
                variant="outlined"
                required
                class="form-field"
              ></v-text-field>

              <v-text-field
                v-model="form.phone"
                label="Phone *"
                placeholder="Phone Number"
                variant="outlined"
                type="tel"
                required
                class="form-field"
              ></v-text-field>

              <v-text-field
                v-model="form.email"
                label="Email Address *"
                placeholder="Email Address"
                variant="outlined"
                type="email"
                required
                class="form-field"
              ></v-text-field>

              <v-text-field
                v-model="form.subject"
                label="Subject *"
                placeholder="I want to"
                variant="outlined"
                required
                class="form-field"
              ></v-text-field>

              <v-textarea
                v-model="form.message"
                label="Your Message *"
                placeholder="Write your message..."
                variant="outlined"
                rows="4"
                required
                class="form-field"
              ></v-textarea>

              <v-btn
                type="submit"
                color="primary"
                size="large"
                variant="flat"
                class="submit-btn"
              >
                Send Message
              </v-btn>
            </v-form>

            <!-- Contact Information -->
            <div class="contact-info">
              <div class="info-item">
                <span class="info-label">Address:</span>
                <span class="info-value">
                  456 Creative District Ahmad Yani, Medan, North Sumatera, Indonesia
                </span>
              </div>
              <div class="info-item">
                <span class="info-label">Support:</span>
                <div class="info-links">
                  <a href="tel:+800-3374-4676" class="info-link">+800-3374-4676</a>
                  <a href="mailto:hola@dominantsite.com" class="info-link">hola@dominantsite.com</a>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  fullName: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
}

const handleImageError = (event) => {
  // Fallback to a placeholder
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db250YWN0PC90ZXh0Pjwvc3ZnPg=='
}
</script>

<style lang="scss" scoped>
.contact-section {
  padding: 100px 0;
  background: #ffffff;
  width: 100%;
}

.contact-container {
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

.contact-image-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.contact-image-wrapper {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.contact-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.contact-form-col {
  display: flex;
  align-items: center;
}

.contact-content {
  width: 100%;
  padding: 20px;
}

.contact-label {
  font-size: 0.95rem;
  color: #1976D2;
  font-weight: 500;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 40px 0;
  line-height: 1.2;
  
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
}

.contact-form {
  margin-bottom: 40px;
}

.form-field {
  margin-bottom: 24px;
  
  :deep(.v-field) {
    border-radius: 8px;
  }
  
  :deep(.v-field__input) {
    padding: 12px 16px;
  }
  
  :deep(.v-label) {
    color: #666666;
    font-size: 0.95rem;
  }
}

.submit-btn {
  text-transform: none;
  font-weight: 500;
  padding: 14px 40px !important;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  
  @media (min-width: 600px) {
    width: auto;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
  
  @media (min-width: 960px) {
    flex-direction: row;
    gap: 40px;
  }
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (min-width: 960px) {
    flex: 1;
  }
}

.info-label {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 8px;
}

.info-value {
  font-size: 0.95rem;
  color: #000000;
  line-height: 1.6;
}

.info-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-link {
  font-size: 0.95rem;
  color: #1976D2;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1565C0;
    text-decoration: underline;
  }
}
</style>
