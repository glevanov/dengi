import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoComplete: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  autoComplete: false,
};

export default function Input(
  {
    label,
    name,
    type,
    step,
    onChange,
    value,
    required,
    autoFocus,
    autoComplete,
    readOnly,
    disabled,
  }) {

  return (
    <label>
      {`${label}:`}
      <input
        name={name}
        type={type}
        step={`${step}`}
        onChange={onChange}
        value={value}
        required={required}
        autoFocus={autoFocus}
        autoComplete={`${autoComplete}`}
        readOnly={readOnly}
        disabled={disabled}
      />
    </label>
  )
};
