import React from "react";
import globalStyles from "../../styles/_global.module.scss";

export const SingleSelection = () => {
  return (
    <React.Fragment>
      <pre className={globalStyles.jsx}>
        <code>
          <span className={globalStyles.tag}>
            <span className={globalStyles.punctuation}>{"<"}</span>
            <span className={globalStyles.componentName}>Select</span>
            <span className={globalStyles.attr_name}> options</span>=
            <span className={globalStyles.braces}>{"{"}</span>
            <span className={globalStyles.attr_name}>yourOptions</span>
            <span className={globalStyles.braces}>{"}"} </span>
            <span className={globalStyles.punctuation}>{"/>"}</span>
          </span>
        </code>
      </pre>
    </React.Fragment>
  );
};

export const MultiSelection = () => {
  return (
    <React.Fragment>
      <pre className={globalStyles.jsx}>
        <code>
          <span className={globalStyles.tag}>
            <span className={globalStyles.punctuation}>{"<"}</span>
            <span className={globalStyles.componentName}>Select</span>
            <span className={globalStyles.attr_name}> multi</span>
            <span className={globalStyles.attr_name}> options</span>=
            <span className={globalStyles.braces}>{"{"}</span>
            <span className={globalStyles.attr_name}>yourOptions</span>
            <span className={globalStyles.braces}>{"}"} </span>
            <span className={globalStyles.punctuation}>{"/>"}</span>
          </span>
        </code>
      </pre>
    </React.Fragment>
  );
};

export const CustomTheme = () => {
  return (
    <React.Fragment>
      <pre className={globalStyles.jsx}>
        <code>
          <span className={globalStyles.tag}>
            <span className={globalStyles.keyWord}>import </span>
            <span className={globalStyles.attr_name}>React </span>
            <span className={globalStyles.keyWord}>from </span>
            <span className={globalStyles.attr_value}>"react"</span>;{"\n"}
            <span className={globalStyles.keyWord}>import </span>
            <span className={globalStyles.braces}>{"{"} </span>
            <span className={globalStyles.attr_name}>
              Input, ThemeProvider{" "}
            </span>
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
            <span className={globalStyles.className}> const </span>
            <span className={globalStyles.attr_name}>theme </span>=
            <span className={globalStyles.keyWord}>{" {"} </span>
            {"\n"}
            <span className={globalStyles.attr_name}>   root: </span>
            <span className={globalStyles.braces}>{"{"} </span>
            {"\n"}
            <span className={globalStyles.attr_name}>      borderWidth: </span>
            <span className={globalStyles.attr_value}>"3px"</span>,{"\n"}
            <span className={globalStyles.attr_name}>      borderRadius: </span>
            <span className={globalStyles.attr_value}>"0 50px 50px 0"</span>,{"\n"}
            <span className={globalStyles.attr_name}>      borderColor: </span>
            <span className={globalStyles.attr_value}>"blue"</span>,{"\n"}
            <span className={globalStyles.attr_name}>      width: </span>
            <span className={globalStyles.attr_value}>"300px"</span>,
            {"\n"}
            <span className={globalStyles.attr_value}>      ":hover"</span>
            <span className={globalStyles.attr_name}>: </span>
            <span className={globalStyles.attr_name}>{"{"} </span>
            {"\n"}
            <span className={globalStyles.attr_name}>         backgroundColor: </span>
            <span className={globalStyles.attr_value}>"green"</span>
            {"\n"}
            <span className={globalStyles.attr_name}>         borderWidth: </span>
            <span className={globalStyles.attr_value}>"3px"</span>
            {"\n"}
            <span className={globalStyles.attr_name}>      {"}"}</span>
            {"\n"}
            <span className={globalStyles.braces}>{"   }"}</span>,
            {"\n"}
            <span className={globalStyles.attr_name}>   selectedOptionItem: </span>
            <span className={globalStyles.braces}>{"{"} </span>
            <span className={globalStyles.attr_name}>color: </span>
            <span className={globalStyles.attr_value}>"red"</span>
            <span className={globalStyles.braces}>{" }"}</span>,
            {"\n"}
            <span className={globalStyles.attr_name}>   selectedOptionsPills: </span>
            <span className={globalStyles.braces}>{"{"} </span>
            {"\n"}
            <span className={globalStyles.attr_name}>      backgroundColor: </span>
            <span className={globalStyles.attr_value}>"#a3e4be"</span>,{"\n"}
            <span className={globalStyles.braces}>{"   }"}</span>,
            {"\n"}
            <span className={globalStyles.attr_name}>   placeholder: </span>
            <span className={globalStyles.braces}>{"{"} </span>
            {"\n"}
            <span className={globalStyles.attr_name}>      color: </span>
            <span className={globalStyles.attr_value}>"#c934ce"</span>,{"\n"}
            <span className={globalStyles.braces}>{"   }"} </span>
            {"\n"}

            <span className={globalStyles.keyWord}> {"}"}</span>;{"\n"}
            <span className={globalStyles.keyWord}> return (</span>
            {"\n"}
            <span className={globalStyles.punctuation}>{"   <"}</span>
            <span className={globalStyles.componentName}>ThemeProvider </span>
            <span className={globalStyles.attr_name}>theme=</span>
            <span className={globalStyles.braces}>{"{"}</span>
            <span className={globalStyles.attr_name}>theme</span>
            <span className={globalStyles.braces}>{"}"}</span>
            <span className={globalStyles.punctuation}>{">"}</span>
            {"\n"}
            <span className={globalStyles.punctuation}>{"     <"}</span>
            <span className={globalStyles.componentName}>Select</span>
            <span className={globalStyles.attr_name}> multi</span>
            <span className={globalStyles.attr_name}> options</span>=
            <span className={globalStyles.braces}>{"{"}</span>
            <span className={globalStyles.attr_name}>yourOptions</span>
            <span className={globalStyles.braces}>{"}"} </span>
            <span className={globalStyles.punctuation}>{"/>"}</span>
            <span className={globalStyles.punctuation}>{"/>"}</span>
            {"\n"}
            <span className={globalStyles.punctuation}>{"   <"}</span>
            <span className={globalStyles.componentName}>/ThemeProvider</span>
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
    </React.Fragment>
  );
};
