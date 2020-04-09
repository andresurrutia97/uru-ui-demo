import React from "react";
import Title from "../../Components/UI/Title/Title";
import styles from "../../styles/_global.module.scss";

const Instalacion = () => {
  return (
    <React.Fragment>
      <Title title="Instalación" />
      <h4>
        Uru-UI está disponible como un{" "}
        <a
          className={styles.Links}
          href={"https://www.npmjs.com/package/uru-ui"}
        >
          paquete npm
        </a>
        .
      </h4>
      <h3>Npm</h3>
      <div className={styles.code}>
        <pre className={styles.jsx}>
          <code>
            <span className={styles.tag}>
              <span>npm install --save uru-ui</span>
            </span>
          </code>
        </pre>
      </div>
    </React.Fragment>
  );
};

export default Instalacion;
