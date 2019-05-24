import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  step: PropTypes.number,
  min: PropTypes.number,
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
    min,
    onChange,
    value,
    required,
    autoFocus,
    autoComplete,
    readOnly,
    disabled,
  }) {

  return (
    <label className={'input'}>
      {`${label}:`}
      <input
        className={'input__field'}
        name={name}
        type={type}
        step={`${step}`}
        min={`${min}`}
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
