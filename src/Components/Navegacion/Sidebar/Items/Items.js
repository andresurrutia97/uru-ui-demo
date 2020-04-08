import React from "react";
import Item from "./Item/Item";
import styles from "./Items.module.scss";
import { home, components, estilos } from "../../../../Routes";
import TreeView from "../../../UI/TreeView/TreeView";

const Items = (props) => {
  const [open, setOpen] = React.useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  let classComponents = [styles.ComponentsList];
  if (open) {
    classComponents = [styles.ComponentsList, styles.open];
  }

  const auxMap = (routes) => (
    <ul className={styles.ComponentsList_Items}>
      {routes.map((rt) => {
        return (
          <Item level key={rt.name} link={rt.path} close={props.close}>
            {rt.name}
          </Item>
        );
      })}
    </ul>
  );

  return (
    <div className={styles.Items}>
      <TreeView title="Uru-UI">{auxMap(home)}</TreeView>
      <TreeView title="Componentes">{auxMap(components)}</TreeView>
      <TreeView title="Estilos">{auxMap(estilos)}</TreeView>
    </div>
  );
};

export default Items;
