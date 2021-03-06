import React, { useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import AOS from "aos";
import Nav from "../Nav/Nav";
import NexterLogo from "../../assets/Nexter/NexterLogo.png";
import NexterImage from "../../assets/Nexter/NexterImage.png";
import NexterImageMobile from "../../assets/Nexter/NexterImageMobile.png";
import "./Nexter.css";

const Nexter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Nav />
      <Container>
        <div className="NexterAnimation NexterAnimationSpan">
          <b>
            <span>N</span>
            <span>e</span>
            <span>x</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
          </b>
          <Image
            data-aos="fade-up"
            className="NexterLogoImage"
            src={NexterLogo}
          />
        </div>
        <div id="about" data-aos="fade-right" className="NexterAbout">
          <h2 className="NexterAboutHeader">About:</h2>
          <p className="NexterAboutParagraph">
            Nexter project can be found{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/MohamedHassan2498/Nexter"
            >
              here
            </a>
          </p>
          <p className="NexterAboutParagraph">
            Nexter is a project based on advertising for real estate, built
            using only HTML and CSS. The application is a single page
            application is Mobile Responsive. The Application was also built
            using SCSS and used it as a training to master css grid layout and
            advanced responsive design
          </p>
          <p className="NexterAboutParagraph">
            Live demo{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://nexterlandingpage.netlify.app/"
            >
              here!
            </a>
          </p>
        </div>
        <p data-aos="fade-left" className="NexterPhotosParagraph">
          Here are some photos of the project
        </p>
        <Image
          data-aos="fade-left"
          className="NexterCustomizeImageLarge"
          src={NexterImage}
        />
        <Image
          data-aos="fade-left"
          className="NexterCustomizeImageLarge"
          src={NexterImageMobile}
        />
      </Container>
    </>
  );
};

export default Nexter;
