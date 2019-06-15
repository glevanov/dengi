import {observable} from 'mobx/lib/mobx';

const key = 'dengi';

const store = {
  accounts: [
    {
      currency: 'RUB',
      custodian: 'Константинопольский Константин Константинович',
      type: 'Вклад',
      amount: 3000145.3456,
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
      amount: 3200.233,
    },
  ],
  rates: {
    USD: null,
    EUR: null,
  },
};

store.saveAccounts = function () {
  localStorage.setItem(key, JSON.stringify(this.accounts));
};

store.loadAccounts = function() {
  if (localStorage.getItem(key)) {
    this.accounts = [].concat(
      [...JSON.parse(localStorage.getItem(key))]
    )
  }
};

store.loadRates = function() {
  const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
  fetch(URL)
    .then(response => response.json())
    .then((data) => {
      this.rates.USD = data.Valute.USD.Value;
      this.rates.EUR = data.Valute.EUR.Value;
    });
};

store.deleteAccount = function (index) {
  this.accounts = [].concat(
    this.accounts.slice(0, index),
    this.accounts.slice(index + 1)
  );
  this.saveAccounts();
};

store.addAccount = function (account) {
  this.accounts = [...this.accounts, account];
  this.saveAccounts();
};

store.updateAccount = function (account, index) {
  this.accounts = [].concat(
    this.accounts.slice(0, index),
    account,
    this.accounts.slice(index + 1)
  );
  this.saveAccounts();
};

export default observable(store);
