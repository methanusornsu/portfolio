<template>
    <div class="E_PriceSync p-8">
      <h1 class="text-4xl font-bold text-center mb-4">UX/UI</h1>
      <p class="text-center mb-8">ผลงานการออกแบบของจากมหาวิทยาลัย</p>
      <p class="text-center mb-8">โดยใช้ Figma, Photoshop, Canva</p>
      
      <!-- การแสดงรูปภาพของผลงาน -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img src="/src/assets/img/design01.png"  class="w-full h-300 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </figure>
         
        </div>
        <!-- เพิ่มการ์ดใหม่สำหรับแต่ละผลงาน -->
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img src="/src/assets/img/design02.png" alt="ผลงานของฉัน" class="w-full h-300 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </figure>
          
        </div>
        
      </div>
      <br>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img src="/src/assets/img/design03.png" alt="ผลงานของฉัน" class="w-full h-300 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </figure>
          
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img src="/src/assets/img/design04.png" alt="ผลงานของฉัน" class="w-full h-300 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </figure>
          
        </div>
        
      </div>
      
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'UX/UI',
  }
  </script>
  
  <style scoped>
  /* เพิ่มสไตล์เพิ่มเติมที่นี่ */
  </style>
  