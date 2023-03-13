<script lang="ts">
import IconSearch from "./icons/SearchIcon.vue"
import { useMovies } from "@/stores/movies"

export default {
  data() {
    return {
      search: "",

      store: useMovies()
    }
  },
  created() {},
  methods: {
    onsubmit(e: Event) {
      e.preventDefault()
      this.store.fetchMovies(this.search)
    }
  },
  components: { IconSearch }
}
</script>

<template>
  <form
    class="bar flex justify-center gap-4 rounded bg-slate-900 p-4"
    @submit="onsubmit($event)"
  >
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Name..."
      class="rounded bg-gray-700 p-2"
      v-model="search"
      minlength="3"
      required
    />

    <button class="rounded bg-red-400 p-2"><IconSearch class="w-5" /></button>
  </form>
</template>
