import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function formatName(dataUser) {
  if (dataUser) {
    return <h1>My name is {user.firstName + user.lastName}</h1>;
  } else {
    return <h1>Hello Stranger</h1>;
  }
}
const user = {
  firstName: "Liz",
  lastName: "Victoria"
};

const element = formatName(user);
ReactDOM.render(element, document.getElementById("root"));
