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
      currency: 'RUB',
      custodian: 'Альфа',
      type: 'Вклад',
      amount: 1034102.45,
    },
  ],
});

export default store;
