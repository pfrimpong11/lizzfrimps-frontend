import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2, CreditCard, Loader2 } from "lucide-react";
import BackNavigator from "../components/BackNavigator";
import "../styles/CartPage.css";

interface Cake {
  _id: string;
  name: string;
  price: number;
  imageId: string;
}

interface CartItem {
  _id: string;
  cakeId: Cake;
  quantity: number;
}

interface CartResponse {
  itemCount: number;
  items: CartItem[];
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get<CartResponse>(
          `${import.meta.env.VITE_BACKEND_API}/api/cart`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        setCartItems(response.data.items);
      } catch (err) {
        setError("Error fetching cart items.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId: string) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_API}/api/cart/remove`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          data: { itemId },
        }
      );
      console.log(response);
      setCartItems(response.data.items);
    } catch (err) {
      console.error("Error removing item from cart", err);
    }
  };

  const calculateTotalPrice = (): number => {
    return cartItems.reduce((total, item) => {
      return total + item.cakeId.price * item.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  // Styles
  const pageStyle: React.CSSProperties = {
    // maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 30px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#4A5568",
    marginBottom: "20px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const emptyCartStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "18px",
    color: "#718096",
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const cartListStyle: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
  };

  const cartItemStyle: React.CSSProperties = {
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    marginBottom: "15px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const imageContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };

  const imageStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "20px",
  };

  const itemDetailsStyle: React.CSSProperties = {
    flex: 1,
    minWidth: "200px",
  };

  const itemNameStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#2D3748",
  };

  const itemPriceStyle: React.CSSProperties = {
    fontSize: "16px",
    color: "#718096",
  };

  const removeButtonStyle: React.CSSProperties = {
    backgroundColor: "#E53E3E",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
    display: "flex",
    alignItems: "center",
  };

  const totalPriceStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "30px",
    textAlign: "right",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const checkoutButtonStyle: React.CSSProperties = {
    backgroundColor: "#ED8936",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "18px",
    marginTop: "20px",
    transition: "background-color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "300px",
    margin: "20px auto 0",
  };

  const loaderContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  if (loading) {
    return (
      <div style={loaderContainerStyle}>
        <Loader2 size={48} className="animate-spin text-primary" />
      </div>
    );
  }

  if (error) return <div style={pageStyle}>{error}</div>;

  return (
    <div style={pageStyle}>
      <BackNavigator label="Go Back" />
      <h1 style={headerStyle}>
        <ShoppingCart size={32} className="mr-2" />
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p style={emptyCartStyle}>Your cart is empty.</p>
      ) : (
        <ul style={cartListStyle}>
          {cartItems.map((item) => (
            <li key={item._id} style={cartItemStyle} className="cartItemStyle">
              <div style={imageContainerStyle}>
                <img
                  src={`${import.meta.env.VITE_BACKEND_API}/api/cakes/image/${
                    item.cakeId.imageId
                  }`}
                  alt={item.cakeId.name}
                  style={imageStyle}
                />
                <div style={itemDetailsStyle}>
                  <div style={itemNameStyle}>{item.cakeId.name}</div>
                  <div style={itemPriceStyle}>
                    Quantity: {item.quantity} - Price: GHS{" "}
                    {(item.cakeId.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item._id)}
                style={removeButtonStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#C53030")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#E53E3E")
                }
              >
                <Trash2 size={16} className="mr-1" />
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2 style={totalPriceStyle}>Total Price: GHS {totalPrice.toFixed(2)}</h2>
      <button
        onClick={() => navigate("/CheckoutPage")}
        style={checkoutButtonStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#db6e14")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ED8936")
        }
      >
        <CreditCard size={20} className="mr-2" />
        Checkout
      </button>
      <button
        onClick={() => navigate("/")}
        style={checkoutButtonStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#db6e14")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ED8936")
        }
      >
        <ShoppingCart size={20} className="mr-2" />
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;
