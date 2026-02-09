// src/components/Navbar.jsx
import React from "react";
function Navbar() {
  const navStyle = {
    position: "absolute", // floats above hero image
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)", // center horizontally
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",       // not full width
    maxWidth: "1200px",
    padding: "12px 30px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    zIndex: 1000,
  };

  const linkStyle = {
    margin: "0 15px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "16px",
    transition: "color 0.3s ease",
    color: "#1f3d2b", // Hatkora green
  };

  const leftLinks = ["Home", "Landmarks", "Tea Gardens"];
  const rightLinks = ["Sign In"];

  return (
    <nav style={navStyle}>
      {/* Left links */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {leftLinks.map((link) => (
          <div
            key={link}
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#ffd700")}
            onMouseLeave={(e) => (e.target.style.color = "#1f3d2b")}
          >
            {link}
          </div>
        ))}
      </div>

      {/* Logo in the center */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src= "/img/Gemini_Generated_Image_5ruvb25ruvb25ruv.png"
          alt="Hatkora Logo"
          style={{ width: "360px", height: "270px" }}
        /> 
        <span style={{ fontWeight: "bold", color: "#1f3d2b", fontSize: "20px" }}>

        </span>
      </div>

      {/* Right links + CTA */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {rightLinks.map((link) => (
          <div
            key={link}
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#ffd700")}
            onMouseLeave={(e) => (e.target.style.color = "#1f3d2b")}
          >
            {link}
          </div>
        ))}
        <div
          style={{
            marginLeft: "20px",
            padding: "8px 20px",
            backgroundColor: "#ffd700",
            color: "#1f3d2b",
            fontWeight: "600",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e6c200")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffd700")}
        >
          Explore Sylhet
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
