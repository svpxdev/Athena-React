import React, { useContext, createContext, useReducer } from "react";

export const BasketState = createContext();

export function useBasketState() {
  return useContext(BasketState);
}

export const BasketStateProvider = ({ reducer, initialState, children }) => (
  <BasketState.Provider value={useReducer(reducer, initialState)}>
    {children}
  </BasketState.Provider>
);
