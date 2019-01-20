<template>
  <div class="container">
    <canvas id="currencyChart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';

  export default {
    name: 'Chart',
    methods: {
      createChart(chartId) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            datasets: [{
              data: [71.56, 22.985, 5.455],
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
