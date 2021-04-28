export const ACTIONS = {
  INITIALIZE: "initialize",
  CHANGE_FEATURE: "change-feature",
  CHANGE_AMOUNT: "change-amount",
};

export const pickReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INITIALIZE:
      return action.payload.pick;
    case ACTIONS.CHANGE_FEATURE:
      return { ...state, ...action.payload };
    case ACTIONS.CHANGE_AMOUNT:
      if (action.payload.amount === 0) return { ...state, amount: 1 };
      return { ...state, amount: action.payload.amount };
    default:
      return state;
  }
};
