import React from 'react';
import {Link} from 'react-router-dom';
import './AddAccount.css';

export default function AddAccount() {
  return (
    <Link
      to="/add/"
      className="add-account"
    >
      Добавить счёт
    </Link>
  )
}
