import { connect } from 'react-redux'
import { selectors } from 'reducers/rates'
import RateTable from "./RateTable";
import CurrencyCodePicker from "./CurrencyCodePicker";
import AmountField from "./AmountField";


const ExchangeRate = ({ amount, currencyData }) => {
  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker/>
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
