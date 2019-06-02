import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

Icon.propTypes = {
  color: PropTypes.string,
  elementClass: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  color: 'primary',
};

export default function Icon(
  {
    color,
    elementClass,
    children,
    onClick,
  }
) {
  let classes = 'icon';
  classes += ` icon--color-${color}`;
  if (elementClass) {
    classes += ` ${elementClass}`;
  }

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      {children}
    </div>
  )
};
