<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-base-100">
    <Navbar />
  
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'

import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
 
    Footer
  }
})
</script>