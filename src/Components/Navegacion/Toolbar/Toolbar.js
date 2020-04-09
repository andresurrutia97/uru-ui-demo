import React from "react";
import styles from "./Toolbar.module.scss";
import ToogleButton from "../ToogleButton/ToogleButton";
import { withRouter } from "react-router-dom";
import github from "../../../Assets/img/github-11-512.png";
import npm from "../../../Assets/img/npm.png";

const Toolbar = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Toolbar}>
        <div className={styles.icono}>
          <ToogleButton clicked={props.open} />
        </div>

        <div className={styles.IconLinks}>
          <a href="https://www.npmjs.com/package/uru-ui">
            <img src={npm} alt="npm link" />
          </a>
          <a href="https://github.com/andresurrutia97/uru-ui">
            <img src={github} alt="Github link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Toolbar);
