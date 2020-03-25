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
      <div class="skills--logos">
        <i class="icon-biotech"></i>
        <i class="icon-dev"></i>
        <i class="icon-data"></i>
      </div>
      <div class="hard">
        <h4>Hard</h4>
        <!-- <div>
        <p class="skill--category">Programmation Language</p>
        <div class="skill">Python</div>
        <div class="skill">Java2EE</div>
        <div class="skill">Javascript</div>
        <div class="skill">Php</div>
        </div>-->

        <div>
          <p class="skill--category">Programmation</p>
          <div class="skill">Software Development</div>
          <div class="skill">Object oriented</div>
          <div class="skill">Web Development</div>
          <div class="skill">Mobile Development</div>
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
          <div class="skill">Genetic Engineering</div>
          <div class="skill">Bioinformatics</div>
          <div class="skill">Biostatistics</div>
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
    <div class="experiences">Professional Experience</div>
    <div>
      <experience v-for="(exp, index) in experiences" :key="index" :index="index" :experience="exp"></experience>
    </div>

    <br />
    <div class="education">Education</div>
    <div class="formations--container">
      <formation v-for="(form, index) in formations" :key="index" :form="form"></formation>
    </div>

    <div class="interests">Center of interests</div>
    <div class="interests--container">
      <p>Scientific Entrepreneurship</p>
      <p>Machine Learning</p>
      <p>Blockchain Development</p>
      <p>Citizen Science | Maker Movement</p>
      <p>Internet of Things</p>
      <p>Philosophy and Epistemology</p>
    </div>
    <!-- <img src="@/assets/images/wordcloud_interests.png" alt=""> -->
    <!-- <div class="hobbies">Other Hobbies</div> -->
  </div>
</template>
<script>
import { getExperiences } from "~/services/Resumeservice.mjs";
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
    if (
      context.store.state.experiences &&
      context.store.state.experiences.length > 0
    ) {
      return {
        experiences: context.store.state.experiences,
        formations: context.store.state.formations
      };
    } else {
      try {
        let resume = await getExperiences();
        console.log("EXP right after call: ", resume);
        context.store.commit("SET_EXPERIENCES", resume.experiences);

        // let {data} = await axios.get(' http://localhost:3000/api/formations')
        // context.store.commit('SET_FORMATIONS', data)
        context.store.commit("SET_FORMATIONS", resume.formations);

        return {
          experiences: resume.experiences,
          // formations: data
          formations: resume.formations
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
.experiences,
.hobbies,
.interests {
  text-align: center;
  background-color: var(--main-color7);
  color: var(--main-color6);
  font-size: 1.7rem;
  max-width: 330px;
  margin: 45px auto;
  font-weight: 700;
}
h4 {
  margin-top: 1rem;
  font-weight: 900;
}
.container {
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 70px;
  background-color: rgba(58, 92, 131, 0.2);
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  .skills--logos {
    position: absolute;
    left: 46%;
    top: 33px;
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    color: var(--main-color2);
    i:before {
      font-size: 5rem;
    }
  }
  &:hover .skills--logos {
    // color: turquoise;
  }
  .hard {
    text-align: left;
    .skill {
      border: solid 1px var(--main-color4);
      color: var(--main-color4);
    }
  }
  .soft {
    text-align: right;
    .skill {
      border: solid 1px var(--main-color5);
      color: var(--main-color5);
    }
  }
  .skill--category {
    margin-bottom: 10px;
  }
  .skill {
    display: inline-block;
    padding: 4px 8px;
    font-weight: 700;
    border-radius: 10px;
    margin: 0 0 15px 3px;
  }
}

.formations--container {
  .formation:nth-child(2) {
    margin-left: 7%;
  }
  .formation:nth-child(3) {
    margin-left: 14%;
  }
  .formation:nth-child(4) {
    margin-left: 21%;
  }
}
.interests--container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  margin: 30px;
  p {
    font-size: 1.3rem;
     &:nth-child(1) {
        color: var(--main-color1);
      }
      &:nth-child(2) {
        color: var(--main-color8);
      }
      &:nth-child(3) {
        color: var(--main-color4);
      }
      &:nth-child(4) {
        color: var(--main-color5);
      }
      &:nth-child(5) {
        color: var(--main-color8);
      }
      &:nth-child(6) {
        color: var(--main-color4);
      }
  }
}
@media screen and (max-width: 500px) {
  #about-me {
    font-size: 0.9rem;
  }
  .skills,
  .education,
  .experiences,
  .hobbies,
  .interests {
    margin: 30px auto;
    font-size: 1.4rem;
  }
  .container {
    grid-template-columns: auto;
    padding: 10px 26px;
    gap: 72px;
    .skills--logos {
      position: absolute;
      left: 6px;
      top: 61%;
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 30px;
      i:before {
        font-size: 3rem;
      }
    }
  }
  h4 {
    margin-top: 15px;
  }

  .formations--container {
    .formation {
      margin-left: 0 !important;
      margin-top: 45px;
    }
  }
  .interests--container {
    grid-template-columns: auto;
    margin: 5px;
    justify-items: unset;
    p {
      font-size: 1rem;
      &:nth-child(even){
        text-align: right;
      }
    }
  }
}
@media (max-width: 1400px) {
  .container{
    .skills--logos{
      grid-template-columns: auto auto auto;
      position: absolute;
      top: 61%;
      right: 2%;
      justify-items: center;
    }
  }
}
</style>
