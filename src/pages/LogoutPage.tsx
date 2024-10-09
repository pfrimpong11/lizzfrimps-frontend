import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Cake } from 'lucide-react';
import '../styles/LogoutPage.css';

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  const pageStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FFF5F5 0%, #FED7D7 100%)",
    padding: "20px",
    textAlign: "center",
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
    animation: "fadeInUp 0.5s ease-out",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#4A5568",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  };

  const messageStyle: React.CSSProperties = {
    fontSize: "18px",
    color: "#718096",
    marginBottom: "30px",
    lineHeight: "1.8",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "14px 28px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#ED8936",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "10px",
  };

  const cakeIconStyle: React.CSSProperties = {
    fontSize: "48px",
    color: "#ED8936",
    marginBottom: "20px",
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div style={pageStyle} className="logout-page">
      <div style={containerStyle} className="logout-container">
        <Cake style={cakeIconStyle} />
        <h1 style={titleStyle}>Thank You for Visiting Lizzfrimps Cakes!</h1>
        <p style={messageStyle}>
          We appreciate your business and hope you enjoyed your sweet experience
          with us. Your account has been safely logged out. We look forward to
          serving you again soon with our delicious cakes and exceptional
          service!
        </p>
        <button
          style={buttonStyle}
          onClick={handleHomeClick}
          className="home-button"
          aria-label="Return to Homepage"
        >
          <Home size={24} style={iconStyle} />
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;