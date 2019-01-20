<template>
  <div class="total">
    <p class="total__title">итого:</p>
    <p class="total__value">₽ {{ formatNum(total) }}</p>
    <p class="total__title">RUB {{ formatNum(getPercentage(totalRUB, total)) }}%</p>
    <p class="total__title">USD {{ formatNum(getPercentage(totalUSD, total)) }}%</p>
    <p class="total__title">EUR {{ formatNum(getPercentage(totalEUR, total)) }}%</p>
  </div>
</template>

<script>
  import { formatNum, getTotalUSD, getTotalRUB, getTotalEUR, getPercentage } from '../currency'

  export default {
    name: 'Total',
    computed: {
      totalRUB () {
        return getTotalRUB(this.$store.state.accounts)
      },
      totalUSD () {
        return getTotalUSD(this.$store.state.accounts, this.$store.state.rates.USD)
      },
      totalEUR () {
        return getTotalEUR(this.$store.state.accounts, this.$store.state.rates.EUR)
      },
      total () {
        return this.totalRUB + this.totalUSD + this.totalEUR
      }
    },
    methods: {
      formatNum,
      getPercentage
    }
  }
</script>

<style scoped>
  .total {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .total__value {
    margin: 0;
    font-size: 32px;
    line-height: 1.2;
    color: #4287f5;
  }

  .total__title {
    margin: 0;
    font-size: 22px;
    line-height: 1.2;
  }
</style>
