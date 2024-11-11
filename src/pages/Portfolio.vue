<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Navigation -->
    <Navigation/>
    <!-- Portfolio Header -->
    <header class="py-20 w-full">
      <div class="container mx-auto px-6">
        <div class="relative">
          <div class="grid grid-cols-12 aspect-[12/4] relative border-l border-t border-gray-700">
            <div v-for="i in 48" :key="i" class="relative">
              <div class="absolute inset-0 border-r border-b border-gray-700"></div>
            </div>
          </div>
          <div class="absolute inset-0 flex flex-col justify-center items-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Portfolio Companies</h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto text-center px-4">
              Discover the market paradigm changing solutions we're helping to scale.
            </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Portfolio Grid -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-12 border-t border-l border-gray-700">
          <div v-for="(company, index) in portfolioCompanies" :key="company.id" class="col-span-4 relative">
            <div class="aspect-square w-full h-full">
              <PortfolioCompany
                :image="company.image"
                :website="company.website"
                :imageClass="company.imageClass"
                class="bg-black h-full"
              />
            </div>
            <div class="absolute inset-0 border-r border-b border-gray-700 pointer-events-none"></div>
          </div>
          <!-- Add empty cells to complete the grid if needed -->
          <div v-for="i in (12 - (portfolioCompanies.length % 12)) % 12" :key="`empty-${i}`" class="col-span-4 bg-black relative">
            <div class="absolute inset-0 border-r border-b border-gray-700"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MenuIcon } from 'lucide-vue-next'
import PortfolioCompany from '../components/PortfolioCompany.vue'
import Footer from '../components/Footer.vue'

// Import the logos as Vue components
import BiometasLogo from '../assets/Biometas_logo.png'
import XTransferLogo from '../assets/XTransfer_logo.png'
import BiobytezLogo from '../assets/bb_logo_white.svg?component'
import VivaLogo from '../assets/viva_logo_white.png'
import Navigation from '../components/Navigation.vue'

const portfolioCompanies = ref([
  {
    id: 1,
    image: 'https://companieslogo.com/img/orig/PLTR_BIG.D-38de5db6.png?t=1720244493',
    website: 'https://palantir.com',
    imageClass: 'max-w-[70%] max-h-[15%]'
  },
  {
    id: 2,
    image: 'https://cdn.prod.website-files.com/64e8d184394b2f0dc970cd1a/659eb9df84e5ef37ae9d5f7d_MongoDB_White.png',
    website: 'https://mongodb.com',
    imageClass: 'max-w-[70%] max-h-[70%]'
  },
  {
    id: 3,
    image: BiobytezLogo,
    website: 'https://biobytez.com',
    imageClass: 'max-w-[70%] h-[20%]'
  },
  {
    id: 4,
    image: XTransferLogo,
    website: 'https://xtransfer.com',
    imageClass: 'max-w-[70%] max-h-[70%]'
  },
  {
    id: 5,
    image: BiometasLogo,
    website: 'https://biometasgroup.com',
    imageClass: 'max-w-[70%] max-h-[70%]'
  },
  {
    id: 6,
    image: VivaLogo,
    website: 'https://www.vivabiotech.com/',
    imageClass: 'max-w-[50%] max-h-[50%]'
  }
])
</script>

<style scoped>
/* Add any component-specific styles here */
</style>