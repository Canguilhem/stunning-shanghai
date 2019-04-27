<template>
  <footer class="background-color5">
    <div class="wrapper text-center">
      <div class="navigation">
        <b-dropdown id="dropdown-1" text="Site Map" variant="info" class="m-md-2" no-caret>
          <b-dropdown-item>
            <a href="/" target="_self" class="nav-link" data-v-1a9bb128>Home</a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a href="/about" target="_self" class="nav-link" data-v-1a9bb128>About</a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a href="/projects" target="_self" class="nav-link" data-v-1a9bb128>Projects</a>
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <h6><a href="mailto:clerger.a35+stunningshanghai@gmail.com">Contact</a></h6>
        <div class="copyleft">
          <p>Coded with love by Canguilhem</p>
        </div>
      </div>
      <div>
        <h6>Social Media</h6>
        <div class="social-icon">
          <i class="fab fa-linkedin fa-2x"></i>
          <i class="fab fa-instagram fa-2x"></i>
          <i class="fab fa-twitter fa-2x"></i>
          <i class="fab fa-github fa-2x"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 34% 33% 33%;
}
.wrapper > div {
  padding-top: 1em;
}
h6, h6 > a {
  color: black;
  font-weight: 700;
}
div > a {
  padding: 0px;
  color: var(--main-color2);
}
i {
  width: 40px;
}
.social-icon, .copyleft {
  margin-top: 10px;
}
footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: -10px;
  font-size: 12px;
}

@media screen and (max-width: 450px){
  .wrapper {
    display: inline;
  }
  .social-icon, .copyleft {
    margin-top: 0px;
  }
  .wrapper > div {
    padding-top: 0em;
}
}
</style>


