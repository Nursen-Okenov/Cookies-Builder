import * as actions from "./actions";

const initailState = {
  ingredients: {
    FrenchCookie: 1,
    MexicanCookie: 1,
    RainbowCookie: 1,
    SerinakakerCookie: 1,
    SpanishСookie: 1,
    TahiniСookie: 1,
  },
  price: 50,
};

const PRICES = {
  FrenchCookie: 3.5,
  MexicanCookie: 3.6,
  RainbowCookie: 4,
  SerinakakerCookie: 4.5,
  SpanishСookie: 5,
  TahiniСookie: 5.2,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price + PRICES[action.ingredient],
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price - PRICES[action.ingredient],
      };

    default:
      return state;
  }
};
