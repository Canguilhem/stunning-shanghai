/* eslint-disable */
<template>
  <header class="background-color3">
    <b-navbar toggleable="lg" type="light" class="background-color3 container">
      <b-navbar-brand to="/">Stunning Shanghai</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="text-center" to="/">Accueil</b-nav-item>
          <b-nav-item class="text-center" to="/projects">Projets</b-nav-item>
          <b-nav-item class="text-center" to="/about">à Propos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style scoped>
.navbar-brand {
  color: var(--main-color1) !important;
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
  background-color: var(--main-color1);
  position: absolute;
  transition: all ease-in-out 250ms;
}
.nav-link:hover::before,
.nav-link:hover::after {
  width: 100%;
}
ul.navbar-nav li a {
  color: var(--main-color1) !important;
  text-transform: uppercase;
  font-weight: 700;
}
ul.navbar-nav li a:hover,
.navbar-brand:hover {
  color: var(--main-color1) !important;
}
ul.navbar-nav {
  color: var(--main-color1) !important;
}
</style>
