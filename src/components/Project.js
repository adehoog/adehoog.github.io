import React from "react";
import ProjectItem from "./projectItem";
import "../styles/Project.css"
import { cppProjects } from "../project_data/cppProjects";
import { pythonProjects } from "../project_data/pythonProjects";
import { unityProjects } from "../project_data/unityProjects";
import { miscProjects } from "../project_data/miscProjects";

function Projects() {
    return(
        <div className={"projects"} id={"projects"}>
            <h1 className={"projectTitle"}> Projects </h1>
            <h1> C++ Projects </h1>
            <div className={"projectList"}>
                {cppProjects.map((projects) => {
                    return <ProjectItem name={projects.title} image={projects.image}/>;
                })}
            </div>

            <h1> Python Projects </h1>
            <div className={"projectList"}>
                {pythonProjects.map((projects) => {
                    return <ProjectItem name={projects.title} image={projects.image}/>;
                })}
            </div>

            <h1> Unity Projects </h1>
            <div className={"projectList"}>
                {unityProjects.map((projects) => {
                    return <ProjectItem name={projects.title} image={projects.image}/>;
                })}
            </div>

            <h1> Miscellaneous Projects </h1>
            <div className={"projectList"}>
                {miscProjects.map((projects) => {
                    return <ProjectItem name={projects.title} image={projects.image}/>;
                })}
            </div>
        </div>
    );
}

export default Projects;