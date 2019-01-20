<template>
  <div class="container">
    <canvas id="currencyChart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    name: 'Chart',
    computed: {
      percentageRUB () {
        return this.$store.getters.getPercentageRUB
      },
      percentageUSD () {
        return this.$store.getters.getPercentageUSD
      },
      percentageEUR () {
        return this.$store.getters.getPercentageEUR
      }
    },
    watch: {
      percentageRUB () {
        this.createChart()
      },
      percentageUSD () {
        this.createChart()
      },
      percentageEUR () {
        this.createChart()
      }
    },
    methods: {
      createChart () {
        const ctx = document.getElementById('currencyChart')
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            datasets: [{
              data: [
                this.percentageRUB,
                this.percentageUSD,
                this.percentageEUR
              ],
              backgroundColor: [
                '#4287f5',
                '#f5b042',
                '#6db5ff'
              ],
              borderWidth: 0,
            }],
          },
          options: {
            cutoutPercentage: 70,
            aspectRatio: 1,
            tooltips: {
              enabled: false
            },
            events: [],
          },
        })
      }
    },
    mounted () {
      this.createChart()
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    position: relative;
  }
</style>
