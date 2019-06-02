import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import editIcon from "./edit-button.svg";

EditAccount.propTypes = {
  index: PropTypes.number.isRequired,
  elementClass: PropTypes.string,
};

export default function EditAccount(
  {
    index,
    elementClass,
  }
) {
  return (
    <Link
      to={`/edit/${index}`}
      aria-label="Редактировать"
      className={elementClass}
    >
      <Icon
        children={
          <img src={editIcon}
               alt="Редактировать"
               width="17"
               height="auto"
          />
        }
      />
    </Link>
  )
};
