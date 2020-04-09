import React from "react";
import globalStyles from "../../styles/_global.module.scss";

export const InputNumberCode = () => {
  return (
    <React.Fragment>
      <pre className={globalStyles.jsx}>
        <code>
          <span className={globalStyles.tag}>
            <span className={globalStyles.punctuation}>{"<"}</span>
            <span className={globalStyles.componentName}>InputNumber</span>
            <span className={globalStyles.attr_name}> color</span>=
            <span className={globalStyles.attr_value}>'success'</span>
            <span className={globalStyles.attr_name}> placeholder</span>=
            <span className={globalStyles.attr_value}>'Input Number'</span>
            <span className={globalStyles.attr_name}> variant</span>=
            <span className={globalStyles.attr_value}>'filled'</span>
            <span className={globalStyles.punctuation}>{"/>"}</span>
          </span>
          {"\n"}
          <span className={globalStyles.tag}>
            <span className={globalStyles.punctuation}>{"<"}</span>
            <span className={globalStyles.componentName}>InputNumber</span>
            <span className={globalStyles.attr_name}> placeholder</span>=
            <span className={globalStyles.attr_value}>'Input Number'</span>
            <span className={globalStyles.attr_name}> variant</span>=
            <span className={globalStyles.attr_value}>'outlined'</span>
            <span className={globalStyles.punctuation}>{"/>"}</span>
          </span>
          {"\n"}
          <span className={globalStyles.tag}>
            <span className={globalStyles.punctuation}>{"<"}</span>
            <span className={globalStyles.componentName}>InputNumber</span>
            <span className={globalStyles.attr_name}> color</span>=
            <span className={globalStyles.attr_value}>'danger'</span>
            <span className={globalStyles.attr_name}> placeholder</span>=
            <span className={globalStyles.attr_value}>'Input Number'</span>
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
              InputNumber, ThemeProvider{" "}
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
            <span className={globalStyles.attr_name}>   borderColor: </span>
            <span className={globalStyles.attr_value}>"blue"</span>,{"\n"}
            <span className={globalStyles.attr_name}>   borderRadius: </span>
            <span className={globalStyles.attr_value}>"30px"</span>,{"\n"}
            <span className={globalStyles.attr_value}>   ":hover"</span>
            <span className={globalStyles.attr_name}>: </span>
            <span className={globalStyles.attr_name}>{"{"} </span>
            {"\n"}
            <span className={globalStyles.attr_name}>     backgroundColor: </span>
            <span className={globalStyles.attr_value}>"red"</span>
            {"\n"}
            <span className={globalStyles.attr_name}>   {"}"}</span>
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
            <span className={globalStyles.componentName}>InputNumber</span>
            <span className={globalStyles.attr_name}> variant</span>=
            <span className={globalStyles.attr_value}>'outlined'</span>
            <span className={globalStyles.attr_name}> placeholder</span>=
            <span className={globalStyles.attr_value}>'Custom InputNumber'</span>
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
