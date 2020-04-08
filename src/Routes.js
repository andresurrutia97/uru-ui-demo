import Home from "./Components/Views/Home/Home";
import Implementacion from "./Components/Views/Implementacion/Implementacion";
import Instalacion from "./Components/Views/Instalacion/Instalacion";

import Button from "./Containers/Button/Button";
import Input from "./Containers/Input/Input";
import InputNumber from "./Containers/InputNumber/InputNumber";
import Select from "./Containers/Select/Select";
import Autocomplete from "./Containers/Autocomplete/Autocomplete";

import Colores from './Components/Views/Colores/Colores'

export const home = [
  { path: "/home", name: "Introducción", component: Home },
  { path: "/instalacion", name: "Instalación", component: Instalacion },
  {
    path: "/implementacion",
    name: "Implementación",
    component: Implementacion,
  },
];

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


export const estilos = [
  { path: "/colores", name: "Colores", component: Colores },
];
