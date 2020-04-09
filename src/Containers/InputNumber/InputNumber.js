import React, { Component, Fragment } from "react";
import { InputNumber, ThemeProvider } from "uru-ui";
import { connect } from "react-redux";

import * as actions from "../../store/actionTypes";
import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  InputNumberCode,
  CustomTheme,
} from "../../Components/Code/InputNumberCode";

export class InputNumberNumberComponent extends Component {
  render() {
    const theme = {
      borderColor: "blue",
      borderRadius: "30px",
      ":hover": {
        borderColor: "red",
      },
    };
    return (
      <Fragment>
        <Title
          title="InputNumber (campo numérico)"
          desc={
            "El campo numérico permite a los usuarios ingresar números y recibirlo formateado."
          }
        />
        <div className={globalStyles.ComponentExampleColumn}>
          <InputNumber
            placeholder="Número"
            variant="outlined"
            onChange={this.props.onGetNumber}
            value={this.props.inputNumber}
          />
          <div style={{ marginBottom: "12px" }}>
            <b>Número:</b> {this.props.inputNumber}
          </div>
          <p>
            En el componente InputNumber se puede obtener el número formateado a
            traves de la propiedad "onChange".
          </p>
        </div>
        <div>
          <h3>InputNumbers</h3>
          <p>
            El componente InputNumber soporta los estilos filled, outlined y
            default.
          </p>
          <div className={globalStyles.elementContainer}>
            <InputNumber placeholder="Input Number" variant="filled" />
            <InputNumber
              color="success"
              placeholder="Input Number"
              variant="outlined"
            />
            <InputNumber color="danger" placeholder="Input Number" />
          </div>
          <div className={globalStyles.code}>
            <InputNumberCode />
          </div>
        </div>
        <div>
          <h3>Estilos personalizados</h3>
          <p>
            También puedes agregar estilos personalizados a los inputNumber. He
            aquí un ejemplo.
          </p>
          <div className={globalStyles.elementContainer}>
            <ThemeProvider theme={theme}>
              <InputNumber
                variant="outlined"
                placeholder="Custom InputNumber"
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
    inputNumber: state.inputNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetNumber: (number) =>
      dispatch({ type: actions.INPUT_NUMBER, value: number }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputNumberNumberComponent);
