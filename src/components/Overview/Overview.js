import React from 'react';
import {Link} from 'react-router-dom';
import store from 'store';
import Accounts from 'components/Accounts';
import './Overview.css';

const handleDelete = () => {
  store.accounts = store.accounts.slice(0, -1);
};

const Overview = () => {
  return (
    <section className="overview">
      <Accounts/>
      <button
        onClick={handleDelete}
        type="button"
      >
        Удалить последний счёт
      </button>
      <Link to="/add/">
        <button
          type="button"
        >
          Добавить счёт
        </button>
      </Link>
    </section>
  )
};

export default Overview;
