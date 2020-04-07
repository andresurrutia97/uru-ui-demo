import React, { Component, Fragment } from "react";
import { InputNumber, ThemeProvider } from "uru-ui";
import { connect } from "react-redux";

import * as actions from "../../store/actionTypes";
import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import { InputNumberCode, CustomTheme } from "../../Components/Code/InputNumberCode";

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
        <div className={globalStyles.ComponentExample}>
          <InputNumber
            color={this.props.characterNumber >= 6 ? "success" : "danger"}
            placeholder="Escribe 6 caracteres"
            variant="outlined"
            onChange={(e) => this.props.onGetNumber(e.target.value)}
            value={this.props.inputNumber}
          />
          <div style={{ fontSize: "14px" }}>
            <b>Escribiste:</b> {this.props.inputNumber}
          </div>
        </div>
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
            <InputNumberCode />
          </div>
        </div>
        <div>
          <h2>Estilos personalizados</h2>
          <p>
            También puedes agregar estilos personalizados a los
            inputNumber. He aquí un ejemplo.
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
