import React from "react";
import "./styles.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maintool from "./containers/Maintool";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header
          sitename="TextLink"
          sitedesc="A tool for edit your text fast By"
          byname="@harshitj183"
        />
        <Routes>
          <Route
            path="/"
            element={
              <Maintool
                placeholdername="Type something ..."
                headname="Enter Your Text to Convert"
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
