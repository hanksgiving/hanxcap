<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!--Navigation-->
    <Navigation/>
    <!-- Portfolio Header -->
    <header class="py-20 w-full">
      <div class="container mx-auto px-6">
        <div class="relative">
          <div class="grid grid-cols-12 aspect-[12/4] relative border-l border-t border-gray-700 border-dashed">
            <div v-for="i in 48" :key="i" class="relative">
              <div class="absolute inset-0 border-r border-b border-gray-700 border-dashed"></div>
            </div>
          </div>
          <div class="absolute inset-0 flex flex-col justify-center items-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 mx-8 text-center">HANX enables ventures to redefine market paradigms.</h1>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto text-center px-4">
              HANX provides makers with the tools to <a class="text-white font-semibold">Build</a>, <a class="text-white font-semibold">Go2Market</a>, & <a class="text-white font-semibold">Scale</a> the solutions of tomorrow at lightspeed.
            </p>
          </div>
        </div>
      </div>
    </header>
    <!--grid secttion-->
    <div class="grid grid-cols-3 container mx-auto px-6">
        <div class="grid border-l border-t border-b border-gray-800 p-20">
            <Product class="w-8 h-8"/>
            <div class="row-start-2 text-gray-400 text-2xl text-pretty">
                <a class="text-white font-semibold">Product.</a>
                Deep thoughtful integration with your target customer always wins.
            </div>
        </div>
        <div class="grid border-l border-r border-t border-b border-gray-800 p-20">
            <Team class="w-8 h-8"/>
            <div class="row-start-2 text-gray-400 text-2xl text-pretty">
                <a class="text-white font-semibold">People.</a>
                Great unique teams that are optimized will always deliver results.
            </div>
        </div>
        <div class="grid border-r border-t border-b border-gray-800 p-20">
            <Star class="w-8 h-8"/>
            <div class="row-start-2 text-gray-400 text-2xl text-pretty">
                <a class="text-white font-semibold">Vision.</a>
                Enables us to leverage the technology of today to deliver the solutions of tomorrow.
            </div>
        </div>
    </div>
    <!--join us-->
    <div class="grid grid-cols-3 container mx-auto px-6">
        <div class="border border-gray-800 col-span-3 px-10 py-40 grid">
            <a class="text-white font-semibold text-4xl col-start-1">Join Us and shape the next generation in technology</a>
            <div class="gap-10 text-gray-900 bg-white rounded-full col-start-2 flex items-center">
                <List class="justify-self-start ml-4 w-5 h-5"/>
                <a class="justify-self-center">View Positions</a>
            </div>
        </div>
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue'
import Star from '../components/icons/Star.vue';
import Team from '../components/icons/Team.vue';
import Product from '../components/icons/Product.vue';
import List from '../components/icons/List.vue';
</script>