import React from 'react';
import Total from 'components/Total';
import Accounts from 'components/Accounts';
import AddAccount from 'components/AddAccount';
import './Overview.css';

const Overview = () => {
  return (
    <section className="overview">
      <Total/>
      <Accounts/>
      <AddAccount/>
    </section>
  )
};

export default Overview;
