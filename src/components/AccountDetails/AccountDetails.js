import React from 'react';
import PropTypes from 'prop-types';
import './AccountDetails.css';
import {formatNum} from 'currency';

AccountDetails.propTypes = {
  amount: PropTypes.number.isRequired,
  type: PropTypes.string,
  custodian: PropTypes.string,
  elementClass: PropTypes.string,
};

function AccountDetails(
  {
    amount,
    type,
    custodian,
    elementClass,
  }
) {
  let classes = 'account-details';
  if (elementClass) {
    classes += ` ${elementClass}`;
  }

  return (
    <p className={classes}>
      <span className="account-details__amount">{formatNum(amount)}</span>
      <span className="account-details__details">
        {type && custodian
          ? `${type} в ${custodian}`
          : `${type}${custodian}`
        }
      </span>
    </p>
  )
}

export default AccountDetails;
