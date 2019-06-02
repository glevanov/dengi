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
});

export default store;
