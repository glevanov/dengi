<template>
  <div class="stats">
    <img class="stats__image" src="./circle.svg" alt="График всех активов">
    <Total
      :rates="rates"
      :accounts="accounts"></Total>
  </div>
</template>

<script>
  import Total from './Total.vue'

  export default {
    name: 'Stats',
    components: {
      Total
    },
    props: [
      'accounts',
      'rates'
    ]
  }
</script>

<style scoped>
  .stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 90%;
  }

  .stats__image {
    width: 100%;
    height: auto;
  }
</style>
