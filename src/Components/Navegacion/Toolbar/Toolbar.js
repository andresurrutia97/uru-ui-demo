import React from "react";
import styles from "./Toolbar.module.scss";
import ToogleButton from "../ToogleButton/ToogleButton";
import { withRouter } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Toolbar}>
        <div className={styles.icono}>
          <ToogleButton clicked={props.open} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Toolbar);
