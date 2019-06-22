import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import RUB from './RUB.svg';
import USD from './USD.svg';
import EUR from './EUR.svg';

CurrencyIcon.propTypes = {
  currency: PropTypes.string.isRequired,
};

function CurrencyIcon(
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
    <Icon
      children={
        <img src={selectImage(currency)}
             alt={`Код валюты: ${currency}`}
             width="auto"
             height="22"
        />
      }
    />
  )
}

export default CurrencyIcon;
