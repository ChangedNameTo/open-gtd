import * as React from "react";
import * as ReactDOM from "react-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./store";

import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router basename="open-gtd">
          <App />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
