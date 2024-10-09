import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import { ShoppingBag, User, Phone, Mail, Truck, MapPin, Calendar, CreditCard, Pencil } from "lucide-react";
import "../styles/CheckoutPage.css";
import BackNavigator from "../components/BackNavigator";
import backgroundImage from '../assets/images/background.png';

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

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [deliveryMethod, setDeliveryMethod] = useState<string>("pickup");
  const [location, setLocation] = useState<string>("");
  const [inscription, setInscription] = useState<string>("");
  const [deliveryDate, setDeliveryDate] = useState<string>("");

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
        setTotalPrice(calculateTotalPrice(response.data.items));
      } catch (err) {
        console.error("Error fetching cart items", err);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotalPrice = (items: CartItem[]): number => {
    return items.reduce(
      (total, item) => total + item.cakeId.price * item.quantity,
      0
    );
  };

  const getMinDate = () => {
    const now = new Date();
    now.setDate(now.getDate() + 3);
    return now.toISOString().split("T")[0];
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: totalPrice * 100,
    currency: "GHS",
    phone: phone,
    publicKey: `${import.meta.env.VITE_PAYSTACK_KEY}`,
  };

  const onSuccess = async (reference: any) => {
    alert("Payment successful! Reference: " + reference.reference);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/order/save`,
        {
          userId: sessionStorage.getItem("userId"),
          cartItems,
          totalPrice,
          deliveryMethod,
          location,
          deliveryDate,
          inscription,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      alert("Order saved and confirmation email sent!");
      await clearCart();
      navigate("/OrderSuccessPage");
    } catch (err) {
      console.error("Error saving order or sending email", err);
      alert("Failed to save order or send confirmation email");
    }
  };

  const onClose = () => {
    console.log("Payment window closed");
    alert("Payment window closed");
  };

  const initializePayment = usePaystackPayment(config);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    initializePayment({
      onSuccess,
      onClose,
    });
  };

  const clearCart = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_API}/api/cart/delete`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      setCartItems([]);
      setTotalPrice(0);
      alert("Cart cleared successfully!");
    } catch (err) {
      console.error("Error clearing cart", err);
      alert("Failed to clear cart. Please try again.");
    }
  };

  // Styles
  const pageStyle: React.CSSProperties = {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  };

  const formContainerStyle: React.CSSProperties = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#f7fafc",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "30px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const formStyle: React.CSSProperties = {
    display: "grid",
    gap: "20px",
  };

  const inputGroupStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#4a5568",
    display: "flex",
    alignItems: "center",
  };

  const inputStyle: React.CSSProperties = {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #e2e8f0",
    borderRadius: "4px",
    backgroundColor: "#fff",
    transition: "border-color 0.3s",
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    appearance: "none",
    backgroundImage:
      'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234a5568%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 50%",
    backgroundSize: "12px auto",
  };

  const totalPriceStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
    textAlign: "right",
    color: "#2d3748",
    padding: "15px",
    backgroundColor: "#edf2f7",
    borderRadius: "4px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#ED8936",
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "10px",
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle} className="checkout-container">
      <BackNavigator label="Go Back" />
        <h1 style={headerStyle}>
          <ShoppingBag size={32} style={iconStyle} />
          Checkout
        </h1>
        <form id="paymentForm" onSubmit={handleCheckout} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <User size={18} style={iconStyle} />
              Full Name:
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={inputStyle}
              className="checkout-input"
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <Phone size={18} style={iconStyle} />
              Phone Number:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={inputStyle}
              className="checkout-input"
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <Mail size={18} style={iconStyle} />
              Email Address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
              className="checkout-input"
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <Truck size={18} style={iconStyle} />
              Delivery Method:
            </label>
            <select
              value={deliveryMethod}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              required
              style={selectStyle}
              className="checkout-select"
            >
              <option value="pickup">Pickup</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
          {deliveryMethod === "delivery" && (
            <div style={inputGroupStyle}>
              <label style={labelStyle}>
                <MapPin size={18} style={iconStyle} />
                Delivery Location:
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required={deliveryMethod === "delivery"}
                style={inputStyle}
                className="checkout-input"
              />
            </div>
          )}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <Pencil size={18} style={iconStyle} />
              Cake Inscription:
            </label>
            <input
              type="text"
              value={inscription}
              onChange={(e) => setInscription(e.target.value)}
              placeholder="eg. Happy Birthday My Love"
              style={inputStyle}
              className="checkout-input"
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <Calendar size={18} style={iconStyle} />
              Preferred Date for Pickup/Delivery:
            </label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              min={getMinDate()}
              required
              style={inputStyle}
              className="checkout-input"
            />
          </div>
          <h2 style={totalPriceStyle}>
            Total Price: GHS {totalPrice.toFixed(2)}
          </h2>
          <button
            type="submit"
            style={buttonStyle}
            className="checkout-button"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#db6e14")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ED8936")
            }
          >
            <CreditCard size={24} style={iconStyle} />
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
