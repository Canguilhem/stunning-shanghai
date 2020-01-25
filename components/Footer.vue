<template>
  <footer class="background-color3">
    <div class="wrapper text-center">
      <!-- no-ssr needed else matching issue DOM vs shadow DOM -->
      <!-- data-v-1a9bb128 -->
      <no-ssr>
        <div class="navigation">
          <b-dropdown
            id="dropdown-1"
            text="Site Map"
            variant="outline-success"
            class="m-md-2"
            no-caret
          >
            <b-dropdown-item to="/">Home</b-dropdown-item>
            <b-dropdown-item to="/about">About</b-dropdown-item>
            <b-dropdown-item to="/projects">Projects</b-dropdown-item>
          </b-dropdown>
        </div>
      </no-ssr>
      <div>
        <h6>
          <a href="mailto:clerger.a35+stunningshanghai@gmail.com">Contact</a>
        </h6>
        <div class="copyleft">
          <p>Coded with love by Canguilhem</p>
        </div>
      </div>
      <div>
        <h6>Follow us on:</h6>
        <div class="social-icon">
          <b-link to="/linkedin">
            <i class="fab fa-linkedin fa-2x"></i>
          </b-link>
          <b-link to="/instagram">
            <i class="fab fa-instagram fa-2x"></i>
          </b-link>
          <b-link to="/twitter">
            <i class="fab fa-twitter fa-2x"></i>
          </b-link>
          <b-link to="/github">
            <i class="fab fa-github fa-2x"></i>
          </b-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.dropdown-item {
  color: var(--main-color1);
  
}
.wrapper {
  display: grid;
  grid-template-columns: 34% 33% 33%;
}
.wrapper > div {
  padding-top: 1em;
}
h6,
h6 > a {
  color: #212529;
  font-weight: 700;
}
.social-icon > a {
  color: #212529;
}
.social-icon > a:hover {
  color: beige;
}
.social-icon,
.copyleft {
  margin-top: 10px;
}
footer {
  margin-top: auto;
  font-size: 12px;
}
.navigation > div {
  margin-top: 0.5rem;
}

@media screen and (max-width: 450px) {
  .wrapper {
    display: inline;
  }
  .social-icon,
  .copyleft {
    margin-top: 0px;
  }
  .wrapper > div {
    padding-top: 0em;
  }
  #dropdown-1 {
    margin-bottom: 5px;
  }
}
</style>


