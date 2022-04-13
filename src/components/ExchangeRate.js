import { useState, useCallback, useEffect } from "react";
import { connect } from 'react-redux'
import { selectors } from 'reducers/store'
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";

const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

const ExchangeRate = ({ amount, currencyCode }) => {
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });
  const setAmount = () => {}
  const setCurrencyCode = () => {}

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      setCurrencyData(rates);
    });
  }, [currencyCode]);

  const handleCurrencyCode = useCallback(
    (e) => setCurrencyCode(e.target.value),
    []
  );

  const handleAmountChange = useCallback((e) => {
    let newAmount = e.target.value;
    setAmount(newAmount);
  }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
            onChange={handleCurrencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} onChange={handleAmountChange} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}

const mapStateToProps = state => ({
  amount: selectors.amount(state),
  currencyCode: selectors.currencyCode(state)
})

export default connect(mapStateToProps)(ExchangeRate)
