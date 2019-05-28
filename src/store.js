import { observable } from 'mobx/lib/mobx';

const store = observable({
  accounts: [
    {
      currency: 'RUB',
      custodian: 'Тиньков',
      type: 'Вклад',
      amount: 1400000,
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
});

export default store;
