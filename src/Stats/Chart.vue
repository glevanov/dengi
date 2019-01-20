<template>
  <div class="container">
    <canvas id="currencyChart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';

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
    methods: {
      createChart(chartId) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            datasets: [{
              data: [
                this.percentageRUB,
                this.percentageUSD,
                this.percentageEUR
              ],
              labels: [
                'RUB',
                'USD',
                'EUR'
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
        });
      }
    },
    mounted() {
      this.createChart('currencyChart');
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    position: relative;
  }
</style>
