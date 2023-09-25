import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./intro.css";
export default function Intro() {
  return (
    <section className="intro_section">
      <div className="portfolio_container">
        <div className="intro_wrapper">
          <div className="intro_content">
            <div className="intro_heading">
              <h1>
                <span style={{ display: "block" }}>Hi,</span> I'am{" "}
                <span style={{ color: "#3e6ff4" }}>Marlon</span>{" "}
                <span style={{ display: "block" }}>Web Developer</span>
              </h1>
            </div>
            <div className="intro_btn">
              <Link href="#">Contact</Link>
            </div>
            <div className="intro_icon_wrapper">
            <FontAwesomeIcon icon={faLinkedinIn} style={{width:'22px', marginInline:'5px'}} />
            <FontAwesomeIcon icon={faGithub} style={{width:'22px', marginInline:'5px'}} />
            </div>
          </div>
          <div className="intro_image">
            <div className="intro_image_container">
            <Image
              src="/perfil.png"
              alt="profile_image"
              width={300}
              height={300}
              priority              
            />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
