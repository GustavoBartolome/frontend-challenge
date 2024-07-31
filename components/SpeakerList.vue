<template>
  <section id="speakers" class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Our Speakers</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="speaker in speakers" :key="speaker.name" class="bg-gray-100 rounded-lg overflow-hidden shadow">
          <img :src="speaker.image" :alt="speaker.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="font-bold text-xl mb-2">{{ speaker.name }}</h3>
            <p class="text-gray-600">{{ speaker.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'

const eventStore = useEventStore()
const { speakers } = storeToRefs(eventStore)
</script>