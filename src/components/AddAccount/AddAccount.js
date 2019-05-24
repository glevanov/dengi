import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from 'store';
import Input from 'components/Input';

const AddAccount = observer(
  class AddAccount extends Component {
    constructor(props) {
      super(props);

      this.state = {
        account: {
          currency: 'RUB',
          custodian: '',
          type: '',
          amount: '',
        },
      };
    }

    handleInputChange = (evt) => {
      const target = evt.target;
      const name = target.name;
      const value = target.value;

      this.setState(state => ({
        account: {
          ...state.account,
          [name]: value,
        }
      }));
    };

    handleAdd = () => {
      store.accounts = [...store.accounts, this.state.account];
    };

    render() {
      return (
        <form>
          <Input
            label="Сумма"
            name="amount"
            onChange={this.handleInputChange}
            value={this.state.account.amount}
            required={true}
            autoFocus={true}
          />
          <label>
            Валюта
            <select
              name="currency"
              value={this.state.account.currency}
              required={true}
              onChange={this.handleInputChange}
            >
              <option value="RUB">Рубли</option>
              <option value="USD">Доллары</option>
              <option value="EUR">Евро</option>
            </select>
          </label>
          <Input
            label="Вид инвестиции"
            name="type"
            onChange={this.handleInputChange}
            value={this.state.account.type}
          />
          <Input
            label="Место хранения"
            name="custodian"
            onChange={this.handleInputChange}
            value={this.state.account.custodian}
          />
          <button
            onClick={this.handleAdd}
            type={'button'}
          >
            Добавить счёт
          </button>
        </form>
      )
    }
  }
);

export default AddAccount;
