import React from 'react';
import { Cake, Gift, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const QuickLinks: React.FC = () => {
  const links = [
    { name: "Birthday Cakes", href: "/birthday", icon: Cake, color: "#ED8936" },
    { name: "Wedding Cakes", href: "/wedding", icon: Gift, color: "#4299E1" },
    { name: "Cupcakes", href: "/cupcake", icon: Cake, color: "#E53E3E" },
    { name: "Cake Supplies", href: "/", icon: ShoppingBag, color: "#48BB78" },
  ];

  const sectionStyle: React.CSSProperties = {
    margin: '4rem 0',
    padding: '2rem 1rem',
    backgroundColor: '#F7FAFC',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#2D3748',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  };

  const linkStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: '#FFFFFF',
    color: '#2D3748',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    marginBottom: '1rem',
    transition: 'all 0.3s ease',
  };

  const iconStyle: React.CSSProperties = {
    width: '2rem',
    height: '2rem',
  };

  const linkTextStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  };

  const linkDescriptionStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#718096',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Explore Our Delicious World</h2>
        <div style={gridStyle}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href} // Use 'to' for Link instead of 'href'
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.backgroundColor = link.color;
                }
                const icon = e.currentTarget.querySelector('.icon') as SVGElement;
                if (icon) {
                  icon.style.color = '#FFFFFF';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.backgroundColor = '#EDF2F7';
                }
                const icon = e.currentTarget.querySelector('.icon') as SVGElement;
                if (icon) {
                  icon.style.color = link.color;
                }
              }}
            >
              <div
                className="icon-container"
                style={{ ...iconContainerStyle, backgroundColor: '#EDF2F7' }}
              >
                <link.icon className="icon" style={{ ...iconStyle, color: link.color }} />
              </div>
              <span style={linkTextStyle}>{link.name}</span>
              <span style={linkDescriptionStyle}>
                {link.name === "Birthday Cakes"
                  ? "Celebrate in style with our custom cakes"
                  : link.name === "Wedding Cakes"
                  ? "Make your special day even sweeter"
                  : "Find everything you need for baking"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
