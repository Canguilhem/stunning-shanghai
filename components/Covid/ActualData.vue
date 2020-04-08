<template>
  <div class="component">
    <img :src="country.flag" />
    <div v-if="country.error != null">{{country.error}}</div>
    <div class="recap" v-else>
      <h4>Right now in {{country.name}}</h4>
      <!-- and {{country.todayDeaths}} deaths -->
    
      <div class="doughnut--container">
        <doughnut-chart :chartData="doughData" :options="options"></doughnut-chart>
      </div>
      <p>{{country.todayCases}} new cases -{{country.todayCritical}} critical among {{country.active}} total</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
  data() {
    return {
      options: {
        title: {
          display: false,
          fontColor: "white"
        },
        legend: {
          position: "right",
          labels: {
            fontColor: "white",
            boxWidth: 25
          }
        },
        responsive: true,
        responsiveAnimationDuration: 500
      }
    };
  },
  methods: {
    formatPercentage(value) {
      return `${Math.round(value * 10000) / 100}%`;
    }
  },
  computed: {
    doughData() {
      this.options.title.text = `Real Time Data for ${this.country.name}`;
      const total =
        this.country.active + this.country.deaths + this.country.recovered;
        const ratioActive = this.formatPercentage(this.country.active / total)
        const ratioDeaths = this.formatPercentage(this.country.deaths / total)
        const ratioRecovered = this.formatPercentage(this.country.recovered / total)
      let chartData = {
        labels: [
          `Active ${ratioActive}`,
          `Deaths ${ratioDeaths}`,
          `Recovered ${ratioRecovered}`
        ],
        datasets: [
          {
            backgroundColor: [
              "rgba(26,159,255,0.3)",
              "rgba(220,53,69,0.4)",
              "rgba(40,167,69,0.5)"
            ],
            borderWidth: 1,
            data: [
              this.country.active,
              this.country.deaths,
              this.country.recovered
            ]
          }
        ]
      };
      return chartData;
    }
  }
};
</script>

<style scoped>
.component {
  margin: 1rem;
}
.doughnut--container {
  width: 220px;
  height: 220px;
}
img {
  border-radius: 15px;
  width: 8rem;
}
.recap {
  display: inline-block;
  vertical-align: middle;
  padding-left: 15px;
}
</style>