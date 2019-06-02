import React from 'react';
import store from 'store';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import deleteIcon from './delete-button.svg'

DeleteAccount.propTypes = {
  index: PropTypes.number.isRequired,
  elementClass: PropTypes.string,
};

export default function DeleteAccount(
  {
    index,
    elementClass,
  }
) {
  const handleDelete = () => {
    store.accounts = [].concat(
      store.accounts.slice(0, index),
      store.accounts.slice(index + 1)
    );
  };

  return (
    <Icon
      color={'error'}
      elementClass={elementClass}
      onClick={handleDelete}
      children={
        <img src={deleteIcon}
             alt="Удалить счет"
             width="17"
             height="auto"
        />
      }
    />
  )
};
