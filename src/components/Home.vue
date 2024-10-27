<!-- src/views/Home.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <div class="hero min-h-screen relative ">
      <img src="../assets/img/me.png" alt="Background" class="absolute inset-0 w-full h-full object-cover" />

      <div class="hero-overlay bg-opacity-60 z-10 "></div>

      <div class="hero-content text-center z-20 ">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-white">METHANUSORN SUTTHIRAT</h1>
          <p class="py-6 text-white">Web Developer & Designer</p>
          <button class="btn btn-primary">View Projects</button>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="p-8">
      <h2 class="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" class="card bg-base-100 shadow-xl">
          <figure><img :src="project.image" :alt="project.name" /></figure>
          <div class="card-body">
            <h2 class="card-title">{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <div class="card-actions justify-end">
             
                <button @click="$router.push('/' + project.name)" class="btn btn-primary">
                  read more
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div id="skills" class="bg-base-200 p-8">
      <h2 class="text-3xl font-bold text-center mb-8">Skills</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(skills, category) in skillsets" :key="category" class="stat">
          <div class="stat-title">{{ category }}</div>
          <div class="stat-value text-lg">{{ skills.join(', ') }}</div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>

import Img9002 from '../assets/img/IMG_02.png';
import Img9003 from '../assets/img/design07.png';
import Img9004 from '../assets/img/senior01.png';
export default {
  name: 'Home',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'E_PriceSync',
          description: 'Project Intern at SCG',
          image: Img9002
        },
        {
          id: 2,
          name: 'UX/UI',
          description: 'Works that have been designed',
          image: Img9003
        },
        {
          id: 3,
          name: 'Senior_project',
          description: 'Deep Leaning (CNN) Senior project in Walailak University',
          image: Img9004
        }
      ],
      skillsets: {
        Frontend: ['Vue', 'React', 'HTML/CSS'],
        Backend: ['Node.js', 'Express','PHP'],
        Database: ['MongoDB', 'MySQL', 'NoSQL'],
        Others: ['Git', 'Docker','Deep leaning']
      },
      form: {
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log('Form submitted:', this.form)
      // Add your form submission logic here
    }
  }
}
</script>