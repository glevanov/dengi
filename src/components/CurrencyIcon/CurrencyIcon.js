import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyIcon.css'
import RUB from './RUB.svg';
import USD from './USD.svg';
import EUR from './EUR.svg';

CurrencyIcon.propTypes = {
  currency: PropTypes.string.isRequired,
};

CurrencyIcon.defaultProps = {
  currency: 'RUB',
};

export default function CurrencyIcon(
  {
    currency,
  }
) {
  const selectImage = (currency) => {
    switch(currency) {
      case 'RUB':
        return RUB;
      case 'USD':
        return USD;
      case 'EUR':
        return EUR;
      default:
        return currency;
    }
  };

  return (
    <div className="currency-icon">
      <img
        className="currency-icon__icon"
        src={selectImage(currency)}
        alt={`Код валюты: ${currency}`}/>
    </div>
  )
};
