<template>
  <section class="intro">
    <div class="text-center">
      <div class="jumbotron-disclaimer relative">
        <h2 class="title">Full disclaimer</h2>
        <b-img 
          class="objection" 
          thumbnail 
          fluid 
          center 
          block 
          src="@/assets/images/objection.jpg"></b-img>
      </div>
      <br>
      <p>I'm french and lived most of my life on the country side / little towns.</p>
      <p>I had never been to Asia before.</p>
      <p>I loved it.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Disclaimer"
};
</script>

<style scoped>
.jumbotron-disclaimer {
  padding-top: 15px;
}
.relative {
  position: relative;
}
.title {
  position: absolute;
  bottom: -3%;
  left: 44%;
  font-family: "Suez One", serif;
  display: block;
  font-weight: 300;
  font-size: 4.5vw;
  letter-spacing: 1px;
  text-shadow: black 0.2em 0.2em 0.6em;
  line-height: 80%;
}
</style>
