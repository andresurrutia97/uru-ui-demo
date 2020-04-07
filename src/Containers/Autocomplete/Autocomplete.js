import React, { Component, Fragment } from "react";
import { Autocomplete, ThemeProvider } from "uru-ui";

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

        <div className={globalStyles.ComponentExample}>
          <Autocomplete
            placeholder="Autocomplete..."
            variant="filled"
            options={this.options}
          />
          <div className={globalStyles.SelectContainer}>
            <div style={{ fontWeight: "600", height: "250px" }}>
              Opciones seleccionadas
            </div>
          </div>
        </div>
        <div>
          <h2>Combo box</h2>
          <p>
            El valor debe elegirse de un conjunto predefinido de valores
            permitidos.
          </p>
          <div className={globalStyles.elementContainer}>
            <Autocomplete
              placeholder="Autocomplete..."
              variant="filled"
              options={this.options}
            />
          </div>
          <div className={globalStyles.code}>
            <AutocompleteCode />
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
                placeholder="Custom Autocomplete"
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
