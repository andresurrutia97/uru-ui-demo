import Home from "./Containers/Home/Home";
import Button from "./Containers/Button/Button";
import Input from "./Containers/Input/Input";
import InputNumber from "./Containers/InputNumber/InputNumber";
import Select from "./Containers/Select/Select";
import Autocomplete from "./Containers/Autocomplete/Autocomplete";

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
  {
    path: "/inputnumber",
    name: "Input Number",
    component: InputNumber,
  },
  {
    path: "/select",
    name: "Select",
    component: Select,
  },
  {
    path: "/autocomplete",
    name: "Autocomplete",
    component: Autocomplete,
  },
];
