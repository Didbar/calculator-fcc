import React from "react";

export const Button = (props) => {
  return (
    <button
      key={props.id}
      onClick={() => props.handleClickValues(props.value)}
      id={props.id}
      className={props.classes}
    >
      {props.value}
    </button>
  );
};
