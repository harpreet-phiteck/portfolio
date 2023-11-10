'use client'
import './about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope, faMessage, faPhone, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
export default function About() {
    const [getMonth,setMonth] = useState(0);
    const [getyear,setyear] = useState(0);
    var date1 = new Date(2023, 4, 19);
    var date2 = new Date();
    var diff = new Date(date2.getTime() - date1.getTime());
    // diff is: Thu Jul 05 1973 04:00:00 GMT+0300 (EEST)
    useEffect(()=>{
        setyear(diff.getUTCFullYear() - 1970)
        setMonth(diff.getUTCMonth() + 1)
    }, [getMonth, getyear]);

    return (
        <section className="about_section" id='about'>
            <div className="portfolio_container">
                <div className='about_heading_wrapper'>
                    <h2>About</h2>
                </div>
                <div className="about_wrapper">
                    <div className="about_image_wrapper">
                        <img src="/harpreet_profile_img (1).png" alt="my_img" />
                    </div>
                    <div className="about_content_wrapper">
                        <h2>
                            I'am Harpreet
                        </h2>
                        <p>
                        As a <strong>Front-End Developer</strong> more than <strong>{ getyear > 0 ? getyear+' year': getMonth+' month'}</strong> experience, I specialize in crafting immersive and user-centric web experiences. My expertise lies in HTML, CSS, and JavaScript, along with proficiency in modern front-end frameworks like Bootstrap, React, NextJs.
                        </p>
                        <div className='highlight_skills'>
                            <div><span><FontAwesomeIcon icon={faCheck} style={{width:'22px', marginInline:'8px', color:'#3e6ff4', fontSize:'22px'}} />Web Development</span><span> <FontAwesomeIcon icon={faCheck} style={{width:'22px', marginInline:'8px', color:'#3e6ff4', fontSize:'22px'}} />Responsive Design</span></div>
                            <div><span><FontAwesomeIcon icon={faCheck} style={{width:'22px', marginInline:'8px', color:'#3e6ff4', fontSize:'22px'}} />Intigrate APIs</span><span><FontAwesomeIcon icon={faCheck} style={{width:'22px', marginInline:'8px', color:'#3e6ff4', fontSize:'22px'}} />Mapbox API</span></div>
                        </div>
                        <div className='contact_container'>
                            <div>
                                <span style={{marginRight:'8px', border:'1px solid #00000047', borderRadius:'20px'}}>
                            <FontAwesomeIcon icon={faEnvelope} style={{width:'20px',height:'20px', padding:'7px', color:'#3e6ff4'}} />
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
                            <FontAwesomeIcon icon={faPhoneFlip} style={{width:'20px',height:'20px', padding:'7px', color:'#3e6ff4'}} />
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