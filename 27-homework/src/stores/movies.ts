import type { Movie, MoviesRequest, MoviesRequestFail } from "@/types"
import axios from "axios"
import { defineStore } from "pinia"

export const useMovies = defineStore({
  id: "movies",
  state: () => ({
    movies: [] as Movie[],
    error: { is: false, msg: "" },
    loading: false
  }),
  actions: {
    async fetchMovies(name: string) {
      this.loading = true
      let { data } = await axios.get<MoviesRequest | MoviesRequestFail>(
        `http://www.omdbapi.com/?s=${name.trim()}&type=movie&apikey=${import.meta.env.VITE_API_KEY}`
      )

      let val = { error: { is: false, msg: "" }, movies: [] as Movie[] }

      if (data.Response === "True") val.movies = (data as MoviesRequest).Search
      else val.error = { is: true, msg: (data as MoviesRequestFail).Error }

      this.error = val.error
      this.movies = val.movies
      this.loading = false
    }
  }
})
