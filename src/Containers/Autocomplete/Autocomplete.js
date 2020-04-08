import React, { Component, Fragment } from "react";
import { Autocomplete, ThemeProvider } from "uru-ui";
import { connect } from "react-redux";

import * as actions from "../../store/actionTypes";
import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  AutocompleteCode,
  CustomTheme,
} from "../../Components/Code/AutocompleteCode";

export class AutocompleteComponent extends Component {
  options = [
    "perro",
    "gato",
    "leon",
    "culebra",
    "pez",
    "tigre",
    "aguila",
    "arroz",
  ];
  render() {
    const theme = {
      root: { width: "300px" },
      input: {
        borderStyle: " dotted",
        borderWidth: " 3px",
        borderRadius: "none",
        ":hover": {
          borderColor: "red",
        },
      },
    };
    return (
      <Fragment>
        <Title
          title="Autocompletado"
          desc={
            "El autocompletado es una caja de texto normal mejorada por un panel de opciones sugeridas."
          }
        />

        <div className={globalStyles.ComponentExampleColumn}>
          <Autocomplete
            placeholder="Autocomplete..."
            variant="filled"
            options={this.props.options}
            onChange={this.props.onGetSelectedOption}
          />

          <div style={{ fontSize: "14px", marginTop: "8px" }}>
            <b>Seleccionaste:</b> {this.props.selectedOption[0]}
          </div>
        </div>
        <div>
          <h3>Combo box</h3>
          <p>
            El valor debe elegirse de un conjunto predefinido de valores
            permitidos.
          </p>
          <div className={globalStyles.elementContainer}>
            <Autocomplete
              placeholder="Autocomplete..."
              variant="filled"
              options={this.props.options}
            />
          </div>
          <div className={globalStyles.code}>
            <AutocompleteCode />
          </div>
        </div>
        <div>
          <h3>Estilos personalizados</h3>
          <p>
            También puedes agregar estilos personalizados a los
            inputNumInputNumbers. He aquí un ejemplo.
          </p>
          <div className={globalStyles.elementContainer}>
            <ThemeProvider theme={theme}>
              <Autocomplete
                variant="outlined"
                placeholder="Custom Autocomplete"
                options={this.props.options}
              />
            </ThemeProvider>
          </div>
          <div className={globalStyles.code}>
            <CustomTheme />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.optionsAutocomplete,
    selectedOption: state.optionSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSelectedOption: (selectedOption) =>
      dispatch({
        type: actions.GET_OPTION,
        optionSelected: selectedOption,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteComponent);
