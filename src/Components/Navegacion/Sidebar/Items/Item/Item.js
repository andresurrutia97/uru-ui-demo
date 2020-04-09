import React from "react";
import styles from "./Item.module.scss";
import { NavLink } from "react-router-dom";

const Item = (props) => {
  let classText = [styles.Item_text];

  if (props.level) {
    classText = [styles.Item_text, styles.level];
  }
  if (props.level2) {
    classText = [styles.Item_text, styles.level2];
  }

  return (
    <li onClick={props.close} className={styles.Item}>
      <NavLink activeClassName={styles.active} to={props.link} exact>
        <div className={styles.hoverFlag} />
        <div className={classText.join(" ")}>{props.children}</div>
      </NavLink>
    </li>
  );
};

export default Item;
