import React from 'react';
import BackNavigator from '../components/BackNavigator';

const PrivacyPolicyPage: React.FC = () => {
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

  return (
    <div style={pageStyle}>
      <BackNavigator label="Go Back" />
      <header style={headerStyle}>
        <h1 style={titleStyle}>Privacy Policy</h1>
        <p style={lastUpdatedStyle}>Last updated: May 10, 2024</p>
      </header>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>1. Introduction</h2>
        <p style={paragraphStyle}>
          Welcome to Lizzfrimps Cakes Empire. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>2. Information We Collect</h2>
        <p style={paragraphStyle}>We collect personal information that you provide to us such as:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Name, email address, and contact information</li>
          <li style={listItemStyle}>Billing and shipping address</li>
          <li style={listItemStyle}>Payment information (credit card numbers, etc.)</li>
          <li style={listItemStyle}>Order history and preferences</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>3. How We Use Your Information</h2>
        <p style={paragraphStyle}>We use your personal information to:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Process and fulfill your orders</li>
          <li style={listItemStyle}>Communicate with you about your orders and provide customer support</li>
          <li style={listItemStyle}>Send you marketing and promotional communications (if you have opted in)</li>
          <li style={listItemStyle}>Improve our website and services</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>4. Sharing Your Information</h2>
        <p style={paragraphStyle}>
          We may share your information with third-party service providers who help us operate our business, such as payment processors and shipping companies. We do not sell your personal information to third parties.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>5. Security of Your Information</h2>
        <p style={paragraphStyle}>
          We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>6. Your Rights</h2>
        <p style={paragraphStyle}>You have the right to:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Access and receive a copy of your personal information</li>
          <li style={listItemStyle}>Request deletion of your personal information</li>
          <li style={listItemStyle}>Object to the processing of your personal information</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>7. Changes to This Privacy Policy</h2>
        <p style={paragraphStyle}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>8. Contact Us</h2>
        <p style={paragraphStyle}>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p style={paragraphStyle}>
          Lizzfrimps Cakes Empire<br />
          7th Adote Obour st<br />
          Email: privacy@lizzfrimpscakes.com<br />
          Phone: +233 (054) 664-0201
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;