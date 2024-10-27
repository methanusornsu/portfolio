<template>
  <div class="E_PriceSync p-8">
    <h1 class="text-4xl font-bold text-center mb-4">ราคากลางออนไลน์ (E_PriceSync)</h1>
    <p class="text-center mb-8">ระบบราคากลางออนไลน์เป็น ระบบที่สร้างมาตรฐานของราคา ต่าง ๆ ไม่ว่าจะเป็นวัสดุ อุปกรณ์ หรือ ค่ากำลังพล ให้กับหน่วยงานภายในบริษัท หรือคู่ธุระกิจที่มีการทำงานร่วมกัน</p>
    <p class="text-center mb-8">ผลงานของจากฝึกประสบการณ์ 8 เดือน ในตำแหน่ง Full stack Developer (Teamleader)</p>
    <p class="text-center mb-8">โดยใช้ React, Vite.JS, Typescript, HTML, CSS, Tailwind, Sql</p>

    <!-- First grid of images -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div v-for="(img, index) in firstGridImages" 
           :key="index" 
           class="card bg-base-100 shadow-xl overflow-hidden">
        <figure class="relative overflow-hidden group">
          <img :src="img" 
               :alt="`Portfolio ${index + 1}`"
               class="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </figure>
      </div>
    </div>

    <!-- Second grid of images -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div v-for="(img, index) in secondGridImages" 
           :key="index" 
           class="card bg-base-100 shadow-xl overflow-hidden">
        <figure class="relative overflow-hidden group">
          <img :src="img" 
               :alt="`Portfolio ${index + 4}`"
               class="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </figure>
      </div>
    </div>

    <!-- Large single images -->
    <div v-for="(img, index) in largeImages" 
         :key="index" 
         class="grid grid-cols-1 mb-4">
      <div class="card bg-base-100 shadow-xl overflow-hidden">
        <figure class="relative overflow-hidden group">
          <img :src="img" 
               :alt="`Portfolio ${index + 7}`"
               class="w-full h-300 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/img/esync02.png';
import img2 from '@/assets/img/esync03.png';
import img3 from '@/assets/img/esync04.png';
import img4 from '@/assets/img/intren01.png';
import img5 from '@/assets/img/intren02.png';
import img6 from '@/assets/img/intren03.png';
import img7 from '@/assets/img/esync05.png';
import img8 from '@/assets/img/esync06.png';

export default {
  name: 'E_PriceSync',
  data() {
    return {
      firstGridImages: [img1, img2, img3],
      secondGridImages: [img4, img5, img6],
      largeImages: [img7, img8],
    }
  }
}
</script>

<style scoped>
/* หากต้องการเพิ่ม custom styles เพิ่มเติมสามารถใส่ที่นี่ */
</style>