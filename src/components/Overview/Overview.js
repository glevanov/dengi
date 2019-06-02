import React from 'react';
import {Link} from 'react-router-dom';
import Accounts from 'components/Accounts';
import './Overview.css';

const Overview = () => {
  return (
    <section className="overview">
      <Accounts/>
      <Link to="/add/">
        Добавить счёт
      </Link>
    </section>
  )
};

export default Overview;
