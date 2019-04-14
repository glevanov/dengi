import {
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
} from '../actions'

const initialState = {
  accounts: [],
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case ADD_ACCOUNT:
      return Object.assign({}, state, {
        accounts: [
          ...state.accounts,
          action.account
        ],
      });
    case REMOVE_ACCOUNT:
      return Object.assign({}, state, {
        accounts: []
          .concat(state.accounts.slice(0, action.index))
          .concat(state.accounts.slice(action.index + 1))
      });
    default:
      return state
  }
}
