<template>
  <div>
    <app-header />
    <nuxt id="nuxt-content" />
    <app-footer></app-footer>
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
  --main-color1: rgba(177, 116, 15, 1);
  --main-color2: rgba(255, 208, 123, 1);
  --main-color3: rgba(253, 184, 51, 1);
  --main-color4: rgba(41, 110, 180, 1);
  --main-color5: rgba(23, 137, 252, 1);
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
}

body {
  background-color: var(--main-color3);
}

.container{
  background-color: var(--main-color3);
}

#nuxt-content {
   margin-bottom: 1.5em;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.text-color1 {
  color: rgba(177, 116, 15, 1);
}
.text-color2 {
  color: rgba(255, 208, 123, 1);
}
.text-color3 {
  color: rgba(253, 184, 51, 1);
}
.text-color4 {
  color: rgba(41, 110, 180, 1);
}
.text-color5 {
  color: rgba(23, 137, 252, 1);
}
.background-color1 {
  background-color: rgba(177, 116, 15, 1);
}
.background-color2 {
  background-color: rgba(255, 208, 123, 1);
}
.background-color3 {
  background-color: rgba(253, 184, 51, 1);
}
.background-color4 {
  background-color: rgba(41, 110, 180, 1);
}
.background-color5 {
  background-color: rgba(23, 137, 252, 1);
}
p {
  font-family: 'PT Serif Caption', serif;
}
</style>
