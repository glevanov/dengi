import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from 'store';
import Input from 'components/Input';
import './AddAccount.css';

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
        <form className={'add-account'}>
          <Input
            className={'add-account__input'}
            label="Сумма"
            name="amount"
            onChange={this.handleInputChange}
            value={this.state.account.amount}
            required={true}
            autoFocus={true}
            type={'number'}
            step={0.01}
            min={0}
          />
          <label className={'add-account__select'}>
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
            className={'add-account__input'}
            label="Вид инвестиции"
            name="type"
            onChange={this.handleInputChange}
            value={this.state.account.type}
          />
          <Input
            className={'add-account__input'}
            label="Место хранения"
            name="custodian"
            onChange={this.handleInputChange}
            value={this.state.account.custodian}
          />
          <button
            className={'add-account__add'}
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
