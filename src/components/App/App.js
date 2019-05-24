import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from 'store';
import Accounts from 'components/Accounts';
import AddAccount from 'components/AddAccount';
import './App.css';

const App = observer(
  class App extends Component {
    handleDelete = () => {
      store.accounts = store.accounts.slice(0, -1);
    };

    render() {
      return (
        <div className={'app'}>
          <p>Инвестиции:</p>
          <Accounts />
          <AddAccount />
          <button onClick={this.handleDelete}>Удалить последний счет</button>
        </div>
      )
    }
  }
);

export default App;
