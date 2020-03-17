<template>
  <div class="background-color3 page">
    <h1>
      <!-- Hello world and -->
      Welcome to my personal
      <i>Ludotheque</i> !
    </h1>
    <h2>
      I am a
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h2>

    <h3>Take a peek to some projects I have been working on lately:</h3>
    <div class="projects--container">
      <nuxt-link to="/shanghai">
        <div class="project--card">
          <div class="card--title">Stunning Shanghai</div>
          <div class="card--body">
            List of unusual things for a first time in shanghai as a westerner
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/youtube">
        <div class="project--card">
          <div class="card--title">Interesting Youtube</div>
          <div class="card--body">
            It's not all about zapping, lolcats and weird satisfying videos
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/crypto">
        <div class="project--card">
          <div class="card--title">Crypto Tracker</div>
          <div class="card--body">
            Keep an eye on your portfolio value, all on your machine, nothing store in database
          </div>
        </div>
      </nuxt-link>

      <!-- <app-card link="/shanghai" name="Stunning shanghai" description="Blog about shanghai"></app-card> -->
      <!-- <nuxt-link to="/youtube">
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
      </nuxt-link>-->
    </div>
  </div>
</template>
<script>
import Card from "@/components/Home/ProjectCard";
export default {
  components: { AppCard: Card },
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

<style scoped lang="scss">
.icon:before {
  font-size: 3rem;
  color: #ffc107;
}

body {
  font-family: "Lato", sans-serif;
}
h1 {
  margin-bottom: 2.5rem;
  text-align: center;
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
  grid-template-columns: repeat(auto-fill, minmax(287px, 1fr));
  gap: 30px;
  margin: 30px 0;
  a{
    text-decoration: none;
  }
  .project--card {
    border: solid 1px;
    border-radius: 15px;
    height: auto;
    text-align: center;
    &:hover {
      background-color: lighten($color: #000000, $amount: 15);
      text-decoration: none;
    }
  }
}

a {
  color: var(--main-color2) !important;
}
.card--title{
  font-size: 1.5rem;
  margin-bottom: 15px;
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
