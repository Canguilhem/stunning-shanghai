<template>
  <div class="component">
    <img :src="url" />
    <div class="recap">
      <h4>{{name}}</h4>
      <p> Today: {{cases}} new cases and {{deaths}} deaths</p>
      <p>{{critical}} critical cases among {{active}} still active</p>
      <p>Already {{recovered}} patients recovered ({{formatPercentage(recovered/totalCases)}}) </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'name', 'url', 'cases',
    'deaths', 'critical', 'active',
    'recovered', 'totalCases'
  ],
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
}
.recap{
  display: inline-block;
  vertical-align: middle;
  padding-left: 15px;
}
</style>