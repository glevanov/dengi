import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {observer} from 'mobx-react';
import store from 'store';
import Input from 'components/Input';
import './EditForm.css';

const EditForm = observer(
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
        readyToSubmit: false,
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
      this.setState({readyToSubmit: true})
    };

    componentDidMount() {
      // Gets initial state from store if we get an index from route
      const index = this.props.match.params.index;
      if (index) {
        this.setState({
          account: {
            currency: store.accounts[index].currency,
            custodian: store.accounts[index].custodian,
            type: store.accounts[index].type,
            amount: store.accounts[index].amount,
          },
        });
      }
    }

    render() {
      if (this.state.readyToSubmit) {
        return <Redirect to="/"/>
      }

      return (
        <form className="add-account">
          <h2>Добавить счёт</h2>
          <Input
            className="add-account__input"
            label="Сумма"
            name="amount"
            onChange={this.handleInputChange}
            value={this.state.account.amount}
            required={true}
            autoFocus={true}
            type="number"
            step={0.01}
            min={0}
          />
          <label className="add-account__select">
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
            className="add-account__input"
            label="Вид инвестиции"
            name="type"
            onChange={this.handleInputChange}
            value={this.state.account.type}
          />
          <Input
            className="add-account__input"
            label="Место хранения"
            name="custodian"
            onChange={this.handleInputChange}
            value={this.state.account.custodian}
          />
          <button
            className="add-account__add"
            onClick={this.handleAdd}
            type="button"
          >
            Добавить счёт
          </button>
          <Link to="/">
            <button
              type="button"
            >
              Назад
            </button>
          </Link>
        </form>
      )
    }
  }
);

export default EditForm;
