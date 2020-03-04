<template>
    <div class="exp" :class="{'internship': internship, 'even': even}">
        <h1>{{experience.position}} @ {{experience.hostOrganism}} </h1>
        <div class="temporal--details">
            From <strong>{{experience.from }}</strong> to <strong>{{ experience.to }}</strong> -
            {{experience.duration}} months in {{experience.place}} 
        </div>
                <i class="fa fa-plus-square"
                    @click="visible = !visible" :class="visible ? null : 'collapsed'"
                    :aria-expanded="visible ? 'true' : 'false'"
                    :aria-controls="`collapse-${index}`" aria-hidden="true"></i>
            <b-collapse visible :id="`collapse-${index}`" v-model="visible" class="mt-2" appear>

         <b-tabs v-if="internship" pills content-class="mt-3" align="center" >
          <b-tab title="Main Activities">
            <div class="details--activities">
              <p v-for="(act, index) in experience.activities" :key="index"><triangle variant="warning"></triangle>{{act}}</p>
            </div>
          </b-tab>
          <b-tab title="Description">
              <div>
                  <p>{{experience.description}}</p>
                  <p>Find more information about {{experience.hostOrganism}} at <a :href="`${experience.link}`" target="_blank">{{experience.link}}</a> </p>
              </div>            
          </b-tab>
        </b-tabs>
        <div v-else>
            <div class="details--activities">
              <p v-for="(act, index) in experience.activities" :key="index"><triangle variant="warning"></triangle>{{act}}</p>
            </div>
        </div>
        </b-collapse>
      </div>
</template>
<script>
import { BIconTriangleFill } from 'bootstrap-vue'
export default {
    name: "Experience",
    components:{
        triangle: BIconTriangleFill
    },
    props:['experience', 'index'],
    data(){
        return {
            visible: false,
            buttonText: 'Tell me more'
        }
    },
    computed:{
        internship(){
            return this.experience.isInternship
        },
        even(){
            return this.index %2 == 0
        }
    },
    methods:{ }
}
</script>
<style scoped>
h1{
    font-size: 2rem;
    font-weight: 600;
    color: var(--main-color5);
}
.temporal--details{
  opacity: 0.7;
  padding-bottom: 10px;
}
.exp{
    border-top-left-radius: 44px;
    border-bottom-right-radius: 44px;
    color: var(--main-color7);
    /* background: var(--main-color5); */
    /* color: #011627; */
    /* background: #2ec4b6; */
    /* box-shadow: 0 0 8px rgba(29,37,44,0.8); */
    box-shadow: 0 0 8px var(--main-color4);
    padding: 10px 40px;
    margin-top: 25px;
    position: relative;
}
.tabs{
  /* background-color: #e1ffff; */
  /* background-color: var(--main-color7); */
  background-color: rgba(29,37,44,0.4);
  border-radius: 15px;
  padding: 2px 10px;
  box-shadow: 0 0 2px var(--main-color4);
}
.details--activities > p{
 margin-bottom: 5px;
 color: var(--main-color2);
}
.btn.btn-outline-light{
    position: absolute;
    right: 4%;
    top: 30px;
}
@media screen and (max-width: 500px) {
    .exp{
        padding: 20px;
    }
}
</style>