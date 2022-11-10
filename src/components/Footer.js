import React from "react";
import "../styles/Footer.css"
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import ItchIoIcon from "@material-ui/icons/SportsEsports";
import ItchioIcon from "../images/itchio-logo.png";

function Footer() {
    return(
        <div className={"footer"} id={"socials"}>
            <p>Audrey M. DeHoog</p>
            <p>audrey.dehoog@gmail.com</p>
            <div className={"socialMedia"}>
                <a href={"https://github.com/adehoog"} target={"_blank"} rel={"noreferrer"}>
                    <GitHubIcon />
                </a>
                <a href={"https://www.linkedin.com/in/audrey-dehoog/"} target={"_blank"} rel={"noreferrer"}>
                    <LinkedInIcon width={100} height={100}/>
                </a>
                <a href={"https://adehoog.itch.io/"} target={"_blank"} rel={"noreferrer"}>
                    <img src={ItchioIcon} alt={"Itch.io"} style={{width: 60, height: 60, margin: 20}}/>
                </a>
            </div>
        </div>
    );
}

export default Footer;