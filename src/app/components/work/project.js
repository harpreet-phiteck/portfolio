import Image from "next/image"
export default function Project(props) { 
    return (
        <div className='work_project'>
            <div className='project_link'><a href={props.Data.link}>Link</a><a href={props.Data.code_link}>Code</a></div>
            <img src={props.Data.img_url} alt='work_project' />
        </div>
    )
}