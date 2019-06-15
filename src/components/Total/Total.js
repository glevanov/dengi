import React from 'react';
import store from 'store';
import {observer} from 'mobx-react';
import {decorate, computed} from 'mobx';
import './Total.css';
import {getTotalRUB, getTotalUSD, getTotalEUR, formatNum} from 'currency';

export default class Total extends React.Component {
  componentDidMount() {
    store.loadRates();
  }

  get total() {
    return formatNum(
      getTotalRUB(store.accounts)
      + getTotalUSD(store.accounts, store.rates.USD)
      + getTotalEUR(store.accounts, store.rates.EUR)
    );
  }
  render() {
    return (
      <section className="total">
        <span className="total__text">Итого:</span>
        {
          store.rates.USD || store.rates.EUR
            ? `₽ ${this.total}`
            : 'Загрузка данных о курсах...'
        }
      </section>
    )
  }
}

decorate(Total,{
  total: computed,
  Total: observer,
});
