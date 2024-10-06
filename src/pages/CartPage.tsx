import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

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

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get<CartResponse>(`${import.meta.env.VITE_BACKEND_API}/api/cart`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCartItems(response.data.items); // Set cart items from the response
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
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_API}/api/cart/remove`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { itemId }, // Send the item ID to remove
      });

      // Update the cart items after removal
      console.log(response);
      setCartItems(response.data.items);
    } catch (err) {
      console.error("Error removing item from cart", err);
    }
  };

  // Function to calculate total price
  const calculateTotalPrice = (): number => {
    return cartItems.reduce((total, item) => {
      return total + item.cakeId.price * item.quantity;
    }, 0);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const totalPrice = calculateTotalPrice(); // Calculate total price

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item._id}>
                <img
                src={`${import.meta.env.VITE_BACKEND_API}/api/cakes/image/${item.cakeId.imageId}`}
                alt={item.cakeId.name}
                height={100}
                width={100}
            />

              {item.cakeId.name} - Quantity: {item.quantity} - Price: ${item.cakeId.price.toFixed(2)}
              <button onClick={() => handleRemoveItem(item._id)}>Remove</button> {/* Remove button */}
            </li>
          ))}
        </ul>
      )}
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2> {/* Display total price */}
      <button onClick={() => navigate('/CheckoutPage')}>Checkout</button> {/* Navigate to CheckoutPage */}
    </div>
  );
};

export default CartPage;
