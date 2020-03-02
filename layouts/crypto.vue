<template>
  <div id="root__default"> 
    <app-header :site="site" />
    <nuxt id="nuxt-content" />
    <app-footer class="footer"></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
export default {
  components: {
    AppHeader,
    AppFooter
  },
  data(){
    return {
      site: {
        name:'Crypto Tracker',
        url:'/crypto/'
      }
    }
  }
}
</script>

<style>

</style>