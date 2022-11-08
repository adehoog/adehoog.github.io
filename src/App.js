import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Project";
import ProjectPage from "./components/projectPage"

export default function App() {
  return (
      <main className={"App"}>
        <Navbar />
        <Home />
        <Projects />
        <Footer />
        <Router>
            <Routes>
                <Route path={"/project/:id"} element={<ProjectPage />} />
            </Routes>
        </Router>
      </main>
  );
}
