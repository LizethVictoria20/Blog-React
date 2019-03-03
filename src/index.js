import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const element = React.createElement(
  "h1",
  { className: "myClass" },
  "Hello World"
);

/*
{
  type: "h1",
  props: {
    className: "myClass",
    children: "Liz"
  }
};
*/

ReactDOM.render(element, document.getElementById("root"));
