import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components";

const Button = styled.button`
  background: tomato;
`;

const DivContainer = styled.div`
  border: 1px solid tomato;
`;

function Avatar(props) {
  console.log(props);
  return <img src={props.avatar.url} alt={props.avatar.alt} width="150px" />;
}

function Container(props) {
  return (
    <DivContainer>
      <Avatar
        avatar={{
          url:
            "https://cdn0.iconfinder.com/data/icons/cute-girl/1200/d-512.png",
          alt: "Avatar"
        }}
      />
      <Button>Mi Boton 1</Button>
      <h3>{props.name}</h3>
    </DivContainer>
  );
}

const element = <Container name="Liz" />;
ReactDOM.render(element, document.getElementById("root"));
