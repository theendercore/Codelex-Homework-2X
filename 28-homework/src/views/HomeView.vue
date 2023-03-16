<script setup lang="ts">
import WeatherItem from "@/components/WeatherItem.vue"
import { useWeather } from "@/stores/weather"
import SearchBar from "@/components/SearchBar.vue"

const store = useWeather()
</script>

<template>
  <main class="container m-auto flex flex-col items-center justify-center gap-4 p-20">
    <div class="btn-menu flex gap-10 rounded-full bg-slate-100 py-2 px-8">
      <button @click="store.fetchWeather()" class="w-max rounded-xl bg-gray-200 p-2">
        Populate Info
      </button>

      <button
        @click="store.toggleUnits()"
        class="rounded-full bg-gray-200 p-[.85rem] py-1 font-mono text-xl font-bold hover:bg-gray-300"
      >
        {{ store.searchParams.get("units") === "M" ? "C" : "F" }}
      </button>

      <SearchBar />
    </div>

    <WeatherItem v-if="!store.error && JSON.stringify(store.data) !== '{}'" />
    <pre v-else>{{ store.error }}</pre>
  </main>
</template>
