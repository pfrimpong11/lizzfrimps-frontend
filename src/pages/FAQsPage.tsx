import React, { useState } from 'react';
import BackNavigator from '../components/BackNavigator';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How far in advance should I order my cake?",
      answer: "We recommend placing your order at least 1 week in advance for standard cakes, and 2-3 weeks for custom or wedding cakes. During peak seasons, earlier ordering is advised."
    },
    {
      question: "Do you offer gluten-free or vegan options?",
      answer: "Yes, we offer a variety of gluten-free and vegan cake options. Please specify your dietary requirements when placing your order, and we'll be happy to accommodate your needs."
    },
    {
      question: "Can I customize my cake design?",
      answer: "We love creating custom designs. You can bring in your own ideas or work with our designers to create the perfect cake for your occasion."
    },
    {
      question: "Do you deliver cakes?",
      answer: "Yes, we offer delivery services within a 20-mile radius of our shop. Delivery fees vary based on distance. For locations outside this area, please contact us for special arrangements."
    },
    {
      question: "How should I store my cake?",
      answer: "For best freshness, store your cake in a cool, dry place. If not consuming within 24 hours, refrigerate the cake and bring it to room temperature 1-2 hours before serving."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, and digital payment methods like Apple Pay and Google Pay. For large orders, we also offer invoicing options."
    }
  ];

  const pageStyle: React.CSSProperties = {
    maxWidth: '800px',
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

  const faqItemStyle: React.CSSProperties = {
    marginBottom: '20px',
    borderBottom: '1px solid #E2E8F0',
    paddingBottom: '20px',
  };

  const questionStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2D3748',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const answerStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#4A5568',
    marginTop: '10px',
    lineHeight: '1.6',
  };

  const toggleStyle: React.CSSProperties = {
    fontSize: '24px',
    color: '#718096',
  };

  return (
    <div style={pageStyle}>
      <BackNavigator label="Go Back" />
      <header style={headerStyle}>
        <h1 style={titleStyle}>Frequently Asked Questions</h1>
        <p style={subtitleStyle}>Find answers to common questions about our cakes and services</p>
      </header>

      <div>
        {faqs.map((faq, index) => (
          <div key={index} style={faqItemStyle}>
            <div 
              style={questionStyle}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span style={toggleStyle}>{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div style={answerStyle}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;