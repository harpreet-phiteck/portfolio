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
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ width: '22px', marginInline: '5px' }} />
                        <FontAwesomeIcon icon={faGithub} style={{ width: '22px', marginInline: '5px' }} />
                    </div>
                    <div className='footer_description'>
                        <p>Thanks for visiting</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}