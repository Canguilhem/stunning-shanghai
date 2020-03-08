<template>
  <div class="page">
    <b-jumbotron>
      <template slot="header">Why this site?</template>

      <template slot="lead">
        To put to test the last things I've learned
      </template>
    </b-jumbotron>
    <div class="row">
      This site gather different mini projects that I have been working on lately.
      Most of them would merit their own standalone but here they are for now...
    </div>
    <div class="row">
      In case you are wondering, this whole site is developped as a serverless, single page application
    </div>
      <div class="stack">
        <h3 class="text-center">Architecture</h3>
        <p>MEVN stack single page application</p>Based on:
        <ul class="list">
          <li>MongoDB</li>
          <li class="crossed">Express.js</li>
          <li>Vue.js</li>
          <li class="crossed">Node.js</li>
        </ul>
        <p>With our serverless approach we eliminated Express and Node from our stack</p>
        <p>Everytime data is needed we use AWS functions to fetch data from the cloud</p>
        <b-button class="see-more right" variant="danger" to="/projects">Let's see more of your projects</b-button>
      </div>
  </div>
</template>

<style scoped >
.jumbotron{
  color: black;
  background-color: var(--main-color6);
}
h3{
  color: var(--main-color5)
}
.crossed{
  text-decoration: line-through red;
}
.display-3 {
  font-family: "Suez One", serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  color: var(--main-color3)
}
.stack {
  padding: 20px;
  border-radius: 25px;
  border: 1px dashed var(--main-color5);
  width: 40vw;
  margin: 30px auto;
 
}
.list {
  margin-left: 20px;
}
.see-more {
  margin-bottom: 15px;
  display: block;
}
@media (max-width: 993px) {
  .jumbotron {
    padding: 1rem;
    margin-bottom: .8rem !important;
  }
  .display-3{
    font-size: 36px;
  }
  .row{
    margin: 30px 0;
  }
  .stack{
    margin: 30px 0;
    width: 100%;
  }
  .h3{
    padding-top: 15px;
  }
}
</style>
