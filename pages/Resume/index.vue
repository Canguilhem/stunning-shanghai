<template>
  <div class="page">
    <!-- <div class="name">Anthony Clerget</div> -->
    <h5 class="text-center mb-4">Two things about me first :</h5>
    <div id="about-me" class="text-center">
      <p>1 - Passionated about programmation, automation &amp; life sciences</p>
      <p>2 - Really curious I like to discover and learn new things</p>
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
import moment from "moment";
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
    console.log('asyncData:/EXPERIENCES from store:',context.store.state)
    if(context.store.state.experiences && context.store.state.experiences.length > 0){
      return {experiences: context.store.state.experiences }
    }else{
      try {
        let data  = await getExperiences();
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
.skills,
.education,
.experiences {
  text-align: center;
  background-color: var(--main-color7);
  color: var(--main-color6);
  font-size: 1.7rem;
  max-width: 330px;
  margin: auto;
  font-weight: 700;
}
h4{
  margin-top: 1rem;
  font-weight: 900;
}
.hard{
  text-align: left;
}
.soft{
  text-align: right;
}
.container{
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 10px;
  background-color: rgba(58,92,131,0.4);
  margin-top: 30px;
  margin-bottom: 30px;
  justify-items: center;
}
@media screen and (max-width: 500px) {
  #about-me{
    font-size: 0.9rem;
  }
  .container{
    grid-template-columns: auto;
  }
  h4{
    margin-top: 15px;
  }
}
</style>
