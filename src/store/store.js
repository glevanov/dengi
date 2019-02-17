/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {
  getTotalUSD, getTotalRUB, getTotalEUR, getPercentage,
} from '../currency';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'dengi',
    }),
  ],
  mutations: {
    deleteAccount(state, index) {
      state.accounts.splice(index, 1);
    },
    switchModal(state) {
      window.scrollTo(0, 0);
      state.isAccountModalVisible = !state.isAccountModalVisible;
    },
    addAccount(state, data) {
      state.accounts.push(data);
    },
    getRates(state) {
      const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
      fetch(URL)
        .then(response => response.json())
        .then((data) => {
          state.rates.USD = data.Valute.USD.Value;
          state.rates.EUR = data.Valute.EUR.Value;
        });
    },
  },
  actions: {
    getRates(context) {
      context.commit('getRates');
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
  state: {
    rates: {
      USD: 1,
      EUR: 1,
    },
    isAccountModalVisible: false,
    accounts: [],
  },
});
// TODO поработать с промисами и async/await
