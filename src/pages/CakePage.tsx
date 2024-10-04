import React from "react";
import Header from "../components/Header";
import CakeHeader from "../components/CakeHeader";
import CakeFilter from "../components/CakeFilter";
import CakeGrid from "../components/CakeGrid";
import Pagination from "../components/Pagination";
import "../styles/CakePage.css";

const CakePage: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  return (
    <div>
      <Header />
      <CakeHeader />
      <main style={pageStyle}>
        <CakeFilter />
        <CakeGrid />
        <Pagination />
        <br />
      </main>
    </div>
  );
};

export default CakePage;
