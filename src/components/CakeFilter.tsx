import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search, Filter } from "lucide-react";
import '../styles/CakeFilter.css';

interface CakeFilterProps {
  onFilterChange: (filter: string) => void;
  onSearchChange: (searchTerm: string) => void;
}

interface Cake {
  _id: string;
  name: string;
  category: string;
  imageId: string;
  price: number;
}

const CakeFilter: React.FC<CakeFilterProps> = ({ onFilterChange, onSearchChange }) => {
  // const [cakes, setCakes] = useState<Cake[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCakes();
  }, []);

  const fetchCakes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/cakes`);
      // setCakes(response.data);

      const uniqueCategories = Array.from(new Set(response.data.map((cake: Cake) => cake.category))) as string[];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching cakes", error);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "2rem 0",
  };

  const filterRowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const inputContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    flex: "1 1 250px",
    position: "relative",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "12px",
    color: "#718096",
  };

  const inputStyle: React.CSSProperties = {
    padding: "0.75rem 0.75rem 0.75rem 2.5rem",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "1rem",
    width: "100%",
    transition: "border-color 0.3s ease",
  };

  const selectContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    flex: "1 1 250px",
    position: "relative",
  };

  const selectStyle: React.CSSProperties = {
    padding: "0.75rem 2.5rem 0.75rem 3rem",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "1rem",
    width: "100%",
    appearance: "none",
    backgroundColor: "#ffffff",
    transition: "border-color 0.3s ease",
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div style={containerStyle} className="cake-filter">
      <h2 className="filter-title">Find Your Perfect Cake</h2>
      <div style={filterRowStyle}>
        <div style={inputContainerStyle}>
          <Search size={20} style={iconStyle} />
          <input
            type="text"
            placeholder="Search cakes by name..."
            style={inputStyle}
            onChange={handleSearchChange}
            className="cake-filter-input"
          />
        </div>
        <div style={selectContainerStyle}>
          <Filter size={20} style={iconStyle} />
          <select 
            style={selectStyle} 
            onChange={handleFilterChange}
            className="cake-filter-select"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CakeFilter;