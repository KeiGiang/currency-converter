import { connect } from "react-redux";
import { actions, selectors } from "reducers/rates";

const CurrencyCodePicker = ({
  dispatch,
  supportedCurrencies,
  currencyCode,
}) => {
  const onChange = event => {
    dispatch(actions.changeCurrencyCode(event.target.value))
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
  currencyCode: selectors.getCurrencyCode(state)
})

export default connect(mapStateToProps)(CurrencyCodePicker)
