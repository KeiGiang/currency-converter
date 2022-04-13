import { getExchangeRates } from "api";

export const types = {
  AMOUNT_CHANGED: 'RATES/AMOUNT_CHANGED',
  CURRENCY_CODE_CHANGED: 'RATES/CURRENCY_CODE_CHANGED',
  CURRENCY_RATES_DATA_CHANGED: 'RATES/CURRENCY_RATES_DATA_CHANGED',
  RATES_LABEL_RECEIVED: 'RATES/RATES_LABEL_RECEIVED'
}

const initialState = {
  amount: 12,
  currencyCode: 'USD',
  currencyData: { USD: { displayLabel: 'US Dollars', code: 'USD', rate: 1.0 } },
  supportedCurrencies: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"]
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
    case types.CURRENCY_RATES_DATA_CHANGED:
      const codes = Object.keys(action.rates).concat(state.currencyCode)
      const currencyData = {}
      for (let code in action.rates) {
        currencyData[code] = { code, rate: action.rates[code] }
      }
      return {
        ...state,
        currencyData,
        supportedCurrencies: codes
      }
    case types.RATES_LABEL_RECEIVED:
      const { displayLabel, currencyCode } = action.rateInfo
      return {
        ...state,
        currencyData: {
          ...state.currencyData,
          [currencyCode]: {
            ...state.currencyData[currencyCode],
            displayLabel
          }
        }
      }
    default:
      return state
  }
}

export const selectors = {
  getAmount: state => state.rates.amount,
  getCurrencyCode: state => state.rates.currencyCode,
  getCurrencyData: state => state.rates.currencyData,
  getSupportedCurrencies: state => state.rates.supportedCurrencies,
  getDisplayLabel: (state, currencyCode)=> {
    const match = state.rates.currencyData[currencyCode]
    return match && match.displayLabel
  }
}

export const actions = {
  changeAmount: (newAmount) => ({
    type: types.AMOUNT_CHANGED,
    newAmount
  }),
  changeCurrencyCode: newCurrency => async (dispatch, getState) => {
    dispatch({
      type: types.CURRENCY_CODE_CHANGED,
      newCurrency
    })
    const state = getState()
    const supportedCurrencies = selectors.getSupportedCurrencies(state)
    const rates = await getExchangeRates(newCurrency, supportedCurrencies)
    dispatch({
      type: types.CURRENCY_RATES_DATA_CHANGED,
      rates
    })
  },
  fetchInitialRates: (dispatch, getState) => {
    const state = getState();
    const currencyCode = selectors.getCurrencyCode(state)
    dispatch(actions.changeCurrencyCode(currencyCode))
  }
}
