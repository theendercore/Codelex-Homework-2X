<script lang="ts">
import SearchBar from "@/components/SearchBar.vue"
import MovieList from "@/components/MoveList/MovieList.vue"

export default {
  components: { SearchBar, MovieList }
}
</script>

<template>
  <main class="flex flex-col items-center">
    <h1
      class="bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-8xl font-bold text-transparent"
    >
      Movie Viewer
    </h1>
    <SearchBar class="mt-4 mb-10" />
    <MovieList />
  </main>
</template>
