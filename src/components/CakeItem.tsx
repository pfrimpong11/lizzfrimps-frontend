import React from "react";

interface Cake {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface CakeItemProps {
  cake: Cake;
}

const CakeItem: React.FC<CakeItemProps> = ({ cake }) => {
  const itemStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const contentStyle: React.CSSProperties = {
    padding: "1rem",
  };

  const nameStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const priceStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    color: "#e91e63",
    fontWeight: "bold",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "1rem",
    transition: "background-color 0.3s ease",
  };

  return (
    <div
      style={itemStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img src={cake.image} alt={cake.name} style={imageStyle} />
      <div style={contentStyle}>
        <h3 style={nameStyle}>{cake.name}</h3>
        <p style={priceStyle}>${cake.price.toFixed(2)}</p>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#45a049";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#4CAF50";
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CakeItem;
