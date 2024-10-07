import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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
    backgroundColor: "#db6e14",
    color: "white",
    borderColor: "#823f08",
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          style={i === currentPage ? activeStyle : buttonStyle}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={paginationStyle}>
      <button style={buttonStyle} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &laquo; Previous
      </button>
      {renderPageNumbers()}
      <button
        style={buttonStyle}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
