import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {setExpandNavbar(false)}, [location]);

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
                <a href={"#socials"}>
                    Socials
                </a>
            </div>
        </div>
    );
}

export default Navbar;