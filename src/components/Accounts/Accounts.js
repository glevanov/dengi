import React from 'react';
import {observer} from 'mobx-react';
import store from 'store';
import './Accounts.css';
import EditAccount from 'components/EditAccount';
import DeleteAccount from 'components/DeleteAccount';
import CurrencyIcon from 'components/CurrencyIcon';
import AccountDetails from 'components/AccountDetails';

function Accounts() {
  const list = store.accounts.map((account, index) =>
    <li
      key={index}
      className="accounts__item"
    >
      <CurrencyIcon
        currency={account.currency}
      />
      <AccountDetails
        elementClass={'accounts__text-content'}
        amount={account.amount}
        type={account.type}
        custodian={account.custodian}
      />
      <EditAccount
        elementClass={'accounts__edit'}
        index={index}
      />
      <DeleteAccount
        elementClass={'accounts__delete'}
        index={index}
      />
    </li>
  );
  return (
    <ul className="accounts">{list}</ul>
  )
}

export default observer(Accounts);
