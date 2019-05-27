import React from 'react';
import PropTypes from 'prop-types';

EditButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default function EditButton (
  {
    index,
  }
) {
  const handleEdit = () => {
    console.log(index);
  };

  return (
    <button
      type="button"
      onClick={handleEdit}
    >Редактировать</button>
  )
};
