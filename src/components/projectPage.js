import React from "react";
import { useParams } from "react-router-dom"
import { cppProjects } from "../project_data/cppProjects";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectPage(){
    const { id } = useParams();
    const project = cppProjects[id];
    return(
        <div className={"project"}>
            <h1> {project.name} </h1>
            <img src={project.image} />
            <GitHubIcon />
        </div>
    );
}

export default ProjectPage;