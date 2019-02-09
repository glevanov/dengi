<template>
  <div class="container">
    <canvas id="currencyChart"
            v-show="accountsLength > 0"></canvas>
    <div class="placeholder"
         v-if="accountsLength === 0">
      <p class="placeholder__text">Нет данных для отображения графика</p>
    </div>
    <div class="legend">
      <p class="legend__item" v-if="percentageRUB !== 0">
        <span class="legend__color legend__color--RUB"></span>
        {{ formatNum(percentageRUB) }}%
      </p>
      <p class="legend__item" v-if="percentageUSD !== 0">
        <span class="legend__color legend__color--USD"></span>
        {{ formatNum(percentageUSD) }}%
      </p>
      <p class="legend__item" v-if="percentageEUR !== 0">
        <span class="legend__color legend__color--EUR"></span>
        {{ formatNum(percentageEUR) }}%
      </p>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';
import { formatNum } from '../currency';

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
      formatNum,
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

  .legend {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .legend__item {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .legend__item:last-of-type {
    margin-bottom: 0;
  }

  .legend__color {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
    border-radius: 3px;
  }

  .legend__color--RUB {
    background-color: #4287f5;
    background-image: url("../Accounts/rub.svg");
  }

  .legend__color--USD {
    background-color: #f5b042;
    background-image: url("../Accounts/usd.svg");
    background-size: 28px;
  }

  .legend__color--EUR {
    background-color: #6db5ff;
    background-image: url("../Accounts/eur.svg");
  }
</style>
