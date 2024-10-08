import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import QuickLinks from "../components/QuickLinks";
import FeaturedCakes from "../components/FeaturedCakes";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#F7FAFC' }}>
      <Header />
      <HeroBanner />
      <QuickLinks />
      <FeaturedCakes />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
