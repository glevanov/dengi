import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

Button.propTypes = {
  elementClass: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default function Button(
  {
    elementClass,
    onClick,
    title,
  }
) {
  let classes = 'button';
  if (elementClass) {
    classes += ` ${elementClass}`;
  }

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {title}
    </button>
  )
};
