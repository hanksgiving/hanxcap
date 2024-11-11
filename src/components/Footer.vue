<template>
  <footer class="bg-black py-12 text-white">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 class="text-xl font-bold mb-4">HAN<a class="text-hanx-purple">X</a></h3>
          <p class="text-gray-300">Scaling the next generation in technology</p>
        </div>
        <div>
          <h4 class="text-sm font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors duration-300">Portfolio</a></li>
            <li><a href="#" class="hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#" class="hover:text-white transition-colors duration-300">Team</a></li>
            <li><a href="#" class="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold mb-4">Connect</h4>
          <ul class="text-sm space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors duration-300">Twitter</a></li>
            <li><a href="#" class="hover:text-white transition-colors duration-300">LinkedIn</a></li>
            <li><a href="#" class="hover:text-white transition-colors duration-300">Medium</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form @submit.prevent="subscribeNewsletter" class="flex">
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              class="bg-white text-sm text-black px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="submit"
              class="bg-gradient-to-r from-violet-500 to-pink-400 text-sm text-white px-4 py-2 rounded-r-full hover:bg-purple-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div class="mt-12 pt-8 border-t border-gray-700 text-sm text-center text-gray-300">
        <p>&copy; 2023 HANX Capital. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template> 
<script></script>