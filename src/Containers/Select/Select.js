import React, { Component, Fragment } from "react";
import { Select, ThemeProvider } from "uru-ui";

import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  ContainedCode,
  OutlinedCode,
  CustomTheme,
} from "../../Components/Code/ButtonCode";

export class SelectComponent extends Component {
  render() {
    const optionsSelect = [
      { label: "Perro" },
      { label: "gato" },
      { label: "leon" },
      { label: "culebra" },
      { label: "pez" },
      { label: "tigre" },
      { label: "aguila" },
    ];

    const theme = {
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
    return (
      <Fragment>
        <Title
          title="Select"
          desc={
            "Los componentes seleccionados se utilizan para recopilar información relegado por el usuario de una lista de opciones."
          }
        />
        <div>
          <h2>Select - Selección única</h2>
          <div className={globalStyles.elementContainer}>
            <Select
              options={optionsSelect}

            />
          </div>
          <div className={globalStyles.code}>
            <ContainedCode />
          </div>
        </div>
        <div>
          <h2>Select - Selección multiple</h2>

          <div className={globalStyles.elementContainer}>
            <Select
              options={optionsSelect}
              multi
            />
          </div>
          <div className={globalStyles.code}>
            <ContainedCode />
          </div>
        </div>
        <div>
          <h2>Estilos personalizados</h2>
          <p>
            También puedes agregar estilos personalizados a los
            inputNumInputNumbers. He aquí un ejemplo.
          </p>
          <div className={globalStyles.elementContainer}>
            <ThemeProvider theme={theme}>
              <Select options={optionsSelect} />
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

export default SelectComponent;
