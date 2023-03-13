<script lang="ts">
import type { Movie } from "@/types"
import ArrowIcon from "@/components/icons/ArrowIcon.vue"

export default {
  props: {
    movie: {
      type: Object as () => Movie,
      required: true
    }
  },
  data() {
    return {
      selected: false
    }
  },
  components: { ArrowIcon }
}
</script>

<template>
  <button
    class="relative flex w-[265px] flex-col justify-center overflow-hidden rounded-xl bg-neutral-800 drop-shadow-xl hover:z-10 hover:scale-110"
  >
    <img
      :src="movie.Poster"
      alt="Movie Poster"
      class="h-[300px] w-full bg-[url/no-img.png)] bg-contain bg-no-repeat object-cover"
    />
    <div class="text-box flex flex-col items-center p-5 pt-2">
      <span class="rounded bg-slate-600 p-1 px-2 text-lg text-gray-300">
        {{ movie.Title }}
      </span>
      <span class="self-end p-2 font-mono text-3xl font-bold">
        {{ movie.Year }}
      </span>
    </div>
    <ArrowIcon class="absolute bottom-4 left-[125px] w-[20px] rotate-180 fill-slate-100" />
  </button>
</template>
