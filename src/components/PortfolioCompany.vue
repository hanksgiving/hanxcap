<template>
  <a :href="website" target="_blank" rel="noopener noreferrer" class="block h-full w-full hover:opacity-80 transition-opacity duration-300">
    <div class="flex items-center justify-center h-full p-8">
      <!-- For SVG components -->
      <component 
        v-if="isComponent"
        :is="currentImage" 
        :class="['w-full h-full object-contain', currentImageClass]" 
      />
      <!-- For regular images -->
      <img 
        v-else 
        :src="currentImage" 
        :alt="'Company logo'" 
        :class="['w-full h-full object-contain', currentImageClass]" 
      />
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: [String, Object],
    required: true
  },
  colorImage: {
    type: [String, Object],
    required: true
  },
  website: {
    type: String,
    required: true
  },
  imageClass: {
    type: String,
    default: ''
  },
  colorImageClass: {
    type: String,
    default: ''
  },
  isHovered: {
    type: Boolean,
    default: false
  }
})

const isComponent = computed(() => typeof props.image === 'object' || typeof props.colorImage === 'object')
const currentImage = computed(() => props.isHovered ? props.colorImage : props.image)
const currentImageClass = computed(() => props.isHovered ? props.colorImageClass : props.imageClass)
</script>