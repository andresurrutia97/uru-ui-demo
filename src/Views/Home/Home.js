import React from "react";
import logo from "../../Assets/img/logoWeb.png";
import styles from "./Home.module.scss";
import { Button } from "uru-ui";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Logo}>
        <img src={logo} alt="Uru-UI"></img>
        <div>
          <span className={styles.Uru}>uru</span>
          <span className={styles.UI} id="#3">
            UI
          </span>
          <span className={styles.Ver}>1.0.0</span>
        </div>
        <p>Librería de componentes muy cool para React</p>

        <div>
          <Button
            color="primary"
            onClick={() => {
              props.history.push("/instalacion");
            }}
          >
            Empezar
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
