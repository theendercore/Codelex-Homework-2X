import type { WeatherResponse } from "@/types"
import axios from "axios"

export async function fetchData(params: URLSearchParams) {
  return await axios.get<WeatherResponse>(
    `https://api.weatherbit.io/v2.0/current?key=${
      import.meta.env.VITE_API_KEY
    }&${params.toString()}`
  )
}
