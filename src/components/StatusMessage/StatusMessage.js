import React from 'react';
import PropTypes from 'prop-types';
import './StatusMessage.css';

StatusMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

function StatusMessage(
  {
    message,
  }
) {
  return (
    <p className="status-message">
      {message}
    </p>
  )
}

export default StatusMessage;
