import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    deleteAccount: (state, index) => {
      state.accounts.splice(index, 1)
    }
  },
  state: {
    rates: {
      USD: 69.4706,
      EUR: 79.4605,
    },
    accounts: [
      {
        currency: {
          code: 'RUB',
          text: '₽',
        },
        custodian: 'Тиньков',
        type: 'Вклад',
        value: 1400000,
      },
      {
        currency: {
          code: 'RUB',
          text: '₽',
        },
        custodian: 'Альфа',
        type: 'Вклад',
        value: 1034102.45,
      },
      {
        currency: {
          code: 'USD',
          text: '$',
        },
        custodian: 'Альфа',
        type: 'ETF',
        value: 10223.11,
      },
      {
        currency: {
          code: 'USD',
          text: '$',
        },
        custodian: 'Тиньков',
        type: 'Вклад',
        value: 1031.07,
      },
      {
        currency: {
          code: 'EUR',
          text: '€',
        },
        custodian: 'Открытие',
        type: 'Вклад',
        value: 2030.81,
      },
      {
        currency: {
          code: 'EUR',
          text: '€',
        },
        custodian: 'МКБ',
        type: 'Вклад',
        value: 304.37,
      },
    ],
  },
});
