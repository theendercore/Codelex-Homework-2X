<script setup lang="ts">
import { fetchData } from "@/api/WeatherAppCalls"
import type { AxiosError, AxiosResponse } from "axios"
import { ref } from "vue"
let storedData = ref<WeatherResponse | null>(null)
let error = ref("")

async function click() {
  console.log("clicked")
  await fetchData("Riga")
    .then(setData)
    .catch((err) => (error.value = (err as AxiosError).message))
}

function setData({ data }: AxiosResponse<WeatherResponse, any>) {
  error.value = ""
  storedData.value = data
}
</script>

<template>
  <main class="container m-auto flex flex-col p-20">
    <p class="p-2 text-xl">Weather info</p>
    <button @click="click()" class="w-max rounded bg-gray-200 p-2">Weather info</button>

    <div class="w-[400px]">
      <pre v-if="!error" class="w-[400px]">{{ JSON.stringify(storedData) }}</pre>
      <pre v-else>{{ JSON.stringify(error) }}</pre>
    </div>
  </main>
</template>
