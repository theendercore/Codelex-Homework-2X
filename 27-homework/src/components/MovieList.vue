<script setup lang="ts">
import { useMovies } from "@/stores/movies"
let store = useMovies()
</script>

<template>
  <div class="flex flex-warp gap-4">
    <div v-if="store.movies.length > 0" v-for="movie in store.movies" class="p-2">
        <img :src="movie.Poster" alt="poster" class="w-[200px]">
      {{ movie.Title }}
    </div>

    <div v-else> No movies</div>
  </div>
</template>
