import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { actions } from "reducers/rates";
import ExchangeRate from "./components/ExchangeRate";
import { store } from "./reducers/store";
import "./style.css";

store.dispatch(actions.fetchInitialRates)

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
);
