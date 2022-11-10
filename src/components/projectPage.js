import React from "react";
import {Link, useParams} from "react-router-dom"
import { cppProjects } from "../project_data/cppProjects";
import { pythonProjects } from "../project_data/pythonProjects";
import { unityProjects } from "../project_data/unityProjects";
import { miscProjects } from "../project_data/miscProjects";
import GitHubIcon from "@material-ui/icons/GitHub";
import { SiYoutube } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa"
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
            <p> {project.description}</p>
            <div className={"icons"}>
                <a href={project.github} target={"_blank"} rel={"noreferrer"}>
                    <GitHubIcon />
                </a>
                <a href={project.youtube} target={"_blank"} rel={"noreferrer"}>
                    <SiYoutube />
                </a>
                <a href={project.gdd} target={"_blank"} rel={"noreferrer"}>
                    <FaGoogleDrive />
                </a>
            </div>
            <button><Link to={`/`}> Back </Link></button>
        </div>
    );
}

export default ProjectPage;