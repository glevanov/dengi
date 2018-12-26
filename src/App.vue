<template>
  <div class="container">
    <h1 class="logo visually-hidden">#деньги</h1>
    <Stats :accounts="accounts"></Stats>
    <Accounts :accounts="accounts"></Accounts>
  </div>
</template>

<script>
  import Accounts from './Accounts/Accounts.vue'
  import Stats from './Stats/Stats.vue'

  export default {
    components: {
      Accounts,
      Stats
    },
    data: () => ({
      accounts: [
        {
          currency: {
            code: 'RUB',
            text: '₽'
          },
          custodian: 'Тиньков',
          type: 'Вклад',
          value: 1400000
        },
        {
          currency: {
            code: 'RUB',
            text: '₽'
          },
          custodian: 'Альфа',
          type: 'Вклад',
          value: 1034102.45
        },
        {
          currency: {
            code: 'RUB',
            text: '₽'
          },
          custodian: 'Альфа-Директ',
          type: 'ETF',
          value: 2201823.13
        },
        {
          currency: {
            code: 'RUB',
            text: '₽'
          },
          custodian: 'Альфа',
          type: 'ПИФ',
          value: 876403.35
        },
        {
          currency: {
            code: 'USD',
            text: '$'
          },
          custodian: 'Альфа',
          type: 'ETF',
          value: 10223.11
        },
        {
          currency: {
            code: 'USD',
            text: '$'
          },
          custodian: 'Тиньков',
          type: 'Вклад',
          value: 1031.07
        }
      ]
    })
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    color: #000000;
    background-color: #f1f2f6;
    max-width: 500px;

    font-family: -apple-system,
    BlinkMacSystemFont,
    Segoe UI, Roboto,
    Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue,
    sans-serif;
  }

  .logo {
    margin: 0;
    font-size: 32px;
  }
</style>
