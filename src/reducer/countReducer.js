const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return state + 1;
    case "DEC_COUNTER":
      return state - 1;
    case "MULTI_COUNTER":
      return state * 2;
    case "DIVI_COUNTER":
      return state / 2;
    case "RESET_COUNTER":
      return state * 0;
    default:
      return state;
  }
};

export default countReducer;
