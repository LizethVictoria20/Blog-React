import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components";

const Imagen = styled.img`
  display: block;
  margin: 0 auto;
`;
const Button = styled.button`
  background: tomato;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 20px;
  font-size: 15px;
`;

const DivContainer = styled.div`
  border: 1px solid tomato;
  width: 700px;
  margin: 0 auto;
  border-radius: 5px;
`;

const Name = styled.h2`
  text-align: center;
`;

function Avatar(props) {
  console.log(props);
  return <Imagen src={props.avatar.url} alt={props.avatar.alt} width="150px" />;
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
      <Name>{props.name}</Name>
      <Button>Mi Boton 1</Button>
    </DivContainer>
  );
}

const element = <Container name="Liz" />;
ReactDOM.render(element, document.getElementById("root"));
