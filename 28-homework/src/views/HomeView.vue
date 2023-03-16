<script setup lang="ts">
import WeatherItem from "@/components/WeatherItem.vue"
import { useWeather } from "@/stores/weather"

const store = useWeather()
</script>

<template>
  <main class="container m-auto flex flex-col items-center justify-center gap-4 p-20">
    <button @click="store.fetchWeather()" class="w-max rounded bg-gray-200 p-2">
      Weather info
    </button>

    <WeatherItem v-if="!store.error && JSON.stringify(store.data) !== '{}'"/>
    <pre v-else>{{ store.error }}</pre>
  </main>
</template>
