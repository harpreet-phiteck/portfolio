import './about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope, faMessage, faPhone, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    return (
        <section className="about_section" id='about'>
            <div className="portfolio_container">
                <div className='about_heading_wrapper'>
                    <h2>About</h2>
                </div>
                <div className="about_wrapper">
                    <div className="about_image_wrapper">
                        <img src="/about.jpg" alt="my_img" />
                    </div>
                    <div className="about_content_wrapper">
                        <h2>
                            I'am Harpreet
                        </h2>
                        <p>
                        As a Front-End Developer more than 6 month experience, I specialize in crafting immersive and user-centric web experiences. My expertise lies in HTML, CSS, and JavaScript, along with proficiency in modern front-end frameworks like Bootstrap, React, NextJs.
                        </p>
                        <div className='highlight_skills'>
                            <div><span><FontAwesomeIcon icon={faCheck} style={{width:'22px', marginInline:'8px', color:'#3e6ff4'}} />Web Development</span><span> <FontAwesomeIcon icon={faCheck} style={{width:'22px', marginInline:'8px', color:'#3e6ff4'}} />Responsive Design</span></div>
                            <div><span><FontAwesomeIcon icon={faCheck} style={{width:'22px', marginInline:'8px', color:'#3e6ff4'}} />Intigrate APIs</span><span><FontAwesomeIcon icon={faCheck} style={{width:'22px', marginInline:'8px', color:'#3e6ff4'}} />Mapbox API</span></div>
                        </div>
                        <div className='contact_container'>
                            <div>
                                <span style={{marginRight:'8px', border:'1px solid #00000047', borderRadius:'20px'}}>
                            <FontAwesomeIcon icon={faEnvelope} style={{width:'35px', padding:'7px', color:'#3e6ff4'}} />
                                </span>
                               <span>
                              <span>
                                 Email Us
                                </span>
                                <span><a href="mailto:harpreetbambrah93@gmail.com" target="_blank" style={{textDecoration:'none'}}> harpreetbambrah93@gmail.com</a></span>
                               </span>
                              
                            </div>
                            <div>
                            <span style={{marginRight:'8px', border:'1px solid #00000047', borderRadius:'20px'}}>
                            <FontAwesomeIcon icon={faPhoneFlip} style={{width:'35px', padding:'7px', color:'#3e6ff4'}} />
                                </span>
                               <span>
                              <span>
                                 Make a Call
                                </span>
                                <span><a href="tel:+919463308973" target="_blank" style={{textDecoration:'none'}}>+91 9463308973</a></span>
                               </span>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}