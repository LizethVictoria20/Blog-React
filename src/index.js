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
class Presentation extends Component {
  render() {
    return (
      <Section>
        <Imagen
          src={this.props.avatar.url}
          alt={this.props.avatar.alt}
          width="150px"
        />
        <MyName />
        <MenuAboutMe NavMenu={this.props.FunctionMenu} />
      </Section>
    );
  }
}

class MyName extends Component {
  render() {
    return (
      <React.Fragment>
        <Saludo>Hello!</Saludo>
        <Name>I'm Liz</Name>
      </React.Fragment>
    );
  }
}

class MenuAboutMe extends Component {
  render() {
    return (
      <div>
        <MyDescription
          href=""
          onClick={event => {
            event.preventDefault();
            this.props.NavMenu("about-me");
          }}
        >
          About Me
        </MyDescription>
        <br />
        <MyDescription
          href=""
          onClick={event => {
            event.preventDefault();
            this.props.NavMenu("more-about-me");
          }}
        >
          More About Me
        </MyDescription>
        <br />
        <MyDescription
          href="#"
          onClick={event => {
            event.preventDefault();
            this.props.NavMenu("focuses");
          }}
        >
          I'm focused on..
        </MyDescription>
        <br />
        <MyDescription
          href="#"
          onClick={event => {
            event.preventDefault();
            this.props.NavMenu("anthem");
          }}
        >
          My Anthem
        </MyDescription>
        <br />
        <MyDescription
          href="#"
          onClick={event => {
            this.props.NavMenu("you-should-watch");
          }}
        >
          You should watch...
        </MyDescription>
      </div>
    );
  }
}

class AboutMe extends Component {
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

class MoreAboutMe extends Component {
  render() {
    return (
      <Description>
        <H2About> More about me</H2About>
        <Descriptions>Liz</Descriptions>
      </Description>
    );
  }
}

class Focuses extends Component {
  render() {
    return (
      <Description>
        <H2About>I'm focused on... </H2About>
        <Descriptions>I'm focused on...</Descriptions>
      </Description>
    );
  }
}

class MyAnthem extends Component {
  render() {
    return (
      <Description>
        <H2About>My Anthem</H2About>
        <Descriptions>My anthem is...</Descriptions>
      </Description>
    );
  }
}

class YouShouldWatch extends Component {
  render() {
    return (
      <Description>
        <H2About>You should Watch</H2About>
        <Descriptions>You should watch...</Descriptions>
      </Description>
    );
  }
}

class ContainerNav extends Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      activo: "about-me"
    };
  }
  changeState(nuevoActivo) {
    this.setState({
      activo: nuevoActivo
    });
  }

  render() {
    let Content = null;
    if (this.state.activo === "about-me") {
      Content = <AboutMe />;
    } else if (this.state.activo === "more-about-me") {
      Content = <MoreAboutMe />;
    } else if (this.state.activo === "focuses") {
      Content = <Focuses />;
    } else if (this.state.activo === "anthem") {
      Content = <MyAnthem />;
    } else {
      Content = <YouShouldWatch />;
    }

    return (
      <div>
        <DivContainer>
          <Presentation
            avatar={{
              url:
                "https://cdn0.iconfinder.com/data/icons/cute-girl/1200/d-512.png",
              alt: "Avatar"
            }}
            FunctionMenu={this.changeState}
          />
          {Content}
        </DivContainer>
      </div>
    );
  }
}

const element = <ContainerNav name="Liz" />;
ReactDOM.render(element, document.getElementById("root"));
