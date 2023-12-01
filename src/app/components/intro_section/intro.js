
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import "./intro.css";
export default function Intro() {
  return (
    <section className="intro_section" id="intro">
      <div className="portfolio_container">
        <div className="intro_wrapper">
          <div className="intro_content">
            <div className="intro_heading">
              <h1>
                <span style={{ display: "block" }}>Hi,</span> I'm{" "}
                <a href="https://in.linkedin.com/in/harpreet-bambrah" style={{textDecoration:'none'}} title="Front End Web Developer"><span style={{ color: "#3e6ff4" }}>Harpreet</span></a>
                <span style={{ display: "block", position:'relative' }} className="intro_webdev" >Web Designer                
                <span className="fade_text">Web Developer</span>
                <span className="fade_text">Front End Developer</span>              
                <span className="fade_text">Reactjs Developer</span>              
                </span>
              </h1>
            </div>
            <div className="intro_btn">             
              <a href='/HarpreetSingh_08112023.pdf' download='HarpreetSingh_08112023'>Download Cv</a>
            </div>
            <div className="intro_icon_wrapper">
              <a href="https://in.linkedin.com/in/harpreetdev">
            <FontAwesomeIcon icon={faLinkedinIn} style={{width:'22px', marginInline:'5px', fontSize:'22px'}} />
              </a>
              <a href="https://github.com/Harpreet-Bambrah">
            <FontAwesomeIcon icon={faGithub} style={{width:'22px', marginInline:'5px', fontSize:'22px'}} />
              </a>
            </div>
          </div>
          <div className="intro_image">
            <div className="intro_image_container">
            <img
            src="/harpreet_profile_img.webp"
              alt="profile_image"       
            />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
