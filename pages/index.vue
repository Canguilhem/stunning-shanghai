<template>
  <div class="container">
    <section>
      <div>
        <b-jumbotron 
          text-variant="white" 
          bg-variant="transparent" 
          lead-tag="h3">
          <template slot="header">Stunning Shanghai</template>
          <template slot="lead">
            Here are some of the things that really stunned me when I first landed to
            <strong>Shanghai</strong>
          </template>
        </b-jumbotron>
      </div>
    </section>
    <hr>
    <div class="container main-content background-color2">
      <app-disclaimer></app-disclaimer>
      <hr>
      <section class="articles">
        <div id="Articles_list">
          <h1>Nombre de posts: {{posts.length}}</h1>
          <app-article v-for="post in posts" :key="post._id" :post="post"></app-article>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import PostPreviewList from '@/components/admin/PostPreviewList.vue'
import AppDisclaimer from '@/components/Home/Disclaimer.vue'
import AppArticle from '@/components/Home/Article.vue'
export default {
  components: {
    AppDisclaimer,
    PostPreviewList,
    AppArticle
  },
  async fetch({store}) {
    await store.dispatch('FETCH_POSTS')
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts
    }
  }
};
</script>

<style scoped>
.jumbotron {
  background-image: url("../assets/images/shanghai_jumbo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  text-shadow: black 0.3em 0.3em 0.3em;
}
.display-3 {
  font-family: "Suez One", serif;
  display: block;
  font-weight: 300;
  font-size: 10vw;
  letter-spacing: 1px;
}
.main-content {
  border-radius: 12px;
  border: 2px dashed var(--main-color1);
}
.header {
  background-image: url("../assets/images/objection.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  text-shadow: black 0.3em 0.3em 0.3em;
}
.lead{
  font-size: 2.2vw;
  color: var(--main-color2);
  font-family: 'Baloo Da', cursive;
  font-weight:bold;
}
.class{
  width: 10%;
}
</style>
