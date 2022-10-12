import { useState } from "react";

const initialState = {
  cart: [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) =>
    setState({
      cart: [...state.cart, payload],
    });
  return {
    state,
    addToCart,
  };
};
