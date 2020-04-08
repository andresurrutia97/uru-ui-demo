import React, { Component, Fragment } from "react";
import { Input, ThemeProvider } from "uru-ui";
import { connect } from "react-redux";

import * as actions from "../../store/actionTypes";
import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import { InputCode, CustomTheme } from "../../Components/Code/InputCode";

export class InputComponent extends Component {
  theme = {
    width: "200px",
    padding: "8px",
    fontSize: "18px",
    borderRadius: "none",
    border: "1px solid ",
    borderColor: "green",
  };
  render() {
    return (
      <Fragment>
        <Title
          title="Input (campo de texto)"
          desc={
            "Los campos de texto permiten a los usuarios ingresar y editar texto."
          }
        />
        <div className={globalStyles.ComponentExampleColumn}>
          <Input
            color={this.props.characterNumber >= 6 ? "success" : "danger"}
            placeholder="Escribe 6 caracteres"
            variant="outlined"
            onChange={(e) => this.props.onGetCharactersNumber(e.target.value)}
            value={this.props.inputText}
          />
          <div style={{ fontSize: "14px" }}>
            <b>Escribiste:</b> {this.props.inputText}
            <br />
            <b># caracteres:</b> {this.props.characterNumber}
          </div>
        </div>
        <h3>Inputs</h3>
        <p>
          El componente Input soporta los estilos filled, outlined y default
        </p>
        <div className={globalStyles.elementContainer}>
          <Input
            color="success"
            placeholder="Filled success"
            variant="filled"
          />
          <Input placeholder="Outlined primary" variant="outlined" />
          <Input color="danger" placeholder="Default danger" />
        </div>
        <div className={globalStyles.code}>
          <InputCode />
        </div>

        <h3>Estilos personalizados</h3>
        <p>
          También puedes agregar estilos personalizados a los inputs. He aquí un
          ejemplo.
        </p>
        <div className={globalStyles.elementContainer}>
          <ThemeProvider theme={this.theme}>
            <Input variant="outlined" placeholder="Custom Input" />
          </ThemeProvider>
        </div>
        <div className={globalStyles.code}>
          <CustomTheme />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputText: state.inputText,
    characterNumber: state.characterNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCharactersNumber: (text) =>
      dispatch({ type: actions.GET_CHARACTERS_NUMBER, value: text }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
