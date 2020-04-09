import React from "react";
import styles from "./Paleta.module.scss";

const Paleta = (props) => {
  return (
    <div className={styles.Paleta}>
      <div className={styles.Title}>{props.name}</div>
      <div>
        {props.colors.map((cl) => {
          return (
            <div
              className={styles.PaletaItem}
              style={{ backgroundColor: cl.color }}
            >
              <div className={styles.Pills}>
                {cl.name}{" "}
                <span className={styles.PillsCode}>
                  {"- "}
                  {cl.color}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Paleta;
