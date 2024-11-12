<template>
    <div class="min-h-screen bg-black text-white font-sans">
        <!--Navigation-->
        <Navigation/>
        <header class="py-20 w-full">
            <div class="container mx-auto px-6">
                <div class="relative">
                    <div class="grid justify-center flex border border-gray-800 p-40">
                        <h1 class="text-white text-5xl font-semibold">hanx init</h1>
                    </div>
                    <div class="justify-center flex p-40">
                        <h2 class="text-white text-5xl font-semibold">apply@hanxcapital.com</h2>
                    </div>
                </div>
            </div>
        </header>
        <!--Footer-->
        <Footer/>
    </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
</script>