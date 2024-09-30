<template>
  <a :href="website" target="_blank" rel="noopener noreferrer" class="block h-full w-full hover:opacity-80 transition-opacity duration-300">
    <div class="flex items-center justify-center h-full p-8">
      <component 
        :is="typeof image === 'string' ? 'img' : image" 
        v-if="typeof image === 'object'" 
        :class="['w-full h-full object-contain', imageClass]" 
      />
      <img 
        v-else 
        :src="image" 
        :alt="'Company logo'" 
        :class="['w-full h-full object-contain', imageClass]" 
      />
    </div>
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  image: [String, Object],
  website: String,
  imageClass: String
})
</script>