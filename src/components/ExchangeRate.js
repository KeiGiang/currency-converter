import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { selectors } from 'reducers/rates'
import RateTable from "./RateTable";
import CurrencyCodePicker from "./CurrencyCodePicker";
import AmountField from "./AmountField";
import { getExchangeRates } from "../api";

const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

const ExchangeRate = ({ amount, currencyCode }) => {
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      rates && setCurrencyData(rates);
    });
  }, [currencyCode]);

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
  currencyCode: selectors.getCurrencyCode(state)
})

export default connect(mapStateToProps)(ExchangeRate)
