import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function App() {
  return (
      <main className={"text-gray-400 bg-gray-900 body-font"}>
        <Header />
        <AboutMe />
        <Projects />
      </main>
  );
}
