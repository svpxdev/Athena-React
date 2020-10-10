import React from "react";
import ReactDOM from "react-dom";
import { BasketStateProvider } from "./StateProvider";
import { initialState } from "./Reducer";
import reducer from "./Reducer";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BasketStateProvider initialState={initialState} reducer={reducer}>
      <App />
    </BasketStateProvider>
  </React.StrictMode>,
  rootElement
);
