import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/CakePage.css';

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
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch cakes and extract unique categories
  useEffect(() => {
    fetchCakes();
  }, []);

  const fetchCakes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/cakes`);
      setCakes(response.data);

      // Extract unique categories from fetched cakes and ensure they are strings
      const uniqueCategories = Array.from(new Set(response.data.map((cake: Cake) => cake.category))) as string[];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching cakes", error);
    }
  };

  const filterStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    margin: "2rem 0",
  };

  const searchInputStyle: React.CSSProperties = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    fontSize: "1rem",
    width: "250px",
  };

  const selectStyle: React.CSSProperties = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    fontSize: "1rem",
    width: "250px",
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value); // Send selected option to the parent
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value); // Send search input to the parent
  };

  return (
    <div style={filterStyle}>
      <input
        type="text"
        placeholder="Search cakes by name..."
        style={searchInputStyle}
        onChange={handleSearchChange}
      />
      <select style={selectStyle} onChange={handleFilterChange}>
        <option value="">Show All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CakeFilter;
