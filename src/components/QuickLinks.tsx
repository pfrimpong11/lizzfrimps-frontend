import React from 'react';
import { ChevronRight } from 'lucide-react';

const QuickLinks: React.FC = () => {
  const links = [
    { name: "Birthday Cakes", href: "/category/birthday" },
    { name: "Wedding Cakes", href: "/category/wedding" },
    { name: "Cake Supplies", href: "/supplies" },
  ];

  const sectionStyle: React.CSSProperties = {
    margin: '3rem 0',
    padding: '0 1rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const linkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#333',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const linkTextStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: '500',
  };

  const iconStyle: React.CSSProperties = {
    width: '1.25rem',
    height: '1.25rem',
    color: '#718096',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Quick Links</h2>
      <div style={gridStyle}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f7fafc';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span style={linkTextStyle}>{link.name}</span>
            <ChevronRight style={iconStyle} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;