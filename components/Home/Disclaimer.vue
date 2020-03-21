<template>
  <section class="intro">
    <div class="text-center relative">
      <div class="jumbotron-disclaimer relative">
        <h2 class="title">Full disclaimer</h2>
        <b-img class="objection" thumbnail fluid center block src="@/assets/images/objection.jpg"></b-img>
      </div>
      <br />
      <div>
        <p>This site has been created to share unusual or funny things I stumble upon</p>
        <p>I personnaly lived or saw the situations described</p>
        <p>Please take it with a grain of salt</p>
        <p>If that's ok for you, let's get to it..</p>
      </div>
      <button type="button" class="close" @click="destroy" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Disclaimer",
  methods: {
    destroy() {
      this.$el.remove();
    }
  }
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
  bottom: -2%;
  left: 50%;
  font-family: "Suez One", serif;
  display: block;
  font-weight: 300;
  font-size: 4.5vw;
  letter-spacing: 1px;
  /* color: #ffc107; */
  color: var(--main-color5);
  /* text-shadow: var(--main-color5) 0.2em 0.2em 0.6em; */
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
  line-height: 80%;
  width: 150px;
}
button.close {
  position: absolute;
  right: 8px;
  top: 0;
  color: var(--main-color5);
  font-size: 2rem;
  text-shadow: none;
}
@media screen and (max-width: 500px) {
  button.close {
    top: 7px;
    right: 0;
  }
}
</style>
