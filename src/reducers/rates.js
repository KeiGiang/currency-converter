export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export const types = {
  AMOUNT_CHANGED: 'RATES/AMOUNT_CHANGED',
  CURRENCY_CODE_CHANGED: 'RATES/CURRENCY_CODE_CHANGED',
  CURRENCY_DATA_CHANGED: 'RATES/CURRENCY_DATA_CHANGED'
}

const initialState = {
  amount: 12,
  currencyCode: 'USD',
  currencyData: { USD: 1.0 }
}

export const ratesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.AMOUNT_CHANGED:
      return {
        ...state,
        amount: action.newAmount
      }
    case types.CURRENCY_CODE_CHANGED:
      return {
        ...state,
        currencyCode: action.newCurrency
      }
    case types.CURRENCY_DATA_CHANGED:
      return {
        ...state,
        currencyData: action.rates
      }
    default:
      return state
  }
}

export const selectors = {
  getAmount: state => state.rates.amount,
  getCurrencyCode: state => state.rates.currencyCode,
  getCurrencyData: state => state.rates.currencyData
}

export const actions = {
  changeAmount: (newAmount) => ({
    type: types.AMOUNT_CHANGED,
    newAmount
  }),
  changeCurrencyCode: newCurrency => ({
    type: types.CURRENCY_CODE_CHANGED,
    newCurrency
  })
}
