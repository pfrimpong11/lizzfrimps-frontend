import React from "react";

const Pagination: React.FC = () => {
  const paginationStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 0",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    margin: "0 0.25rem",
    backgroundColor: "#f8f9fa",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const activeStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#007bff",
    color: "white",
    borderColor: "#007bff",
  };

  return (
    <div style={paginationStyle}>
      <button style={buttonStyle}>&laquo; Previous</button>
      <button style={activeStyle}>1</button>
      <button style={buttonStyle}>2</button>
      <button style={buttonStyle}>3</button>
      <button style={buttonStyle}>Next &raquo;</button>
    </div>
  );
};

export default Pagination;
