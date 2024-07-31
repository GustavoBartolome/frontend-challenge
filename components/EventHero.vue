<template>
  <section class="relative bg-gray-900 text-white">
    <div class="absolute inset-0 overflow-hidden">
      <img src="/images/hero-background.jpg" alt="Event background" class="w-full h-full object-cover object-center">
      <div class="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{{ eventName }}</h1>
      <p class="mt-6 text-xl text-gray-300 max-w-3xl">
        Join us for an unforgettable experience at {{ eventName }}. Network with industry leaders, learn from expert speakers, and stay ahead in the world of technology.
      </p>
      <div class="mt-10">
        <UButton
          color="white"
          variant="solid"
          label="Get Your Tickets Now"
          @click="scrollToTickets"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'

const eventStore = useEventStore()
const { eventName } = storeToRefs(eventStore)

const scrollToTickets = () => {
  const ticketSection = document.querySelector('#tickets')
  if (ticketSection) {
    ticketSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>