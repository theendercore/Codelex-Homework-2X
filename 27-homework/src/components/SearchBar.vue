<script setup lang="ts">
import IconSearch from "./icons/IconSearch.vue"
</script>

<template>
  <form class="bar flex items-center justify-center gap-4 rounded bg-gray-700 p-4">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Name..."
      class="rounded p-2"
      required
    />
    <input type="number" name="year" id="year" placeholder="Year..." class="rounded p-2" />
    <select name="type" id="type" class="rounded p-2">
      <option value="movie">movie</option>
    </select>

    <button class="rounded bg-red-600 p-2"><IconSearch class="w-5" /></button>
  </form>
</template>
