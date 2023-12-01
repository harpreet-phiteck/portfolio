'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Carusal from "./components/intro_carousal/carousal";
import Intro from "./components/intro_section/intro";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollSpy from "react-ui-scrollspy";
export default function Home() {
  return (
    <main>   
     
      <div className="fixed_icon_container">
        <a href="https://in.linkedin.com/in/harpreetdev" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn}  />
        </a>
        <a href="https://github.com/Harpreet-Bambrah" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://wa.me/+919463308973?text=Hi Harpreet" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp}  />
        </a>
        <a href="mailto:harpreetbambrah93@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope}  />
        </a>
      </div>
      <ScrollSpy>
      <Intro />
      <Carusal />
      <About />
      <Skills />
      <Work />
      <Contact />
      </ScrollSpy>
      <Footer />
    </main>
  );
}
