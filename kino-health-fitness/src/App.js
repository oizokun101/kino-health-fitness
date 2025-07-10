import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import TopScroll from "./components/TopScroll";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <TopScroll />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kino-health-fitness" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
