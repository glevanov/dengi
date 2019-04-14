import {
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
} from './actions'

function addAccount(account) {
  return {
    type: ADD_ACCOUNT,
    account,
  }
}

function removeAccount(index) {
  return {
    type: REMOVE_ACCOUNT,
    index,
  }
}
