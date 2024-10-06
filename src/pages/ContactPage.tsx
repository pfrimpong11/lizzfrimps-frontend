import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const pageStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
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

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    alignItems: 'flex-start',
  };

  const formStyle: React.CSSProperties = {
    flex: '1',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #e2e8f0',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    height: '150px',
    resize: 'vertical',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  const infoStyle: React.CSSProperties = {
    flex: '1',
  };

  const infoItemStyle: React.CSSProperties = {
    marginBottom: '20px',
  };

  const infoTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#4A5568',
  };

  const mapStyle: React.CSSProperties = {
    width: '100%',
    height: '300px',
    border: 'none',
    borderRadius: '8px',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Contact Us</h1>
        <p style={subtitleStyle}>We'd love to hear from you!</p>
      </header>

      <div style={contentStyle} className="contact-content">
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
          <button 
            type="submit" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#45a049';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4CAF50';
            }}
          >
            Send Message
          </button>
        </form>

        <div style={infoStyle}>
          <div style={infoItemStyle}>
            <h2 style={infoTitleStyle}>Visit Our Shop</h2>
            <p>123 Cake Street, Sweetville, CA 90210</p>
          </div>
          <div style={infoItemStyle}>
            <h2 style={infoTitleStyle}>Opening Hours</h2>
            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div style={infoItemStyle}>
            <h2 style={infoTitleStyle}>Contact Information</h2>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@lizzfrimpscakes.com</p>
          </div>
          <div style={infoItemStyle}>
            <h2 style={infoTitleStyle}>Find Us</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203498337!2d-118.24368384896661!3d34.05267002569861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64f0f4a2e37%3A0x5db0e6f5bbd4efbd!2sLos%20Angeles%2C%20CA%2090012!5e0!3m2!1sen!2sus!4v1620764146261!5m2!1sen!2sus" 
              style={mapStyle} 
              allowFullScreen 
              loading="lazy"
              title="Lizzfrimps Cakes Empire Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;