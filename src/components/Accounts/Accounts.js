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
        {acc.currency} {acc.amount} ({acc.type} в {acc.custodian})
        <EditButton index={index}/>
      </li>
    );
    return (
      <ul className="accounts">{list}</ul>
    )
  }
);

export default Accounts;
