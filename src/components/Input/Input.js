import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

Input.propTypes = {
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Input.defaultProps = {
  type: 'text',
  autoComplete: false,
};

export default function Input(
  {
    autoComplete,
    autoFocus,
    disabled,
    label,
    min,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    step,
    type,
    value,
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
        placeholder={placeholder}
      />
    </label>
  )
};
