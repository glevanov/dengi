<template>
  <ul class="accounts">
    <Account
      v-for="(account, index) in this.$store.state.accounts"
      :account="account"
      :index="index"
    ></Account>
    <newAccount></newAccount>
  </ul>
</template>

<script>
  import Account from './Account.vue'
  import newAccount from './newAccount.vue'

  export default {
    name: 'Accounts',
    components: {
      Account,
      newAccount
    }
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
