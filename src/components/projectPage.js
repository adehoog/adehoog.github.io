import React from "react";
import {Link, useParams} from "react-router-dom"
import { cppProjects } from "../project_data/cppProjects";
import { pythonProjects } from "../project_data/pythonProjects";
import { unityProjects } from "../project_data/unityProjects";
import { miscProjects } from "../project_data/miscProjects";
import { webProjects} from "../project_data/webProjects";
import GitHubIcon from "@material-ui/icons/GitHub";
import { SiYoutube } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa";
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
    else if (lang === "webdev"){
        project = webProjects[id];
    }
    else{
        project = miscProjects[id];
    }

    /*
    if (project.github === ""){
        document.getElementById("ghIcon").style.display = "none";
    }
    if (project.youtube === ""){
        document.getElementById("ytIcon").style.display = "none";
    }
    if (project.gdd === ""){
        document.getElementById("gdIcon").style.display = "none";
    }
     */

    return(
        <div className={"project"}>
            <img src={project.image}  alt={"projImg"}/>
            <h1> {project.title} </h1>
            <p> {project.description}</p>
            <p>
                Below are the links to the project code, youtube trailer/demo, and/or google drive with either the GDD or project folder.
                Links vary depending on what is available for the project.
            </p>
            <div className={"icons"}>
                <a href={project.github} target={"_blank"} rel={"noreferrer"} id={"ghIcon"}>
                    {project.github !== "" ? <GitHubIcon /> : null}
                </a>
                <a href={project.youtube} target={"_blank"} rel={"noreferrer"} id={"ytIcon"}>
                    {project.youtube !== "" ? <SiYoutube /> : null}
                </a>
                <a href={project.gdd} target={"_blank"} rel={"noreferrer"} id={"gdIcon"}>
                    {project.gdd !== "" ? <FaGoogleDrive /> : null}
                </a>
            </div>
            <button><Link to={`/`}> Back </Link></button>
        </div>
    );
}

export default ProjectPage;