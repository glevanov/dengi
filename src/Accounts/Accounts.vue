<template>
  <ul class="accounts">
    <Account
      v-for="account in accounts"
      :account="account"
    ></Account>
  </ul>
</template>

<script>
  import Account from './Account.vue';

  export default {
    name: 'Accounts',
    components: {
      Account
    },
    data: () => ({
      accounts: [
        {
          currency: '₽',
          custodian: 'Тиньков',
          type: 'Вклад',
          value: '1,400,000.00'
        },
        {
          currency: '$',
          custodian: 'Альфа',
          type: 'Вклад',
          value: '1,034,102.45'
        },
        {
          currency: '€',
          custodian: 'Альфа-Директ',
          type: 'ETF',
          value: '2,201,823.13'
        },
        {
          currency: '₽',
          custodian: 'Альфа',
          type: 'ПИФ',
          value: '876,403.35'
        }
      ]
    })
  }
</script>

<style scoped>
  .accounts {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 90%;
    display: grid;
    grid-gap: 15px;
    margin-bottom: 20px;
  }
</style>
