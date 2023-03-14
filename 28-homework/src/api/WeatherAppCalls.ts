import axios from "axios"

export async function fetchData(city: string, units: string = "M") {
  return await axios.get<WeatherResponse>(
    `https://api.weatherbit.io/v2.0/current?key=${
      import.meta.env.VITE_API_KEY 
    }&city=${city}&units=${units}`
  )
}
