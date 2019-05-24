import React from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import './Accounts.css'

const handleEdit = (evt) => {
  const key = evt.target.parentNode.dataset.key;
  console.log(key);
};

const Accounts = observer(
  () => {
    const list = store.accounts.map((acc, index) =>
      <li key={index} data-key={index}>
        {acc.currency} {acc.amount} ({acc.type} в {acc.custodian})
        <button
          type="button"
          onClick={handleEdit}
        >Редактировать</button>
      </li>
    );
    return (
      <ul className={'accounts'}>{list}</ul>
    )
  }
);

export default Accounts;
