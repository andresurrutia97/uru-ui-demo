import * as actionTypes from "./actionTypes";
import { updateObject } from "../shared/utility";

const initialState = {
  openSidebar: false,
};

const openSidebar = (state) => {
  const aux = state.openSidebar;
  return updateObject(state, { openSidebar: !aux });
};

const closeSidebar = (state) => {
  return updateObject(state, { openSidebar: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //sidebar
    case actionTypes.OPEN_SIDEBAR:
      return openSidebar(state);

    case actionTypes.CLOSE_SIDEBAR:
      return closeSidebar(state);

    default:
      return state;
  }
};

export default reducer;
