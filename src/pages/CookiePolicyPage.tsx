import React from 'react';
import BackNavigator from '../components/BackNavigator';

const CookiePolicyPage: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#4A5568',
    marginBottom: '10px',
  };

  const lastUpdatedStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#718096',
    marginBottom: '20px',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '30px',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: '15px',
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: '15px',
  };

  const listStyle: React.CSSProperties = {
    marginLeft: '20px',
    marginBottom: '15px',
  };

  const listItemStyle: React.CSSProperties = {
    marginBottom: '10px',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  };

  const thStyle: React.CSSProperties = {
    backgroundColor: '#EDF2F7',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
    border: '1px solid #CBD5E0',
  };

  const tdStyle: React.CSSProperties = {
    padding: '10px',
    border: '1px solid #CBD5E0',
  };

  return (
    <div style={pageStyle}>
      <BackNavigator label="Go Back" />
      <header style={headerStyle}>
        <h1 style={titleStyle}>Cookie Policy</h1>
        <p style={lastUpdatedStyle}>Last updated: May 10, 2024</p>
      </header>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>1. Introduction</h2>
        <p style={paragraphStyle}>
          This Cookie Policy explains how Lizzfrimps Cakes Empire ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>2. What are cookies?</h2>
        <p style={paragraphStyle}>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>3. Why do we use cookies?</h2>
        <p style={paragraphStyle}>We use cookies for the following purposes:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>To enable certain functions of the website</li>
          <li style={listItemStyle}>To provide analytics</li>
          <li style={listItemStyle}>To store your preferences</li>
          <li style={listItemStyle}>To enable advertisements delivery, including behavioral advertising</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>4. Types of cookies we use</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Type of cookie</th>
              <th style={thStyle}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Essential Cookies</td>
              <td style={tdStyle}>These cookies are necessary for the website to function and cannot be switched off in our systems.</td>
            </tr>
            <tr>
              <td style={tdStyle}>Performance Cookies</td>
              <td style={tdStyle}>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</td>
            </tr>
            <tr>
              <td style={tdStyle}>Functional Cookies</td>
              <td style={tdStyle}>These cookies enable the website to provide enhanced functionality and personalization.</td>
            </tr>
            <tr>
              <td style={tdStyle}>Targeting Cookies</td>
              <td style={tdStyle}>These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>5. How to control cookies</h2>
        <p style={paragraphStyle}>
          You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>6. Changes to this Cookie Policy</h2>
        <p style={paragraphStyle}>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>7. Contact Us</h2>
        <p style={paragraphStyle}>
          If you have any questions about this Cookie Policy, please contact us at:
        </p>
        <p style={paragraphStyle}>
          Lizzfrimps Cakes Empire<br />
          7th Adote Obour st<br />
          Email: lizzfrimpservices27@gmail.com<br />
          Phone: +233 (054) 664-0201
        </p>
      </section>
    </div>
  );
};

export default CookiePolicyPage;