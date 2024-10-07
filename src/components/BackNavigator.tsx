import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackNavigatorProps {
  label?: string; // Optional label for the button
  customStyle?: React.CSSProperties; // Custom style for the component
}

const BackNavigator: React.FC<BackNavigatorProps> = ({ label = "Back", customStyle }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page
  };

  const buttonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ED8936",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "2rem",
    ...customStyle, // Merge custom styles with default styles
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "8px",
  };

  return (
    <button style={buttonStyle} onClick={handleBackClick}>
      <ArrowLeft size={20} style={iconStyle} />
      {label}
    </button>
  );
};

export default BackNavigator;
