import { defineStore } from "pinia"
import type { ContentType, Range } from "@/types"

type SearchParams = {
  search: string
  year: number
  type: ContentType
  page: Range<1, 101>
}

export const useSearchParams = defineStore({
  id: "searchParams",
  state: () => ({
    searchParams: { search: "", year: 0, type: "all", page: 1 } as SearchParams
  }),
  getters: {
    getSearch: (state) => state.searchParams.search,
    getYear: (state) => state.searchParams.year,
    getType: (state) => state.searchParams.type,
    getPage: (state) => state.searchParams.page
  },
  actions: {
    setSearch(value: string) {
      this.searchParams.search = value
    },
    setYear(value: number) {
      this.searchParams.year = value
    },
    setType(value: ContentType) {
      this.searchParams.type = value
    },
    setPage(value: Range<1, 101>) {
      this.searchParams.page = value
    }
  }
})
