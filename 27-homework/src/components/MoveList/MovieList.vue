<script lang="ts">
import { useMovies } from "@/stores/movies"
import Loading from "@/components/Loading.vue"
import ErrorDisplay from "@/components/ErrorDisplay.vue"
import Movie from "./Movie.vue"

export default {
  data() {
    return {
      store: useMovies()
    }
  },
  components: { Loading, ErrorDisplay, Movie }
}
</script>

<template>
  <div class="flex flex-col">
    <span>
      <button @click="store.fetchPrevious()">{{ "<" }}</button>
      <span> Page - {{ store.currentPage }}  </span>
      <button @click="store.fetchNext()">{{ ">" }}</button>
    </span>

    {{ store.pages }}
  </div>
  <div class="flex flex-wrap justify-center gap-4">
    <div v-if="store.loading"><Loading /></div>

    <div v-else-if="store.error.is">
      <ErrorDisplay :message="store.error.msg" />
    </div>

    <template v-else>
      <Movie v-for="movie in store.movies" :movie="movie" />
    </template>
  </div>
</template>
