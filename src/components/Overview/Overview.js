import React from 'react';
import Accounts from 'components/Accounts';
import AddAccount from 'components/AddAccount';
import './Overview.css';

const Overview = () => {
  return (
    <section className="overview">
      <Accounts/>
      <AddAccount/>
    </section>
  )
};

export default Overview;
