import type { Movie } from "../stores/movies"

export async function getMovies(name: string) {
  let data = await fetch(
    `http://www.omdbapi.com/?s=${name}&apikey=${import.meta.env.VITE_API_KEY}`
  ).then(async (res) => await res.json())
  return (await data) as {
    Search: Movie[]
    totalResults: string
    Response: string
  }
}
