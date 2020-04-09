import React from "react";
import Title from "../../Components/UI/Title/Title";
import globalStyles from "../../styles/_global.module.scss";

const Info = () => {
  return (
    <React.Fragment>
      <Title title="Información importante" />

      <h3>Estilos</h3>
      <p>
        Para los estilos custom de está librería se utiliza{" "}
        <a
          className={globalStyles.Links}
          href={"https://emotion.sh/docs/introduction"}
        >
          emotion
        </a>{" "}
        con el fin ecribir css dentro de JavaScript.
      </p>

      <h3>Creado por:</h3>
      <p>
        Hola, mi nombre es{" "}
        <span className={globalStyles.Reforce}>Andres Felipe Urrutia Solarte</span> de
        Cali, Colombia. Soy un desarrollador web graduado de Ingeniería
        Multimedia de la Universidad Autónoma de Occidente.
        <br />
        <br />
      </p>
      <div
        style={{
          border: "solid 1px #ccc",
          borderRadius: "7px",
          padding: "0 20px",
          marginBottom: "35px",
        }}
      >
        <h4>Nota:</h4>
        <p>
          Les textos descriptivos de los componentes de esta Demo-app han sido
          extraidos de la página de{" "}
          <a className={globalStyles.Links} href={"https://material-ui.com/es/"}>
            Material-Ui
          </a>
          .
        </p>
      </div>
      <p>
        Esta librería y demo-app fueron creadas como respuesta al
        coding-challenge de <span className={globalStyles.Reforce}>Moove It</span>.
      </p>
    </React.Fragment>
  );
};

export default Info;
