<template>
  <section id="location" class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Event Location</h2>
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h3 class="text-xl font-bold mb-4">{{ eventLocation }}</h3>
          <p class="text-gray-600 mb-4">123 Tech Street, San Francisco, CA 94105</p>
          <p class="text-gray-600">Join us at the heart of the tech world for an unforgettable experience!</p>
        </div>
        <div class="md:w-1/2">
          <!-- Placeholder for map -->
          <div class="bg-gray-300 w-full h-64 rounded-lg">
            <!-- You can replace this with an actual map component -->
            <p class="text-center py-24">Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'

const eventStore = useEventStore()
const { eventLocation } = storeToRefs(eventStore)
</script>