import Home from "./Containers/Home/Home";
import ButtonComponent from "./Containers/Button/Button";
import Input from "./Containers/Input/Input";

export const home = { path: "/home", name: "Home", component: Home };

export const components = [
  {
    path: "/button",
    name: "Button",
    component: ButtonComponent,
  },
  {
    path: "/input",
    name: "Input",
    component: Input,
  },
];
