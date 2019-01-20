<template>
  <div class="total">
    <p class="total__title">итого:</p>
    <p class="total__value">₽ {{ formatNum(total) }}</p>
  </div>
</template>

<script>
  import { formatNum } from '../currency'

  export default {
    name: 'Total',
    computed: {
      total () {
        return this.$store.getters.getTotal
      },
    },
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
    word-break: break-all;
    text-align: center;
  }

  .total__title {
    margin: 0;
    font-size: 22px;
    line-height: 1.2;
  }
</style>
