import React from 'react';
import store from 'store';
import {observer} from 'mobx-react';
import {decorate, computed} from 'mobx';
import {getTotalRUB, getTotalUSD , getTotalEUR} from 'currency';

export default class Total extends React.Component {
  get total() {
    return getTotalRUB(store.accounts)
      + getTotalUSD(store.accounts, store.rates.USD)
      + getTotalEUR(store.accounts, store.rates.EUR);
  }
  render() {
    return (
      <section>
        Итого: {this.total}
      </section>
    )
  }
}

decorate(Total,{
  total: computed,
  Total: observer,
});
