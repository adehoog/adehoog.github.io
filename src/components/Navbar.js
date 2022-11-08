import React, {useEffect, useState} from "react";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = window.location.hash.substr(1);
    console.log(location);

    //useEffect(() => {setExpandNavbar(false)}, [location]);

    return(
        <div className={"navbar"} id={expandNavbar ? "open" : "close"}>
            <div className={"toggleButton"}>
                <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    {" "}
                    <ReorderIcon />{" "}
                </button>
            </div>
            <div className={"links"}>
                <a href={"#home"}>
                    Home
                </a>
                <a href={"#about"}>
                    About Me
                </a>
                <a href={"#skills"}>
                    Skills
                </a>
                <a href={"#projects"}>
                    Projects
                </a>
            </div>
        </div>
    );
}

export default Navbar;