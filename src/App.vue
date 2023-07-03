<script setup>
// Imports
import { RouterView } from 'vue-router'

// Components
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div id="main" class="container">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
