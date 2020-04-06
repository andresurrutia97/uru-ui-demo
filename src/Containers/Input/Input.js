import React, { Component, Fragment } from "react";
import { Input, ThemeProvider } from "uru-ui";
import { connect } from "react-redux";

import * as actions from "../../store/actionTypes";
import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  ContainedCode,
  OutlinedCode,
  CustomTheme,
} from "../../Components/Code/ButtonCode";

export class InputComponent extends Component {
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
          title="Input (campo de texto)"
          desc={
            "Los campos de texto permiten a los usuarios ingresar y editar texto."
          }
        />
        <div className={globalStyles.ComponentExample}>
          <Input
            color={this.props.characterNumber >= 6 ? "success" : "danger"}
            placeholder="Escribe 6 caracteres"
            variant="outlined"
            onChange={(e) => this.props.onGetCharactersNumber(e.target.value)}
          />
          <div style={{ fontSize: "14px" }}>
            <p><b>Escribiste:</b> {this.props.inputText}</p>
            
            <br />
            <b># caracteres:</b> {this.props.characterNumber}
          </div>
        </div>
        <h2>Inputs</h2>
        <p>
          El componente Input soporta los estilos filled, outlined y default
        </p>
        <div className={globalStyles.elementContainer}>
          <Input
            color="success"
            placeholder="filled success"
            variant="filled"
          />
          <Input placeholder="outlined primary" variant="outlined" />
          <Input color="danger" placeholder="Default danger" />
        </div>
        <div className={globalStyles.code}>
          <ContainedCode />
        </div>

        <h2>Estilos personalizados</h2>
        <p>
          También puedes agregar estilos personalizados a los inputs. He aquí un
          ejemplo.
        </p>
        <div className={globalStyles.elementContainer}>
          <ThemeProvider theme={theme}>
            <Input variant="outlined" placeholder="custom Input" />
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
