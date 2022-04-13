export const types = {
  AMOUNT_CHANGED: 'RATES/AMOUNT_CHANGED',
  CURRENCY_CHANGED: 'RATES/CURRENCY_CHANGED'
}

const initialState = {
  amount: 12,
  currencyCode: 'USD'
}

export const ratesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.AMOUNT_CHANGED:
      return {
        ...state,
        amount: action.newAmount
      }
    case types.CURRENCY_CHANGED:
      return {
        ...state,
        currencyCode: action.newCurrency
      }
    default:
      return state
  }
}

export const selectors = {
  amount: state => state.rates.amount,
  currencyCode: state => state.rates.currencyCode
}

export const actions = {
  changeAmount: (newAmount) => ({
    type: types.AMOUNT_CHANGED,
    newAmount
  }),
  changeCurrency: newCurrency => ({
    type: types.CURRENCY_CHANGED,
    newCurrency
  })
}
