import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      text: "The cakes from Lizzfrimps are always a hit at our family gatherings! The flavors are incredible, and the designs are always stunning.",
      rating: 5,
    },
    {
      name: "Mike T.",
      text: "I love the variety of cake supplies. It's a one-stop shop for all my baking needs. The quality is top-notch, and the prices are reasonable.",
      rating: 4,
    },
    {
      name: "Emily R.",
      text: "Our wedding cake was absolutely stunning. Thank you, Lizzfrimps! The team was professional, creative, and delivered beyond our expectations.",
      rating: 5,
    },
  ];

  const sectionStyle: React.CSSProperties = {
    margin: '5rem 0',
    padding: '3rem 1rem',
    backgroundColor: '#F7FAFC',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#2D3748',
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: '2rem',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
  };

  const quoteStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    color: '#4A5568',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
    lineHeight: '1.6',
    flex: 1,
  };

  const authorStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
  };

  const authorImageStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '1rem',
    objectFit: 'cover',
  };

  const authorNameStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#2D3748',
  };

  const ratingStyle: React.CSSProperties = {
    display: 'flex',
    marginTop: '0.5rem',
  };

  const quoteIconStyle: React.CSSProperties = {
    color: '#ED8936',
    marginBottom: '1rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>What Our Customers Say</h2>
        <div style={gridStyle} className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={cardStyle}
              className="testimonial-card"
            >
              <Quote size={32} style={quoteIconStyle} />
              <p style={quoteStyle}>"{testimonial.text}"</p>
              <div style={authorStyle}>
                <div>
                  <p style={authorNameStyle}>{testimonial.name}</p>
                  <div style={ratingStyle}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.rating ? "#ED8936" : "none"}
                        stroke={i < testimonial.rating ? "#ED8936" : "#CBD5E0"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;