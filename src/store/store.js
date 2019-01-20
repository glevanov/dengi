/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
  },
  state: {
    rates: {
      USD: 69.4706,
      EUR: 79.4605,
    },
    isAccountModalVisible: false,
    accounts: [
      {
        currency: 'RUB',
        custodian: 'Тиньков',
        type: 'Вклад',
        value: 1400000,
      },
      {
        currency: 'RUB',
        custodian: 'Альфа',
        type: 'Вклад',
        value: 1034102.45,
      },
      {
        currency: 'USD',
        custodian: 'Альфа',
        type: 'ETF',
        value: 10223.11,
      },
      {
        currency: 'USD',
        custodian: 'Тиньков',
        type: 'Вклад',
        value: 1031.07,
      },
      {
        currency: 'EUR',
        custodian: 'Открытие',
        type: 'Вклад',
        value: 2030.81,
      },
      {
        currency: 'EUR',
        custodian: 'МКБ',
        type: 'Вклад',
        value: 304.37,
      },
    ],
  },
});
