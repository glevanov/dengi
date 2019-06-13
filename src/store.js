import { observable } from 'mobx/lib/mobx';

const store = observable({
  accounts: [
    {
      currency: 'RUB',
      custodian: 'Константинопольский Константин Константинович',
      type: 'Вклад',
      amount: 140000000000,
    },
    {
      currency: 'USD',
      custodian: 'Альфа',
      type: 'Вклад',
      amount: 10341.45,
    },
    {
      currency: 'EUR',
      custodian: 'Альфа',
      type: 'Вклад',
      amount: 3200.3,
    },
  ],
  rates: {
    USD: 65.3834,
    EUR: 72.8436,
  },
});

store.deleteAccount = function (index) {
  this.accounts = [].concat(
    this.accounts.slice(0, index),
    this.accounts.slice(index + 1)
  );
};

store.addAccount = function (account) {
  this.accounts = [...this.accounts, account];
};

export default store;
