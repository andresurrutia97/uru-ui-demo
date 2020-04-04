import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actionTypes";
import styles from "./Layout.module.scss";
import Sidebar from "../../Components/Navegacion/Sidebar/Sidebar";
import Toolbar from "../../Components/Navegacion/Toolbar/Toolbar";

export class Layout extends Component {
  render() {
    return (
      <div className={styles.Layout}>
        <div className={styles.SidebarContainer}>
          <Sidebar
            clasName={styles.Sidebar}
            closed={this.props.onCloseSidebar}
            open={this.props.showSidebar}
          />
        </div>

        <Toolbar open={this.props.onOpenSidebar} />

        <div className={styles.Content}>
          <div className={styles.Main}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.openSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenSidebar: () => dispatch({ type: actions.OPEN_SIDEBAR }),
    onCloseSidebar: () => dispatch({ type: actions.CLOSE_SIDEBAR }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
