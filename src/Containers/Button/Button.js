import React, { Component, Fragment } from "react";
import { Button, ThemeProvider } from "uru-ui";

import styles from "./Button.module.scss";
import globalStyles from "../../styles/_global.module.scss";
import Title from "../../Components/UI/Title/Title";
import {
  ContainedCode,
  OutlinedCode,
  CustomTheme,
} from "../../Components/Code/ButtonCode";

export class ButtonComponent extends Component {
  render() {
    const buttonCustomStyle = {
      padding: "10px 20px",
      fontSize: "16px",
      border: "solid 2px #3d053d",
      borderRadius: "30px",
      backgroundColor: "#ff59ff",
      ":hover": {
        backgroundColor: "#a019a0",
      }
    };
    return (
      <Fragment>
        <Title
          title="Botón"
          desc={
            "Los botones permiten a los usuarios ejecutar acciones, y tomar decisiones, con un simple toque."
          }
        />
        <div>
          <h2>Botones contenidos</h2>
          <p>
            Los Botones contenidos son de alto énfasis, distinguidos por el uso
            de elevación y relleno. Contienen acciones que son primarias para la
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
        </div>
        <div>
          <h2>Botones Outlined</h2>
          <p>
            Botones con contorno (outlined) son de énfasis medio. Contienen
            acciones que son importantes, pero no primarias en la app. Los
            botones delineados también son una alternativa de menos énfasis que
            los botones contenidos.
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
        </div>
        <div>
          <h2>Custom styles</h2>
          <p>
            También puedes agregar estilos personalizados a los botones. He aquí
            un ejemplo.
          </p>
          <div className={globalStyles.elementContainer}>
            <ThemeProvider theme={buttonCustomStyle}>
              <Button>Custom Style</Button>
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

export default ButtonComponent;
