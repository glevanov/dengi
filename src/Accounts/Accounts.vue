<template>
  <ul class="accounts">
    <account
      v-for="(account, index) in this.$store.state.accounts"
      :account="account"
      :index="index"
    ></account>
    <new-account-button></new-account-button>
  </ul>
</template>

<script>
  import Account from './Account.vue'
  import NewAccountButton from './NewAccountButton.vue'

  export default {
    name: 'Accounts',
    components: {
      Account,
      NewAccountButton
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
