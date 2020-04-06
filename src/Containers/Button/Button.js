import React, { Component, Fragment } from "react";
import { Button, ThemeProvider } from "uru-ui";
import { connect } from "react-redux";

import * as actions from "../../store/actionTypes";
import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  ContainedCode,
  OutlinedCode,
  CustomTheme,
} from "../../Components/Code/ButtonCode";

export class ButtonComponent extends Component {
  theme = {
    padding: "10px 20px",
    fontSize: "16px",
    border: "solid 2px #3d053d",
    borderRadius: "30px",
    backgroundColor: "#ff59ff",
    ":hover": {
      backgroundColor: "#a019a0",
    },
  };

  render() {
    let variant = "";
    let text = "";

    if (this.props.isOutlined) {
      variant = "outlined";
      text = "Cambiar a Contained";
    } else {
      variant = "";
      text = "Cambiar a Outlined";
    }

    return (
      <Fragment>
        <Title
          title="Botón"
          desc={
            "Los botones permiten a los usuarios ejecutar acciones, y tomar decisiones, con un simple toque."
          }
        />
        <div className={globalStyles.ComponentExample}>
          <Button
            onClick={this.props.onChangeVariant}
            color="primary"
            variant={variant}
          >
            {text}
          </Button>
        </div>

        <h2>Botones contenidos</h2>
        <p>
          Los Botones contenidos son de alto énfasis, distinguidos por el uso de
          elevación y relleno. Contienen acciones que son primarias para la
          aplicación.
        </p>
        <div className={globalStyles.elementContainer}>
          <Button color="primary">Primary</Button>
          <Button color="danger"> Danger</Button>
          <Button color="success">Success</Button>
          <Button>Default</Button>
        </div>
        <div className={globalStyles.code}>
          <ContainedCode />
        </div>

        <h2>Botones Outlined</h2>
        <p>
          Botones con contorno (outlined) son de énfasis medio. Contienen
          acciones que son importantes, pero no primarias en la app. Los botones
          delineados también son una alternativa de menos énfasis que los
          botones contenidos.
        </p>
        <div className={globalStyles.elementContainer}>
          <Button color="primary" variant="outlined">
            Primary
          </Button>
          <Button color="danger" variant="outlined">
            Danger
          </Button>
          <Button color="success" variant="outlined">
            Success
          </Button>
          <Button variant="outlined">Default</Button>
        </div>
        <div className={globalStyles.code}>
          <OutlinedCode />
        </div>

        <h2>Estilos personalizados</h2>
        <p>
          También puedes agregar estilos personalizados a los botones. He aquí
          un ejemplo.
        </p>
        <div className={globalStyles.elementContainer}>
          <ThemeProvider theme={this.theme}>
            <Button>Custom Style</Button>
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
    isOutlined: state.changeVariant
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeVariant: () => dispatch({ type: actions.CHANGE_VARIANT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
