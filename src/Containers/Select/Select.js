import React, { Component, Fragment } from "react";
import { Select, ThemeProvider } from "uru-ui";
import { connect } from "react-redux";

import * as actions from "../../store/actionTypes";
import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  SingleSelection,
  MultiSelection,
  CustomTheme,
} from "../../Components/Code/SelectCode";

export class SelectComponent extends Component {
  theme = {
    root: {
      borderWidth: "3px",
      borderRadius: "0 50px 50px 0",
      borderColor: "blue",
      width: "300px",
      ":hover": { borderColor: "green", borderWidth: "3px" },
      ":focus": { borderColor: "black", borderWidth: "3px" },
    },
    selectedOptionItem: { color: "red" },
    selectedOptionsPills: {
      backgroundColor: "#a3e4be",
    },
    placeholder: {
      color: "#c934ce",
    },
  };

  render() {
    let optionsSel = "Selecciona una opción...";
    const number = this.props.selectedOptions.length;
    if (this.props.selectedOptions.length) {
      optionsSel = this.props.selectedOptions.map((itemSle, i) => (
        <li key={i}>{itemSle.label}</li>
      ));
    }

    return (
      <Fragment>
        <Title
          title="Select"
          desc={
            "Los componentes seleccionados se utilizan para recopilar información relegado por el usuario de una lista de opciones."
          }
        />
        <div className={globalStyles.ComponentExample}>
          <Select
            multi
            options={this.props.options}
            onChange={this.props.onGetSelectedOptions}
          />
          <div className={globalStyles.SelectContainer}>
            <span style={{ fontWeight: "600" }}>
              Opciones seleccionadas: {number}{" "}
            </span>
            <ul className={globalStyles.SelecetUl}>{optionsSel}</ul>
          </div>
        </div>

        <div>
          <h3>Select - Selección única</h3>
          <p>
            En el componente Select se puede obtener las opciones seleccionadas
            a traves de la propiedad "onChange". Al pasarla se retornará un
            arreglo con la/s opciones seleccionadas
          </p>
          <div className={globalStyles.elementContainer}>
            <Select options={this.props.options} />
          </div>
          <div className={globalStyles.code}>
            <SingleSelection />
          </div>
        </div>
        <div>
          <h3>Select - Selección multiple</h3>
          <p>
            El componente select soporta seleccion multiple. Se activa con la
            propiedad "multi".
          </p>
          <div className={globalStyles.elementContainer}>
            <Select options={this.props.options} multi />
          </div>
          <div className={globalStyles.code}>
            <MultiSelection />
          </div>
        </div>
        <div>
          <h3>Estilos personalizados</h3>
          <p>
            También puedes agregar estilos personalizados a los
            inputNumInputNumbers. He aquí un ejemplo.
          </p>
          <div className={globalStyles.elementContainer}>
            <ThemeProvider theme={this.theme}>
              <Select multi options={this.props.options} />
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
    options: state.optionsSelect,
    selectedOptions: state.selectedOptions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSelectedOptions: (selectedOptions) =>
      dispatch({
        type: actions.GET_SELECTED_OPTIONS,
        options: selectedOptions,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent);
