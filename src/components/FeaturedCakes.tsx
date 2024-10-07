import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import ChocolateCake from '../assets/images/chocolate-cake.png';
import StrawberryCake from '../assets/images/strawberry-cake.png';
import VanillaCake from '../assets/images/vanilla-cake.png';


interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
}

const FeaturedCakes: React.FC = () => {
  const products: Product[] = [
    { id: '1', name: 'Chocolate Delight', image: ChocolateCake, price: 39.99, rating: 4.8 },
    { id: '2', name: 'Strawberry Dream', image: StrawberryCake, price: 34.99, rating: 4.7 },
    { id: '3', name: 'Vanilla Bliss', image: VanillaCake, price: 29.99, rating: 4.9 },
    { id: '4', name: 'Red Velvet Magic', image: StrawberryCake, price: 44.99, rating: 4.6 },
  ];

  const sectionStyle: React.CSSProperties = {
    padding: '4rem 1rem',
    backgroundColor: '#F7FAFC',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#2D3748',
  };

  const viewAllStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    color: '#4A5568',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  };

  const productStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const productInfoStyle: React.CSSProperties = {
    padding: '1rem',
  };

  const productNameStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#2D3748',
  };

  const productPriceStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    color: '#4A5568',
    marginBottom: '0.5rem',
  };

  const ratingStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    color: '#ED8936',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h2 style={titleStyle}>Featured Products</h2>
          <a href="/CakePage" style={viewAllStyle} className="view-all-link">
            View All <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
          </a>
        </header>
        <div style={gridStyle} className="featured-products-grid">
          {products.map((product) => (
            <div key={product.id} style={productStyle} className="product-card">
              <img src={product.image} alt={product.name} style={imageStyle} />
              <div style={productInfoStyle}>
                <h3 style={productNameStyle}>{product.name}</h3>
                <p style={productPriceStyle}>GHS {product.price.toFixed(2)}</p>
                <div style={ratingStyle}>
                  <Star size={16} fill="#ED8936" />
                  <span style={{ marginLeft: '0.25rem' }}>{product.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;