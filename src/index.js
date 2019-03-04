import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Welcome(props) {
  return (
    <div>
      <h1> My name is {props.name}</h1>
      <h1>My last name is {props.last}</h1>
    </div>
  );
}

function App(props) {
  const splittedBySpace = props.user.split(" ");
  const userName = "Miss " + splittedBySpace[0];
  const userLast = splittedBySpace[1];

  return (
    <div>
      <Welcome name={userName} last={userLast} />
    </div>
  );
}

const element = <App user="Liz Victoria" />;
ReactDOM.render(element, document.getElementById("root"));
