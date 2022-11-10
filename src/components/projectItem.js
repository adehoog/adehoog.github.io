import React from "react";
import { Link } from "react-router-dom"

function ProjectItem({name, image, itemID, lang}){
    return(
        <div className={"projectItem"}>
            <div style={{backgroundImage: `url(${image})`}} className={"bgImage"}/>
            <h1> <Link to={`/project/${lang}${itemID}`}> {name} </Link> </h1>
        </div>
    );
}

export default ProjectItem;