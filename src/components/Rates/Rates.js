import React from 'react';
import PropTypes from 'prop-types';
import './Rates.css';
import {formatNum} from 'currency';

Rates.propTypes = {
  USD: PropTypes.number.isRequired,
  EUR: PropTypes.number.isRequired,
};

function Rates(
  {
    USD,
    EUR,
  }
) {
  return (
    <p className="rates">
      <span className="rates__currency">USD:</span> {USD && formatNum(USD)}
      , <span className="rates__currency">EUR:</span> {EUR && formatNum(EUR)}
    </p>
  )
}

export default Rates;
