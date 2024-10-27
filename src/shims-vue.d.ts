declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import type { Router } from 'vue-router'
  
  const component: DefineComponent<{}, {}, any> & {
    router: Router
  }
  
  export default component
  export const router: Router
}