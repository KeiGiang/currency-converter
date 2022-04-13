import { connect } from "react-redux";
import { actions, selectors } from "reducers/store";

const CurrencyCodePicker = ({
  dispatch,
  supportedCurrencies,
  currencyCode,
}) => {
  const onChange = event => {
    dispatch(actions.changeCurrency(event.target.value))
  }

  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}

const mapStateToProps = state => ({
  currencyCode: selectors.currencyCode(state)
})

export default connect(mapStateToProps)(CurrencyCodePicker)
