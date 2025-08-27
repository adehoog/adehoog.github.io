import 'bootstrap/dist/css/bootstrap.min.css';
import {projects} from "../assets/projects";

function langPills({langs}) {
  console.log(langs);
  //TODO: language pills not working
  return (
    <div key={Math.random()}>
      <p>{langs}</p>
      <span class="badge text-bg-primary">{langs}</span>
    </div>
    
  )
}

function projectCard({title, desc, video, repo, langs, index}) {
  return(
    <div key={title} class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{desc}</p>
        <a href={repo} class="card-link">Repo</a>
        <a href={video} class="card-link">
          {video !== undefined ? "Video" : null}
        </a>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <>
      <div class="container">
        <h1 className="text-primary">Projects</h1>
        {projects.map(projectCard)}
      </div>
    </>
  )
}

export default Projects