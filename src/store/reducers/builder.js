import * as types from "../actions/types";

const initailState = {
  ingredients: null,
  price: 50,
};

export default (state = initailState, action) => {
  const newState = { ...state };
  
  switch (action.type) {
    case types.ADD_INGREDIENT:
      newState.ingredients[action.ingredient].quantity++;
      newState.price = state.price + state.ingredients[action.ingredient].price;

      return newState;

    case types.REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient].quantity--;
      newState.price = state.price - state.ingredients[action.ingredient].price;

      return newState;

    case types.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        price: initailState.price,
      };

    default:
      return newState;
  }
};
