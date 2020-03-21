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
      <div>
        <p class="skill--category">Programmation Language</p>
        <div class="skill">Python</div>
        <div class="skill">Java2EE</div>
        <div class="skill">Javascript</div>
        <div class="skill">Php</div>
      </div>
      <div>
        <p class="skill--category">Frequently used frameworks</p>
        <div class="skill">Angular</div>
        <div class="skill">Spring</div>
        <div class="skill">Vue</div>
        <div class="skill">Drupal</div>
      </div>

      <div>
        <p class="skill--category">Biology</p>
        <div class="skill">qPCR/ TaqPCR</div>
        <div class="skill">Western/Northern Blot</div>
        <br>
        <div class="skill">Clonning methods</div>
        <div class="skill">Biostatistics</div>
        <div class="skill">Bioinformatics</div>
      </div>

       <!-- <p>Biostatistics and NGS data analysis</p> -->
      </div>
      <div class="soft">
        <h4>Soft</h4>
        <p class="skill">Mission driven / challenge oriented</p>
        <p class="skill">Analytic and logical thinking</p>
        <p class="skill">Problem solving</p>
        <p class="skill">Team play</p>
        <p class="skill">Innovative spirit</p>
      </div>
    </div>
    <div class="experiences">Profesional Experience</div>
    <div>
      <experience v-for="(exp, index) in experiences" :key="index" :index="index" :experience="exp"></experience>
    </div>

    <br />
    <div class="education">Education</div>
    <div class="formations--container">

  <formation v-for="(form, index) in formations" :key="index" :form="form"></formation>
    </div>

    <div class="interests">Center of interests</div>
    <div class="hobbies">Other Hobbies</div>
  </div>
</template>
<script>
import { getExperiences } from '~/services/Resumeservice.mjs'
import Formation from "@/components/Home/Formation";
import Experience from "@/components/Home/Experience";
import axios from "axios";
export default {
  components: {
    Experience,
    Formation
  },
  data() {
    return {
      experiences: [],
      formations: []
    };
  },
  methods: {},
  async asyncData(context) {
    if(context.store.state.experiences && context.store.state.experiences.length > 0){
      return {
        experiences: context.store.state.experiences,
        formations: context.store.state.formations
      }
    }else{
      try {
        let resume  = await getExperiences();
        console.log('EXP right after call: ' , resume);
        context.store.commit('SET_EXPERIENCES', resume.experiences)
        
        // let {data} = await axios.get(' http://localhost:3000/api/formations')
        // context.store.commit('SET_FORMATIONS', data)
        context.store.commit('SET_FORMATIONS', resume.formations)
        
        
        return { 
          experiences: resume.experiences,
          // formations: data
          formations: resume.formations,
         };
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped lang="scss">
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
.container{
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 10px 70px;
  background-color: rgba(58,92,131,0.4);
  margin-top: 30px;
  margin-bottom: 30px;
  .hard{
    text-align: left;
    .skill{
      border: solid 1px var(--main-color4);
      color: var(--main-color4);
    }
  }
  .soft{
   text-align: right;
    .skill{
      border: solid 1px var(--main-color5);
      color: var(--main-color5);
    }
  }
  .skill--category{
    margin-bottom: 10px;
  }
  .skill{
    display: inline-block;
    padding: 4px 8px;
    font-weight: 700;
    border-radius: 10px;
    margin:  0 0 15px 3px;
  }
}

.formations--container {
  padding: 10px;
  margin: 30px 0;
  .formation:nth-child(2){
    margin-left: 7%;
  }
  .formation:nth-child(3){
    margin-left: 14%;
  }
  .formation:nth-child(4){
    margin-left: 21%;
  }
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
