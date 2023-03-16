<script setup lang="ts">
import { useWeather } from "@/stores/weather"

const store = useWeather()
</script>

<template>
  <div
    class="weather-card flex w-max items-center justify-center gap-10 rounded-2xl bg-gradient-to-r p-4 pl-10 text-white"
    :class="
      store.data.pod === 'd' ? 'from-purple-300 to-blue-300' : 'from-purple-500 to-indigo-800'
    "
  >
    <span class="temp w-[160px] text-7xl font-bold">{{
      store.data.temp + (store.searchParams.get("units") === "M" ? "C" : "F")
    }}</span>
    <div class="card flex items-center justify-center gap-4 rounded-xl bg-white p-6 text-slate-800 font-medium">
      <img
        :src="`https://www.weatherbit.io/static/img/icons/${store.data.weather.icon}.png`"
        :alt="store.data.weather.icon"
        class="h-[120px]"
      />
      <div class="text-box flex flex-col">
        <span
          >{{
            `${store.data.city_name}, ${store.data.country_code} ( ${store.data.lat}"N, ${store.data.lon}"E )`
          }}
        </span>
        <span>{{
          `${store.data.wind_cdir} ${store.data.wind_spd.toFixed(2)} ${
            store.searchParams.get("units") === "M" ? "m/s" : "mph"
          }`
        }}</span>
        <span>{{ `${store.data.weather.description}` }}</span>
      </div>
    </div>
  </div>
</template>
