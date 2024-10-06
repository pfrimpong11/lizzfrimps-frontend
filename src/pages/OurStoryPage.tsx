import React from 'react';

const OurStoryPage: React.FC = () => {
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

  const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const timelineStyle: React.CSSProperties = {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 0',
  };

  const timelineItemStyle: React.CSSProperties = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#F7FAFC',
    marginBottom: '20px',
    position: 'relative',
  };

  const timelineYearStyle: React.CSSProperties = {
    fontWeight: 'bold',
    color: '#4A5568',
    marginBottom: '10px',
  };

  const quoteStyle: React.CSSProperties = {
    fontStyle: 'italic',
    fontSize: '18px',
    color: '#4A5568',
    textAlign: 'center',
    margin: '40px 0',
    padding: '20px',
    borderLeft: '4px solid #4A5568',
    backgroundColor: '#F7FAFC',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Story</h1>
        <p style={subtitleStyle}>The sweet journey of Lizzfrimps Cakes Empire</p>
      </header>

      <section style={sectionStyle}>
        <img src="/placeholder.svg?height=400&width=600" alt="Lizzfrimps Cakes Founder" style={imageStyle} />
        <h2 style={sectionTitleStyle}>A Passion for Baking</h2>
        <p style={paragraphStyle}>
          Lizzfrimps Cakes Empire was born out of a lifelong passion for baking and a dream to spread joy through delicious, beautifully crafted cakes. Our founder, Elizabeth "Lizzy" Frimps, started her journey in her grandmother's kitchen, where she learned the secrets of traditional cake recipes and the art of baking with love.
        </p>
        <p style={paragraphStyle}>
          What began as a hobby soon turned into a calling. Lizzy's cakes became the talk of the town, with friends and family constantly requesting her creations for their special occasions. It was then that she realized her passion could become something more – a way to bring smiles to people's faces and make their celebrations truly unforgettable.
        </p>
      </section>

      <div style={quoteStyle}>
        "Baking isn't just about mixing ingredients; it's about creating moments of joy and bringing people together." - Elizabeth Frimps
      </div>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Journey</h2>
        <div style={timelineStyle}>
          <div style={timelineItemStyle}>
            <p style={timelineYearStyle}>2010</p>
            <p>Lizzfrimps Cakes Empire is founded, operating out of Lizzy's home kitchen.</p>
          </div>
          <div style={timelineItemStyle}>
            <p style={timelineYearStyle}>2012</p>
            <p>We open our first small bakery in downtown Sweetville.</p>
          </div>
          <div style={timelineItemStyle}>
            <p style={timelineYearStyle}>2015</p>
            <p>Expansion of our product line to include custom wedding cakes and corporate events.</p>
          </div>
          <div style={timelineItemStyle}>
            <p style={timelineYearStyle}>2018</p>
            <p>Opening of our flagship store and cake design studio.</p>
          </div>
          <div style={timelineItemStyle}>
            <p style={timelineYearStyle}>2020</p>
            <p>Launch of our online ordering system and nationwide shipping.</p>
          </div>
          <div style={timelineItemStyle}>
            <p style={timelineYearStyle}>2024</p>
            <p>Celebrating our continued growth and the sweet moments we've been part of.</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Commitment</h2>
        <p style={paragraphStyle}>
          At Lizzfrimps Cakes Empire, we're committed to using only the finest ingredients and time-honored baking techniques. Every cake is a labor of love, crafted with attention to detail and a dedication to quality that has become our hallmark.
        </p>
        <p style={paragraphStyle}>
          We believe in the power of a perfectly baked cake to transform any occasion into a memorable celebration. From birthdays to weddings, corporate events to quiet family gatherings, we pour our heart and soul into every creation.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Looking to the Future</h2>
        <p style={paragraphStyle}>
          As we continue to grow, our core values remain the same. We're dedicated to innovation in cake design, exceptional customer service, and the joy of baking. We look forward to being part of your special moments for years to come, one slice at a time.
        </p>
        <p style={paragraphStyle}>
          Thank you for being part of our story. We can't wait to be part of yours.
        </p>
      </section>
    </div>
  );
};

export default OurStoryPage;