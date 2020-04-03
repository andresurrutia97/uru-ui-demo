import React from "react";
import styles from "./Sidebar.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import uruUiLogo from "../../../Assets/img/uru-ui-logo.png";

import Items from "./Items/Items";
import Routes from "../../../Routes";

const Sidebar = (props) => {
  let attachedClasses = [styles.Sidebar, styles.Close];
  if (props.open) {
    attachedClasses = [styles.Sidebar, styles.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} close={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Container}>
          <div className={styles.Logo}>
            <img src={uruUiLogo} alt="Uru-UI"></img>
          </div>
          <hr
            style={{
              width: "85%",
              backgroundColor: "#ccc",
              border: "none",
              height: "1px",
            }}
          />
          <Items routes={Routes} close={props.closed} />
        </div>
        <div style={{ width: "100%" }}>
          {/* <div className={styles.LogoAuto}>
            <img src={uaoLogo} alt="Universidad Autónoma de Occidentes"></img>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
