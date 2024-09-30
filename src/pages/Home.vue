<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Navigation -->
    <nav class="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
      <router-link to="/" class="text-2xl font-bold">HAN<a class="text-hanx-purple">X</a></router-link>
      <div class="hidden md:flex space-x-8">
        <router-link to="/portfolio" class="hover:text-gray-300 transition-colors duration-300">Portfolio</router-link>
        <a href="#" class="hover:text-gray-300 transition-colors duration-300">About</a>
        <a href="#" class="hover:text-gray-300 transition-colors duration-300">Team</a>
        <a href="#" class="hover:text-gray-300 transition-colors duration-300">Contact</a>
      </div>
      <button class="md:hidden">
        <MenuIcon class="h-6 w-6" />
      </button>
    </nav>
    
    <!-- Hero Section with 3D Background -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <div id="hero-background" class="absolute inset-0"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Empowering the Next Generation of Innovators
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          HANX Capital partners with visionary entrepreneurs changing market paradigms.
        </p>
          <a href="#" class="animate-rotate in-line-block [animation-duration:_6s] bg-gradient-to-r 
          from-violet-500 to-rose-400 rounded-full px-1 py-5 text-black text-lg font-semibold hover:bg-white transition-colors duration-300">
            <span class="bg-white rounded-full px-8 py-4"> Get in Touch</span>
          </a>
      </div>
    </header>
    
    <!-- Stats Section -->
    <section class="bg-black py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div class="stat-item">
            <h3 class="text-5xl font-bold mb-2">$30M+</h3>
            <p class="text-white">Assets Under Management</p>
          </div>
          <div class="stat-item">
            <h3 class="text-5xl font-bold mb-2">10+</h3>
            <p class="text-white">Portfolio Companies</p>
          </div>
          <div class="stat-item">
            <h3 class="text-5xl font-bold mb-2">5</h3>
            <p class="text-white">Unicorns Created</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- What are we section -->
    <section class="bg-black py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-gray-700 p-[1px] relative overflow-hidden">
          <div class="spotlight absolute w-[300px] h-[300px] rounded-full pointer-events-none" ref="spotlight"></div>
          <div class="flex flex-col justify-start bg-black px-6 relative z-10">
            <h2 class="text-sm md:text-base text-gray-400 pt-6 pb-3 ">Who are we?</h2>
            <p class="text-2xl max-w-2xl text-gray-400 text-pretty">
              <a class="text-white">We're just a bunch of tech nerds</a> who want to help other tech nerds build cool stuff.
            </p>
          </div>
          <div class="flex flex-col justify-start bg-black px-6 relative z-10">
            <h2 class="text-sm md:text-base pt-6 pb-3 text-gray-400">Why are we doing this?</h2>
            <p class="text-2xl mb-2 max-w-2xl mx-auto text-gray-400 text-pretty">
              Sometimes when you've built something awesome, <a class="text-white">its hard to get across the potential of what you've built to normal investors.</a>
            </p>
            <p class="text-2xl mb-2 max-w-2xl mx-auto text-gray-400 text-pretty">Sometimes it maybe a bit difficult to figure out how to make this awesome 
              thing you've built into <a class="text-white"> product or a sustainable business.</a> </p>
            <p class=" text-2xl mb-6 max-w-2xl mx-auto text-gray-400">We've been there and done that, and we want to help other builders not make the same mistakes we did.</p>
          </div>
          <div class="flex flex-col justify-start grid bg-black px-6 relative z-10">
            <h2 class="text-sm md:text-base text-gray-400 pt-6 pb-3">What projects do we like?</h2>
            <p class="text-2xl mb-2 max-w-2xl mx-auto text-gray-400 text-pretty">
              We're looking for tools to push technology forward. Innovative products that impact the quality of life.
            </p>
            <p class="text-2xl mb-2 max-w-2xl mx-auto text-white">Products that scale, secure, and have real-world applications in AI, Data, and shipping software.</p> 
            <p class="text-2xl mb-6 max-w-2xl mx-auto text-white">Innovative technology platforms in biotech that can help to eliminate widepsread and chronic diseases.</p>
          </div>
          <div class="flex flex-col justify-start grid bg-gray-900 px-6 relative z-10">
            <h2 class="text-xl md:text-2xl font-bold pt-6 pb-3">Our Mission</h2>
            <p class="text-2xl mb-12 max-w-2xl justify-self-center text-gray-400 text-pretty">
              Invest in <a class='text-white'>Great Products</a>, invest in <a class='text-white'>Great People</a>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Companies Section -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Portfolio Companies</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PortfolioCompany
            v-for="company in featuredCompanies"
            :key="company.id"
            :name="company.name"
            :description="company.description"
            :image="company.image"
            :website="company.website"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-black to-gray-500 py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Scale Your Startup?</h2>
        <p class="text-xl mb-12 max-w-2xl mx-auto text-white">
          Join forces with HANX and access the capital, network, and expertise you need to reach new heights.
        </p>
        <a href="#" class="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
          Apply for Funding
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-12 text-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 class="text-xl font-bold mb-4">HANX</h3>
            <p class="text-gray-300">Empowering innovation, one investment at a time.</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#" class="hover:text-white transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" class="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors duration-300">Team</a></li>
              <li><a href="#" class="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect</h4>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#" class="hover:text-white transition-colors duration-300">Twitter</a></li>
              <li><a href="#" class="hover:text-white transition-colors duration-300">LinkedIn</a></li>
              <li><a href="#" class="hover:text-white transition-colors duration-300">Medium</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <form @submit.prevent="subscribeNewsletter" class="flex">
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="bg-white text-black px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                class="bg-purple-600 text-white px-4 py-2 rounded-r-full hover:bg-purple-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2023 HANX Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { MenuIcon } from 'lucide-vue-next'
import * as THREE from 'three'
import PortfolioCompany from '../components/PortfolioCompany.vue'

const email = ref('')

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic here
  console.log('Subscribed:', email.value)
  email.value = ''
}

// 3D Animation Setup
let scene, camera, renderer, particles, animationId

const initThree = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ alpha: true })
  
  const container = document.getElementById('hero-background')
  renderer.setSize(container.clientWidth, container.clientHeight)
  container.appendChild(renderer.domElement)
  
  // Create particles
  const geometry = new THREE.BufferGeometry()
  const vertices = []
  const particleCount = 200
  
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * 2000 - 1000
    const y = Math.random() * 2000 - 1000
    const z = Math.random() * 2000 - 1000
    vertices.push(x, y, z)
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
  
  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 3,
    transparent: true,
    opacity: 0.8
  })
  
  particles = new THREE.Points(geometry, material)
  scene.add(particles)
  
  camera.position.z = 1000
  
  // Add subtle ambient lighting
  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)
  
  // Add a directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)
}

const animateThree = () => {
  animationId = requestAnimationFrame(animateThree)
  
  particles.rotation.x += 0.0005
  particles.rotation.y += 0.0005
  
  renderer.render(scene, camera)
}

const handleResize = () => {
  const container = document.getElementById('hero-background')
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.clientWidth, container.clientHeight)
}

const spotlight = ref(null)

const updateSpotlight = (e) => {
  if (spotlight.value) {
    const rect = spotlight.value.parentElement.getBoundingClientRect()
    const x = e.clientX - rect.left - 150
    const y = e.clientY - rect.top - 150
    spotlight.value.style.transform = `translate(${x}px, ${y}px)`
  }
}

onMounted(() => {
  initThree()
  animateThree()
  window.addEventListener('resize', handleResize)

  const spotlightContainer = spotlight.value?.parentElement
  if (spotlightContainer) {
    spotlightContainer.addEventListener('mousemove', updateSpotlight)
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
  // Clean up Three.js resources
  if (renderer) {
    renderer.dispose()
  }
  if (scene) {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.geometry.dispose()
        object.material.dispose()
      }
    })
  }

  const spotlightContainer = spotlight.value?.parentElement
  if (spotlightContainer) {
    spotlightContainer.removeEventListener('mousemove', updateSpotlight)
  }
})

const featuredCompanies = ref([
  {
    id: 1,
    name: 'TechInnovate',
    description: 'AI-powered software solutions for enterprise businesses.',
    image: 'https://picsum.photos/seed/tech1/800/600',
    website: 'https://techinnovate.example.com'
  },
  {
    id: 2,
    name: 'GreenEnergy',
    description: 'Sustainable energy solutions for a cleaner future.',
    image: 'https://picsum.photos/seed/green2/800/600',
    website: 'https://greenenergy.example.com'
  },
  {
    id: 3,
    name: 'HealthTech',
    description: 'Revolutionary healthcare technology improving patient outcomes.',
    image: 'https://picsum.photos/seed/health3/800/600',
    website: 'https://healthtech.example.com'
  },
  {
    id: 4,
    name: 'FinTech Solutions',
    description: 'Innovative financial technology for the modern world.',
    image: 'https://picsum.photos/seed/fintech4/800/600',
    website: 'https://fintechsolutions.example.com'
  }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.stat-item {
  @apply bg-gray-800 rounded-lg p-8 transition-transform duration-300 ease-in-out bg-black;
}

.stat-item:hover {
  transform: translateY(-5px);
}

#hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.spotlight {
  background: linear-gradient(to right, rgb(169, 85, 247), rgb(226, 149, 162));
  opacity: 1;
  z-index: 1;
}
</style>