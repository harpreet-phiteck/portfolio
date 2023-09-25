import './about.css';
export default function About(){
    return (
        <section className="about_section">
            <div className="portfolio_container">
                    <div className='about_heading_wrapper'>
                        <h2>
                            About
                        </h2>
                    </div>
                <div className="about_wrapper">
                    <div className="about_image_wrapper">
                        <img src="/about.jpg" alt=""/>
                    </div>
                    <div className="about_content_wrapper">
                        <h2>
                            I'am Marlon
                        </h2>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.
                        </p>
                    </div>
                </div>      
            </div>
        </section>
    )
}