import * as actions from "./actions";

const initailState = {
  ingredients: null,
  price: 50,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
        console.log("indredient added");
      return state;

    case actions.REMOVE_INGREDIENT:
        console.log("indredient removed");
      return state;

    default:
      return state;
  }
};
