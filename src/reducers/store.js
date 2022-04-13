import { createStore } from "redux";

const initialState = {
  amount: 12,
  currencyCode: 'USD'
}

const reducer = (state = initialState, action) => {
  return state;
}

export const selectors = {
  amount: state => state.amount,
  currencyCode: state => state.currencyCode
}

export const store = createStore(reducer)