import React from 'react';
import {Link} from 'react-router-dom';
import './Overview.css';
import Total from 'components/Total';
import Accounts from 'components/Accounts';
import Button from 'components/Button';

const Overview = () => {
  return (
    <section className="overview">
      <Total/>
      <Accounts/>
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
};

export default Overview;
