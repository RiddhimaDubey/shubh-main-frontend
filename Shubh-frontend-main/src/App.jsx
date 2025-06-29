import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from"./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./components/SignUp";
import FullStack from "./pages/FullStack";
import AI_ML from "./pages/AI_ML";
import AR_VR from "./pages/AR_VR";
import BCI from "./pages/BCI";
import IoT from "./pages/IoT";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore"element={<Explore />} />
            <Route path="/about"element={<About />} />
            <Route path="/contact"element={<Contact />} />
            <Route path="/signup"element={<SignUp />} />
            <Route path="/fullstack"element={<FullStack />} />
            <Route path="/ai-ml"element={<AI_ML />} />
            <Route path="/ar-vr"element={<AR_VR />} />
            <Route path="/bci"element={<BCI />} />
            <Route path="/iot"element={<IoT />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
