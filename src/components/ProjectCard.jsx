
export default function ProjectCard(project){
    {console.log(project)}
    return(
        <div className="card">
            <img src={project.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
                <a href={project.github} className="btn btn-primary">Project's Github</a>
            </div>
        </div>
    )
}