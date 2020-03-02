<template>
  <div class="page">
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
import {getPosts} from '~/services/Postservice.mjs'
import PostPreviewList from '@/components/admin/PostPreviewList.vue'
import AppDisclaimer from '@/components/Home/Disclaimer.vue'
import AppArticle from '@/components/Home/Article.vue'
export default {
  layout: 'shanghai',
  components: {
    AppDisclaimer,
    PostPreviewList,
    AppArticle
  },
  data() {
    return {
      posts:[],
      disclaimerclosed: false
    }
  },
  async asyncData(context){
    if(context.store.state.posts.length > 0){
      return { posts: context.store.state.posts }
    }else{
      try {
        let { data } = await getPosts()
        context.store.commit('SET_POSTS', data)
        return { posts: data }  
      } catch (error) {
        console.log(error)
      } 
    }
  }
};
</script>

<style scoped>
.jumbo {
  margin-top: 10px;
}
.jumbotron {
  background-image: url("../../assets/images/shanghai_jumbo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  border: solid;
  border-radius: 40px;
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
  /* border-radius: 12px;
  border: 2px dashed var(--main-color5); */
  margin-bottom: 2em;
}
.header {
  background-image: url("../../assets/images/objection.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  text-shadow: black 0.3em 0.3em 0.3em;
}
.lead{
  font-size: 2.2vw;
  color: var(--main-color2);
  font-family: 'Baloo Da', cursive;
  /* font-weight:bold; */
}
@media screen and (max-width: 993px) {
  .jumbotron {
    margin-bottom: .8rem !important;
  }
}
</style>
