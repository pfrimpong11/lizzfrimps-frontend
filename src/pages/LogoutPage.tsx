import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/LogoutPage.css';

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  const pageStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    textAlign: "center",
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#4A5568",
    marginBottom: "20px",
  };

  const messageStyle: React.CSSProperties = {
    fontSize: "18px",
    color: "#718096",
    marginBottom: "30px",
    lineHeight: "1.6",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
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
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#45a049";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#4CAF50";
          }}
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
