import React, { Component, Fragment } from "react";
import Title from "../../Components/UI/Title/Title";
import { Button } from "uru-ui";

export class ButtonComponent extends Component {
  render() {
    return (
      <Fragment>
        <Title
          title="Button"
          desc={"Permiten accionar eventos en la aplicación"}
        />
        <div>
          <div>
            <Button color="danger"> Click Me</Button>
            <Button color="succes"> Click Me</Button>
            <Button color="primary">Click Me</Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ButtonComponent;
