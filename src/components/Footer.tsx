import React from "react";
import { Facebook, Instagram, Twitter, } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle: React.CSSProperties = {
    borderTop: '1px solid #e2e8f0',
    backgroundColor: '#f7fafc',
    padding: '2rem 1rem',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2d3748',
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle: React.CSSProperties = {
    marginBottom: '0.5rem',
  };

  const linkStyle: React.CSSProperties = {
    color: '#718096',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s ease',
  };

  const socialIconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
  };

  const iconStyle: React.CSSProperties = {
    width: '1.5rem',
    height: '1.5rem',
    color: '#718096',
    transition: 'color 0.2s ease',
  };

  const copyrightStyle: React.CSSProperties = {
    borderTop: '1px solid #e2e8f0',
    marginTop: '2rem',
    paddingTop: '2rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#718096',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle} className="footer-grid">
          <div style={sectionStyle}>
            <h3 style={headingStyle}>About Us</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="/OurStoryPage" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'}>
                  Our Story
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="/CareersPage" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'}>
                  Careers
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="/AnnouncementsPage" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'}>
                  Announcements
                </a>
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Customer Service</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="/ContactPage" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'}>
                  Contact Us
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="/FAQsPage" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Our Policies</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="/PrivacyPolicyPage" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'}>
                  Privacy Policy
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="TermsOfServicePage" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'}>
                  Terms of Service
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="/CookiePolicyPage" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'}>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Connect With Us</h3>
            <div style={socialIconsStyle}>
              <a href="#" aria-label="Facebook">
                <Facebook style={iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram style={iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter style={iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#2d3748'} onMouseLeave={(e) => e.currentTarget.style.color = '#718096'} />
              </a>
            </div>
          </div>
        </div>
        <div style={copyrightStyle}>
          <p>&copy; {currentYear} Lizzfrimps Cakes Empire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;