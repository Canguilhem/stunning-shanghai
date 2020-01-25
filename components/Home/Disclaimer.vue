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
      <p>Ce site a été créer avant tout, pour faire découvrir des choses drôles ou insolites</p>
      <p>J'ai moi même vu ou vécu les situations décrites</p>
      <p>Les articles de ce blog ne sont pas à prendre au premier degré</p>
      <p>Si c'est bien compris, suis moi, on y va..</p>
      <button @click="destroy">close</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Disclaimer",
  methods: {
    destroy() {
      this.$el.remove()
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
