<template>
  <footer class="background-color3">
    <div class="wrapper text-center">
        <div class="stay-in-touch">
          <!-- <h6>Stay in touch:</h6> -->
          <div class="social-icon">
            <div class="mail--icon">
              <b-link href="mailto:clerger.a35+stunningshanghai@gmail.com">
                <b-icon-envelope-fill font-scale="2.8"></b-icon-envelope-fill>
              </b-link>
            </div>
            <b-link target="_blank" href="https://www.linkedin.com/in/anthclerget/">
              <i class="fab fa-linkedin fa-2x"></i>
            </b-link> 
            <b-link to="/instagram">
              <i class="fab fa-instagram fa-2x"></i>
            </b-link>
            <b-link target="_blank" href="https://twitter.com/Clerget_A">
              <i class="fab fa-twitter fa-2x"></i>
            </b-link>
            <b-link target="_blank" href="https://github.com/Canguilhem">
              <i class="fab fa-github fa-2x"></i>
            </b-link>
          </div>
        </div>
        <div>
        <div class="copyleft">
          <p>Coded with love by Canguilhem</p>
        </div>
      </div>
      <!-- no-ssr needed else matching issue DOM vs shadow DOM -->
      <client-only>
        <div class="navigation">
          <b-dropdown
            id="dropdown-1"
            text="Site Map"
            variant="outline-warning"
            class="m-md-2"
            no-caret
          >
            <b-dropdown-item to="/">Home</b-dropdown-item>
            <b-dropdown-item to="/about">About</b-dropdown-item>
            <b-dropdown-item to="/projects">Projects</b-dropdown-item>
          </b-dropdown>
        </div>
      </client-only>
    </div>
  </footer>
  <!-- Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
  <!-- Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
</template>

<script>
import { BIconEnvelopeFill } from 'bootstrap-vue'
export default {
  components:{
    BIconEnvelopeFill
  }
}
</script>

<style scoped>
.mail--icon{
  display: inline;
  vertical-align: sub;
}
.dropdown-item {
  color: var(--main-color1);
}
li:hover{
  background-color: #2EC4B6;
}
.wrapper {
  align-items: center;
  display: grid;
  grid-template-columns: 34% 33% 33%;
  color: var(--main-color7);
}
.stay-in-touch > div,
.stay-in-touch > h6{
  display: inline;
}
.mail--icon > a,
.social-icon > a {
  color: var(--main-color7);
}
.mail--icon > a:hover,
.social-icon > a:hover {
  /* color: var(--main-color6); */
  color: #ffc107;
}
p{
  margin: 0 !important;
}

footer {
  font-size: 14px;
}

@media screen and (max-width: 450px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1.4fr 0fr 1fr;
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
    .copyleft{
    display: none;
  }
}
</style>


