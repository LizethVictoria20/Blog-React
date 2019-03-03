import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*function Welcome(props) {
  return <h1>Mi name is {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Gordis" />
      <Welcome name="Liz" />
    </div>
  );
}*/

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.author}
    />
  );
}
function UserInfo(props) {
  return (
    <div>
      <div className="UserInfo">
        <Avatar user="author" />
        <div className="UserInfo-name">{props.user}</div>
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div>
      <UserInfo user={props.author} />
      <div className="Comment">
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date}</div>
      </div>
    </div>
  );
}

const element = (
  <Comment author="John K" text="Holis" date={new Date().toDateString()} />
);
ReactDOM.render(element, document.getElementById("root"));
