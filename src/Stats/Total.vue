<template>
    <div class="total">
      <p class="total__title">итого:</p>
      <p class="total__value">₽ {{ value }}</p>
    </div>
</template>

<script>
  export default {
    name: 'Total',
    data: () => ({
      value: '4,000,000.00'
    })
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
