import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {
  return (
      <main className={"App"}>
        <Navbar />
        <Home />
        <Footer />
      </main>
  );
}
