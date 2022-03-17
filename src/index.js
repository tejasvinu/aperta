import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Navigation } from "./components/navigation";
import Home from "./home.js";
import Wall from "./wall.js";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Wall" element={<Wall/>}/>
    </Routes>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();

