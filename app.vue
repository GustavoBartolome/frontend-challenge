<script setup lang="ts">
import { useEventStore } from '~/stores/event'

const eventStore = useEventStore()
const { eventName } = storeToRefs(eventStore)

useHead({
  titleTemplate: `%s - ${eventName.value}`,
  meta: [
    { name: 'description', content: 'Your amazing event description goes here' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
html, body {
  font-family: 'Nunito', sans-serif;
}
</style>