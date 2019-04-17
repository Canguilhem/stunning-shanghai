<template>
  <section class="article">
    <h2 class="text-center title"> {{ post.title }} </h2>
    <div class="wrapper">
      <!-- <b-img 
        thumbnail
        fluid
        center
        block
        :src="post.thumbnail">
      </b-img>-->
      <b-img thumbnail fluid center block src="banana.png"></b-img>
      <div class="post-content"> {{ post.content }} </div>
    </div>
    <hr>
  </section>
</template>
<script>
export default {
  name: "Article",
  props: ["post"]
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
  /* line-height: 80%; */
}
hr {
  border: 2px dotted var(--main-color1);
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
}
.wrapper > div {
  padding: 1em;
}
.post-content {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 450px){
  .wrapper {
    display: inline;
  }
}
</style>
