import React from 'react';
import store from 'store';
import { observer } from 'mobx-react';

const Accounts = observer(
  () => {
    const list = store.accounts.map(acc =>
      <li>{acc.currency} {acc.amount} ({acc.type} в {acc.custodian})</li>
    );
    return (
      <ul>{list}</ul>
    )
  }
);

export default Accounts;
