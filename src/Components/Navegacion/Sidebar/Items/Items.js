import React from "react";
import Item from "./Item/Item";
import styles from "./Items.module.scss";
import { home, components } from "../../../../Routes";

const Items = (props) => {
  const [open, setOpen] = React.useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  let classComponents = [styles.ComponentsList];
  if (open) {
    classComponents = [styles.ComponentsList, styles.open];
  }

  return (
    <div className={styles.Items}>
      <Item key={home.name} link={home.path} close={props.close}>
        {home.name}
      </Item>
      <div className={styles.ComponentsList_title} onClick={openHandler}>
        Componentes
        {open ? (
          <span className="material-icons">expand_less</span>
        ) : (
          <span className="material-icons">expand_more</span>
        )}
      </div>
      <div className={classComponents.join(" ")}>
        <ul className={styles.ComponentsList_Items}>
          {components.map((rt) => {
            return (
              <Item level key={rt.name} link={rt.path} close={props.close}>
                {rt.name}
              </Item>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Items;
