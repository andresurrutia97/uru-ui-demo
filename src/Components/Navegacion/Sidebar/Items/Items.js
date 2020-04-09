import React from "react";
import Item from "./Item/Item";
import styles from "./Items.module.scss";
import { home, introduccion, components, estilos } from "../../../../Routes";
import TreeView from "../../../UI/TreeView/TreeView";

const Items = (props) => {
  const auxMap = (routes) => (
    <ul className={styles.ComponentsList_Items}>
      {routes.map((rt) => {
        return (
          <Item level2 key={rt.name} link={rt.path} close={props.close}>
            {rt.name}
          </Item>
        );
      })}
    </ul>
  );

  return (
    <div className={styles.Items}>
      <Item level key={home[0].name} link={home[0].path} close={props.close}>
        {home[0].name}
      </Item>
      <TreeView title="Introduccion">{auxMap(introduccion)}</TreeView>
      <TreeView title="Componentes">{auxMap(components)}</TreeView>
      <TreeView title="Estilos">{auxMap(estilos)}</TreeView>
    </div>
  );
};

export default Items;
