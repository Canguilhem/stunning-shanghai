<template>
  <div id="root__default"> 
    <app-sidebar :site="site"></app-sidebar>
    <nuxt id="nuxt-content" />
    <app-footer class="footer"></app-footer>
  </div>
</template>

<script>
import AppSidebar from '@/components/Sidebar'
import AppFooter from '@/components/Footer'
export default {
  components: {
    AppSidebar,
    AppFooter
  },
  data(){
    return {
      site: {
        name:'Interesting Youtube',
        url:'/youtube/'
      }
    }
  }
}
</script>

<style>

</style>