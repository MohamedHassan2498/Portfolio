import React, { Component } from "react";
import { Container, Image, Grid, Icon } from "semantic-ui-react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import burgerPicture from "../../assets/Burger/burgerProject.png";
import slackLogo from "../../assets/Slack/slackLogo.jpg";
import natoursLogo from "../../assets/Natours/NatoursLogo.png";
import trilloLogo from "../../assets/Trillo/TrilloLogo.png";
import nexterLogo from "../../assets/Nexter/NexterLogo.png";
import ContactForm from "./ContactForm/ContactForm";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <Nav place={"home"} />
        <Header />
        <Container>
          <div
            data-aos="fade-right"
            id="about"
            className="HomeContent HomePadding"
          >
            <h2 className="HomeHeader">About:</h2>
            <p className="HomeParagraph">
              I am currently a student at Faculty of Engineering, Alexandria
              University, Communication Department , I have previous experience
              in the front-end field as I was an intern at{" "}
              <a
                href="https://bosta.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bosta
              </a>{" "}
              for 4 months, I built a website using ReactJS , Redux and
              Bootstrap UI about sold items left in stations monitored by Bosta
              that their buyers didn't receive yet due to unavailability, Here
              is my{" "}
              <a
                href="https://www.linkedin.com/in/mohamed-hassan-4b71b4188"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>{" "}
              account
            </p>
          </div>
          <div
            data-aos="fade-right"
            id="skills"
            className="HomeContent HomePadding"
          >
            <h2 className="HomeHeader">Skills:</h2>
            <p className="HomeParagraph HomeSkills">
              <Icon className="SkillEditor" name="html5" size="big" />
              <Icon className="SkillEditor" name="css3" size="big" />
              <Icon className="SkillEditor" name="sass" size="big" />
              <Icon className="SkillEditor" name="js square" size="big" />
              <Icon className="SkillEditor" name="react" size="big" />
              <Icon className="SkillEditor" name="git" size="big" />
            </p>
          </div>
          <div
            data-aos="fade-left"
            id={`projects`}
            className="HomeContent HomePadding"
          >
            <h2 className="HomeHeader">Projects:</h2>
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <h3 className="HomeProjectTitle">
                    <a rel="noopener noreferrer" href="/burger-project">
                      Burger Builder
                    </a>
                  </h3>
                  <div className="ProjectFirstRow">
                    <Image
                      bordered
                      src={burgerPicture}
                      className="ProjectImage"
                    />
                    <div className="ImageHoverOneofTwo">
                      <a rel="noopener noreferrer" href="/burger-project">
                        <div className="HoverText">Show Details</div>
                      </a>
                    </div>
                    <div className="ImageHoverTwoOfTwo">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/MohamedHassan2498/React-Burger-Project"
                      >
                        <div className="HoverText">Github</div>
                      </a>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <h3 className="HomeProjectTitle">
                    <a rel="noopener noreferrer" href="/slack-project">
                      Slack Clone
                    </a>
                  </h3>
                  <div className="ProjectFirstRow">
                    <Image bordered className="ProjectImage" src={slackLogo} />
                    <div className="ImageHoverOneofTwo">
                      <a rel="noopener noreferrer" href="/slack-project">
                        <div className="HoverText">Show Details</div>
                      </a>
                    </div>
                    <div className="ImageHoverTwoOfTwo">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/MohamedHassan2498/slack-clone-react"
                      >
                        <div className="HoverText">Github</div>
                      </a>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <h3 className="HomeProjectTitle">
                    <a rel="noopener noreferrer" href="/natours-project">
                      Natours
                    </a>
                  </h3>
                  <div className="ProjectFirstRow">
                    <Image
                      bordered
                      src={natoursLogo}
                      className="ProjectImage"
                    />
                    <div className="ImageHoverOneOfThree">
                      <a rel="noopener noreferrer" href="/natours-project">
                        <div className="HoverText">Show Details</div>
                      </a>
                    </div>
                    <div className="ImageHoverTwoOfThree">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/MohamedHassan2498/Natours"
                      >
                        <div className="HoverText">Github</div>
                      </a>
                    </div>
                    <div className="ImageHoverThreeOfThree">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://natourlandingpage.netlify.app/"
                      >
                        <div className="HoverText">Live Demo</div>
                      </a>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <h3 className="HomeProjectTitle">
                    <a rel="noopener noreferrer" href="/trillo-project">
                      Trillo
                    </a>
                  </h3>
                  <div className="ProjectFirstRow">
                    <Image bordered src={trilloLogo} className="ProjectImage" />
                    <div className="ImageHoverOneOfThree">
                      <a rel="noopener noreferrer" href="/trillo-project">
                        <div className="HoverText">Show Details</div>
                      </a>
                    </div>
                    <div className="ImageHoverTwoOfThree">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/MohamedHassan2498/Trillo"
                      >
                        <div className="HoverText">Github</div>
                      </a>
                    </div>
                    <div className="ImageHoverThreeOfThree">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://trillolandingpage.netlify.app/"
                      >
                        <div className="HoverText">Live Demo</div>
                      </a>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <h3 className="HomeProjectTitle">
                    <a rel="noopener noreferrer" href="/nexter-project">
                      Nexter
                    </a>
                  </h3>
                  <div className="ProjectFirstRow">
                    <Image bordered src={nexterLogo} className="ProjectImage" />
                    <div className="ImageHoverOneOfThree">
                      <a rel="noopener noreferrer" href="/nexter-project">
                        <div className="HoverText">Show Details</div>
                      </a>
                    </div>
                    <div className="ImageHoverTwoOfThree">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/MohamedHassan2498/Nexter"
                      >
                        <div className="HoverText">Github</div>
                      </a>
                    </div>
                    <div className="ImageHoverThreeOfThree">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://nexterlandingpage.netlify.app/"
                      >
                        <div className="HoverText">Live Demo</div>
                      </a>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div
            data-aos="fade-down"
            id="contact"
            className="HomeContent HomePadding"
          >
            <h2 className="HomeHeader">Contact:</h2>
            <ContactForm />
          </div>
        </Container>
      </>
    );
  }
}
export default Home;
