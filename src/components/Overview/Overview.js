import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import {computed, decorate} from 'mobx';
import store from 'store';
import './Overview.css';
import Total from 'components/Total';
import Accounts from 'components/Accounts';
import Button from 'components/Button';
import StatusMessage from 'components/StatusMessage';

export default class Overview extends React.Component {
  componentDidMount() {
    store.loadAccounts();
    store.loadRates();
  }

  render() {
    return (
      <section className="overview">
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
      </section>
    )
  }
}

decorate(Overview, {
  Overview: observer,
});
