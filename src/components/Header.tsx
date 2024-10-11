import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token); // Check if token exists

    if (token) {
      fetchCartItemCount();
      const intervalId = setInterval(fetchCartItemCount, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);

  const fetchCartItemCount = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/cart`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      setCartItemCount(response.data.itemCount); // Set the number of cart items
    } catch (error) {
      console.error("Error fetching cart item count", error);
    }
  };

  const handleSignUpButton = () => {
    navigate("/RegisterPage");
  };

  const handleLoginButton = () => {
    navigate("/LoginPage");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Clear token
    sessionStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/LogoutPage");
  };

  const handleCartButton = () => {
    navigate("/CartPage");
  };

  const headerStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    width: "100%",
    borderBottom: "1px solid #D3D3D3",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    height: "56px",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0.5rem 1rem",
  };

  const logoStyle: React.CSSProperties = {
    marginRight: "1rem",
  };

  const navContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const navStyle: React.CSSProperties = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
  };

  const mobileNavStyle: React.CSSProperties = {
    display: isMobile && isMenuOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "56px",
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: "1rem",
    borderBottom: "1px solid #D3D3D3",
  };

  const navLinkStyle: React.CSSProperties = {
    marginRight: "1.5rem",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#1f2120",
    transition: "color 0.2s ease",
    textDecoration: "none",
    padding: "0.5rem 0",
    cursor: "pointer",
  };

  const activeNavLinkStyle: React.CSSProperties = {
    ...navLinkStyle,
    color: "#000000",
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#000000",
    color: "#FFFFFF",
    border: "none",
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#000000",
    border: "1px solid #D3D3D3",
    marginRight: "1rem",
  };

  const menuButtonStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: isMobile ? "block" : "none",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <img
            src={Logo}
            alt="Lizzfrimps Cakes Empire"
            width={80}
            height={50}
          />
        </div>
        <div style={navContainerStyle}>
          <nav style={navStyle}>
            <a onClick={() => navigate("/")} style={activeNavLinkStyle}>
              Home
            </a>
            <a onClick={() => navigate("/CakePage")} style={navLinkStyle}>
              Cakes
            </a>
            <a onClick={() => navigate("/")} style={navLinkStyle}>
              Supplies
            </a>
            <a onClick={() => navigate("/AboutPage")} style={navLinkStyle}>
              About
            </a>
            <a onClick={() => navigate("/ContactPage")} style={navLinkStyle}>
              Contact
            </a>
          </nav>
          <div style={buttonContainerStyle}>
            {/* Conditional Rendering based on login status */}
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleCartButton}
                  style={{ ...secondaryButtonStyle, position: "relative" }}
                >
                  <ShoppingCart size={20} />
                  <span style={{ marginLeft: "5px" }}>
                    Cart ({cartItemCount})
                  </span>
                </button>
                <button
                  onClick={() => navigate("/ProfilePage")}
                  style={secondaryButtonStyle}
                >
                  Account
                </button>
                <button onClick={handleLogout} style={primaryButtonStyle}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLoginButton}
                  style={secondaryButtonStyle}
                >
                  Log in
                </button>
                <button onClick={handleSignUpButton} style={primaryButtonStyle}>
                  Sign up
                </button>
              </>
            )}
          </div>
          <button
            style={menuButtonStyle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <nav style={mobileNavStyle}>
        <a onClick={() => navigate("/")} style={activeNavLinkStyle}>
          Home
        </a>
        <a onClick={() => navigate("/CakePage")} style={navLinkStyle}>
          Cakes
        </a>
        <a onClick={() => navigate("/")} style={navLinkStyle}>
          Supplies
        </a>
        <a onClick={() => navigate("/AboutPage")} style={navLinkStyle}>
          About
        </a>
        <a onClick={() => navigate("/ContactPage")} style={navLinkStyle}>
          Contact
        </a>
        {/* Conditional Rendering for mobile menu based on login status */}
        {isLoggedIn ? (
          <>
            <button
              onClick={handleCartButton}
              style={{
                ...secondaryButtonStyle,
                marginTop: "1rem",
                width: "100%",
              }}
            >
              <ShoppingCart size={20} />
              <span style={{ marginLeft: "5px" }}>Cart ({cartItemCount})</span>
            </button>
            <button
              onClick={() => navigate("/ProfilePage")}
              style={{
                ...secondaryButtonStyle,
                marginTop: "1rem",
                width: "100%",
              }}
            >
              Account
            </button>
            <button
              onClick={handleLogout}
              style={{
                ...primaryButtonStyle,
                marginTop: "0.5rem",
                width: "100%",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleLoginButton}
              style={{
                ...secondaryButtonStyle,
                marginTop: "1rem",
                width: "100%",
              }}
            >
              Log in
            </button>
            <button
              onClick={handleSignUpButton}
              style={{
                ...primaryButtonStyle,
                marginTop: "0.5rem",
                width: "100%",
              }}
            >
              Sign up
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
