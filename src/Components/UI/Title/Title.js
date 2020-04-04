import React from "react";
import styles from "./Title.module.scss";

const Title = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Title}>{props.title}</div>
      <div className={styles.Desc}>{props.desc}</div>
    </React.Fragment>
  );
};

export default Title;
