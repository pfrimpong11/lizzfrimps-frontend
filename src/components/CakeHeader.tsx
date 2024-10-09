import React from "react";
import { MessageCircle } from "lucide-react";
// import '../styles/CakeHeader.css';

const CakeHeader: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, #FF9A8B 0%, #FF6A88 50%, #FF99AC 100%)",
    padding: "1rem 1rem",
    textAlign: "center",
    color: "white",
    position: "relative",
    overflow: "hidden",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto 1rem",
    lineHeight: 1.6,
  };

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 24px",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "8px",
  };

  return (
    <header style={headerStyle} className="cake-header">
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        {/* <h1 style={titleStyle}>Our Delicious Cakes</h1> */}
        <p style={subtitleStyle}>
          Explore our wide variety of handcrafted cakes, perfect for any occasion. 
          Want something unique? We offer custom cake designs tailored to your preferences!
        </p>
        <a 
          href="https://wa.me/233546640201" 
          target="_blank" 
          rel="noopener noreferrer"
          style={buttonStyle}
          className="whatsapp-button"
        >
          <MessageCircle size={24} style={iconStyle} />
          Customize Your Cake on WhatsApp
        </a>
      </div>
    </header>
  );
};

export default CakeHeader;