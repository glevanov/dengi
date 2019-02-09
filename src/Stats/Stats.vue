<template>
  <div class="stats">
    <chart></chart>
    <total></total>
  </div>
</template>

<script>
import Total from './Total.vue';
import Chart from './Chart.vue';

  export default {
    name: 'Stats',
    components: {
      Total,
      Chart
    }
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
</style>
