import React from 'react';
import './CurrencyChart.css'

export default class CurrencyChart extends React.Component {
  constructor(props) {
    super(props);
    this.percentageRUB = 25;
    this.percentageUSD = 25;
    this.percentageEUR = 50;
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
            RUB: {this.percentageRUB}%
          </span>
          <span className="chart__percentage chart__percentage--usd">
            USD: {this.percentageUSD}%
          </span>
          <span className="chart__percentage chart__percentage--eur">
            EUR: {this.percentageEUR}%
          </span>
        </p>
      </section>
    );
  }
}
