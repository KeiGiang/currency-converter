import { useEffect } from "react";
import { connect } from 'react-redux'
import { actions, selectors, supportedCurrencies } from 'reducers/rates'
import RateTable from "./RateTable";
import CurrencyCodePicker from "./CurrencyCodePicker";
import AmountField from "./AmountField";


const ExchangeRate = ({ amount, currencyCode, currencyData, dispatch }) => {
  useEffect(() => {
    dispatch(actions.changeCurrencyCode(currencyCode))
  }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
          />
        </h1>
      </section>
      <section>
        <AmountField />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}

const mapStateToProps = state => ({
  amount: selectors.getAmount(state),
  currencyCode: selectors.getCurrencyCode(state),
  currencyData: selectors.getCurrencyData(state)
})

export default connect(mapStateToProps)(ExchangeRate)
