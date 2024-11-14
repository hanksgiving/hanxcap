<template>
    <div class="min-h-screen bg-black text-white font-sans">
        <!--Navigation-->
        <Navigation/>
        <header class="py-20 w-full">
            <div class="container mx-auto px-6">
                <div class="relative">
                    <div class="grid justify-center flex border border-gray-800 p-40">
                        <h1 id='contacthead' class="text-white text-5xl font-semibold">hanx init</h1>
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

<style>
#contacthead {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 0;
  animation: typing 5s steps(30) forwards,
             reset 15s infinite;
}

#contacthead::after {
  content: '_';
  position: absolute;
  right: -13px;
  color: #ffffff;
  animation: blink 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  from, to { opacity: 1 }
  50% { opacity: 0 }
}

@keyframes reset {
  0% { width: 0 }
  33.33% { width: 100% }
  90% { width: 100% }
  95%, 100% { width: 0 }
}
</style>