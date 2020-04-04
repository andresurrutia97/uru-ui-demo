import Home from "./Containers/Home/Home";
import Button from "./Containers/Button/Button";
import Input from "./Containers/Input/Input";

export const home = { path: "/home", name: "Home", component: Home };

export const components = [
  {
    path: "/button",
    name: "Button",
    component: Button,
  },
  {
    path: "/input",
    name: "Input",
    component: Input,
  },
];
