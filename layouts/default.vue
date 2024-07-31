<script lang="ts" setup>

</script>

<template>
<div class="min-h-screen flex flex-col">
    <EventHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <EventFooter />
  </div>
</template>

<style>

</style>