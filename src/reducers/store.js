import { createStore } from "redux";

export const types = {
  AMOUNT_CHANGED: 'AMOUNT_CHANGED'
}

const initialState = {
  amount: 12,
  currencyCode: 'USD'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.AMOUNT_CHANGED:
      return {
        ...state,
        amount: action.newAmount
      }
    default:
      return state
  }
}

export const selectors = {
  amount: state => state.amount,
  currencyCode: state => state.currencyCode
}

export const actions = {
  changeAmount: (newAmount) => ({
    type: types.AMOUNT_CHANGED,
    newAmount
  })
}

export const store = createStore(reducer)