import React from "react";
import '../styles/CakePage.css';


const CakeHeader: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    background: "linear-gradient(to right, #FF9A8B, #FF6A88, #FF99AC)",
    padding: "3rem 1rem",
    textAlign: "center",
    color: "white",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Our Delicious Cakes</h1>
      <p style={subtitleStyle}>
        Explore our wide variety of handcrafted cakes, perfect for any occasion.
      </p>
    </header>
  );
};

export default CakeHeader;
