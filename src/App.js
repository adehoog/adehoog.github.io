import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Project";
import ProjectPage from "./components/projectPage"

function HomeScreen() {
    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
            <Footer />
        </div>
    );
}

export default function App() {
  return (
      <div className={"App"}>
            <Router>
                <Routes>
                    <Route exact path={"/"} element={<HomeScreen />} />
                    <Route path={"/project/:lang:id"} element={<ProjectPage />} />
                </Routes>
            </Router>
      </div>
  );
}
