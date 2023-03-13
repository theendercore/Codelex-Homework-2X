<script setup lang="ts">
import IconSearch from "./icons/IconSearch.vue"
import type { SearchParamsType } from "@/types"
import { ref } from "vue"
import { getMovies } from '../api/rest';
import { useMovies } from "@/stores/movies";

const store = useMovies()
let params = ref<SearchParamsType>({
  search: "",
  year: 2023,
  type: "all",
  page: 1
})

async function onsubmit(e: Event) {
  e.preventDefault()
  console.log(params)
  let x = await getMovies(params.value.search)
  store.setMovies(x.Search)
  console.log(x)
}
</script>

<template>
  <form
    class="bar flex items-center justify-center gap-4 rounded bg-slate-900 p-4"
    @submit="onsubmit($event)"
  >
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Name..."
      class="rounded bg-gray-700 p-2"
      v-model="params.search"
      required
    />
    <input
      type="number"
      name="year"
      id="year"
      placeholder="Year..."
      class="rounded bg-gray-700 p-2"
      v-model="params.year"
    />
    <!-- <select name="type" id="type" class="rounded bg-gray-700 p-2">
      <option value="movie">movie</option>
    </select> -->

    <button class="rounded bg-red-400 p-2"><IconSearch class="w-5" /></button>
  </form>
  <div>{{ JSON.stringify(params) }}</div>
</template>
