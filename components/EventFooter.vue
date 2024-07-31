<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-lg font-semibold">{{ eventName }}</h3>
          <p>© {{ new Date().getFullYear() }} All rights reserved.</p>
        </div>
        <div>
          <ul class="flex space-x-4">
            <li v-for="link in footerLinks" :key="link.name">
              <a :href="link.href" class="hover:text-gray-300">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useEventStore } from '~/stores/event'

const eventStore = useEventStore()
const { eventName, footerLinks } = storeToRefs(eventStore)
</script>