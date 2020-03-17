<template>
  <div id="root__default"> 
    <app-sidebar :site="site"></app-sidebar>
    <nuxt id="nuxt-content"/>
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
        name:'Make Your Bio',
        url:'/'
      }
    }
  }
}
</script>


<style>
:root {
  /* --main-color1: rgba(1, 116, 15, 1); */
  /* --main-color2: rgb(206, 255, 255); */
  /* --main-color2: #e1ffff; */
  --main-color1: #2EC4B6;
  --main-color2: #efffe9;

  --main-color3: #1a1a1a;
  --main-color4: #b4464f;
  --main-color5: #1a9fff;
  --main-color6: #3a5c83;
  --main-color7: #ebf2f7;
}

#root__default {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--main-color2)
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%
}

body {
  min-height: 100%;
}

#nuxt-content {
   height: 100%;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.background-color2 {
  background-color: var(--main-color2);
}
.background-color3 {
  background-color: var(--main-color3);
}
p,a,h1,h2,h3,h6,button, .content-text {
  font-family: 'PT Serif Caption', serif;
  color: var(--main-color2);
}
.dropdown-menu {
  background-color: var(--main-color2);
  border: 1px dashed var(--main-color1);
}

.page{
  padding: 0 11%;
  color: var(--main-color7);
  background-color: var(--main-color3);
  min-height: 86vh;
}

@media screen and (max-width: 500px) {
  .page{
    padding: 0 7%;
  }
}
</style>
