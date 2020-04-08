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
  //InputNumber
  inputNumber: "",
  //Select
  optionsSelect: [
    { label: "Perro" },
    { label: "gato" },
    { label: "leon" },
    { label: "culebra" },
    { label: "pez" },
    { label: "tigre" },
    { label: "aguila" },
  ],
  selectedOptions: [],
  //Autocomplete
  optionsAutocomplete: [
    "perro",
    "gato",
    "leon",
    "culebra",
    "pez",
    "tigre",
    "aguila",
    "arroz",
  ],
  optionSelected: [],
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

//InputNumebr
const inputNumber = (state, action) => {
  return updateObject(state, { inputNumber: action.value });
};

//Select
const selectedOptions = (state, action) => {
  return updateObject(state, { selectedOptions: action.options });
};

//Autocomplete
const selectedOptionselectedOption = (state, action) => {
  return updateObject(state, { optionSelected: action.optionSelected });
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

    //InputNumber
    case actionTypes.INPUT_NUMBER:
      return inputNumber(state, action);

    //Selected
    case actionTypes.INPUT_NUMBER:
      return inputNumber(state, action);

    case actionTypes.GET_SELECTED_OPTIONS:
      return selectedOptions(state, action);

    //Autocomplete
    case actionTypes.GET_OPTION:
      return selectedOptionselectedOption(state, action);

    default:
      return state;
  }
};

export default reducer;
