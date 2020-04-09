import React from "react";
import Title from "../../Components/UI/Title/Title";
import globalStyles from "../../styles/_global.module.scss";

const Implementacion = () => {
  return (
    <React.Fragment>
      <Title
        title="Implementación"
        desc="Empieza a utilizar Uru-Ui en tu aplicación React al instante."
      />
      <p>
        Puedes utilizar cualquiera de los componentes como son demostrados en la
        documentación. Por favor, consulta la página de demostración de cada
        componente para ver cómo deben ser importados.
      </p>

      <h3>Inicio</h3>
      <p>Aquí está un ejemplo rápido para empezar.</p>
      <div className={globalStyles.code}>
        <pre className={globalStyles.jsx}>
          <code>
            <span className={globalStyles.tag}>
              <span className={globalStyles.keyWord}>import </span>
              <span className={globalStyles.attr_name}>React </span>
              <span className={globalStyles.keyWord}>from </span>
              <span className={globalStyles.attr_value}>"react"</span>;{"\n"}
              <span className={globalStyles.keyWord}>import </span>
              <span className={globalStyles.braces}>{"{"} </span>
              <span className={globalStyles.attr_name}>Button </span>
              <span className={globalStyles.braces}>{"}"} </span>
              <span className={globalStyles.keyWord}>from </span>
              <span className={globalStyles.attr_value}>"uru-ui"</span>;{"\n"}
              {"\n"}
              <span className={globalStyles.className}>const </span>
              <span className={globalStyles.constName}>Component </span>=
              <span className={globalStyles.braces}>{" ()"} </span>
              <span className={globalStyles.className}>=> </span>
              <span className={globalStyles.braces}>{"{"} </span>
              {"\n"}
              <span className={globalStyles.keyWord}> return (</span>
              {"\n"}
              <span className={globalStyles.punctuation}>{"     <"}</span>
              <span className={globalStyles.componentName}>Button</span>
              <span className={globalStyles.attr_name}> color</span>=
              <span className={globalStyles.attr_value}>'danger'</span>
              <span className={globalStyles.attr_name}> variant</span>=
              <span className={globalStyles.attr_value}>'outlined'</span>
              <span className={globalStyles.punctuation}>{">"}</span>
              {"\n"}
              <span className={globalStyles.tag}>       Click me</span>
              {"\n"}
              <span className={globalStyles.punctuation}>{"     </"}</span>
              <span className={globalStyles.componentName}>Button</span>
              <span className={globalStyles.punctuation}>{">"}</span>
              {"\n"}
              <span className={globalStyles.keyWord}> )</span>;{"\n"}
              <span className={globalStyles.braces}>{"}"}</span>;{"\n"}
              {"\n"}
              <span className={globalStyles.keyWord}>export default </span>
              <span className={globalStyles.constName}>Component;</span>
            </span>
          </code>
        </pre>
      </div>
    </React.Fragment>
  );
};

export default Implementacion;
