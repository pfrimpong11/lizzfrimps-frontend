import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      text: "The cakes from Lizzfrimps are always a hit at our family gatherings!",
    },
    {
      name: "Mike T.",
      text: "I love the variety of cake supplies. It's a one-stop shop for all my baking needs.",
    },
    {
      name: "Emily R.",
      text: "Our wedding cake was absolutely stunning. Thank you, Lizzfrimps!",
    },
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
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  };

  const quoteStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    color: '#555',
    marginBottom: '1rem',
    fontStyle: 'italic',
    lineHeight: '1.6',
  };

  const authorStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>What Our Customers Say</h2>
      <div style={gridStyle} className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
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
            <p style={quoteStyle}>"{testimonial.text}"</p>
            <p style={authorStyle}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;