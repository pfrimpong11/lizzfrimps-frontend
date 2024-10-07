import React from "react";
import { Facebook, Instagram, Twitter, Cake } from "lucide-react";
// import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle: React.CSSProperties = {
    borderTop: '2px solid #e2e8f0',
    backgroundColor: '#f8fafc',
    padding: '4rem 1rem 2rem',
    color: '#4a5568',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2d3748',
    display: 'flex',
    alignItems: 'center',
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle: React.CSSProperties = {
    marginBottom: '0.75rem',
  };

  const linkStyle: React.CSSProperties = {
    color: '#718096',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s ease, transform 0.2s ease',
    display: 'inline-block',
  };

  const socialIconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
  };

  const iconStyle: React.CSSProperties = {
    width: '1.5rem',
    height: '1.5rem',
    color: '#718096',
    transition: 'color 0.2s ease, transform 0.2s ease',
  };

  const copyrightStyle: React.CSSProperties = {
    borderTop: '1px solid #e2e8f0',
    marginTop: '2rem',
    paddingTop: '2rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#718096',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '2rem',
  };
  
  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '1rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
          <div style={logoContainerStyle}>
            <div style={logoStyle}>
              <Cake size={24} style={{ marginRight: '0.5rem', color: "ED8936" }} />
              Lizzfrimps Cakes
            </div>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem', textAlign: "center" }}>
              Delighting taste buds with our exquisite cakes since 2010.
            </p>
          </div>
        <div style={gridStyle} id="footer-grid">
          <div style={sectionStyle}>
            <h3 style={headingStyle}>About Us</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="/OurStoryPage" style={linkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#2d3748'; e.currentTarget.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  Our Story
                </a>
              </li>
              {/* <li style={listItemStyle}>
                <a href="/CareersPage" style={linkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#2d3748'; e.currentTarget.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  Careers
                </a>
              </li> */}
              {/* <li style={listItemStyle}>
                <a href="/AnnouncementsPage" style={linkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#2d3748'; e.currentTarget.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  Announcements
                </a>
              </li> */}
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Customer Service</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="/ContactPage" style={linkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#2d3748'; e.currentTarget.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  Contact Us
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="/FAQsPage" style={linkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#2d3748'; e.currentTarget.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Our Policies</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="/PrivacyPolicyPage" style={linkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#2d3748'; e.currentTarget.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  Privacy Policy
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="/TermsOfServicePage" style={linkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#2d3748'; e.currentTarget.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  Terms of Service
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="/CookiePolicyPage" style={linkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#2d3748'; e.currentTarget.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Connect With Us</h3>
            <div style={socialIconsStyle}>
              <a href="https://www.facebook.com/Lizzfrimps" aria-label="Facebook">
                <Facebook style={iconStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#3b5998'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'scale(1)'; }} />
              </a>
              <a href="https://www.instagram.com/lizzfrimps_cakesempire.gh?igsh=d2Yxcmt3Y2F3YW0w" aria-label="Instagram">
                <Instagram style={iconStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#e1306c'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'scale(1)'; }} />
              </a>
              <a href="https://x.com/lizzfrimps" aria-label="Twitter">
                <Twitter style={iconStyle} onMouseEnter={(e) => { e.currentTarget.style.color = '#1da1f2'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#718096'; e.currentTarget.style.transform = 'scale(1)'; }} />
              </a>
            </div>
          </div>
        </div>
        <div style={copyrightStyle}>
          <p>&copy; {currentYear} Lizzfrimps Cakes Empire. All rights reserved.</p>
        </div>
      </div>
      <style>{`
      @media (max-width: 768px) {
        #footer-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          
        }
      }

      .footer-link:focus {
        outline: 2px solid #4299e1;
        outline-offset: 2px;
      }

      .social-icon:focus {
        outline: 2px solid #4299e1;
        outline-offset: 2px;
      }
      `}</style>
    </footer>
  );
};

export default Footer;