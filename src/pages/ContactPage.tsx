import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackNavigator from '../components/BackNavigator';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/submit-feedback`, formData,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      navigate("/");
    } catch (error: any) {
      console.error("There was an error: ", error);
    }
  };

  const pageStyle: React.CSSProperties = {
    // maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#F7FAFC',
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
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
    gap: '40px',
    alignItems: 'flex-start',
  };

  const formStyle: React.CSSProperties = {
    flex: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    transition: 'border-color 0.3s ease',
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    height: '150px',
    resize: 'vertical',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#ED8936',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const infoStyle: React.CSSProperties = {
    flex: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const infoItemStyle: React.CSSProperties = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'flex-start',
  };

  const mapInfoContainer: React.CSSProperties = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'flex-start',
  };

  const infoIconStyle: React.CSSProperties = {
    marginRight: '10px',
    color: '#ED8936',
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
    // marginTop: '2rem',
  };

  return (
    <div style={pageStyle}>
      <BackNavigator label="Go Back" />
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
            style={inputStyle}
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={inputStyle}
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            className="contact-input"
          />
          <button 
            type="submit" 
            style={buttonStyle}
            className="contact-button"
          >
            <Send size={20} style={{ marginRight: '8px' }} />
            Send Message
          </button>
        </form>

        <div style={infoStyle}>
          <div style={infoItemStyle}>
            <MapPin size={24} style={infoIconStyle} />
            <div>
              <h2 style={infoTitleStyle}>Visit Our Shop</h2>
              <p>7th Adote Obour st</p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <Clock size={24} style={infoIconStyle} />
            <div>
              <h2 style={infoTitleStyle}>Opening Hours</h2>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <Phone size={24} style={infoIconStyle} />
            <div>
              <h2 style={infoTitleStyle}>Contact Information</h2>
              <p>Phone: +233 (054) 664-0201</p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <Mail size={24} style={infoIconStyle} />
            <div>
              <h2 style={infoTitleStyle}>Email Us</h2>
              <p>Email: lizzfrimpservices27@gmail.com</p>
            </div>
          </div>
          <div style={mapInfoContainer} className='map-info-container'>
            <h2 style={infoTitleStyle} >Find Us</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.1232079724059!2d-0.2566995849033322!3d5.54328369509514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102083c236a06e61%3A0x9524453358c387d1!2sLizzfrimps%20Cakes%20Empire%20Gh!5e1!3m2!1sen!2sgh!4v1728313365770!5m2!1sen!2sgh" 
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