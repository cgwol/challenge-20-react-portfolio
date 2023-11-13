import projects from '../utils/portfolioList'
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
    return (
      <div className='container d-flex vh-100 justify-content-center text-center'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 align-self-center'>
          {projects.map((project) => (
            <div key={project.title} className='col mb-4'>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    );
  }