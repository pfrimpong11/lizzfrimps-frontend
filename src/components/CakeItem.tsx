import React, { useState } from "react";
import { ShoppingCart, Loader } from "lucide-react";

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
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const imageContainerStyle: React.CSSProperties = {
    position: "relative",
    paddingTop: "66.67%", // 3:2 aspect ratio
    overflow: "hidden",
  };

  const imageStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  };

  const contentStyle: React.CSSProperties = {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  };

  const nameStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#2d3748",
  };

  const categoryStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "#718096",
    marginBottom: "0.5rem",
  };

  const priceStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    color: "#e53e3e",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#48bb78",
    color: "white",
    border: "none",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    marginTop: "auto",
  };

  const errorStyle: React.CSSProperties = {
    color: "#e53e3e",
    fontSize: "0.875rem",
    marginTop: "0.5rem",
    textAlign: "center",
  };

  const handleAddToCart = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/cart/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            cakeId: cake._id,
            quantity: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      // alert("Item added to cart successfully!");
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
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div style={imageContainerStyle}>
        <img
          src={`${import.meta.env.VITE_BACKEND_API}/api/cakes/image/${cake.imageId}`}
          alt={cake.name}
          style={imageStyle}
        />
      </div>
      <div style={contentStyle}>
        <h3 style={nameStyle}>{cake.name}</h3>
        <p style={categoryStyle}>{cake.category}</p>
        <p style={priceStyle}>GHS {cake.price.toFixed(2)}</p>
        <button
          style={buttonStyle}
          onClick={handleAddToCart}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#38a169";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#48bb78";
          }}
          disabled={loading}
          aria-label={`Add ${cake.name} to cart`}
        >
          {loading ? (
            <Loader className="animate-spin mr-2" size={20} />
          ) : (
            <ShoppingCart className="mr-2" size={20} />
          )}
          {loading ? "Adding..." : "Add to Cart"}
        </button>
        {error && <p style={errorStyle}>{error}</p>}
      </div>
    </div>
  );
};

export default CakeItem;