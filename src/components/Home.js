import React from "react";
import "../styles/Home.css";
import Headshot from "../images/headshot(square).png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import ItchioIcon from "../images/itchio-logo.png";
import {SiCplusplus, SiCsharp, SiPython, SiJava, SiJavascript, SiUnity, SiAdobephotoshop, SiBlender} from "react-icons/si"

function Home() {
    return(
        <div className={"home"} id={"home"}>
            <div className={"intro"}>
                <h1>Hi, my name is Audrey DeHoog</h1>
                <h2>
                    Welcome to my portfolio website. I keep information on my current and past coding projects here, as well as other work I've done that's important to me.
                </h2>
                <div className={"prompt"}>
                    <EmailIcon />
                    <GitHubIcon />
                    <LinkedInIcon width={100} height={100}/>
                    <img src={ItchioIcon} alt={"Itch.io"} style={{width: 55, height: 55, marginBottom: 7}}/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"profile"}>
                    <img src={Headshot} alt={"headshot"}/>
                </div>
                <div className={"about"} id={"about"}>
                    <h1>About me</h1>
                    <p>
                        I am 4th Year Computer Science Engineering Major with a minor in Digital Arts and Sciences at the University of Florida.
                        I have a passion for coding, game design, and increasing inclusivity within STEM fields.
                        <br/>
                        <br/>
                        I have a lot of experience in public speaking and have held many leadership positions.
                        Currently, I am the director of Pride in Engineering, a professional development club for LGBTQ+ engineering students.
                        I have also participated in student panels that work to encourage women to pursue careers in Computer Science.
                    </p>
                </div>
            </div>
            <div className={"skills"}>
                <h1>Skills</h1>
                <ol className={"list"}>
                    <li className={"item"}>
                        <h2> Programming Languages </h2>
                        <span>C++, C#, Python, Java, Javascript</span>
                        <div className={"icons"}>
                            <SiCplusplus />
                            <SiCsharp />
                            <SiPython />
                            <SiJava />
                            <SiJavascript />
                        </div>
                    </li>
                    <li className={"item"}>
                        <h2> Game Development </h2>
                        <span>Unity, Photoshop, Blender</span>
                        <div className={"icons"}>
                            <SiUnity />
                            <SiAdobephotoshop />
                            <SiBlender />
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;