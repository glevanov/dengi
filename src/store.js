/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import {
  getTotalUSD, getTotalRUB, getTotalEUR, getPercentage,
} from '@/js/currency';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rates: {
      USD: 1,
      EUR: 1,
    },
    accounts: [],
  },
  mutations: {
    deleteAccount(state, index) {
      state.accounts.splice(index, 1);
    },
    addAccount(state, data) {
      state.accounts.push(data);
    },
    setRates(state, response) {
      state.rates.USD = response.Valute.USD.Value;
      state.rates.EUR = response.Valute.EUR.Value;
    },
  },
  actions: {
    getRates(context) {
      const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
      fetch(URL)
        .then(response => response.json())
        .then((data) => {
          context.commit('setRates', data);
        });
    },
  },
  getters: {
    getTotalRUB: state => getTotalRUB(state.accounts),
    getTotalUSD: state => getTotalUSD(state.accounts, state.rates.USD),
    getTotalEUR: state => getTotalEUR(state.accounts, state.rates.EUR),
    getTotal: (state, getters) => getters.getTotalRUB + getters.getTotalUSD + getters.getTotalEUR,
    getPercentageRUB: (state, getters) => getPercentage(getters.getTotalRUB, getters.getTotal),
    getPercentageUSD: (state, getters) => getPercentage(getters.getTotalUSD, getters.getTotal),
    getPercentageEUR: (state, getters) => getPercentage(getters.getTotalEUR, getters.getTotal),
    getAccountLength: state => state.accounts.length,
  },
});
