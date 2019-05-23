import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const store = observable({
  accounts: [1, 5, 200],
});

const App = observer(
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
      };
    }

    handleInputChange = (evt) => {
      const target = evt.target;
      const value = target.value;

      this.setState({
        inputValue: value,
      });
    };

    handleDelete = () => {
      store.accounts = store.accounts.slice(0, -1);
    };

    handleAdd = () => {
      store.accounts = [...store.accounts, this.state.inputValue];
      this.setState({
        inputValue: '',
      })
    };

    render() {
      const list = store.accounts.map(it => <li>$ {it}</li>);

      return (
        <>
          <p>Your accounts:</p>
          <ul>{list}</ul>
          <div>
            <input onChange={this.handleInputChange} value={this.state.inputValue} />
            <button onClick={this.handleAdd}>Add account</button>
          </div>
          <button onClick={this.handleDelete}>Delete last account</button>
        </>
      )
    }
  }
);

export default App;
