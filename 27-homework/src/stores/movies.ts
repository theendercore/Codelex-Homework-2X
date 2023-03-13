import type { Movie, MoviesRequest, MoviesRequestFail } from "@/types"
import axios from "axios"
import { defineStore } from "pinia"

export const useMovies = defineStore({
  id: "movies",
  state: () => ({
    movies: [] as Movie[],
    pages: 1,
    currentPage: 1,
    search: "",
    error: { is: false, msg: "" },
    loading: false
  }),
  actions: {
    async fetchMovies(name: string, page: number = 1) {
      this.loading = true
      this.search = name
      let { data } = await axios.get<MoviesRequest | MoviesRequestFail>(
        `http://www.omdbapi.com/?s=${name.trim()}&page=${page}&type=movie&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      )

      let val = { error: { is: false, msg: "" }, movies: [] as Movie[], pages: 1 }

      if (data.Response === "True") {
        val.movies = (data as MoviesRequest).Search
        val.pages = Math.floor((data as MoviesRequest).totalResults / 10)
      } else val.error = { is: true, msg: (data as MoviesRequestFail).Error }

      this.error = val.error
      this.movies = val.movies
      this.pages = val.pages
      this.loading = false
    },

    fetchNew(name: string) {
      this.currentPage = 1
      this.fetchMovies(name)
    },

    fetchNext() {
      if (this.currentPage < this.pages) {
        this.currentPage++
        this.fetchMovies(this.search, this.currentPage)
      }
    },

    fetchPrevious() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.fetchMovies(this.search, this.currentPage)
      }
    }
  }
})
