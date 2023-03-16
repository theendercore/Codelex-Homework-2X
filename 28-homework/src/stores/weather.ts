import { defineStore } from "pinia"
import type { AxiosError } from "axios"

import { fetchData } from "@/api/WeatherAppCalls"
import type { WeatherData } from "@/types"

export const useWeather = defineStore({
  id: "weather",
  state: () => ({
    data: {} as WeatherData,
    searchParams: new URLSearchParams(`city=Riga&units=M`),
    error: "",
    loading: false
  }),
  actions: {
    async fetchWeather() {
      this.loading = true
      await fetchData(this.searchParams)
        .then(({ data }) => {
          this.error = ""
          this.data = data.data[0]
        })
        .catch((err) => (this.error = (err as AxiosError).message))
        .then(() => {
          this.loading = false
        })
    }
  }
})
