import React from 'react';
import BackNavigator from '../components/BackNavigator';

const CareersPage: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    maxWidth: '1200px',
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

  const subtitleStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#718096',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '40px',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: '20px',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '16px',
    marginBottom: '20px',
  };

  const jobListStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  };

  const jobCardStyle: React.CSSProperties = {
    backgroundColor: '#F7FAFC',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  };

  const jobTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: '10px',
  };

  const jobDescriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#4A5568',
    marginBottom: '15px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#ED8936',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  };

  const benefitsListStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
  };

  const benefitItemStyle: React.CSSProperties = {
    fontSize: '16px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const checkmarkStyle: React.CSSProperties = {
    color: '#ED8936',
    marginRight: '10px',
  };

  const jobs = [
    { title: 'Pastry Chef', description: 'Create delicious cakes and pastries for our customers.' },
    { title: 'Cake Decorator', description: 'Design and decorate custom cakes for special occasions.' },
    { title: 'Customer Service Representative', description: 'Assist customers with orders and inquiries.' },
    { title: 'Delivery Driver', description: 'Deliver our delicious cakes to customers safely and on time.' },
    { title: 'Marketing Specialist', description: 'Develop and implement marketing strategies for our brand.' },
    { title: 'Store Manager', description: 'Oversee daily operations of one of our retail locations.' },
  ];

  const benefits = [
    'Competitive salary',
    'Health and dental insurance',
    'Paid time off',
    'Professional development opportunities',
    'Employee discounts on our products',
    'Flexible work schedules',
  ];

  return (
    <div style={pageStyle}>
      <BackNavigator label="Go Back" />
      <header style={headerStyle}>
        <h1 style={titleStyle}>Careers at Lizzfrimps Cakes Empire</h1>
        <p style={subtitleStyle}>Join our team and help us create sweet memories!</p>
      </header>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Why Work With Us?</h2>
        <p style={paragraphStyle}>
          At Lizzfrimps Cakes Empire, we're passionate about creating delicious cakes and unforgettable experiences for our customers. We're looking for talented individuals who share our love for baking and customer service to join our growing team.
        </p>
        <p style={paragraphStyle}>
          Whether you're an experienced pastry chef, a creative cake decorator, or someone who simply loves making people smile, we have exciting opportunities for you to grow and thrive in our sweet world of cakes!
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Current Openings</h2>
        <div style={jobListStyle}>
          {jobs.map((job, index) => (
            <div 
              key={index} 
              style={jobCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={jobTitleStyle}>{job.title}</h3>
              <p style={jobDescriptionStyle}>{job.description}</p>
              <button 
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#45a049';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#4CAF50';
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Benefits</h2>
        <p style={paragraphStyle}>
          We value our employees and offer a range of benefits to support your personal and professional growth:
        </p>
        <ul style={benefitsListStyle}>
          {benefits.map((benefit, index) => (
            <li key={index} style={benefitItemStyle}>
              <span style={checkmarkStyle}>✓</span> {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>How to Apply</h2>
        <p style={paragraphStyle}>
          To apply for any of our open positions, please send your resume and a cover letter to careers@lizzfrimpscakes.com. Be sure to include the position you're applying for in the subject line of your email.
        </p>
        <p style={paragraphStyle}>
          We look forward to hearing from you and potentially welcoming you to the Lizzfrimps Cakes Empire family!
        </p>
      </section>
    </div>
  );
};

export default CareersPage;