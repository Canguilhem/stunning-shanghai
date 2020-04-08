import Vue from 'vue'
import { Line, Doughnut, Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('portolio-chart', {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null,
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    'chartData'(to, from) {
      this.renderChart(this.chartData, this.options)
    }
  }
})

Vue.component('doughnut-chart', {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: {
        title: {
          display: true, 
          text: "Last update"
        },
        responsive: true,
        responsiveAnimationDuration: 500,
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    'chartData'(to, from) {
      this.renderChart(this.chartData, this.options)
    }
  }
})