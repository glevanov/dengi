<template>
  <div class="total">
    <p class="total__title">итого:</p>
    <p class="total__value">₽ {{ formatNum(total) }}</p>
  </div>
</template>

<script>
  import { formatNum, getTotalUSD, getTotalRUB, getTotalEUR } from '../currency'

  export default {
    name: 'Total',
    computed: {
      totalRUB () {
        return getTotalRUB(this.accounts)
      },
      totalUSD () {
        return getTotalUSD(this.accounts, 65)
      },
      totalEUR () {
        return getTotalEUR(this.accounts, 80)
      },
      total () {
        return this.totalRUB + this.totalUSD + this.totalEUR
      }
    },
    props: [
      'accounts'
    ],
    methods: {
      formatNum
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
