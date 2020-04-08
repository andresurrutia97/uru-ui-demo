import React from "react";
import styles from "./TreeView.module.scss";

const TreeView = (props) => {
  const [open, setOpen] = React.useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  let classComponents = [styles.ComponentsList];
  if (open) {
    classComponents = [styles.ComponentsList, styles.open];
  }
  return (
    <React.Fragment>
      <div className={styles.ComponentsList_title} onClick={openHandler}>
        {props.title}
        {open ? (
          <span className="material-icons">expand_less</span>
        ) : (
          <span className="material-icons">expand_more</span>
        )}
      </div>
      <div className={classComponents.join(" ")}>{props.children}</div>
    </React.Fragment>
  );
};

export default TreeView;
