<template>
  <div class="component">
    <img :src="country.flag" />
    <div v-if="country.error != null">
      {{country.error}}
    </div>
    <div class="recap" v-else>
      <h4>{{country.name}}</h4>
      <p> Today: {{country.todayCases}} new cases and {{country.todayDeaths}} deaths</p>
      <p>{{country.todayCritical}} critical cases among {{country.active}} still active</p>
      <p>Already {{country.recovered}} patients recovered ({{formatPercentage(country.recovered/country.cases)}}) </p>
    </div>
  </div>
</template>

<script>
export default {
  props:['country'],
  methods: {
    formatPercentage(value) {
      return `${Math.round(value * 10000) / 100}%`;
    }
  }
  
};
</script>

<style scoped>
.component{
  margin: 1rem;
}
img{
  border-radius: 15px;
  width: 8rem;
}
.recap{
  display: inline-block;
  vertical-align: middle;
  padding-left: 15px;
}
</style>