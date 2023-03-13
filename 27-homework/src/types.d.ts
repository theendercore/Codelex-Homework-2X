const ContentTypeList = ["all", "movie", "series", "episode"] as const

export type ContentType = (typeof ContentTypeList)[number]

export type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type SearchParamsType = {
  search: string
  year: number
  type: ContentType
  page: Range<1, 101>
}
