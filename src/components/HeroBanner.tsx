import React from "react";
import { ChevronRight, Cake } from "lucide-react";
import BackgroundImage from '../assets/images/background.png';
import { useNavigate } from "react-router-dom";

const HeroBanner: React.FC = () => {
  const navigate = useNavigate();

  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '800px',
    padding: '2rem',
    textAlign: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '1rem',
    // boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2D3748',
    lineHeight: 1.2,
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: '2.5rem',
    fontSize: '1.25rem',
    color: '#e6e3e1',
    lineHeight: 1.6,
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ED8936',
    color: '#FFFFFF',
    fontSize: '1.125rem',
    fontWeight: 600,
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease-in-out',
    border: 'none',
    cursor: 'pointer',
  };

  const iconStyle: React.CSSProperties = {
    marginLeft: '0.75rem',
    width: '1.25rem',
    height: '1.25rem',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <div style={logoStyle}>
          <Cake size={48} color="#ED8936" />
        </div>
        <h1 style={headingStyle}>
          Welcome to Lizzfrimps Cakes Empire
        </h1>
        <p style={paragraphStyle}>
          Indulge in our exquisite cakes, crafted with passion and the finest ingredients. 
          From classic flavors to innovative creations, we bring your sweetest dreams to life.
        </p>
        <button 
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#DD6B20';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.querySelector('svg')!.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ED8936';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.querySelector('svg')!.style.transform = 'translateX(0)';
          }}
          onClick={() => navigate("/CakePage")}
        >
          Order Your Dream Cake
          <ChevronRight style={iconStyle} />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;