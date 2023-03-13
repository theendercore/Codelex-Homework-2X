<script lang="ts">
import { useMovies } from "@/stores/movies"
import Loading from "@/components/Loading.vue"
import ErrorDisplay from "@/components/ErrorDisplay.vue"

export default {
  data() {
    return {
      store: useMovies()
    }
  },
  components: { Loading, ErrorDisplay }
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4">
    <div v-if="store.loading"><Loading /></div>
    <div v-else-if="store.error.is"><ErrorDisplay :message="store.error.msg" /></div>
    <template v-else>
      <div v-if="store.movies.length > 0" v-for="movie in store.movies" class="w-[200px] p-2">
        <img :src="movie.Poster" alt="poster" class="h-[250px] object-cover" />
        {{ movie.Title }}
      </div>
      <div v-else>No movies</div>
    </template>
  </div>
</template>
