/* eslint-disable */
<template>
  <header class="root-div background-color5">
    <b-navbar toggleable="lg" type="dark" class="background-color5 container">
      <b-navbar-brand to="/">
        Stunning Shanghai
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav class="text-color3">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right variant="warning">
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style scoped>
.navbar {
  /* box-shadow: 0px 8px 8px #888888; */
}
.navbar-brand {
  color: var(--main-color3) !important;
  font-weight: 600;
}
em {
  color: var(--main-color3) !important;
}
ul.navbar-nav li a,
ul.nav li a:visited {
  color: var(--main-color3) !important;
}
ul.navbar-nav li a:hover,
ul.nav li a:active {
  color: var(--main-color1) !important;
}
ul.navbar-nav li.active a {
  color: var(--main-color1) !important;
}
.logo {
  width: 15px;
}
</style>
