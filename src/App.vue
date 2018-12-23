<template>
  <div class="container">
    <h1 class="logo visually-hidden">#деньги</h1>
    <img class="chart" src="img/circle.svg" alt="График всех активов">
    <p class="total">₽ 4,000,000.00</p>
    <Accounts></Accounts>
  </div>
</template>

<script>
  import Accounts from './Accounts/Accounts.vue';

  export default {
    components: {
      Accounts
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 320px;
    border: 1px dotted black;
    background-color: #f1f2f6;
  }
</style>
