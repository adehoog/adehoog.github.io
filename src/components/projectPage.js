import React from "react";
import {Link, useParams} from "react-router-dom"
import { cppProjects } from "../project_data/cppProjects";
import { pythonProjects } from "../project_data/pythonProjects";
import { unityProjects } from "../project_data/unityProjects";
import { miscProjects } from "../project_data/miscProjects";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/projectDisplay.css"

function ProjectPage(){
    const { id } = useParams();
    const { lang } = useParams();
    let project;
    if (lang === "cpp"){
        project = cppProjects[id];
    }
    else if (lang === "py"){
        project = pythonProjects[id];
    }
    else if (lang === "unity"){
        project = unityProjects[id];
    }
    else{
        project = miscProjects[id];
    }
    return(
        <div className={"project"}>
            <img src={project.image}  alt={"projImg"}/>
            <h1> {project.title} </h1>
            <GitHubIcon />
            <button><Link to={`/`}> Back </Link></button>
        </div>
    );
}

export default ProjectPage;