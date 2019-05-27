import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import {observer} from 'mobx-react';
import store from 'store';
import Input from 'components/Input';
import './EditForm.css';
import emptyAccount from './emptyAccount';

const EditForm = observer(
  class AddAccount extends Component {
    constructor(props) {
      super(props);

      this.state = {
        account: {
          currency: this.props.account.currency,
          custodian: this.props.account.custodian,
          type: this.props.account.type,
          amount: this.props.account.amount,
        },
        readyToSubmit: false,
      };
    }

    static propTypes = {
      account: PropTypes.object,
    };

    static defaultProps = {
      account: emptyAccount,
    };

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

    render() {
      if (this.state.readyToSubmit) {
        return <Redirect to="/"/>
      }

      console.log(this.props.match.params.index);

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
