import React from 'react';
import BackNavigator from '../components/BackNavigator';

const AnnouncementsPage: React.FC = () => {
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

  const announcementListStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  };

  const announcementCardStyle: React.CSSProperties = {
    backgroundColor: '#F7FAFC',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  };

  const announcementTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: '10px',
  };

  const announcementDateStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#718096',
    marginBottom: '10px',
  };

  const announcementContentStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#4A5568',
  };

  const pressReleaseListStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
  };

  const pressReleaseItemStyle: React.CSSProperties = {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F7FAFC',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const pressReleaseTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: '10px',
  };

  const pressReleaseDateStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#718096',
    marginBottom: '10px',
  };

  const pressReleaseExcerptStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#4A5568',
    marginBottom: '10px',
  };

  const linkStyle: React.CSSProperties = {
    color: '#4299E1',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const announcements = [
    {
      title: 'New Summer Flavors Launch',
      date: 'June 1, 2024',
      content: 'Introducing our new line of refreshing summer cake flavors, including Lemon Blueberry Burst and Strawberry Basil Delight!',
    },
    {
      title: 'Grand Opening: Downtown Location',
      date: 'July 15, 2024',
      content: 'Join us for the grand opening of our new downtown location, featuring special promotions and free cake samples!',
    },
    {
      title: 'Cake Decorating Workshop',
      date: 'August 5, 2024',
      content: 'Learn the art of cake decorating from our expert pastry chefs in this hands-on workshop. Limited spots available!',
    },
  ];

  const pressReleases = [
    {
      title: 'Lizzfrimps Cakes Empire Expands to National Market',
      date: 'May 20, 2024',
      excerpt: 'Lizzfrimps Cakes Empire announces plans to expand its operations nationwide, bringing its beloved cakes to customers across the country.',
      link: '#',
    },
    {
      title: 'Lizzfrimps Cakes Wins "Best Local Bakery" Award',
      date: 'April 10, 2024',
      excerpt: 'Lizzfrimps Cakes Empire has been recognized as the "Best Local Bakery" in the annual Sweetville Food Awards.',
      link: '#',
    },
    {
      title: 'Lizzfrimps Cakes Introduces Eco-Friendly Packaging',
      date: 'March 1, 2024',
      excerpt: 'In a move towards sustainability, Lizzfrimps Cakes Empire unveils new eco-friendly packaging for all its products.',
      link: '#',
    },
  ];

  return (
    <div style={pageStyle}>
      <BackNavigator label="Go Back" />
      <header style={headerStyle}>
        <h1 style={titleStyle}>Announcements</h1>
        <p style={subtitleStyle}>Stay up to date with the latest news from Lizzfrimps Cakes Empire</p>
      </header>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Latest Announcements</h2>
        <div style={announcementListStyle}>
          {announcements.map((announcement, index) => (
            <div 
              key={index} 
              style={announcementCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={announcementTitleStyle}>{announcement.title}</h3>
              <p style={announcementDateStyle}>{announcement.date}</p>
              <p style={announcementContentStyle}>{announcement.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Press Releases</h2>
        <ul style={pressReleaseListStyle}>
          {pressReleases.map((release, index) => (
            <li key={index} style={pressReleaseItemStyle}>
              <h3 style={pressReleaseTitleStyle}>{release.title}</h3>
              <p style={pressReleaseDateStyle}>{release.date}</p>
              <p style={pressReleaseExcerptStyle}>{release.excerpt}</p>
              <a href={release.link} style={linkStyle}>Read full press release</a>
            </li>
          ))}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Media Inquiries</h2>
        <p style={{...announcementContentStyle, marginBottom: '20px'}}>
          For media inquiries, please contact our press team:
        </p>
        <p style={announcementContentStyle}>
          Email: press@lizzfrimpscakes.com<br />
          Phone: +233 (054) 664-0201
        </p>
      </section>
    </div>
  );
};

export default AnnouncementsPage;