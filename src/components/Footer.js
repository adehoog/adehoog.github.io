import React from "react";
import "../styles/Footer.css"
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import ItchIoIcon from "@material-ui/icons/SportsEsports";
import EmailIcon from "@material-ui/icons/Email";
import ItchioIcon from "../images/itchio-logo.png";

function Footer() {
    return(
        <div className={"footer"}>
            <p>Audrey M. DeHoog</p>
            <div className={"socialMedia"}>
                <EmailIcon />
                <GitHubIcon />
                <LinkedInIcon />
                <img src={ItchioIcon} alt={"Itch.io"} style={{width: 60, height: 60, margin: 20}}/>
            </div>
        </div>
    );
}

export default Footer;