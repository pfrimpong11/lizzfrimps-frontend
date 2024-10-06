import React from "react";
import Header from "../components/Header";
import CakeHeader from "../components/CakeHeader";
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
        <CakeGrid />
        <Pagination />
        <br />
      </main>
    </div>
  );
};

export default CakePage;
