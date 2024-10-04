import React from "react";
import '../styles/CakePage.css';


const CakeFilter: React.FC = () => {
  const filterStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    margin: "2rem 0",
  };

  const selectStyle: React.CSSProperties = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    fontSize: "1rem",
  };

  const searchStyle: React.CSSProperties = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    fontSize: "1rem",
    width: "200px",
  };

  return (
    <div style={filterStyle}>
      <select style={selectStyle}>
        <option value="">Sort by</option>
        <option value="birthday-cake">Birthday Cakes</option>
        <option value="wedding-cakes">Wedding Cakes</option>
        <option value="anniversary-cakes">Anniversary Cakes</option>
      </select>
      <input type="text" placeholder="Search cakes..." style={searchStyle} />
    </div>
  );
};

export default CakeFilter;
