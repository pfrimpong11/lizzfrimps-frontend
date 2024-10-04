import React from "react";
import { ChevronRight } from "lucide-react";
import BackgroundImage from '../assets/images/background.png';

const HeroBanner: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '8rem 1rem',
    textAlign: 'center',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 10,
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: '1rem',
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: '2rem',
    fontSize: '1.125rem',
    color: '#FFFFFF',
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#4A5568',
    color: '#FFFFFF',
    fontWeight: 600,
    borderRadius: '0.375rem',
    transition: 'background-color 0.2s ease-in-out',
  };

  const iconStyle: React.CSSProperties = {
    marginLeft: '0.5rem',
    width: '1rem',
    height: '1rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <h1 style={headingStyle}>
          Welcome to Lizzfrimps Cakes Empire
        </h1>
        <p style={paragraphStyle}>
          Indulge in our delicious cakes and find everything you need for your
          baking adventures
        </p>
        <button style={buttonStyle}>
          Order Now
          <ChevronRight style={iconStyle} />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;