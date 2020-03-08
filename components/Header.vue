/* eslint-disable */
<template>
  <header class="background-color3">
    <b-navbar toggleable="lg" type="dark" class="container">
      <b-navbar-brand :to="site.url" class=""
        @mouseover="hover =true"
        @mouseleave="hover=false"
        :class="{heartBeat: hover}">{{site.name}}</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item class="text-center" to="/">Accueil</b-nav-item> -->
          <b-nav-item v-if="site.name !='Make Your Bio'" to="/">Home</b-nav-item>
          <!-- <b-nav-item v-if="site.name !='Make Your Bio'" :to="`${site.url}`">Posts</b-nav-item> -->
          <b-nav-item :to="`${site.url}about`">About</b-nav-item>
          <b-nav-item to="/resume">My Resume</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
export default {
  data() {
    return {
      hover: false
    }
  },
  props: {
    site:{
      type: Object
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  /* color: var(--main-color1) !important; */
  color:#ffc107 !important;
  font-weight: 800;
}
.navbar-nav li {
  position: relative;
}
.nav-link::before,
.nav-link::after {
  content: "";
  display: block;
  height: 5px;
  width: 0%;
  background-color: #ffc107;
  position: absolute;
  transition: all ease-in-out 250ms;
}
.nav-link:hover::before,
.nav-link:hover::after {
  width: 100%;
}
ul.navbar-nav li a {
  /* color: var(--main-color1) !important; */
  color:#ffc107 !important;
  text-transform: uppercase;
  font-weight: 700;
}
ul.navbar-nav li a:hover,
.navbar-brand:hover {
  color:#ffc107 !important;
}
ul.navbar-nav {
  color:#ffc107 !important;
}
.navbar-toggler-icon{
  filter: invert(1);
}

@media screen and (max-width: 450px) {
  .nav-link::before,
  .nav-link::after {
    content: none;
  }
}
</style>
