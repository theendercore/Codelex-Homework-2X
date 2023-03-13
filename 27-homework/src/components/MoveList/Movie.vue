<script lang="ts">
import type { Movie } from "@/types"
import type { PropType } from "vue"

export default {
  props: {
    movie: {
      type: Object as () => Movie,
      required: true
    }
  }
}
</script>

<template>
  <div
    class="flex w-[265px] flex-col justify-center overflow-hidden rounded rounded-t-xl bg-neutral-800"
  >
    <img
      :src="movie.Poster"
      alt="Movie Poster"
      class="h-[300px] w-full bg-[url(../public/no-img.png)] bg-contain bg-no-repeat object-cover"
    />
    <div class="text-box flex flex-col items-center p-5 pt-2">
      <span class="rounded bg-slate-600 p-1 px-2 text-lg text-gray-300">
        {{ movie.Title }}
      </span>
      <span class="self-end p-2 font-mono text-3xl font-bold">
        {{ movie.Year }}
      </span>
    </div>
    
  </div>
</template>
