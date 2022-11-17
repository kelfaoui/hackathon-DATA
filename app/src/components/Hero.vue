<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 bg-white">
        <Popover>
          <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-center" aria-label="Global">
              <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                <div class="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span class="sr-only">Your Company</span>
                    <img alt="Your Company" class="h-8 w-auto sm:h-10" src="https://cdn.discordapp.com/attachments/1028966517481676882/1030060539621163078/unknown.png" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                      <span class="sr-only">Open main menu</span>
                      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                <a href="/about-us" class="font-medium text-emerald-600 hover:text-emerald-500">Qui sommes-nous ?</a>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img class="h-8 w-auto" src="https://cdn.discordapp.com/attachments/1028966517481676882/1030060539621163078/unknown.png" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="space-y-1 px-2 pt-2 pb-3">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
                </div>
                <a href="/about-us" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-emerald-600 hover:bg-gray-100">Qui sommes-nous ?</a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <section class="bg-white">
          <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-start">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-bold text-emerald-800 md:text-4xl mt-8 tracking-wide text-emerald-800 lg:text-5xl">
                  Synopsis
                </h1>

                <div class="mt-8 space-y-5">
                  <p class="flex items-center text-gray-700">
                    Dans un monde ou la faune et la flore sont paisiblement installées, ou les biches fraichement réveillées gambade dans la forêt Amazonienne du Brésil, ou les autochtones vivent en symbiose avec la nature, utilise les arbres comme habitat tout comme leur voisin les singes. Mais Cela ne dure pas longtemps, Les années passent et ce temps paisible n’est plus qu’un lointain souvenir Juan le b arriva.
                  </p>

                  <p class="flex items-center text-gray-700">
                    Il a abattu d’innombrables arbres des forêts Brésilienne et d’Indonésie afin d’avoir le maximum de soja et d’huile de palme dans le but de manger, manger et encore manger. C’est sans compter sur l’intervention de Gabriello the Forest. Il fait partie d’une intervention très spéciale qui consiste à arrêter la déforestation. Un combat acharné se déroulera. Qui de Juan le b ou de Gabriello the Forest gagnera ?  Quelle sera l’avenir de la faune et la flore ?                  </p>
                </div>
              </div>

              <!-- <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm focus-within:border-emerald-400 focus-within:ring focus-within:ring-emerald-300 focus-within:ring-opacity-40">
                <form class="flex flex-col lg:flex-row">
                  <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0" />

                  <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-emerald-500 rounded-md hover:bg-emerald-400 focus:outline-none focus:bg-emerald-400">
                    Join Us
                  </button>
                </form>
              </div> -->
            </div>

            <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
              <img class="object-cover w-full h-full mx-auto rounded-2xl lg:max-w-2xl" src="https://i.pinimg.com/originals/7a/42/ae/7a42ae4f11e874d7fe3a147d126497af.jpg" alt="glasses photo">
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Data', href: '/data' },
]
</script>