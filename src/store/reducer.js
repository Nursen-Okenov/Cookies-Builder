import * as actions from "./actions";

const initailState = {
  ingredients: null,
  price: 50,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENTS:
      return state;

    case actions.REMOVE_INGREDIENTS:
      return state;

    default:
      return state;
  }
};
