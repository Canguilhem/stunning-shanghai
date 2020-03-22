<template>
    <div  @click="visible = !visible" class="exp" :class="{'internship': internship, 'even': even}">
        <h1>{{experience.position}}</h1>
        <h4> @ {{experience.hostOrganism}} </h4>
        <div class="temporal--details">
            From <strong>{{experience.from }}</strong> to <strong>{{ experience.to }}</strong> -
            {{experience.duration}} months in {{experience.place}} 
        </div>
                <i class="fa"
                    :class="visible ? 'fa-minus-square' : 'collapsed fa-plus-square'"
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
<style scoped lang="scss">
.exp{
    border-top-left-radius: 44px;
    border-bottom-right-radius: 44px;
    color: var(--main-color7);
    box-shadow: 0 0 8px var(--main-color4);
    padding: 10px 40px;
    margin-top: 25px;
    position: relative;
    background-color: rgba(58, 92, 131, 0.2);
    &:hover h1{
        text-decoration: underline;
    }
    h1{
        font-size: 2rem;
        font-weight: 600;
        color: var(--main-color5);
    }
    h4{
        color: var(--main-color4);
    }
    .temporal--details{
        opacity: 0.7;
        padding-bottom: 10px;
    }
    &.internship{
    box-shadow: 0 0 8px var(--warning);
    h4{
        color: var(--warning);
    }
}
}
.fa{
    position: absolute;
    top: 24px;
    right: 17px;
}
.tabs{
  background-color: rgba(29,37,44,0.3);
  border-radius: 15px;
  padding: 2px 10px;
  box-shadow: 0 0 2px var(--main-color4);
}
.details--activities > p{
    margin-bottom: 15px;
    color: var(--main-color2);
}
.btn.btn-outline-light{
    position: absolute;
    right: 4%;
    top: 30px;
}
triangle{
   margin-right: 5px 
}
@media screen and (max-width: 500px) {
    .exp{
        padding: 20px;
            h1{
            font-size: 1.2rem;
            max-width: 370px;
        }
    }
}
</style>