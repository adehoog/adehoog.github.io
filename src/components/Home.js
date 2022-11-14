import React from "react";
import "../styles/Home.css";
import Headshot from "../images/headshot(square).jpeg";
import {SiCplusplus, SiCsharp, SiPython, SiJava, SiJavascript, SiUnity, SiAdobephotoshop, SiBlender} from "react-icons/si";

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
            <div className={"skills"} id={"skills"}>
                <h1>Skills</h1>
                <h2> Programming Languages </h2>
                <p>C++, C#, Python, Java, Javascript</p>
                <div>
                    <SiCplusplus />
                    <SiCsharp />
                    <SiPython />
                    <SiJava />
                    <SiJavascript />
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