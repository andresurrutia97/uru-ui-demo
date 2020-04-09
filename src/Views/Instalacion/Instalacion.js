import React from "react";
import Title from "../../Components/UI/Title/Title";
import globalStyles from "../../styles/_global.module.scss";

const Instalacion = () => {
  return (
    <React.Fragment>
      <Title title="Instalación" />
      <h4>
        Uru-UI está disponible como un{" "}
        <a
          className={globalStyles.Links}
          href={"https://www.npmjs.com/package/uru-ui"}
        >
          paquete npm
        </a>
        .
      </h4>
      <h3>Npm</h3>
      <div className={globalStyles.code}>
        <pre className={globalStyles.jsx}>
          <code>
            <span className={globalStyles.tag}>
              <span>npm install --save uru-ui</span>
            </span>
          </code>
        </pre>
      </div>
    </React.Fragment>
  );
};

export default Instalacion;
