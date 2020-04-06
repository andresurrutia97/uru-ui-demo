import React, { Component, Fragment } from "react";
import { Autocomplete, ThemeProvider } from "uru-ui";

import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  ContainedCode,
  OutlinedCode,
  CustomTheme,
} from "../../Components/Code/ButtonCode";

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
        padding: "8px",
        fontSize: "14px",
        borderStyle: " dotted dashed double solid",
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
        <div>
          <h2>InputNumbers</h2>
          <p>
            El componente InputNumber soporta los estilos filled, outlined y
            default
          </p>
          <div className={globalStyles.elementContainer}>
            <Autocomplete
              placeholder="Input Number"
              variant="filled"
              options={this.options}
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
              <Autocomplete
                variant="outlined"
                placeholder="custom InputNumber"
                options={this.options}
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

export default AutocompleteComponent;
