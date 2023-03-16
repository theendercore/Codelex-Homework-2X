<script setup lang="ts">
import { useWeather } from "@/stores/weather"
import { ref } from "vue"
import SearchIcon from "./icons/SearchIcon.vue"

let city = ref<string>("")
let store = useWeather()

function submit(e: Event) {
  e.preventDefault()
  store.searchParams.set("city", city.value)
  city.value = ""
  store.fetchWeather()
}
</script>

<template>
  <form class="flex items-center justify-center gap-3" @submit="submit">
    <input
      type="text"
      name="city"
      id="city"
      class="rounded p-1"
      placeholder="Riga..."
      v-model="city"
    />
    <button type="submit"><SearchIcon class="w-[20px]" /></button>
  </form>
</template>
