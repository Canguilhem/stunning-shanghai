<template>
  <div id="root__default"> 
    <app-header />
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
  }
}
</script>


<style>
:root {
  --main-color1: rgba(1, 116, 15, 1);
  --main-color2: rgb(206, 255, 255);
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

.container{
  background-color: var(--main-color3);
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
/* 
.background-color1 {
  background-color: rgb(204, 204, 204);
} */
.background-color2 {
  background-color: rgb(248, 233, 233);
}
.background-color3 {
  background-color: rgb(206, 255, 255);
}
p,a,h1,h2,h3,h6,button, .content-text {
  font-family: 'PT Serif Caption', serif;
}
.dropdown-menu {
  background-color: var(--main-color2);
  border: 1px dashed var(--main-color1);
  /* padding: 0 0; */
}
</style>
