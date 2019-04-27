<template>
  <section class="article">
    <div v-if="index %2 == 0">
      <h2 class="text-center title">{{ post.title }}</h2>
      <div class="wrapper">
        <b-img thumbnail fluid center block src="banana.png"></b-img>
        <div class="post-content">
          <div class="tags-container text-center">
            <b-badge v-for="tag in post.tags" :key="tag" variant="dark">{{ tag }}</b-badge>
          </div>
          {{ post.content }}
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="text-center title">{{ post.title }}</h2>
      <div class="wrapper">
        <div class="post-content">
          <div class="tags-container text-center">
            <b-badge v-for="tag in post.tags" :key="tag" variant="dark">{{ tag }}</b-badge>
          </div>
          {{ post.content }}
        </div>
        <b-img thumbnail fluid center block src="banana.png"></b-img>
      </div>
    </div>
    <hr>
  </section>
</template>
<script>
export default {
  name: "Article",
  props: ["post", "index"]
};
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
  border: 2px dashed var(--main-color1);
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
}
.wrapper > div {
  padding: 1em;
}
.post-content {
  display: grid;
  grid-template-rows: 10% 90%;
}

@media screen and (max-width: 450px) {
  .wrapper {
    display: inline;
  }
  .post-content{
    display: inline;
  }
}
</style>
