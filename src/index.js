import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components";

const Imagen = styled.img`
  display: block;
  width: 100px;
  border-radius: 50px;
`;

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  box-shadow: 4px 0 20px 0px #d8d8d8;
  min-height: 100vh;
`;
const Saludo = styled.p`
  font-size: 40px;
  margin-bottom: -20px;
`;
const Name = styled.h2`
  font-size: 40px;
`;

const MyDescription = styled.a`
  line-height: 40px;
  color: gray;
  text-decoration: none;
  font-weight: 600;
}
`;
const Section = styled.section`
  grid-column: 1 / 2;
  height: 100vh
  background: #ff9671;
    justify-content: center;
  align-items: center;
`;

const SegundoContainer = styled.div`
  width: 70%;
`;
const Description = styled.section`
  grid-column: 2 / 2;
  display: block;
  text-align: center;
`;
const H2About = styled.h2`
  font-size: 40px;
`;
const Descriptions = styled.p`
  text-align: left;
`;
function Avatar(props) {
  return (
    <Section>
      <div>
        <Imagen src={props.avatar.url} alt={props.avatar.alt} width="150px" />
      </div>
      <MyName />
      <AboutMe />
    </Section>
  );
}
function MyName() {
  return (
    <div>
      <Saludo>Hello!</Saludo>
      <Name>I'm Liz</Name>
    </div>
  );
}

function AboutMe(props) {
  return (
    <div>
      <MyDescription href="#AcercaDeMi">About Me</MyDescription> <br />
      <MyDescription href="#MoreAboutMe">More About Me</MyDescription> <br />
      <MyDescription href="">I'm focused on..</MyDescription> <br />
      <MyDescription href="">My Anthem</MyDescription> <br />
      <MyDescription href="">You should watch...</MyDescription>
    </div>
  );
}

function AcercaDeMi() {
  return (
    <Description>
      <div>
        <H2About>About me</H2About>
        <Descriptions>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          placeat eaque possimus, impedit fugit excepturi corporis, deleniti
          atque, dolor voluptatibus ullam vel quas eligendi quos debitis
          temporibus ad repellendus. Est.
        </Descriptions>
      </div>
    </Description>
  );
}
function MoreAboutMe() {
  return (
    <div>
      <H2About> More about me</H2About>
      <Descriptions>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        placeat eaque possimus, impedit fugit excepturi corporis, deleniti
        atque, dolor voluptatibus ullam vel quas eligendi quos debitis
        temporibus ad repellendus. Est.
      </Descriptions>
    </div>
  );
}

function ContainerNav(props) {
  return (
    <div>
      <DivContainer>
        <Avatar
          avatar={{
            url:
              "https://cdn0.iconfinder.com/data/icons/cute-girl/1200/d-512.png",
            alt: "Avatar"
          }}
        />
        <AcercaDeMi />
      </DivContainer>
    </div>
  );
}

const element = <ContainerNav name="Liz" />;
ReactDOM.render(element, document.getElementById("root"));
