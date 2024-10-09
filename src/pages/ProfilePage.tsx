import React, { useEffect, useState } from "react";
import axios from "axios";
import { User, Phone, Mail, ShoppingBag, Truck, MapPin, Calendar, Loader2 } from "lucide-react";
import BackNavigator from "../components/BackNavigator";
import "../styles/ProfilePage.css";

interface UserProfile {
  _id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
}

interface Order {
  _id: string;
  orderId: string;
  totalPrice: number;
  deliveryMethod: string;
  location: string;
  deliveryDate: string;
  items: {
    cakeId: {
      name: string;
      price: number;
    };
    quantity: number;
  }[];
}

interface FullProfileResponse {
  userProfile: UserProfile;
  orderHistory: Order[];
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get<FullProfileResponse>(
          `${import.meta.env.VITE_BACKEND_API}/api/getProfile`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        setProfile(response.data.userProfile);
        setOrderHistory(response.data.orderHistory);
      } catch (error) {
        console.error("Error fetching profile and order history", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Styles
  const pageStyle: React.CSSProperties = {
    // maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 30px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
    backgroundColor: "#f7fafc",
    minHeight: "100vh",
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

  const sectionStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const subHeaderStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  };

  const profileItemStyle: React.CSSProperties = {
    marginBottom: "15px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: "bold",
    marginRight: "10px",
    color: "#4a5568",
    minWidth: "80px",
    display: "flex",
    alignItems: "center",
  };

  const orderListStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: 0,
  };

  const orderItemStyle: React.CSSProperties = {
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
  };

  const orderHeaderStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
  };

  const orderDetailStyle: React.CSSProperties = {
    marginBottom: "10px",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "10px",
    color: "#4a5568",
  };

  const loaderContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7fafc",
  };

  if (loading) {
    return (
      <div style={loaderContainerStyle}>
        <Loader2 size={48} className="animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <BackNavigator label="Go Back" />
      <h1 style={headerStyle}>
        <User size={32} style={iconStyle} />
        User Profile
      </h1>

      <div style={sectionStyle}>
        <h2 style={subHeaderStyle}>
          <User size={24} style={iconStyle} />
          Personal Information
        </h2>
        {profile ? (
          <div>
            <p style={profileItemStyle}>
              <span style={labelStyle}>
                <User size={18} style={iconStyle} />
                Username:
              </span>
              {profile.username}
            </p>
            <p style={profileItemStyle}>
              <span style={labelStyle}>
                <User size={18} style={iconStyle} />
                Name:
              </span>
              {profile.name}
            </p>
            <p style={profileItemStyle}>
              <span style={labelStyle}>
                <Mail size={18} style={iconStyle} />
                Email:
              </span>
              {profile.email}
            </p>
            <p style={profileItemStyle}>
              <span style={labelStyle}>
                <Phone size={18} style={iconStyle} />
                Phone:
              </span>
              {profile.phone}
            </p>
          </div>
        ) : (
          <p>No profile information available.</p>
        )}
      </div>

      <div style={sectionStyle}>
        <h2 style={subHeaderStyle}>
          <ShoppingBag size={24} style={iconStyle} />
          Order History
        </h2>
        {orderHistory.length > 0 ? (
          <ul style={orderListStyle}>
            {orderHistory.map((order) => (
              <li key={order._id} style={orderItemStyle}>
                <h3 style={orderHeaderStyle}>
                  <ShoppingBag size={18} style={iconStyle} />
                  Order ID: {order.orderId}
                </h3>
                <p style={orderDetailStyle}>
                  <span style={labelStyle}>
                    <ShoppingBag size={16} style={iconStyle} />
                    Total Price:
                  </span>
                  GHS {order.totalPrice ? order.totalPrice.toFixed(2) : "0.00"}
                </p>
                <p style={orderDetailStyle}>
                  <span style={labelStyle}>
                    <Truck size={16} style={iconStyle} />
                    Delivery:
                  </span>
                  {order.deliveryMethod}
                </p>
                <p style={orderDetailStyle}>
                  <span style={labelStyle}>
                    <MapPin size={16} style={iconStyle} />
                    Location:
                  </span>
                  {order.location || "N/A"}
                </p>
                <p style={orderDetailStyle}>
                  <span style={labelStyle}>
                    <Calendar size={16} style={iconStyle} />
                    Date:
                  </span>
                  {new Date(order.deliveryDate).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No order history available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
