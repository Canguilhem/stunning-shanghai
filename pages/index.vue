<template>
  <div class="container">
    <section class="jumbo">
      <div>
        <b-jumbotron 
          text-variant="white" 
          bg-variant="transparent" 
          lead-tag="h3">
          <template slot="header">Stunning Shanghai</template>
          <template slot="lead">
            Here are some of the things that really stunned me when I first landed in
            <strong>Shanghai</strong>
          </template>
        </b-jumbotron>
      </div>
    </section>
    <b-btn @click="getPost">va chercher</b-btn>
    <div class="container main-content">
      <app-disclaimer v-if="!disclaimerclosed"></app-disclaimer>
      <section class="articles">
        <div id="Articles_list">
          <app-article v-for="(post, index) in posts" :key="post._id" :post="post" :index="index"></app-article>
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
  data() {
    return {
      disclaimerclosed: false
    }
  },
  methods:{
      async getPost(){
        try {
        const res = await this.$axios.$get('/.netlify/functions/ReadPost')
        console.log(res);
      } catch (e) {
        console.log(e);
      }
      }
  },
  async fetch({store}) {
    await store.dispatch('FETCH_POSTS')
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts
    }
  },
  created(){

    // axios.get()
  }
};
</script>

<style scoped>
.jumbo {
  margin-top: 10px;
}
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
  margin-bottom: 2em;
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
hr {
  border: 2px dashed var(--main-color1);
}
@media screen and (max-width: 993px) {
  .jumbotron {
    margin-bottom: .8rem !important;
  }
}
</style>
