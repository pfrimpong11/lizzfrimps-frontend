import React from 'react';
import BackNavigator from '../components/BackNavigator';

const TermsOfServicePage: React.FC = () => {
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
        <h1 style={titleStyle}>Terms of Service</h1>
        <p style={lastUpdatedStyle}>Last updated: May 10, 2024</p>
      </header>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>1. Acceptance of Terms</h2>
        <p style={paragraphStyle}>
          By accessing or using the Lizzfrimps Cakes Empire website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you must not use our services.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>2. Use of Services</h2>
        <p style={paragraphStyle}>You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Use our services in any way that violates any applicable laws or regulations</li>
          <li style={listItemStyle}>Impersonate or attempt to impersonate Lizzfrimps Cakes Empire, its employees, or other users</li>
          <li style={listItemStyle}>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>3. Product Information and Pricing</h2>
        <p style={paragraphStyle}>
          We strive to provide accurate product information and pricing. However, errors may occur. We reserve the right to correct any errors and to change or update information at any time without prior notice.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>4. Ordering and Payment</h2>
        <p style={paragraphStyle}>
          By placing an order, you are making an offer to purchase. All orders are subject to acceptance and availability. We reserve the right to refuse any order. Payment must be made in full before the order is processed.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>5. Delivery and Cancellations</h2>
        <p style={paragraphStyle}>
          Delivery times are estimates and cannot be guaranteed. Cancellations may be accepted up to 48 hours before the scheduled delivery time, subject to our discretion. A cancellation fee may apply.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>6. Intellectual Property</h2>
        <p style={paragraphStyle}>
          All content on our website, including text, graphics, logos, and images, is the property of Lizzfrimps Cakes Empire and protected by copyright laws. You may not use, reproduce, or distribute our content without our express written permission.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>7. Limitation of Liability</h2>
        <p style={paragraphStyle}>
          Lizzfrimps Cakes Empire shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any products purchased from us.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>8. Changes to Terms</h2>
        <p style={paragraphStyle}>
          We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the new terms.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>9. Contact Us</h2>
        <p style={paragraphStyle}>
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <p style={paragraphStyle}>
          Lizzfrimps Cakes Empire<br />
          7th Adote Obour st<br />
          Email: terms@lizzfrimpscakes.com<br />
          Phone: +233 (054) 664-0201
        </p>
      </section>
    </div>
  );
};

export default TermsOfServicePage;