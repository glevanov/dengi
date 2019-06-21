import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {observer} from 'mobx-react';
import store from 'store';
import Input from 'components/Input';
import Button from 'components/Button';
import './EditForm.css';

const EditForm = class AddAccount extends Component {
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
    if (this.index) {
      store.updateAccount(this.state.account, this.index);
    } else {
      store.addAccount(this.state.account);
    }
    this.setState({readyToSubmit: true})
  };

  index = this.props.match.params.index;

  componentDidMount() {
    // Gets initial state from store if we get an index from route
    if (this.index) {
      this.setState({
        account: {
          currency: store.accounts[this.index].currency,
          custodian: store.accounts[this.index].custodian,
          type: store.accounts[this.index].type,
          amount: store.accounts[this.index].amount,
        },
      });
    }
  }

  render() {
    if (this.state.readyToSubmit) {
      return <Redirect to="/"/>
    }

    return (
      <form className="edit-form">
        <h2 className="edit-form__heading">
          {this.index ? 'Редактирование счёта' : 'Добавить счёт'}
        </h2>
        <Input
          className="edit-form__input"
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
        <label className="edit-form__select">
          Валюта
          <select
            className="edit-form__select-field"
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
          className="edit-form__input"
          label="Вид инвестиции"
          name="type"
          onChange={this.handleInputChange}
          value={this.state.account.type}
          placeholder="Вклад, брокерский счёт"
        />
        <Input
          className="edit-form__input"
          label="Место хранения"
          name="custodian"
          onChange={this.handleInputChange}
          value={this.state.account.custodian}
          placeholder="Название банка, брокера"
        />
        <div className="edit-form__button-wrap">
          <Link
            to="/"
            style={{"text-decoration": "none"}}
            className={'edit-form__button'}
          >
            <Button
              title={"Назад"}
            />
          </Link>
          <Button
            onClick={this.handleAdd}
            elementClass={'edit-form__button button--primary'}
            title={this.index ? 'Сохранить изменения' : 'Добавить счёт'}
          />
        </div>
      </form>
    )
  }
};

export default observer(EditForm);
