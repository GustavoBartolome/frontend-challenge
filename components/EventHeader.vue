<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">{{ eventName }}</NuxtLink>
      <ul class="flex space-x-4">
        <li v-for="item in menuItems" :key="item.name">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'

const eventStore = useEventStore()
const { eventName, menuItems } = storeToRefs(eventStore)
</script>