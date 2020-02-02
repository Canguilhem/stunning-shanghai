<template>
  <div class="container">
    <b-jumbotron bg-variant="transparent">
      <template slot="header">Why this site ?</template>

      <template slot="lead">
        This sites is part of my web-dev experiments, I created it to share what really stunned me when I first landed in
        <strong>Shanghai</strong>
      </template>

      <hr class="my-4">

      <!-- <b-button variant="primary" to="/posts">Explore posts</b-button> -->
      <b-button variant="success" to="/projects">Go see more of my work</b-button>
    </b-jumbotron>
    <div class="row">
      Shanghai is one of the biggest city in the world
    </div>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="stack col-sm-6 ">
        <h3 class="text-center">WebSite architecture</h3>
        <p>It's commonly called a MEVN stack single page application</p>It uses:
        <ul class="list">
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Vue.js</li>
          <li>Node.js</li>
        </ul>
        <b-button class="see-more right" variant="info" to="/projects">En savoir plus</b-button>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<style scoped>
.display-3 {
  font-family: "Suez One", serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
.stack {
  padding-left: 20px;
  border-radius: 25px;
  border: 1px dashed var(--main-color1);
  font-family: 'PT Serif Caption', serif;
}
.list{
  margin-left: 20px;
}
.see-more {
  margin-bottom: 15px;
  display: block;
}
</style>
