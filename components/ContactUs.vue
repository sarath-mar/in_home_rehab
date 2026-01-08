<template>
  <section id="contact-us" class="contact-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-10">
          <h2 class="section-title">
            <a href="#contact-us" class="section-anchor">Contact Us</a>
          </h2>
          <p class="section-subtitle">
            Get in touch with us for inquiries, support, or to learn more about our products
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="contact-info-card" elevation="0">
            <v-card-title class="contact-card-title">
              <Icon name="mdi:information" size="28" class="mr-2" />
              Contact Information
            </v-card-title>
            <v-card-text>
              <div class="contact-item mb-6">
                <div class="contact-item-header mb-2">
                  <Icon name="mdi:phone" size="24" class="contact-item-icon" />
                  <h4 class="contact-item-title">Phone</h4>
                </div>
                <a href="tel:+919021039208" class="contact-item-value">
                  +91-9021039208
                </a>
                <br>
                <a href="tel:+918660463130" class="contact-item-value">
                  +91-8660463130
                </a>
              </div>

              <div class="contact-item mb-6">
                <div class="contact-item-header mb-2">
                  <Icon name="mdi:email" size="24" class="contact-item-icon" />
                  <h4 class="contact-item-title">Email</h4>
                </div>
                <a href="mailto:info@v1solutions.com" class="contact-item-value">
                  info@v1solutions.com
                </a>
              </div>

              <div class="contact-item">
                <div class="contact-item-header mb-2">
                  <Icon name="mdi:map-marker" size="24" class="contact-item-icon" />
                  <h4 class="contact-item-title">Address</h4>
                </div>
                <p class="contact-item-value">
                  5/1/2, Haridwar Park, Baner<br>
                  Pune, Maharashtra 411045<br>
                  India
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="contact-form-card" elevation="0">
            <v-card-title class="contact-card-title">
              <Icon name="mdi:email-edit" size="28" class="mr-2" />
              Send us a Message
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="form.name"
                  label="Your Name"
                  :rules="nameRules"
                  variant="outlined"
                  prepend-inner-icon="mdi:account"
                  class="mb-3"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.email"
                  label="Your Email"
                  :rules="emailRules"
                  variant="outlined"
                  prepend-inner-icon="mdi:email"
                  class="mb-3"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.phone"
                  label="Phone Number"
                  :rules="phoneRules"
                  variant="outlined"
                  prepend-inner-icon="mdi:phone"
                  class="mb-3"
                  required
                ></v-text-field>

                <v-textarea
                  v-model="form.message"
                  label="Message"
                  :rules="messageRules"
                  variant="outlined"
                  prepend-inner-icon="mdi:message-text"
                  rows="4"
                  class="mb-4"
                  required
                ></v-textarea>

                <v-btn
                  color="primary"
                  size="large"
                  variant="flat"
                  block
                  :disabled="!valid"
                  class="submit-btn"
                  @click="submitForm"
                >
                  <Icon name="mdi:send" size="20" class="mr-2" />
                  Send Message
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const nameRules = [
  v => !!v || 'Name is required',
  v => (v && v.length >= 2) || 'Name must be at least 2 characters'
]

const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const phoneRules = [
  v => !!v || 'Phone number is required',
  v => /^[0-9]{10}$/.test(v) || 'Phone number must be 10 digits'
]

const messageRules = [
  v => !!v || 'Message is required',
  v => (v && v.length >= 10) || 'Message must be at least 10 characters'
]

const submitForm = () => {
  if (valid.value) {
    alert('Thank you for your message! We will get back to you soon.')
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-section {
  padding: 100px 0;
  background: #f5f5f5;
  position: relative;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #000000;
  margin-bottom: 1.5rem;
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

.contact-info-card,
.contact-form-card {
  border-radius: 0 !important;
  height: 100%;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0 0 #000000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 10px 10px 0 0 #000000;
  }
}

.contact-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  display: flex;
  align-items: center;
  padding: 24px 24px 16px !important;
  border-bottom: 3px solid #000000;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
}

.contact-item {
  padding: 16px 0;
}

.contact-item-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-item-icon {
  color: #000000;
}

.contact-item-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
}

.contact-item-value {
  font-size: 1rem;
  color: #666666;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
  line-height: 1.8;
  
  &:hover {
    color: #000000;
    font-weight: 600;
  }
}

.submit-btn {
  background: #000000 !important;
  color: #ffffff !important;
  padding: 16px !important;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0 !important;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0 0 #333333;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 0 #333333;
    background: #333333 !important;
  }
  
  &:disabled {
    background: #cccccc !important;
    border-color: #cccccc !important;
    box-shadow: none !important;
  }
}
</style>
