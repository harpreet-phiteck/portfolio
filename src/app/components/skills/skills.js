import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt,faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
export default function Skills(){
    return(
        <section className="skills_section" id='skills'>
        <div className="portfolio_container">
                <div className='skills_heading_wrapper'>
                    <h2>
                        Skills
                    </h2>
                </div>
            <div className="skills_wrapper">
                
                <div className="skills_content_wrapper">
                    <h2>
                        Profesional Skills
                    </h2>
                    <p>
                    Professional skills encompass a wide range of abilities, knowledge, and attributes that are valuable in the workplace. Here are some key professional skills across various categories:
                    </p>
                    <div className='skills_detail_container'>
                        <div className='html'>
                            <div>
                            <FontAwesomeIcon icon={faHtml5} style={{width:'22px',color:'#3e6ff4'}} /> <span style={{fontSize:'16px',fontWeight:'600',paddingInline:'8px'}}>HTML5</span>
                            </div>
                            <div>
                                85%
                            </div>
                            <div className='skill_bar'>
                                
                            </div>
                        </div>
                        <div className='html'>
                            <div>
                            <FontAwesomeIcon icon={faCss3Alt} style={{width:'22px',color:'#3e6ff4'}} /> <span style={{fontSize:'16px',fontWeight:'600',paddingInline:'8px'}}>CSS3</span>
                            </div>
                            <div>
                                80%
                            </div>
                            <div className='skill_bar' style={{maxWidth:'85%'}}>

                            </div>
                        </div>
                        <div className='html'>
                            <div>
                            <FontAwesomeIcon icon={faJs} style={{width:'22px',color:'#3e6ff4'}} /> <span style={{fontSize:'16px',fontWeight:'600',paddingInline:'8px'}}>JAVASCRIPT</span>
                            </div>
                            <div>
                                65%
                            </div>
                            <div className='skill_bar'style={{maxWidth:'65%'}}>

                            </div>
                        </div>
                        <div className='html'>
                            <div>
                            <FontAwesomeIcon icon={faReact} style={{width:'22px',color:'#3e6ff4'}} /> <span style={{fontSize:'16px',fontWeight:'600',paddingInline:'8px'}}>REACTJS</span>
                            </div>
                            <div>
                                45%
                            </div>
                            <div className='skill_bar' style={{maxWidth:'45%'}}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills_image_wrapper">
                    <img src="/work3.webp" alt="skill_image"/>
                </div>
            </div>      
        </div>
    </section>
    )
}