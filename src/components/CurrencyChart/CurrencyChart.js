import React from 'react';
import {observer} from 'mobx-react';
import {decorate, computed} from 'mobx';
import store from 'store';
import './CurrencyChart.css'
import {getTotalRUB, getTotalUSD, getTotalEUR, formatNum, getPercentage} from 'currency';

export default class CurrencyChart extends React.Component {
  get total() {
    return getTotalRUB(store.accounts)
      + getTotalUSD(store.accounts, store.rates.USD)
      + getTotalEUR(store.accounts, store.rates.EUR);
  }

  get percentageRUB() {
    return getPercentage(
      getTotalRUB(store.accounts),
      this.total
    );
  }

  get percentageUSD() {
    return getPercentage(
      getTotalUSD(store.accounts, store.rates.USD),
      this.total
    );
  }

  get percentageEUR() {
    return getPercentage(
      getTotalEUR(store.accounts, store.rates.EUR),
      this.total
    );
  }

  render() {
    return (
      <section className="chart">
        <p className="chart__wrapper">
          <span
            className="chart__bar chart__bar--rub"
            style={({
              width: `${this.percentageRUB}%`
            })}
          />
          <span
            className="chart__bar chart__bar--usd"
            style={({
              width: `${this.percentageUSD}%`
            })}
          />
          <span
            className="chart__bar chart__bar--eur"
            style={({
              width: `${this.percentageEUR}%`
            })}
          />
        </p>
        <p className="chart__legend">
          <span className="chart__percentage chart__percentage--rub">
            RUB: {formatNum(this.percentageRUB)}%
          </span>
          <span className="chart__percentage chart__percentage--usd">
            USD: {formatNum(this.percentageUSD)}%
          </span>
          <span className="chart__percentage chart__percentage--eur">
            EUR: {formatNum(this.percentageEUR)}%
          </span>
        </p>
      </section>
    );
  }
}

decorate(CurrencyChart, {
  CurrencyChart: observer,
  total: computed,
  percentageRUB: computed,
  percentageUSD: computed,
  percentageEUR: computed,
});
