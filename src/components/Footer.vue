<!-- src/components/Footer.vue -->
<template>
    <footer class="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <p>Copyright © {{ new Date().getFullYear() }} - All rights reserved</p>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/max.tingtong.9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

          <a href="https://github.com/Methanusornsu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.043-.016-2.049-3.338.724-4.042-1.613-4.042-1.613-.545-1.384-1.333-1.753-1.333-1.753-1.089-.745.083-.729.083-.729 1.204.084 1.838 1.235 1.838 1.235 1.07 1.834 2.809 1.304 3.495.997.107-.775.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.382 1.236-3.221-.124-.303-.535-1.521.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.403 1.019.004 2.046.137 3.005.403 2.291-1.553 3.297-1.23 3.297-1.23.654 1.655.243 2.873.119 3.176.77.839 1.235 1.911 1.235 3.221 0 4.611-2.805 5.625-5.475 5.921.43.371.813 1.104.813 2.224 0 1.606-.015 2.901-.015 3.293 0 .319.192.694.799.577C20.565 21.795 24 17.298 24 12c0-6.629-5.371-12-12-12z"/>
          </svg>
        </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>