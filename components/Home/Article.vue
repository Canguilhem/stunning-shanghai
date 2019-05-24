<template>
  <section class="article">
    <hr>
<!-- animated delay-2s infinite flipInX -->
    <div v-if="index %2 == 0">
      <h2 class="title text-center" data-aos="fade-down">{{ post.title }}</h2>
      <div class="wrapper" data-aos="fade-right">
        <div class="card">
          <b-img thumbnail fluid center block src="banana.png" class="card__img"></b-img>
          <div class="card__text">
            <p class="card__body">{{ post.photoDescription }}</p>
          </div>
        </div>

        <div class="post-content text-center" data-aos="fade-left">
          <div class="tags-container">
            <b-badge v-for="tag in post.tags" :key="tag" variant="dark">{{ tag }}</b-badge>
          </div>
          <div class="content-text">{{ post.content }}</div>
        </div>
      </div>
    </div>
    <!-- ODD index -->
    <div v-else>
      <h2 class="title text-center" data-aos="fade-up">{{ post.title }}</h2>
      <div class="wrapper" data-aos="fade-left">
        <div class="post-content text-center">
          <div class="tags-container">
            <b-badge v-for="tag in post.tags" :key="tag" variant="dark">{{ tag }}</b-badge>
          </div>
          <div class="content-text">{{ post.content }}</div>
        </div>
        <div class="card">
          <b-img thumbnail fluid center block src="banana.png" class="card__img"></b-img>
          <div class="card__text">
            <p class="card__body">{{ post.photoDescription }}</p>
          </div>
        </div>
      </div>
    </div>
    <br>
  </section>
</template>
<script>
import $ from 'jquery'
export default {
  name: "Article",
  props: ["post", "index"]
};

// $("#title").waypoint(function(){
//    $("#title").addClass('fadeInLeft');
// }, {offset:'100%'});

</script>
<style scoped>
.title {
  font-family: "Suez One", serif;
  display: block;
  font-weight: 300;
  font-size: 4.5vw;
  letter-spacing: 1px;
  text-shadow: grey 0.3em 0.3em 0.3em;
}
hr {
  border: 3px dashed var(--main-color1);
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
}
.wrapper > .post-content {
  padding: 1em;
}
.card {
  position: relative;
  margin: 1em;
}
.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 1em;
  bottom: 1em;
  left: 1em;
  right: 1em;
  opacity: 1;
  transition: transform ease-out 250ms;
}
.card::before {
  opacity: .5;
  border-top: 2px solid white; 
  border-bottom: 2px solid white;
  transform: scale(0, 1);
  background:rgba(128, 128, 128, 0.767);
}
.card::after {
  border-left: 2px solid white;
  border-right: 2px solid white;
  transform: scale(1, 0);
}
.card:hover::before {
  transform: scale(1.05, 1);
}
.card:hover::after {
  transform: scale(1, 1.05);
}
.card__img {
  max-width: 100%;
  display: block;
  transition: opacity ease-out 250ms;
}
.card:hover {
  opacity: .3;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:rgb(113, 84, 230);
  opacity: 0;
  transition: opacity ease-out 250ms;
}

.card:hover .card__text {
  opacity: 1;
}
.post-content {
  display: grid;
  grid-template-rows: 10% 90%;
}
.content-text {
  text-align: justify;
  text-justify: inter-word;
}

@media screen and (max-width: 993px) {
  .wrapper {
    display: inline;
  }
  .post-content {
    display: inline;
  }
}
</style>
