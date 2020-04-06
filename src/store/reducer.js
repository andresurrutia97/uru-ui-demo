import * as actionTypes from "./actionTypes";
import { updateObject } from "../shared/utility";

const initialState = {
  //siderbar
  openSidebar: false,
  //button
  changeVariant: false,
  //Input
  inputText: "",
  characterNumber: 0,
};

//siderbar
const openSidebar = (state) => {
  const aux = state.openSidebar;
  return updateObject(state, { openSidebar: !aux });
};

const closeSidebar = (state) => {
  return updateObject(state, { openSidebar: false });
};

//button
const changeButtonVariant = (state) => {
  const outlined = state.changeVariant;
  return updateObject(state, { changeVariant: !outlined });
};

//Input
const getCharacterNumber = (state, action) => {
  const characterNumber = action.value.length;
  return updateObject(state, { inputText: action.value, characterNumber });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //sidebar
    case actionTypes.OPEN_SIDEBAR:
      return openSidebar(state);

    case actionTypes.CLOSE_SIDEBAR:
      return closeSidebar(state);

    //button
    case actionTypes.CHANGE_VARIANT:
      return changeButtonVariant(state);

    //Input
    case actionTypes.GET_CHARACTERS_NUMBER:
      return getCharacterNumber(state, action);

    default:
      return state;
  }
};

export default reducer;
