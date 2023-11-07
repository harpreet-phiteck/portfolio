import './work.css';
import Project from './project';
export default function Work(){
    const project_data = [
        {
            img_url:'/work1.jpg',
            link:'#',
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