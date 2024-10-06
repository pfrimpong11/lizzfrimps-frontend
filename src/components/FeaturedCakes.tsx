import React from 'react';
import ChocolateCake from '../assets/images/chocolate-cake.png';
import StrawberryCake from '../assets/images/strawberry-cake.png';
import VanillaCake from '../assets/images/vanilla-cake.png';

const FeaturedCakes: React.FC = () => {
  const cakes = [
    { name: "Chocolate Delight", image: ChocolateCake, price: "GHS 39.99" },
    { name: "Strawberry Dream", image: StrawberryCake, price: "GHS 44.99" },
    { name: "Vanilla Bliss", image: VanillaCake, price: "GHS 34.99" },
  ];

  const sectionStyle: React.CSSProperties = {
    margin: '3rem 0',
    padding: '0 1rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    margin: '0 auto',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  };

  const contentStyle: React.CSSProperties = {
    padding: '1.5rem',
  };

  const cakeNameStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#333',
  };

  const priceStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    color: '#666',
    marginBottom: '1rem',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#4A5568',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Featured Cakes</h2>
      <div style={gridStyle} className="featured-cakes-grid">
        {cakes.map((cake) => (
          <div
            key={cake.name}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img src={cake.image} alt={cake.name} style={imageStyle} />
            <div style={contentStyle}>
              <h3 style={cakeNameStyle}>{cake.name}</h3>
              <p style={priceStyle}>{cake.price}</p>
              <button
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2D3748';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#4A5568';
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCakes;