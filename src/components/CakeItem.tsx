import React, { useState } from "react";

interface Cake {
  _id: string;
  name: string;
  category: string;
  price: number;
  imageId: string;
}

interface CakeItemProps {
  cake: Cake;
}

const CakeItem: React.FC<CakeItemProps> = ({ cake }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const categoryStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "#757575",
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

  // Function to handle adding to cart
  const handleAddToCart = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you have a token for authentication
        },
        body: JSON.stringify({
          cakeId: cake._id,
          quantity: 1, // Adjust the quantity as needed
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      // Handle success (you may want to update a cart context or show a success message)
      alert("Item added to cart successfully!");

    } catch (error) {
      console.error("Error adding to cart:", error);
      setError("Please login to add to cart");
    } finally {
      setLoading(false);
    }
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
      <img
        src={`${import.meta.env.VITE_BACKEND_API}/api/cakes/image/${cake.imageId}`}
        alt={cake.name}
        style={imageStyle}
      />
      <div style={contentStyle}>
        <h3 style={nameStyle}>{cake.name}</h3>
        <p style={categoryStyle}>{cake.category}</p>
        <p style={priceStyle}>${cake.price.toFixed(2)}</p>
        <button
          style={buttonStyle}
          onClick={handleAddToCart}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#45a049";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#4CAF50";
          }}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
      </div>
    </div>
  );
};

export default CakeItem;
