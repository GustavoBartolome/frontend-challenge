<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">{{ eventName }}</NuxtLink>
        <div>
          <button 
            @click="toggleMenu" 
            class="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

      <ul 
        :class="[
          'lg:flex lg:space-x-4 lg:items-center',
          isMenuOpen ? 'block' : 'hidden'
        ]"
        class="mt-4 lg:mt-0"
      >
        <li v-for="item in menuItems" :key="item.name" class="py-2 lg:py-0">
          <a 
            :href="item.href" 
            @click.prevent="scrollToSection(item.href)"
            class="block lg:inline-block hover:text-gray-600 transition-colors"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'
import { ref } from 'vue'

const eventStore = useEventStore()
const { eventName, menuItems } = storeToRefs(eventStore)

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  isMenuOpen.value = false // Close menu after clicking
}
</script>