import React from "react";

const TextError = (props) => {
  return (
    <div
      style={{
        color: "red",
        textAlign: "left",
        fontSize: "11px",
      }}
    >
      {props.children}
    </div>
  );
};

export default TextError;
