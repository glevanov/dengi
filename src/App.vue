<template>
  <div class="container">
    <h1 class="logo visually-hidden">#деньги</h1>
    <stats></stats>
    <accounts></accounts>
    <rates></rates>
    <new-account-modal
    v-if="this.$store.state.isAccountModalVisible"></new-account-modal>
  </div>
</template>

<script>
  import Accounts from './Accounts/Accounts.vue'
  import Stats from './Stats/Stats.vue'
  import Rates from './Rates/Rates.vue'
  import NewAccountModal from './Accounts/NewAccountModal'

  export default {
    components: {
      NewAccountModal,
      Rates,
      Accounts,
      Stats
    }
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
    position: relative;

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
