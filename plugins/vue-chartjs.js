import Vue from 'vue'
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('portolio-chart', {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: {
        scales: {
          xAxes: [{
              // categoryPercentage: 0.01,
              // barPercentage: 0.1,
              barThickness: 'flex'
          }]
      }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    'chartData' (to, from) {
      this.renderChart(this.chartData, this.options)
    }
  }
})