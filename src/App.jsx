import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, Signup,Promo, PlayGround } from "./app/components"; // Correct imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/promo" element={<Promo />} /> 
        <Route path="/Playground" element={<PlayGround />} /> {/* Ensure PlayGround is imported correctly */}
      </Routes>
    </Router>
  );
}

export default App;
