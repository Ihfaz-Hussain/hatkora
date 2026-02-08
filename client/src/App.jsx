// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar"; // import navbar
import "./App.css"; // optional styling

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar at top */}
      <div style={{ padding: 20 }}>
        <h1>Welcome to Hatkora - Sylhet</h1>
        <p>
          Known as the city of two leaves and one bud, explore Ali Amjad's Clock,
          Kean Bridge, tea gardens, and ancient shrines.
        </p>
      </div>
    </div>
  );
}

export default App;
