import { defineStore } from "pinia"
import type { SearchParamsType } from "@/types"



export const useSearchParams = defineStore({
  id: "searchParams",
  state: () => ({
    searchParams: { search: "", year: 0, type: "all", page: 1 } as SearchParamsType
  }),
  getters: {
    getSearch: (state) => state.searchParams.search,
    getYear: (state) => state.searchParams.year,
    getType: (state) => state.searchParams.type,
    getPage: (state) => state.searchParams.page
  },
  actions: {
    setParams(value: SearchParamsType) {
      this.searchParams = value
    }
  }
})
