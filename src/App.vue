<script setup>
import { RouterView } from 'vue-router'
</script>

<template>

  <div id="main" class="container px-4 py-5">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
#main {
  margin-top: 20px;
}
</style>
