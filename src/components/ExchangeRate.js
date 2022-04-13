import RateTable from "./RateTable";
import CurrencyCodePicker from "./CurrencyCodePicker";
import AmountField from "./AmountField";

const ExchangeRate = () => {
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
        <RateTable />
      </section>
    </>
  );
}

export { ExchangeRate }
