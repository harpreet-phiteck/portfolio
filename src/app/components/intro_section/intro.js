import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./intro.css";
export default function Intro() {
  return (
    <section className="intro_section" id="intro">
      <div className="portfolio_container">
        <div className="intro_wrapper">
          <div className="intro_content">
            <div className="intro_heading">
              <h1>
                <span style={{ display: "block" }}>Hi,</span> I'am{" "}
                <a href="https://in.linkedin.com/in/harpreet-bambrah" style={{textDecoration:'none'}} title="Front End Web Developer"><span style={{ color: "#3e6ff4" }}>Harpreet</span></a>
                <span style={{ display: "block", position:'relative' }} className="intro_webdev" >Web Developer                
                <span className="fade_text">Web Developer</span>
                <span className="fade_text">Front End Developer</span>              
                <span className="fade_text">Reactjs Developer</span>              
                </span>
              </h1>
            </div>
            <div className="intro_btn">             
              <Link href="/HarpreetSingh 06112023.pdf" download='HarpreetSingh 06112023' >Download Cv</Link>
            </div>
            <div className="intro_icon_wrapper">
            <FontAwesomeIcon icon={faLinkedinIn} style={{width:'22px', marginInline:'5px'}} />
            <FontAwesomeIcon icon={faGithub} style={{width:'22px', marginInline:'5px'}} />
            </div>
          </div>
          <div className="intro_image">
            <div className="intro_image_container">
            <Image
              src="/harpreet_profile_img (1).png"
              alt="profile_image"
              width={360}
              height={360}
              priority   
              style={{width:'90%', height:'auto'}}           
            />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
