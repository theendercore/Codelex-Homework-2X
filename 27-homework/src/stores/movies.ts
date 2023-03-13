import { defineStore } from "pinia"

export type Movie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovies = defineStore({
  id: "movies",
  state: () => ({
    movies: [] as Movie[]
  }),
  getters: {
    getSearch: (state) => state.movies
  },
  actions: {
    addMovie(movie: Movie) {
      this.movies.push(movie)
    },
    setMovies(movies: Movie[]) {
      this.movies = movies
    }
  }
})
