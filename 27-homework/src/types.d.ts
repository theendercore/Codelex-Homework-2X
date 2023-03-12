// type MovieResponse = {
//   Title: string
//   Year: string
//   Rated: string
//   Released: string
//   Runtime: string
//   Genre: string
//   Director: string
//   Writer: string
//   Actors: string
//   Plot: string
//   Language: string
//   Country: string
//   Awards: string
//   Poster: string
//   Ratings: Rating[]
//   Metascore: string
//   imdbRating: string
//   imdbVotes: string
//   imdbID: string
//   Type: string
//   DVD: string
//   BoxOffice: string
//   Production: string
//   Website: string
//   Response: string
// }

// type Rating = {
//   Source: string
//   Value: string
// }

const ContentTypeList = ["all", "movie", "series", "episode"] as const

export type ContentType = (typeof ContentTypeList)[number]

export type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

