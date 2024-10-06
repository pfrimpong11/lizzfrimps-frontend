import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePaystackPayment } from "react-paystack"; // Import the usePaystackPayment hook

// Define the types
interface Cake {
  _id: string; // Cake ID
  name: string; // Cake name
  price: number; // Cake price
  imageId: string;
}

interface CartItem {
  _id: string; // Cart item ID
  cakeId: Cake; // The cake details
  quantity: number; // Quantity of the cake
}

interface CartResponse {
  itemCount: number; // Total item count
  items: CartItem[]; // List of items in the cart
}

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    // Fetch cart items and calculate total price
    const fetchCartItems = async () => {
      try {
        const response = await axios.get<CartResponse>(`${import.meta.env.VITE_BACKEND_API}/api/cart`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCartItems(response.data.items);
        setTotalPrice(calculateTotalPrice(response.data.items));
      } catch (err) {
        console.error("Error fetching cart items", err);
      }
    };

    fetchCartItems();
  }, []);

  // Function to calculate total price
  const calculateTotalPrice = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.cakeId.price * item.quantity, 0);
  };

  // Paystack configuration
  const config = {
    reference: (new Date()).getTime().toString(), // Unique reference for the transaction
    email: email, // User's email
    amount: totalPrice * 100, // Amount in kobo (Paystack expects amount in the lowest currency)
    currency: "GHS",
    phone: phone,
    publicKey: `${import.meta.env.VITE_PAYSTACK_KEY}`, // Replace with your public key
  };

  const onSuccess = async (reference: any) => {
    console.log(reference);
    alert("Payment successful! Reference: " + reference.reference);
    await clearCart(); // Clear the cart after successful payment
    // Implement further actions like saving order details, etc.
  };
  
  const onClose = () => {
    console.log("Payment window closed");
    alert("Payment window closed");
  };

  const initializePayment = usePaystackPayment(config); // Initialize Paystack payment

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    initializePayment({
      onSuccess,
      onClose,
    }); // Trigger Paystack payment with a single argument
  };

  // Function to clear the cart
  const clearCart = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_API}/api/cart/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCartItems([]); // Clear local state
      setTotalPrice(0); // Reset total price
      alert("Cart cleared successfully!");
    } catch (err) {
      console.error("Error clearing cart", err);
      alert("Failed to clear cart. Please try again.");
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form id="paymentForm" onSubmit={handleCheckout}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <h2>Total Price: GHS {totalPrice.toFixed(2)}</h2>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
