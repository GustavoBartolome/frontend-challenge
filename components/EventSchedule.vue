<template>
  <section id="schedule" class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Event Schedule</h2>
      <div v-for="(day, index) in schedule" :key="index" class="mb-8">
        <h3 class="text-xl font-bold text-gray-800 mb-4">{{ day.date }}</h3>
        <ul class="space-y-4">
          <li v-for="session in day.sessions" :key="session.time" class="bg-white rounded-lg shadow p-4">
            <div class="flex justify-between items-center">
              <div>
                <p class="font-semibold text-gray-900">{{ session.title }}</p>
                <p class="text-gray-600">{{ session.speaker }}</p>
              </div>
              <p class="text-gray-500">{{ session.time }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'

const eventStore = useEventStore()
const { schedule } = storeToRefs(eventStore)
</script>