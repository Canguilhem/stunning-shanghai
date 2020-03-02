<template>
  <div class="page">
    <!-- <div class="name">Anthony Clerget</div> -->
    <h5 class="text-center mb-4">Two words about me first</h5>
    <div id="about-me" class="text-center">
      <p>I am a software engineer passionated about programmation, automation &amp; life sciences</p>
      <p>Really curious I like to discover and learn new things</p>
    </div>
    <div class="skills">Skills</div>
    <div class="container">
      <div class="hard">
       <h4>Hard</h4>
       <p>Programmation : Python, Java2EE, Php</p>
       <p>Biology: qPCR/ TaqPCR, Western/Northern Blot</p>
       <p>Biostatistics and NGS data analysis</p>
      </div>
      <div class="soft">
        <h4>Soft</h4>
        <p>Mission driven / challenge oriented</p>
        <p>Analytic and logical thinking</p>
        <p>Problem solving</p>
        <p>Team play</p>
        <p>Innovative spirit</p>
      </div>
    </div>
    <div class="experiences">Profesional Experience</div>
    <div>
      <experience v-for="(exp, index) in experiences" :key="index" :index="index" :experience="exp"></experience>
    </div>

    <br />
    <div class="education">Education</div>
    <div class="interests">Center of interests</div>
    <div class="hobbies">Other Hobbies</div>
  </div>
</template>
<script>
import { getExperiences } from '~/services/Experienceservice.mjs'
import Experience from "@/components/Home/Experience";
import axios from "axios";
export default {
  components: {
    Experience
  },
  data() {
    return {
      experiences: []
    };
  },
  methods: {},
  async asyncData(context) {
    if(context.store.state.experiences && context.store.state.experiences.length > 0){
      return {experiences: context.store.state.experiences }
    }else{
      try {
        let { data } = await getExperiences();
        context.store.commit('SET_EXPERIENCES', data)
        return { experiences: data };
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
}
.name {
  position: absolute;
  top: 10%;
  right: 11%;
  background-color: #e71d36;
  color: var(--main-color7);
  font-size: 3rem;
  padding: 10px;
  border-radius: 20px;
  font-weight: bold;
}
.skills,
.education,
.experiences {
  text-align: center;
  background-color: var(--main-color7);
  color: var(--main-color6);
  font-size: 1.7rem;
  width: 330px;
  margin: auto;
}
h4{
  text-align: center;
}
.container{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
</style>
