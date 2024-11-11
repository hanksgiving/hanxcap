<template>
    <!-- Navigation -->
    <nav class="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
      <router-link to="/" class="text-2xl font-bold">HAN<a class="text-hanx-purple">X</a></router-link>
      <div class="hidden md:flex space-x-8">
        <router-link to="/portfolio" class="hover:text-gray-300 transition-colors duration-300">Portfolio</router-link>
        <router-link to="/about" class="hover:text-gray-300 transition-colors duration-300">About</router-link>
        <a href="#" class="hover:text-gray-300 transition-colors duration-300">Team</a>
        <a href="#" class="hover:text-gray-300 transition-colors duration-300">Contact</a>
      </div>
      <button class="md:hidden">
        <MenuIcon class="h-6 w-6" />
      </button>
    </nav>
</template>