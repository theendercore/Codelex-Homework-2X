<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue"
import MovieList from "@/components/MovieList.vue";
</script>

<template>
  <main class="flex flex-col items-center">
    <h1>Title Here</h1>
    <SearchBar />
    <span>Sub text here</span>
    <MovieList/>
  </main>
</template>
