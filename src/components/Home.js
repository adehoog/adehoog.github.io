import React from "react";
import "../styles/Home.css";
import Headshot from "../images/headshot(square).jpeg";
import {SiCplusplus, SiCsharp, SiPython, SiJava, SiJavascript, SiUnity, SiAdobephotoshop, SiBlender, SiRust} from "react-icons/si";

function Home() {
    return(
        <div className={"home"}>
            <div className={"intro"} id={"home"}>
                <h1>Hi, my name is Audrey DeHoog</h1>
                <h2>
                    Welcome to my portfolio website. I keep information on my current and past coding projects here, as well as other work I've done that's important to me.
                </h2>
            </div>

            <div className={"row"}>
                <div className={"profile"}>
                    <img src={Headshot} alt={"headshot"}/>
                </div>
                <div className={"about"} id={"about"}>
                    <h1>About Me</h1>
                    <p>
                        I graduated from the University of Florida with a Bachelor of Science in Computer Science with a minor in Digital Arts and Sciences Magna Cum Laude and I am currently a graduate student at the University of Florida pursuing a Masters in Computer Science.
                        <br/>
                        <br/>
                        My interests include computer-human interaction, computer graphics, CS education, and game development.
                        I was involved in research advocating for computer science educational resources for non-computing majors as an undergraduate and I am continuing this work as a master's student.
                        I am also involved with multiple diversity and inclusion organizations that provide resources for under-represented groups in the STEM field.
                    </p>
                </div>
            </div>
            <div className={"skills"} id={"skills"}>
                <h1>Skills</h1>
                <h2> Programming Languages </h2>
                <p>C++, C#, Python, Java, Javascript, Rust</p>
                <div>
                    <SiCplusplus />
                    <SiCsharp />
                    <SiPython />
                    <SiJava />
                    <SiJavascript />
                    <SiRust />
                </div>
                <h2> Game Development </h2>
                <p>Unity, Photoshop, Blender</p>
                <div>
                    <SiUnity />
                    <SiAdobephotoshop />
                    <SiBlender />
                </div>
                <p></p>
            </div>
        </div>
    );
}

export default Home;