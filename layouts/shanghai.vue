<template>
  <div id="root__default"> 
    <app-header :site="site" />
    <app-sidebar></app-sidebar>
    <nuxt id="nuxt-content" />
    <app-footer class="footer"></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppSidebar from '@/components/Sidebar'
import AppFooter from '@/components/Footer'
export default {
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  },
  data(){
    return {
      site: {
        name:'Stunning Shanghai',
        url:'/shanghai/'
      }
    }
  }
}
</script>

<style>

</style>