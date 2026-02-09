<template>
  <section id="brochures" class="brochure-section">
    <div class="brochure-container">
      <div class="brochure-header">
        <p class="brochure-subtitle">Product Information</p>
        <h2 class="brochure-title">Download Our Brochures</h2>
        <p class="brochure-description">
          Explore our comprehensive product catalogs and technical specifications. View online or download PDF brochures for detailed information about our printing machines.
        </p>
      </div>

      <div class="brochure-grid">
        <v-row>
          <v-col
            v-for="(brochure, index) in brochures"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="brochure-card">
              <div class="brochure-image-wrapper">
                <img
                  :src="brochure.thumbnail"
                  :alt="brochure.title"
                  class="brochure-thumbnail"
                  @error="handleImageError"
                />
                <div class="brochure-overlay">
                  <v-btn
                    color="white"
                    variant="flat"
                    class="view-btn"
                    @click="openViewer(brochure)"
                  >
                    <Icon name="mdi:eye" size="20" class="mr-2" />
                    View
                  </v-btn>
                  <v-btn
                    color="primary"
                    variant="flat"
                    class="download-btn"
                    @click="downloadBrochure(brochure)"
                  >
                    <Icon name="mdi:download" size="20" class="mr-2" />
                    Download
                  </v-btn>
                </div>
              </div>
              <div class="brochure-content">
                <h3 class="brochure-card-title">{{ brochure.title }}</h3>
                <p class="brochure-card-description">{{ brochure.description }}</p>
                <div class="brochure-meta">
                  <span class="brochure-size">{{ brochure.size }}</span>
                  <span class="brochure-pages">{{ brochure.pages }} pages</span>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- PDF Viewer Dialog -->
      <v-dialog v-model="viewerDialog" max-width="1200" scrollable>
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            <span>{{ selectedBrochure?.title }}</span>
            <div>
              <v-btn
                icon
                variant="text"
                @click="downloadBrochure(selectedBrochure)"
                class="mr-2"
              >
                <Icon name="mdi:download" size="24" />
              </v-btn>
              <v-btn
                icon
                variant="text"
                @click="viewerDialog = false"
              >
                <Icon name="mdi:close" size="24" />
              </v-btn>
            </div>
          </v-card-title>
          <v-card-text class="pa-0">
            <div class="pdf-viewer-wrapper">
              <iframe
                v-if="selectedBrochure"
                :src="selectedBrochure.pdfUrl"
                class="pdf-viewer"
                frameborder="0"
              ></iframe>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const viewerDialog = ref(false)
const selectedBrochure = ref(null)

const brochures = [
  {
    title: 'Ferrule Printing Machine',
    description: 'Complete specifications and features of our advanced Ferrule Printing Machines for industrial applications.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=500&fit=crop',
    size: '2.5 MB',
    pages: '12'
  },
  {
    title: 'Wristband Printer 660',
    description: 'Detailed information about the Wristband Printer 660 model, specifications, and usage guidelines.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=500&fit=crop',
    size: '3.1 MB',
    pages: '15'
  },
  {
    title: 'Complete Product Catalog',
    description: 'Comprehensive catalog featuring all our printing machine models, specifications, and applications.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=500&fit=crop',
    size: '8.5 MB',
    pages: '45'
  },
  {
    title: 'Industrial Printing Solutions',
    description: 'Overview of our industrial printing solutions and custom machine configurations.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=500&fit=crop',
    size: '4.2 MB',
    pages: '20'
  },
  {
    title: 'Technical Specifications Guide',
    description: 'Technical documentation and specifications for all machine models and configurations.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=500&fit=crop',
    size: '5.8 MB',
    pages: '32'
  },
  {
    title: 'Installation & Maintenance Manual',
    description: 'Comprehensive guide for installation, operation, and maintenance of our printing machines.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=500&fit=crop',
    size: '6.3 MB',
    pages: '28'
  }
]

const openViewer = (brochure) => {
  selectedBrochure.value = brochure
  viewerDialog.value = true
}

const downloadBrochure = (brochure) => {
  if (brochure && brochure.pdfUrl) {
    const link = document.createElement('a')
    link.href = brochure.pdfUrl
    link.download = `${brochure.title.replace(/\s+/g, '-')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Ccm9jaHVyZTwvdGV4dD48L3N2Zz4='
}
</script>

<style lang="scss" scoped>
.brochure-section {
  padding: 100px 0;
  background: #f8f9fa;
  width: 100%;
}

.brochure-container {
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

.brochure-header {
  text-align: center;
  margin-bottom: 60px;
}

.brochure-subtitle {
  font-size: 0.95rem;
  color: #1976D2;
  font-weight: 500;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.brochure-title {
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

.brochure-description {
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

.brochure-grid {
  margin-top: 40px;
}

.brochure-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
}

.brochure-image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #e0e0e0;
  
  .brochure-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .brochure-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    .brochure-thumbnail {
      transform: scale(1.1);
    }
    
    .brochure-overlay {
      opacity: 1;
    }
  }
}

.view-btn,
.download-btn {
  text-transform: none;
  font-weight: 500;
  padding: 10px 20px !important;
}

.brochure-content {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.brochure-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.brochure-card-description {
  font-size: 0.95rem;
  color: #666666;
  line-height: 1.6;
  margin: 0 0 16px 0;
  flex-grow: 1;
}

.brochure-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
  font-size: 0.85rem;
  color: #999999;
}

.brochure-size,
.brochure-pages {
  font-weight: 500;
}

.pdf-viewer-wrapper {
  width: 100%;
  height: 80vh;
  min-height: 600px;
  background: #f5f5f5;
}

.pdf-viewer {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 960px) {
  .pdf-viewer-wrapper {
    height: 70vh;
    min-height: 500px;
  }
}
</style>
