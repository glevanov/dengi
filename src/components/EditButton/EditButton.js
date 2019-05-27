import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

EditButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default function EditButton(
  {
    index,
  }
) {
  return (
    <Link
      to={`/edit/${index}`}
    >
      Редактировать
    </Link>
  )
};
