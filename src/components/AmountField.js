import { connect } from "react-redux";
import { actions, selectors } from "reducers/rates";

const AmountField = ({ dispatch, amount }) => {
  const onChange = event => {
    dispatch(actions.changeAmount(event.target.value))
  }
  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}

const mapStateToProps = state => ({
  amount: selectors.amount(state),
})

export default connect(mapStateToProps)(AmountField)
