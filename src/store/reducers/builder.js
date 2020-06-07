import * as types from "../actions/types";

const initailState = {
  ingredients: {
    FrenchCookie: { quantity: 1, price: 3.5, label: "FrenchCookie" },
    MexicanCookie: { quantity: 1, price: 3.6, label: "Mexican Cookie" },
    RainbowCookie: { quantity: 1, price: 4, label: "Rainbow Cookie" },
    SerinakakerCookie: { quantity: 1, price: 4.5, label: "Serinakaker Cookie" },
    SpanishСookie: { quantity: 1, price: 5, label: "Spanish Сookie" },
    TahiniСookie: { quantity: 1, price: 5.2, label: "Tahini Сookie" },
  },
  price: 50,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity + 1,
          },
        },
        price: state.price + state.ingredients[action.ingredient].price,
      };

    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity - 1,
          },
        },
        price: state.price - state.ingredients[action.ingredient].price,
      };

    default:
      return state;
  }
};
