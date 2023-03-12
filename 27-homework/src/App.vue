<script setup lang="ts">
import { RouterView } from "vue-router"

import Header from "@/components/Header.vue"
</script>

<template>
  <Header />
  <div class="container m-auto p-20 text-xl">
    <RouterView />
  </div>
</template>
