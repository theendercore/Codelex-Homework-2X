<script lang="ts">
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <span class="flex flex-col">
    <span class="py-2 text-6xl font-bold"> Error </span>
    <span class="text-lg">{{ message }}</span>
  </span>
</template>
