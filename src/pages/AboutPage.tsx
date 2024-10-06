import React from 'react';

const AboutPage: React.FC = () => {
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

  const sectionStyle: React.CSSProperties = {
    marginBottom: '40px',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4A5568',
    marginBottom: '20px',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const teamContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const teamMemberStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '200px',
  };

  const teamMemberImageStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const teamMemberNameStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const teamMemberRoleStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#718096',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>About Lizzfrimps Cakes Empire</h1>
        <p style={subtitleStyle}>Crafting Sweet Memories Since 2010</p>
      </header>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Story</h2>
        <img src="/placeholder.svg?height=400&width=600" alt="Lizzfrimps Cakes Shop" style={imageStyle} />
        <p style={paragraphStyle}>
          Lizzfrimps Cakes Empire was born out of a passion for creating delightful, mouthwatering cakes that bring joy to every occasion. Founded by Elizabeth "Lizzy" Frimps in 2010, our journey began in a small kitchen with big dreams. Today, we've grown into a beloved local institution, known for our exquisite designs and unforgettable flavors.
        </p>
        <p style={paragraphStyle}>
          Our commitment to quality ingredients, innovative recipes, and stunning designs has made us the go-to choice for birthdays, weddings, and special events throughout the community. We take pride in being a part of your most cherished moments and strive to make each cake a masterpiece of flavor and artistry.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          At Lizzfrimps Cakes Empire, our mission is to spread happiness through the art of baking. We believe that every cake tells a story, and we're dedicated to making your story as sweet as possible. Our team of skilled bakers and decorators work tirelessly to ensure that each creation not only looks spectacular but tastes amazing too.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Meet Our Team</h2>
        <div style={teamContainerStyle}>
          <div style={teamMemberStyle}>
            <img src="/placeholder.svg?height=150&width=150" alt="Elizabeth Frimps" style={teamMemberImageStyle} />
            <h3 style={teamMemberNameStyle}>Elizabeth Frimps</h3>
            <p style={teamMemberRoleStyle}>Founder & Head Baker</p>
          </div>
          <div style={teamMemberStyle}>
            <img src="/placeholder.svg?height=150&width=150" alt="John Doe" style={teamMemberImageStyle} />
            <h3 style={teamMemberNameStyle}>John Doe</h3>
            <p style={teamMemberRoleStyle}>Master Decorator</p>
          </div>
          <div style={teamMemberStyle}>
            <img src="/placeholder.svg?height=150&width=150" alt="Jane Smith" style={teamMemberImageStyle} />
            <h3 style={teamMemberNameStyle}>Jane Smith</h3>
            <p style={teamMemberRoleStyle}>Customer Experience Manager</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Visit Us</h2>
        <p style={paragraphStyle}>
          We'd love to welcome you to our cake shop! Come visit us to see our latest creations, discuss your custom cake ideas, or simply enjoy a slice of heaven with a cup of coffee.
        </p>
        <p style={paragraphStyle}>
          <strong>Address:</strong> 123 Cake Street, Sweetville, CA 90210<br />
          <strong>Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM<br />
          <strong>Phone:</strong> (555) 123-4567<br />
          <strong>Email:</strong> info@lizzfrimpscakes.com
        </p>
      </section>
    </div>
  );
};

export default AboutPage;