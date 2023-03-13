import "@total-typescript/ts-reset"

export type Movie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export type MoviesRequest = {
  Search: Movie[]
  totalResults: string
  Response: string
}

export type MoviesRequestFail = {
  Response: string
  Error: string
}
