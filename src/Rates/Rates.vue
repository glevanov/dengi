<template>
  <div class="rates">
    <p class="rates__rate">USD:
      <span class="rates__value">
        {{ formatNum(this.$store.state.rates.USD) }}
      </span>
    </p>
    <p class="rates__rate">EUR:
      <span class="rates__value">
        {{ formatNum(this.$store.state.rates.EUR) }}
      </span>
    </p>
  </div>
</template>

<script>
import { formatNum } from '../currency';

export default {
  name: 'Rates',
  methods: {
    formatNum,
    getRates() {
      const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
      fetch(URL)
        .then(response => response.json())
        .then((data) => {
          const USD = data.Valute.USD.Value;
          const EUR = data.Valute.EUR.Value;
          const result = {
            USD,
            EUR,
          };
          this.$store.commit('setRates', result);
        });
    },
  },
  beforeMount () {
    this.getRates();
  }
};
</script>

<style scoped>
  .rates {
    display: flex;
    margin-bottom: 20px;
    line-height: normal;
  }

  .rates__rate {
    margin: 0;
    margin-right: 10px;
    font-size: 18px;
  }

  .rates__rate:last-of-type {
    margin-right: 0;
  }

  .rates__value {
    color: #4287f5;
    font-weight: bold;
  }
</style>
