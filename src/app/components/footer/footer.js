import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="portfolio_container">
                <div className='footer_wrapper'>
                    <div className='footer_heading'>
                        <h2>Harpreet</h2>
                    </div>
                    <div className='footer_social_links'>
                    <a href="https://in.linkedin.com/in/harpreet-bambrah" style={{textDecoration:'none', color:'#ffffff'}}>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ width: '22px',height:'22px', marginInline: '5px' }} />
                    </a>  
                    <a href="https://github.com/Harpreet-Bambrah" style={{textDecoration:'none', color:'#ffffff'}}>  
                        <FontAwesomeIcon icon={faGithub} style={{ width: '22px',height:'22px', marginInline: '5px' }} />
                        </a>
                    </div>
                    <div className='footer_description'>
                        <p>Thanks for visiting</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}