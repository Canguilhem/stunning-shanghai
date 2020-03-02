<template>
  <div class="background-color3 page">
    <h1>
      Hello world and welcome in my personal
      <i>Ludotheque</i> !
    </h1>
    <h2>
      I am a
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h2>

    <h3>Here are some projects I have been working on lately:</h3>
    <div class="projects--container">
      <nuxt-link to="/shanghai">
        <div class="project--card">Stunning Shanghai</div>
      </nuxt-link>
      <nuxt-link to="/youtube">
        <div class="project--card">Interesting Youtube</div>
      </nuxt-link>
      <nuxt-link to="/crypto">
        <div class="project--card">Crypto Tracker</div>
      </nuxt-link>
      <nuxt-link to="/youtube">
        <div class="project--card">My personal library</div>
      </nuxt-link>
      <nuxt-link to="/youtube">
        <div class="project--card">Challenge your friends and yourself</div>
      </nuxt-link>
      <nuxt-link to="/youtube">
        <div class="project--card">Blockchain ~glossary</div>
      </nuxt-link>
      <nuxt-link to="/youtube">
        <div class="project--card">Weasley clock</div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  components: { },
  data() {
    return {
      typeValue: "",
      typeStatus: true,
      typeArray: ["Developer", "Biologist", "Bioinformatician"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex++;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex--;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex++;
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0;
        }
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
}
h2 {
  position: relative;
}
span.cursor.typing {
  animation: none;
}
span.cursor {
  position: absolute;
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
.projects--container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.project--card {
  border: solid 1px;
  border-radius: 15px;
  height: 100px;
  text-align: center;
}

a {
  color: var(--main-color2) !important;
}

@keyframes cursorBlink {
  49% {
    background-color: #efffe9;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
