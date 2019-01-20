<template>
  <div class="container">
    <canvas id="currencyChart"
            v-show="accountsLength > 0"></canvas>
    <div class="placeholder"
         v-if="accountsLength === 0">
      <p class="placeholder__text">Нет данных для отображения графика</p>
    </div>
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
      },
      accountsLength () {
        return this.$store.getters.getAccountLength
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
      },
      accountsLength () {
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

  .placeholder__text {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.3);
  }
</style>
