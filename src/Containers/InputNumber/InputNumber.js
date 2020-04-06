import React, { Component, Fragment } from "react";
import { InputNumber, ThemeProvider } from "uru-ui";

import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  ContainedCode,
  OutlinedCode,
  CustomTheme,
} from "../../Components/Code/ButtonCode";

export class InputNumberNumberComponent extends Component {

  render() {
    const theme = {
      width: "300px",
      height: "60px",
      padding: "8px",
      fontSize: "45px",
      margin: "5px",
      border: "dotted 3px",
      borderColor: "blue",
      borderRadius: "none",
      ":hover": {
        borderColor: "orange",
      },
    };
    return (
      <Fragment>
        <Title
          title="InputNumber (campo numerico)"
          desc={
            "El campo numerico permite a los usuarios ingresar números y formatearlos."
          }
        />
        <div>
          <h2>InputNumbers</h2>
          <p>
            El componente InputNumber soporta los estilos filled, outlined y
            default
          </p>
          <div className={globalStyles.elementContainer}>
            <InputNumber
              color="success"
              placeholder="Input Number"
              variant="filled"
            />
            <InputNumber placeholder="Input Number" variant="outlined" />
            <InputNumber color="danger" placeholder="Input Number" />
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
              <InputNumber
                variant="outlined"
                placeholder="custom InputNumber"
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

export default InputNumberNumberComponent;
