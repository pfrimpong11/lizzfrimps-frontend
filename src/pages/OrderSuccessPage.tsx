import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ShoppingBag, Home } from "lucide-react";
import '../styles/OrderSuccessPage.css';

const OrderSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  const handleViewOrders = () => {
    navigate("/ProfilePage");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  // Styles
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f7fafc',
    fontFamily: 'Arial, sans-serif',
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  };

  const iconStyle: React.CSSProperties = {
    color: '#48bb78',
    marginBottom: '20px',
  };

  const headerStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '10px',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#4a5568',
    marginBottom: '30px',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#4299e1',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#48bb78',
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <CheckCircle size={64} style={iconStyle} />
        <h1 style={headerStyle}>Thank you for your purchase!</h1>
        <p style={paragraphStyle}>Your order has been successfully placed.</p>
        <div style={buttonContainerStyle}>
          <button
            style={primaryButtonStyle}
            onClick={handleViewOrders}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#38a169'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#48bb78'}
          >
            <ShoppingBag size={20} style={{ marginRight: '8px' }} />
            View My Orders
          </button>
          <button
            style={buttonStyle}
            onClick={handleGoHome}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4299e1'}
          >
            <Home size={20} style={{ marginRight: '8px' }} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;