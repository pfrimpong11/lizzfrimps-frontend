import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackNavigatorProps {
  label?: string;
  customStyle?: React.CSSProperties;
}

const BackNavigator: React.FC<BackNavigatorProps> = ({ label = "Back", customStyle }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ED8936",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "2rem",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    ...customStyle,
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: "#DD6B20",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "8px",
    transition: "transform 0.3s ease",
    transform: isHovered ? "translateX(-4px)" : "translateX(0)",
  };

  return (
    <button
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onClick={handleBackClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Navigate back to ${label}`}
      className="back-navigator"
    >
      <ArrowLeft size={20} style={iconStyle} />
      <span>{label}</span>
    </button>
  );
};

export default BackNavigator;