import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components";

const Imagen = styled.img`
  display: block;
  width: 100px;
  border-radius: 50px;
  margin-top: 60px;
`;

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  box-shadow: 4px 0 20px 0px #d8d8d8;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Saludo = styled.p`
  font-size: 40px;
  margin-bottom: -20px;
  margin-top: 0px;
  color: white;
`;
const Name = styled.h2`
  font-size: 40px;
  margin-top: -40px;
  color: white;
  height: 2px;
`;

const MyDescription = styled.a`
  line-height: 40px;
  color: white;
  text-decoration: none;
  font-weight: 600;
}
`;
const Section = styled.section`
  grid-column: 1 / 2;
  height: 100vh;
  display: inherit;
  justify-content: center;
  align-items: center;
  background: black;
  box-shadow: 4px 0 20px 0px #d8d8d8;
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
  margin: 0 100px 0 100px;
  font-size: 20px;
`;
class Avatar extends React.Component {
  render() {
    return (
      <Section>
        <Imagen
          src={this.props.avatar.url}
          alt={this.props.avatar.alt}
          width="150px"
        />

        <MyName />
        <AboutMe />
      </Section>
    );
  }
}
class MyName extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Saludo>Hello!</Saludo>
        <Name>I'm Liz</Name>
      </React.Fragment>
    );
  }
}

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>{this.state.num}</h1>
        <button
          onClick={() => {
            this.setState({ num: this.state.num + 1 });
          }}
        >
          HOLIS
        </button>
        <button
          onClick={() => {
            this.setState({ num: this.state.num - 1 });
          }}
        >
          Resta
        </button>
        <button
          onClick={() => {
            this.setState({ num: 0 });
          }}
        >
          Reset
        </button>
        <MyDescription href="#AcercaDeMi">About Me</MyDescription> <br />
        <MyDescription href="#MoreAboutMe">More About Me</MyDescription> <br />
        <MyDescription href="">I'm focused on..</MyDescription> <br />
        <MyDescription href="">My Anthem</MyDescription> <br />
        <MyDescription href="">You should watch...</MyDescription>
      </div>
    );
  }
}

class AcercaDeMi extends React.Component {
  render() {
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
}
class MoreAboutMe extends React.Component {
  render() {
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
}

class ContainerNav extends React.Component {
  render() {
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
}

const element = <ContainerNav name="Liz" />;
ReactDOM.render(element, document.getElementById("root"));
