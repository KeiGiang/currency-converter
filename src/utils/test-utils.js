import { Provider } from 'react-redux'
import store from "reducers";

export const withProvider = children => <Provider store={store}>{children}</Provider>
