<template>
  <section id="tickets" class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Get Your Tickets</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="ticket in tickets" :key="ticket.type" class="bg-white rounded-lg shadow p-6">
          <h3 class="text-xl font-bold mb-4">{{ ticket.type }}</h3>
          <p class="text-3xl font-extrabold mb-4">${{ ticket.price }}</p>
          <UButton
            v-if="ticket.available"
            color="primary"
            :label="`Buy ${ticket.type} Ticket`"
            class="w-full"
            @click="purchaseTicket(ticket)"
          />
          <p v-else class="text-red-500 font-semibold">Sold Out</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'
import type { Ticket } from '~/stores/event'

const eventStore = useEventStore()
const { tickets } = storeToRefs(eventStore)

const purchaseTicket = (ticket: Ticket) => {
  // Implement ticket purchase logic here
  console.log(`Purchasing ${ticket.type} ticket`)
}
</script>