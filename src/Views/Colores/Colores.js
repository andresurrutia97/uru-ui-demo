import React from "react";
import Title from "../../Components/UI/Title/Title";
import Paleta from "./Paleta/Paleta";

const Colores = () => {
  const primary = [
    { color: "#22bdf40e", name: "outlinedPrimary" },
    { color: "#22bdf4", name: "primary" },
    { color: "#23aadb", name: "primaryDark" },
  ];
  const success = [
    { color: "#73e05d0e", name: "outlinedSuccess" },
    { color: "#73e05d", name: "success" },
    { color: "#6bcf57", name: "successDark" },
  ];
  const danger = [
    { color: "#ed1e790e", name: "outlinedDanger" },
    { color: "#ed1e79", name: "danger" },
    { color: "#d81d6e", name: "dangerDark" },
  ];
  const gray = [
    { color: "#d4d4d40e", name: "outlinedDefault" },
    { color: "#e9e9e9", name: "gray" },
    { color: "#d4d4d4", name: "default" },
  ];
  const blacks = [
    { color: "#cacaca", name: "defaultDark" },
    { color: "#adadad", name: "darkGray" },
    { color: "#3b3b3b", name: "black" },
  ];
  return (
    <React.Fragment>
      <Title
        title="Colores"
        desc="Estos son los colores utilizados para los componentes."
      />

      <h3>Paleta</h3>
      <div>
        <Paleta name="Primary" colors={primary} />
        <Paleta name="Success" colors={success} />
        <Paleta name="Danger" colors={danger} />
        <Paleta name="Gray" colors={gray} />
        <Paleta name="Black" colors={blacks} />
      </div>
    </React.Fragment>
  );
};

export default Colores;
