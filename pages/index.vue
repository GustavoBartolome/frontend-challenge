<template>
  <div>
    <EventHero />
    <EventSchedule />
    <SpeakerList />
    <TicketPurchase />
    <EventLocation />
  </div>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'

const eventStore = useEventStore()
const { eventName } = storeToRefs(eventStore)

useHead({
  title: eventName
})
</script>