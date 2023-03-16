<script setup lang="ts">
import { useWeather } from "@/stores/weather"

const store = useWeather()

let { city_name, country_code, wind_spd, wind_cdir, temp, weather, pod, lat, lon } = store.data
</script>

<template>
  <div
    class="weather-card flex w-max items-center justify-center gap-10 rounded-2xl bg-gradient-to-r p-4 pl-10 text-white"
    :class="pod === 'd' ? 'from-purple-300 to-blue-300' : 'from-purple-700 to-indigo-800'"
  >
    <span class="temp text-7xl">{{ `${temp}C ` }}</span>
    <div class="card flex items-center justify-center gap-4 rounded-xl bg-white p-6 text-black">
      <img
        :src="`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`"
        :alt="weather.icon"
        class="h-[120px]"
      />
      <div class="text-box flex flex-col">
        <span>{{ `${city_name}, ${country_code} ( ${lat}"N, ${lon}"E )` }} </span>
        <span>{{ `${wind_cdir} ${wind_spd.toFixed(3)} m/s` }}</span>
        <span>{{ `${weather.description}` }}</span>
      </div>
    </div>
  </div>
</template>
