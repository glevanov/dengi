import React from 'react';
import {observer} from 'mobx-react';
import store from 'store';
import './Accounts.css'
import EditButton from 'components/EditButton';
import CurrencyIcon from 'components/CurrencyIcon'

const Accounts = observer(
  () => {
    const list = store.accounts.map((acc, index) =>
      <li
        key={index}
        className="accounts__item"
      >
        <CurrencyIcon
          currency={acc.currency}
        />
        <p className="accounts__text-content">
          <span className="accounts__amount">{acc.amount}</span>
          <span className="accounts__details">{acc.type} в {acc.custodian}</span>
        </p>
        <EditButton index={index}/>
      </li>
    );
    return (
      <ul className="accounts">{list}</ul>
    )
  }
);

export default Accounts;
