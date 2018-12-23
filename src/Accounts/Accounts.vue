<template>
  <ul class="feed">
    <Account></Account>
    <Account></Account>
    <Account></Account>
  </ul>
</template>

<script>
  import Account from './Account.vue';

  export default {
    name: 'Accounts',
    components: {
      Account
    }
  }
</script>

<style scoped>
  .feed {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 90%;
    display: grid;
    grid-gap: 15px;
  }
</style>
