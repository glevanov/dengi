import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import {decorate} from 'mobx';
import store from 'store';
import './Overview.css';
import Total from 'components/Total';
import Accounts from 'components/Accounts';
import Button from 'components/Button';
import StatusMessage from 'components/StatusMessage';
import Rates from 'components/Rates';
import CurrencyChart from 'components/CurrencyChart';

export default class Overview extends React.Component {
  componentDidMount() {
    store.loadAccounts();
    store.loadRates();
  }

  render() {
    return (
      <section className="overview">
        {
          (store.accounts.length !== 0) &&
            <CurrencyChart/>
        }
        {
          (!store.rates.USD || !store.rates.EUR)
            ? <StatusMessage message="Загрузка данных о курсах..."/>
            : <Total/>
        }
        {
          (store.accounts.length === 0)
            ? <StatusMessage message="Добавьте счёт чтобы продолжить"/>
            : <Accounts/>
        }
        <Link
          to="/add/"
          className="overview__add-account"
        >
          <Button
            title="Добавить счёт"
            elementClass="button--account"
          />
        </Link>
        {
          (store.rates.USD || store.rates.EUR) &&
            <Rates
              USD={store.rates.USD}
              EUR={store.rates.EUR}
            />
        }
      </section>
    )
  }
}

decorate(Overview, {
  Overview: observer,
});
