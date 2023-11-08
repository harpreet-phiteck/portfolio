import './work.css';
import Project from './project';
export default function Work(){
    const project_data = [
        {
            img_url:'/acifin.png',
            link:'https://harpreet-phiteck.github.io/acifin-design/',
            code_link:'https://github.com/harpreet-phiteck/acifin-design'
        },
        {
            img_url:'/mapbox_work.png',
            link:'https://harpreet-phiteck.github.io/test/',
            code_link:'https://github.com/harpreet-phiteck/test'
        },
        {
            img_url:'/tripmasterAI.png',
            link:'https://tripmaster-ai.vercel.app/',
            code_link:'https://github.com/harpreet-phiteck/tripmaster-ai'
        },
        {
            img_url:'/starmap_work.png',
            link:'https://kgoyal000.github.io/new-starmap-ui/',
            code_link:'#'
        },
        {
            img_url:'/work1.jpg',
            link:'#',
            code_link:'#'
        },
        {
            img_url:'/work1.jpg',
            link:'#',
            code_link:'#'
        }
    ]
    return(
        <section className="work_section" id='work'>
            <div className="portfolio_container">
                <div className="work_wrapper">
                    <div className="work_heading">
                        <h2>Work</h2>
                    </div>
                    <div className="work_detail">
                       {
                       project_data.map((data , index)=>{
                       return <Project Data={data} key={index}/>
                       })

                       }
                    </div>
                </div>
            </div>
        </section>
    )
}