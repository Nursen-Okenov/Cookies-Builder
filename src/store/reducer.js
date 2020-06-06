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

export default (state = initailState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        [action.ingredient]: state.ingredients[action.ingredient] - 1,
      };

    default:
      return state;
  }
};
