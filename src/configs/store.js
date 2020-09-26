import { createStore, combineReducers } from "redux";
import tracnghiem from "../redux/reducer/tracnghiem";

const reducer = combineReducers({
  tracnghiem,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
